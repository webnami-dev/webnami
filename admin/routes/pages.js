import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const resp = await fetch("http://localhost:3000/api/pages.json");
  const data = await resp.json();
  res.render("pages/page-list.njk", {
    data: data,
  });
});

router.get("/new", (req, res) => {
  res.render("new-page.njk");
});

router.post("/new", (req, res) => {
  //res.redirect('/:slug');
});

router.get("/:slug", (req, res) => {
  res.render("page.njk");
});

router.put("/:slug", (req, res) => {
  //res.redirect('/:slug');
});

router.delete("/:slug", (req, res) => {
  res.redirect("/");
});

export default router;
