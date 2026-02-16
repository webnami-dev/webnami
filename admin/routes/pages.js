import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { buildSite } from "../eleventy.js";
import { SEOAnalyzer } from "../assets/js/seo-analyzer.js";

const router = express.Router();
const pagesDir = path.resolve("pages");
const RESERVED_SLUGS = ["admin", "api"];

router.get("/", async (req, res) => {
  const resp = await fetch("http://localhost:3000/api/pages.json");
  const data = await resp.json();
  res.render("pages/page-list.njk", {
    title: "Pages",
    data,
  });
});

router.get("/new", (req, res) => {
  res.render("pages/new-page.njk", {
    title: "New Page",
  });
});

router.post("/new", async (req, res) => {
  const { title, description, content } = req.body;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (RESERVED_SLUGS.includes(slug)) {
    return res
      .status(400)
      .json({ error: `The slug "${slug}" is reserved and cannot be used.` });
  }
  if (fs.existsSync(path.join(pagesDir, `${slug}.md`))) {
    return res
      .status(400)
      .json({ error: `A page with the slug "${slug}" already exists.` });
  }
  const frontmatter = { layout: "page", title, description };
  const fileContent = matter.stringify(content || "", frontmatter);
  fs.writeFileSync(path.join(pagesDir, `${slug}.md`), fileContent);
  await buildSite();
  res.json({ slug });
});

router.get("/:slug", (req, res) => {
  const filePath = path.join(pagesDir, `${req.params.slug}.md`);
  if (!fs.existsSync(filePath)) {
    res.redirect("/admin/pages");
  }
  const file = matter(fs.readFileSync(filePath, "utf-8"));
  res.render("pages/page.njk", {
    title: `${file.data.title}`,
    page: {
      title: file.data.title,
      description: file.data.description || "",
      content: file.content,
      slug: req.params.slug,
    },
  });
});

router.put("/:slug", async (req, res) => {
  const { title, description, content } = req.body;
  const oldSlug = req.params.slug;
  const newSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (newSlug !== oldSlug) {
    if (RESERVED_SLUGS.includes(newSlug)) {
      return res
        .status(400)
        .json({
          error: `The slug "${newSlug}" is reserved and cannot be used.`,
        });
    }
    if (fs.existsSync(path.join(pagesDir, `${newSlug}.md`))) {
      return res
        .status(400)
        .json({ error: `A page with the slug "${newSlug}" already exists.` });
    }
  }
  const frontmatter = { layout: "page", title, description };
  const fileContent = matter.stringify(content || "", frontmatter);
  if (newSlug !== oldSlug) {
    fs.unlinkSync(path.join(pagesDir, `${oldSlug}.md`));
  }
  fs.writeFileSync(path.join(pagesDir, `${newSlug}.md`), fileContent);
  await buildSite();
  res.json({ slug: newSlug });
});

router.get("/:slug/seo", (req, res) => {
  const htmlPath = path.resolve("_site", req.params.slug, "index.html");
  if (!fs.existsSync(htmlPath)) {
    return res
      .status(404)
      .json({ error: "Built page not found. Save the page first." });
  }
  const analyzer = new SEOAnalyzer();
  const result = analyzer.analyzeFile(htmlPath);
  res.json(result);
});

router.delete("/:slug", async (req, res) => {
  const filePath = path.join(pagesDir, `${req.params.slug}.md`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  await buildSite();
  res.json({ success: true });
});

export default router;
