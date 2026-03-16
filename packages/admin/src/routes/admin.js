import express from "express";
import { buildSite } from "../eleventy.js";
import log from "../logger.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/admin/posts");
});

router.post("/rebuild", async (req, res) => {
  try {
    await buildSite();
    log.success("Site rebuilt via toolbar");
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Rebuild failed." });
  }
});

export default router;
