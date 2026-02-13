import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const router = express.Router();
const postsDir = path.resolve("posts");

router.get("/", async (req, res) => {
  const resp = await fetch("http://localhost:3000/api/posts.json");
  const data = await resp.json();
  res.render("posts/post-list.njk", {
    title: "Posts",
    data,
  });
});

router.get("/new", (req, res) => {
  res.render("posts/new-post.njk", {
    title: "New Post",
  });
});

router.post("/new", (req, res) => {
  const { title, description, tags, category, author, date, content } = req.body;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const frontmatter = {
    layout: "post",
    title,
    description,
    tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
    category,
    author,
    date: new Date(date),
  };
  const fileContent = matter.stringify(content || "", frontmatter);
  fs.writeFileSync(path.join(postsDir, `${slug}.md`), fileContent);
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
      date: file.data.date ? new Date(file.data.date).toISOString().split("T")[0] : "",
      content: file.content,
      slug: req.params.slug,
    },
  });
});

router.put("/:slug", (req, res) => {
  const { title, description, tags, category, author, date, content } = req.body;
  const filePath = path.join(postsDir, `${req.params.slug}.md`);
  const frontmatter = {
    layout: "post",
    title,
    description,
    tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
    category,
    author,
    date: new Date(date),
  };
  const fileContent = matter.stringify(content || "", frontmatter);
  fs.writeFileSync(filePath, fileContent);
  res.json({ slug: req.params.slug });
});

router.delete("/:slug", (req, res) => {
  const filePath = path.join(postsDir, `${req.params.slug}.md`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  res.json({ success: true });
});

export default router;
