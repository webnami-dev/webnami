import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { buildSite, buildSiteWithVite } from "../eleventy.js";
import log from "../logger.js";

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
  const { title, content } = req.body;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (RESERVED_SLUGS.includes(slug)) {
    log.warn(`Page creation rejected: reserved slug "${slug}"`);
    return res
      .status(400)
      .json({ error: `The slug "${slug}" is reserved and cannot be used.` });
  }
  if (fs.existsSync(path.join(pagesDir, `${slug}.md`))) {
    log.warn(`Page creation rejected: duplicate slug "${slug}"`);
    return res
      .status(400)
      .json({ error: `A page with the slug "${slug}" already exists.` });
  }
  const frontmatter = {
    layout: "page",
    title,
  };
  const fileContent = matter.stringify(content || "", frontmatter);
  fs.writeFileSync(path.join(pagesDir, `${slug}.md`), fileContent);
  await buildSite();
  log.success(`Page created: "${title}" (${slug})`);
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
      content: file.content,
      slug: req.params.slug,
    },
  });
});

router.put("/:slug", async (req, res) => {
  const { title, content } = req.body;
  const oldSlug = req.params.slug;
  const newSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  if (newSlug !== oldSlug) {
    if (RESERVED_SLUGS.includes(newSlug)) {
      log.warn(`Page update rejected: reserved slug "${newSlug}"`);
      return res.status(400).json({
        error: `The slug "${newSlug}" is reserved and cannot be used.`,
      });
    }
    if (fs.existsSync(path.join(pagesDir, `${newSlug}.md`))) {
      log.warn(`Page update rejected: duplicate slug "${newSlug}"`);
      return res
        .status(400)
        .json({ error: `A page with the slug "${newSlug}" already exists.` });
    }
  }
  const frontmatter = {
    layout: "page",
    title,
  };
  const fileContent = matter.stringify(content || "", frontmatter);
  if (newSlug !== oldSlug) {
    fs.unlinkSync(path.join(pagesDir, `${oldSlug}.md`));
    log.info(`Page renamed: "${oldSlug}" -> "${newSlug}"`);
    fs.writeFileSync(path.join(pagesDir, `${newSlug}.md`), fileContent);
    await buildSiteWithVite();
  } else {
    fs.writeFileSync(path.join(pagesDir, `${newSlug}.md`), fileContent);
    await buildSite();
  }
  log.success(`Page updated: "${title}" (${newSlug})`);
  res.json({ slug: newSlug });
});

router.delete("/:slug", async (req, res) => {
  const filePath = path.join(pagesDir, `${req.params.slug}.md`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  await buildSiteWithVite();
  log.success(`Page deleted: ${req.params.slug}`);
  res.json({ success: true });
});

export default router;
