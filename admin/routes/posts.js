import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { buildSite } from "../eleventy.js";
import { SEOAnalyzer } from "../assets/js/seo-analyzer.js";
import log from "../logger.js";

const router = express.Router();
const postsDir = path.resolve("posts");
const RESERVED_SLUGS = ["admin", "api"];

router.get("/", async (req, res) => {
  const resp = await fetch("http://localhost:3000/api/posts.json");
  const data = await resp.json();
  const allTags = [
    ...new Set(data.flatMap((p) => (Array.isArray(p.tags) ? p.tags : []))),
  ].sort();
  const allCategories = [
    ...new Set(data.map((p) => p.category).filter(Boolean)),
  ].sort();
  res.render("posts/post-list.njk", {
    title: "Posts",
    data,
    allTags,
    allCategories,
  });
});

router.get("/new", (req, res) => {
  res.render("posts/new-post.njk", {
    title: "New Post",
  });
});

router.post("/new", async (req, res) => {
  const { title, description, tags, category, author, date, content } =
    req.body;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (RESERVED_SLUGS.includes(slug)) {
    log.warn(`Post creation rejected: reserved slug "${slug}"`);
    return res
      .status(400)
      .json({ error: `The slug "${slug}" is reserved and cannot be used.` });
  }
  if (fs.existsSync(path.join(postsDir, `${slug}.md`))) {
    log.warn(`Post creation rejected: duplicate slug "${slug}"`);
    return res
      .status(400)
      .json({ error: `A post with the slug "${slug}" already exists.` });
  }
  const frontmatter = {
    layout: "post",
    title,
    description,
    tags: tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    category,
    author,
    date: new Date(date),
  };
  const fileContent = matter.stringify(content || "", frontmatter);
  fs.writeFileSync(path.join(postsDir, `${slug}.md`), fileContent);
  await buildSite();
  log.success(`Post created: "${title}" (${slug})`);
  res.json({ slug });
});

router.get("/:slug", (req, res) => {
  const filePath = path.join(postsDir, `${req.params.slug}.md`);
  if (!fs.existsSync(filePath)) {
    return res.redirect("/admin/posts");
  }
  const file = matter(fs.readFileSync(filePath, "utf-8"));
  res.render("posts/post.njk", {
    title: `${file.data.title}`,
    post: {
      title: file.data.title,
      description: file.data.description || "",
      tags: (file.data.tags || []).join(", "),
      category: file.data.category || "",
      author: file.data.author || "",
      date: file.data.date
        ? new Date(file.data.date).toISOString().split("T")[0]
        : "",
      content: file.content,
      slug: req.params.slug,
    },
  });
});

router.put("/:slug", async (req, res) => {
  const { title, description, tags, category, author, date, content } =
    req.body;
  const oldSlug = req.params.slug;
  const newSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (newSlug !== oldSlug) {
    if (RESERVED_SLUGS.includes(newSlug)) {
      log.warn(`Post update rejected: reserved slug "${newSlug}"`);
      return res.status(400).json({
        error: `The slug "${newSlug}" is reserved and cannot be used.`,
      });
    }
    if (fs.existsSync(path.join(postsDir, `${newSlug}.md`))) {
      log.warn(`Post update rejected: duplicate slug "${newSlug}"`);
      return res
        .status(400)
        .json({ error: `A post with the slug "${newSlug}" already exists.` });
    }
  }
  const frontmatter = {
    layout: "post",
    title,
    description,
    tags: tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    category,
    author,
    date: new Date(date),
  };
  const fileContent = matter.stringify(content || "", frontmatter);
  if (newSlug !== oldSlug) {
    fs.unlinkSync(path.join(postsDir, `${oldSlug}.md`));
    log.info(`Post renamed: "${oldSlug}" -> "${newSlug}"`);
  }
  fs.writeFileSync(path.join(postsDir, `${newSlug}.md`), fileContent);
  await buildSite();
  log.success(`Post updated: "${title}" (${newSlug})`);
  res.json({ slug: newSlug });
});

router.get("/:slug/seo", (req, res) => {
  const htmlPath = path.resolve("_site", req.params.slug, "index.html");
  if (!fs.existsSync(htmlPath)) {
    return res
      .status(404)
      .json({ error: "Built page not found. Save the post first." });
  }
  const analyzer = new SEOAnalyzer();
  const result = analyzer.analyzeFile(htmlPath);
  log.info(`SEO analysis run for post: ${req.params.slug}`);
  res.json(result);
});

router.delete("/:slug", async (req, res) => {
  const filePath = path.join(postsDir, `${req.params.slug}.md`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  await buildSite();
  log.success(`Post deleted: ${req.params.slug}`);
  res.json({ success: true });
});

export default router;
