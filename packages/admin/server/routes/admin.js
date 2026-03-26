import express from "express";
import { buildSiteWithVite } from "../eleventy.js";
import log from "../logger.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ ok: true });
});

router.post("/rebuild", async (req, res) => {
  try {
    await buildSiteWithVite();
    log.success("Site rebuilt via toolbar");
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Rebuild failed." });
  }
});

export default router;
