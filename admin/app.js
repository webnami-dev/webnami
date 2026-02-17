import express from "express";
import fs from "fs";
import nunjucks from "nunjucks";
import path from "path";
import { fileURLToPath } from "url";
import { build as viteBuild } from "vite";
import pagesRouter from "./routes/pages.js";
import postsRouter from "./routes/posts.js";
import settingsRouter from "./routes/settings.js";
import { buildSite } from "./eleventy.js";
import log from "./logger.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");

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
  fs.readFileSync("src/_data/config.json", "utf-8"),
);
log.info(`Loading theme: "${siteConfig.theme}"`);

log.info("Building Vite assets ...");
await viteBuild({ configFile: "src/vite.config.js", logLevel: "silent" });
await viteBuild({ configFile: "admin/vite.config.js", logLevel: "silent" });
log.success("Vite build complete");

process.env.NODE_ENV = "development";
await buildSite();

app.use(express.static(path.join(rootDir, "_site")));
app.use("/admin", express.static(path.join(__dirname, "dist")));
log.info("Static file middleware mounted");

app.get("/admin", (req, res) => {
  const greetings = ["Hello", "Howdy", "Hey there", "Welcome back", "Hi there"];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  res.render("index.njk", {
    title: "WebNami Dashboard",
    greeting,
  });
});

app.use("/admin/pages", pagesRouter);
app.use("/admin/posts", postsRouter);
app.use("/admin/settings", settingsRouter);

app.listen(3000, () => {
  log.server("✅ Admin dashboard running on http://localhost:3000/admin");
  log.server("✅ Blog served on http://localhost:3000");
});

export default app;
