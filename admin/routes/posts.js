import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { buildSite, buildSiteWithVite } from "../eleventy.js";
import log from "../logger.js";

const router = express.Router();
const postsDir = path.resolve("content/posts");
const draftsDir = path.join(postsDir, "_drafts");
const RESERVED_SLUGS = ["admin", "api"];
const DRAFT_PREFIX = "draft-post-";

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

function resolvePostDir(slug) {
  if (slug.startsWith(DRAFT_PREFIX)) return path.join(draftsDir, slug);
  return path.join(postsDir, slug);
}

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readPostMeta(dir, slug, isDraft) {
  const filePath = path.join(dir, slug, "index.md");
  if (!fs.existsSync(filePath)) return null;
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return {
    slug,
    title: data.title || "",
    category: data.category || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    date: data.date || null,
    url: isDraft ? null : `/${slug}/`,
    isDraft,
  };
}

function listPosts() {
  const published = [];
  if (fs.existsSync(postsDir)) {
    for (const slug of fs
      .readdirSync(postsDir)
      .filter((s) => s !== "_drafts")) {
      const meta = readPostMeta(postsDir, slug, false);
      if (meta) published.push(meta);
    }
    published.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  const drafts = [];
  if (fs.existsSync(draftsDir)) {
    for (const slug of fs.readdirSync(draftsDir)) {
      const meta = readPostMeta(draftsDir, slug, true);
      if (meta) drafts.push(meta);
    }
  }
  return { published, drafts };
}

router.get("/", (req, res) => {
  const { published, drafts } = listPosts();
  const allTags = [...new Set(published.flatMap((p) => p.tags))].sort();
  const allCategories = [
    ...new Set(published.map((p) => p.category).filter(Boolean)),
  ].sort();
  res.render("posts/post-list.njk", {
    title: "Posts",
    data: published,
    allTags,
    allCategories,
    drafts,
  });
});

router.get("/new", (req, res) => {
  const draftName = nextDraftName();
  fs.mkdirSync(path.join(draftsDir, draftName));
  const frontmatter = {
    layout: "post",
    title: "",
    isDraft: true,
    tags: [],
    category: "",
    date: new Date(),
  };
  fs.writeFileSync(
    path.join(draftsDir, draftName, "index.md"),
    matter.stringify("", frontmatter),
  );
  res.redirect(`/admin/posts/${draftName}`);
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const filePath = path.join(resolvePostDir(slug), "index.md");
  if (!fs.existsSync(filePath)) {
    return res.redirect("/admin/posts");
  }
  const file = matter(fs.readFileSync(filePath, "utf-8"));
  res.render("posts/post.njk", {
    title: file.data.title || "Draft",
    post: {
      title: file.data.title || "",
      tags: (file.data.tags || []).join(", "),
      category: file.data.category || "",
      content: file.content,
      slug,
      id: file.data.id || slug,
      url: `/${toSlug(file.data.title || slug)}/`,
      isDraft: file.data.isDraft || false,
    },
  });
});

router.put("/:slug", async (req, res) => {
  const { title, tags, category, content } = req.body;
  const { slug } = req.params;
  const postDir = resolvePostDir(slug);
  const existingFile = matter(
    fs.readFileSync(path.join(postDir, "index.md"), "utf-8"),
  );

  // Drafts: save title/content in place, no id field
  if (existingFile.data.isDraft) {
    const frontmatter = {
      layout: "post",
      title,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      category,
      date: existingFile.data.date || new Date(),
      isDraft: true,
    };
    fs.writeFileSync(
      path.join(postDir, "index.md"),
      matter.stringify(content || "", frontmatter),
    );
    log.success(`Draft saved: "${title}" (${slug})`);
    return res.json({ slug });
  }

  // Published posts: update title/tags/category/content/uri — id and folder are stable
  const frontmatter = {
    layout: "post",
    title,
    tags: tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    category,
    date: existingFile.data.date || new Date(),
    id: existingFile.data.id || slug,
  };
  fs.writeFileSync(
    path.join(postDir, "index.md"),
    matter.stringify(content || "", frontmatter),
  );
  await buildSite();
  log.success(`Post updated: "${title}" (${slug})`);
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
      .json({ error: "Post must have a title before publishing." });
  }
  if (RESERVED_SLUGS.includes(newSlug)) {
    return res
      .status(400)
      .json({ error: `The slug "${newSlug}" is reserved and cannot be used.` });
  }
  if (fs.existsSync(path.join(postsDir, newSlug))) {
    return res
      .status(400)
      .json({ error: `A post with the slug "${newSlug}" already exists.` });
  }
  frontmatter.date = frontmatter.date || new Date();
  frontmatter.id = newSlug;
  fs.renameSync(draftDir, path.join(postsDir, newSlug));
  fs.writeFileSync(
    path.join(postsDir, newSlug, "index.md"),
    matter.stringify(file.content, frontmatter),
  );
  await buildSite();
  log.success(`Post published: "${frontmatter.title}" (${newSlug})`);
  res.json({ slug: newSlug });
});

router.delete("/:slug", async (req, res) => {
  const { slug } = req.params;
  const isDraftSlug = slug.startsWith(DRAFT_PREFIX);

  let dirPath;
  if (isDraftSlug) {
    dirPath = path.resolve(path.join(draftsDir, slug));
  } else {
    // Use id from frontmatter as authoritative folder name
    const filePath = path.join(postsDir, slug, "index.md");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Post not found." });
    }
    const file = matter(fs.readFileSync(filePath, "utf-8"));
    const id = file.data.id || slug;
    dirPath = path.resolve(path.join(postsDir, id));
  }

  const allowedRoots = [postsDir + path.sep, draftsDir + path.sep];
  if (!allowedRoots.some((root) => dirPath.startsWith(root))) {
    return res.status(400).json({ error: "Invalid slug." });
  }
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true });
  }
  if (!isDraftSlug) await buildSiteWithVite();
  log.success(`Post deleted: ${slug}`);
  res.json({ success: true });
});

export default router;
