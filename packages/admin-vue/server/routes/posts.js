import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readPostsCache, upsertPost, removePost } from "../cache.js";
import log from "../logger.js";

const router = express.Router();
const postsDir = path.resolve("content/posts");
const draftsDir = path.join(postsDir, "_drafts");
const configPath = path.resolve("_metadata/config.json");

function getConfigAuthor() {
  try {
    return JSON.parse(fs.readFileSync(configPath, "utf-8")).author || "";
  } catch {
    return "";
  }
}

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

function listPosts() {
  const all = readPostsCache();
  const published = all
    .filter((p) => !p.isDraft)
    .map((p) => ({ ...p, url: `/${p.slug}/` }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const drafts = all.filter((p) => p.isDraft).map((p) => ({ ...p, url: null }));
  return { published, drafts };
}

// GET / - list all posts
router.get("/", (req, res) => {
  const { published, drafts } = listPosts();
  const allTags = [...new Set(published.flatMap((p) => p.tags))].sort();
  const allCategories = [
    ...new Set(published.map((p) => p.category).filter(Boolean)),
  ].sort();
  res.json({ published, drafts, allTags, allCategories });
});

// POST / - create new draft
router.post("/", (req, res) => {
  const draftName = nextDraftName();
  fs.mkdirSync(path.join(draftsDir, draftName));
  const date = new Date();
  const frontmatter = {
    layout: "post",
    title: "",
    author: getConfigAuthor(),
    isDraft: true,
    tags: [],
    category: "",
    date,
  };
  fs.writeFileSync(
    path.join(draftsDir, draftName, "index.md"),
    matter.stringify("", frontmatter),
  );
  upsertPost({
    title: "",
    id: draftName,
    slug: draftName,
    date,
    tags: [],
    category: "",
    isDraft: true,
  });
  res.json({ slug: draftName });
});

// GET /:slug - get post data
router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const filePath = path.join(resolvePostDir(slug), "index.md");
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "Post not found." });
  const file = matter(fs.readFileSync(filePath, "utf-8"));
  res.json({
    title: file.data.title || "",
    author: getConfigAuthor(),
    tags: (file.data.tags || []).join(", "),
    category: file.data.category || "",
    content: file.content,
    slug,
    id: file.data.id || slug,
    url: `/${toSlug(file.data.title || slug)}/`,
    isDraft: file.data.isDraft || false,
  });
});

// PUT /:slug - update post
router.put("/:slug", async (req, res) => {
  const { title, tags, category, content } = req.body;
  const { slug } = req.params;
  const postDir = resolvePostDir(slug);
  const existingFile = matter(
    fs.readFileSync(path.join(postDir, "index.md"), "utf-8"),
  );

  const parsedTags = tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (existingFile.data.isDraft) {
    const date = existingFile.data.date || new Date();
    const frontmatter = {
      layout: "post",
      title,
      author: getConfigAuthor(),
      tags: parsedTags,
      category,
      date,
      isDraft: true,
    };
    fs.writeFileSync(
      path.join(postDir, "index.md"),
      matter.stringify(content || "", frontmatter),
    );
    upsertPost({
      title,
      id: slug,
      slug,
      date,
      tags: parsedTags,
      category,
      isDraft: true,
    });
    log.success(`Draft saved: "${title}" (${slug})`);
    return res.json({ slug });
  }

  const date = existingFile.data.date || new Date();
  const id = existingFile.data.id || slug;
  const frontmatter = {
    layout: "post",
    title,
    author: getConfigAuthor(),
    tags: parsedTags,
    category,
    date,
    id,
  };
  fs.writeFileSync(
    path.join(postDir, "index.md"),
    matter.stringify(content || "", frontmatter),
  );
  upsertPost({
    title,
    id,
    slug,
    date,
    tags: parsedTags,
    category,
    isDraft: false,
  });
  log.success(`Post updated: "${title}" (${slug})`);
  res.json({ slug });
});

// POST /:slug/publish
router.post("/:slug/publish", async (req, res) => {
  const draftSlug = req.params.slug;
  const draftDir = path.join(draftsDir, draftSlug);
  if (!fs.existsSync(draftDir))
    return res.status(404).json({ error: "Draft not found." });
  const file = matter(
    fs.readFileSync(path.join(draftDir, "index.md"), "utf-8"),
  );
  const frontmatter = { ...file.data, isDraft: false };
  const newSlug = toSlug(frontmatter.title || "");
  if (!newSlug)
    return res
      .status(400)
      .json({ error: "Post must have a title before publishing." });
  if (RESERVED_SLUGS.includes(newSlug))
    return res
      .status(400)
      .json({ error: `The slug "${newSlug}" is reserved and cannot be used.` });
  if (fs.existsSync(path.join(postsDir, newSlug)))
    return res
      .status(400)
      .json({ error: `A post with the slug "${newSlug}" already exists.` });
  frontmatter.date = frontmatter.date || new Date();
  frontmatter.id = newSlug;
  fs.renameSync(draftDir, path.join(postsDir, newSlug));
  fs.writeFileSync(
    path.join(postsDir, newSlug, "index.md"),
    matter.stringify(file.content, frontmatter),
  );
  removePost(draftSlug);
  upsertPost({
    title: frontmatter.title,
    id: newSlug,
    slug: newSlug,
    date: frontmatter.date,
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    category: frontmatter.category || "",
    isDraft: false,
  });
  log.success(`Post published: "${frontmatter.title}" (${newSlug})`);
  res.json({ slug: newSlug });
});

// DELETE /:slug
router.delete("/:slug", async (req, res) => {
  const { slug } = req.params;
  const isDraftSlug = slug.startsWith(DRAFT_PREFIX);
  let dirPath;
  if (isDraftSlug) {
    dirPath = path.resolve(path.join(draftsDir, slug));
  } else {
    const filePath = path.join(postsDir, slug, "index.md");
    if (!fs.existsSync(filePath))
      return res.status(404).json({ error: "Post not found." });
    const file = matter(fs.readFileSync(filePath, "utf-8"));
    const id = file.data.id || slug;
    dirPath = path.resolve(path.join(postsDir, id));
  }
  const allowedRoots = [postsDir + path.sep, draftsDir + path.sep];
  if (!allowedRoots.some((root) => dirPath.startsWith(root)))
    return res.status(400).json({ error: "Invalid slug." });
  if (fs.existsSync(dirPath)) fs.rmSync(dirPath, { recursive: true });
  removePost(slug);
  log.success(`Post deleted: ${slug}`);
  res.json({ success: true });
});

export default router;
