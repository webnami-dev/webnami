import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readPagesCache, upsertPage, removePage } from "../cache.js";
import log from "../logger.js";

const router = express.Router();
const pagesDir = path.resolve("content/pages");
const draftsDir = path.join(pagesDir, "_drafts");
const RESERVED_SLUGS = ["admin", "api"];
const DRAFT_PREFIX = "draft-page-";

function nextDraftName() {
  if (!fs.existsSync(draftsDir)) fs.mkdirSync(draftsDir, { recursive: true });
  const existing = fs
    .readdirSync(draftsDir)
    .filter((n) => n.startsWith(DRAFT_PREFIX))
    .map((n) => parseInt(n.slice(DRAFT_PREFIX.length)) || 0)
    .filter((n) => n > 0);
  const next = existing.length > 0 ? Math.max(...existing) + 1 : 1;
  return `${DRAFT_PREFIX}${next}`;
}

function resolvePageDir(slug) {
  if (slug.startsWith(DRAFT_PREFIX)) return path.join(draftsDir, slug);
  return path.join(pagesDir, slug);
}

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function listPages() {
  const all = readPagesCache();
  const published = all
    .filter((p) => !p.isDraft)
    .map((p) => ({ ...p, url: `/${p.slug}/` }));
  const drafts = all.filter((p) => p.isDraft).map((p) => ({ ...p, url: null }));
  return { published, drafts };
}

router.get("/", (req, res) => {
  const { published, drafts } = listPages();
  res.render("pages/page-list.njk", {
    title: "Pages",
    data: published,
    drafts,
  });
});

router.get("/new", (req, res) => {
  const draftName = nextDraftName();
  fs.mkdirSync(path.join(draftsDir, draftName));
  const date = new Date();
  const frontmatter = { layout: "page", title: "", isDraft: true, date };
  fs.writeFileSync(
    path.join(draftsDir, draftName, "index.md"),
    matter.stringify("", frontmatter),
  );
  upsertPage({ title: "", slug: draftName, id: draftName, isDraft: true });
  res.redirect(`/admin/pages/${draftName}`);
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const filePath = path.join(resolvePageDir(slug), "index.md");
  if (!fs.existsSync(filePath)) {
    return res.redirect("/admin/pages");
  }
  const file = matter(fs.readFileSync(filePath, "utf-8"));
  res.render("pages/page.njk", {
    title: file.data.title || "Draft",
    page: {
      title: file.data.title || "",
      content: file.content,
      slug,
      id: file.data.id || slug,
      url: `/${toSlug(file.data.title || slug)}/`,
      isDraft: file.data.isDraft || false,
    },
  });
});

router.put("/:slug", async (req, res) => {
  const { title, content } = req.body;
  const { slug } = req.params;
  const pageDir = resolvePageDir(slug);
  const existingFile = matter(
    fs.readFileSync(path.join(pageDir, "index.md"), "utf-8"),
  );

  // Drafts: save in place, no id field
  if (existingFile.data.isDraft) {
    const date = existingFile.data.date || new Date();
    const frontmatter = { layout: "page", title, date, isDraft: true };
    fs.writeFileSync(
      path.join(pageDir, "index.md"),
      matter.stringify(content || "", frontmatter),
    );
    upsertPage({ title, slug, id: slug, isDraft: true });
    log.success(`Draft saved: "${title}" (${slug})`);
    return res.json({ slug });
  }

  // Published pages: update title/content/uri — id and folder are stable
  const date = existingFile.data.date || new Date();
  const id = existingFile.data.id || slug;
  const frontmatter = { layout: "page", title, date, id };
  fs.writeFileSync(
    path.join(pageDir, "index.md"),
    matter.stringify(content || "", frontmatter),
  );
  upsertPage({ title, slug, id, isDraft: false });
  log.success(`Page updated: "${title}" (${slug})`);
  res.json({ slug });
});

router.post("/:slug/publish", async (req, res) => {
  const draftSlug = req.params.slug;
  const draftDir = path.join(draftsDir, draftSlug);
  if (!fs.existsSync(draftDir)) {
    return res.status(404).json({ error: "Draft not found." });
  }
  const file = matter(
    fs.readFileSync(path.join(draftDir, "index.md"), "utf-8"),
  );
  const frontmatter = { ...file.data, isDraft: false };
  const newSlug = toSlug(frontmatter.title || "");
  if (!newSlug) {
    return res
      .status(400)
      .json({ error: "Page must have a title before publishing." });
  }
  if (RESERVED_SLUGS.includes(newSlug)) {
    return res
      .status(400)
      .json({ error: `The slug "${newSlug}" is reserved and cannot be used.` });
  }
  if (fs.existsSync(path.join(pagesDir, newSlug))) {
    return res
      .status(400)
      .json({ error: `A page with the slug "${newSlug}" already exists.` });
  }
  frontmatter.date = frontmatter.date || new Date();
  frontmatter.id = newSlug;
  fs.renameSync(draftDir, path.join(pagesDir, newSlug));
  fs.writeFileSync(
    path.join(pagesDir, newSlug, "index.md"),
    matter.stringify(file.content, frontmatter),
  );
  removePage(draftSlug);
  upsertPage({
    title: frontmatter.title,
    slug: newSlug,
    id: newSlug,
    isDraft: false,
  });
  log.success(`Page published: "${frontmatter.title}" (${newSlug})`);
  res.json({ slug: newSlug });
});

router.delete("/:slug", async (req, res) => {
  const { slug } = req.params;
  const isDraftSlug = slug.startsWith(DRAFT_PREFIX);

  let dirPath;
  if (isDraftSlug) {
    dirPath = path.resolve(path.join(draftsDir, slug));
  } else {
    const filePath = path.join(pagesDir, slug, "index.md");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Page not found." });
    }
    const file = matter(fs.readFileSync(filePath, "utf-8"));
    const id = file.data.id || slug;
    dirPath = path.resolve(path.join(pagesDir, id));
  }

  const allowedRoots = [pagesDir + path.sep, draftsDir + path.sep];
  if (!allowedRoots.some((root) => dirPath.startsWith(root))) {
    return res.status(400).json({ error: "Invalid slug." });
  }
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true });
  }
  removePage(slug);
  log.success(`Page deleted: ${slug}`);
  res.json({ success: true });
});

export default router;
