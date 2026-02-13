import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const resp = await fetch("http://localhost:3000/api/posts.json");
  const data = await resp.json();
  res.render("posts/post-list.njk", {
    data: data,
  });
});

router.get("/new", (req, res) => {
  res.render("new-post.njk");
});

router.post("/new", (req, res) => {
  //res.redirect('/:slug');
});

router.get("/:slug", (req, res) => {
  res.render("post.njk");
});

router.put("/:slug", (req, res) => {
  //res.redirect('/:slug');
});

router.delete("/:slug", (req, res) => {
  res.redirect("/");
});

export default router;
