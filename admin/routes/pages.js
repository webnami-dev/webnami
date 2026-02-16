import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { buildSite } from "../eleventy.js";

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
    return res.status(400).json({ error: `The slug "${slug}" is reserved and cannot be used.` });
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
    res.redirect("/");
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
  const filePath = path.join(pagesDir, `${req.params.slug}.md`);
  const frontmatter = { layout: "page", title, description };
  const fileContent = matter.stringify(content || "", frontmatter);
  fs.writeFileSync(filePath, fileContent);
  await buildSite();
  res.json({ slug: req.params.slug });
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
