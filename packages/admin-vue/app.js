import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { build as viteBuild } from "vite";
import adminRouter from "./server/routes/admin.js";
import pagesRouter from "./server/routes/pages.js";
import postsRouter from "./server/routes/posts.js";
import settingsRouter from "./server/routes/settings.js";
import uploadRouter from "./server/routes/upload.js";
import { buildSite } from "./server/eleventy.js";
import { initCache } from "./server/cache.js";
import log from "./server/logger.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = process.cwd();

const app = express();
app.use(express.json());

const siteConfig = JSON.parse(
  fs.readFileSync("_metadata/config.json", "utf-8"),
);
log.info(`Loading theme: "${siteConfig.theme}"`);

log.info("Building Vue client assets...");
await viteBuild({
  configFile: path.join(__dirname, "client/vite.config.js"),
  logLevel: "silent",
});
log.success("Vite build complete");

process.env.NODE_ENV = "development";
await buildSite();
initCache();

app.use(express.static(path.join(rootDir, "_site")));
app.use("/admin", express.static(path.join(__dirname, "client/dist")));
app.use("/admin/site", express.static(path.join(rootDir, "content/site")));
log.info("Static file middleware mounted");

app.use("/api", adminRouter);
app.use("/api/posts", postsRouter);
app.use("/api/pages", pagesRouter);
app.use("/api/settings", settingsRouter);
app.use("/api/upload", uploadRouter);

// SPA fallback
app.get("/admin", (req, res) => res.redirect("/admin/"));
app.get("/admin/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

app.listen(3000, () => {
  log.server("✅ Admin dashboard running on http://localhost:3000/admin");
  log.server("✅ Blog served on http://localhost:3000");
});

export default app;
