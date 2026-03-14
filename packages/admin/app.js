import express from "express";
import fs from "fs";
import nunjucks from "nunjucks";
import path from "path";
import { fileURLToPath } from "url";
import { build as viteBuild } from "vite";
import pagesRouter from "./src/routes/pages.js";
import postsRouter from "./src/routes/posts.js";
import settingsRouter from "./src/routes/settings.js";
import uploadRouter from "./src/routes/upload.js";
import { buildSite } from "./src/eleventy.js";
import { initCache } from "./src/cache.js";
import log from "./src/logger.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = process.cwd();

const app = express();

// Configure nunjucks for admin views
nunjucks.configure(path.join(__dirname, "views"), {
  autoescape: true,
  express: app,
  watch: true,
});

app.set("view engine", "njk");
app.use(express.json());

const siteConfig = JSON.parse(
  fs.readFileSync("_metadata/config.json", "utf-8"),
);
log.info(`Loading theme: "${siteConfig.theme}"`);

log.info("Building Vite assets ...");
await viteBuild({
  configFile: fileURLToPath(
    import.meta.resolve("@webnami/core/src/vite.config.js"),
  ),
  logLevel: "silent",
});
//await viteBuild({ configFile: path.join(__dirname, "src/vite.config.js"), logLevel: "silent" });
log.success("Vite build complete");

process.env.NODE_ENV = "development";
await buildSite();
initCache();

app.use(express.static(path.join(rootDir, "_site")));
app.use("/admin", express.static(path.join(__dirname, "dist")));
log.info("Static file middleware mounted");

app.get("/admin", (req, res) => {
  res.redirect("/admin/posts");
});

app.use("/admin/pages", pagesRouter);
app.use("/admin/posts", postsRouter);
app.use("/admin/settings", settingsRouter);
app.use("/admin/upload", uploadRouter);

app.listen(3000, () => {
  log.server("✅ Admin dashboard running on http://localhost:3000/admin");
  log.server("✅ Blog served on http://localhost:3000");
});

export default app;
