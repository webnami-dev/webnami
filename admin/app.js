import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import { fileURLToPath } from "url";
import Eleventy from "@11ty/eleventy";
import { build as viteBuild } from "vite";
import pagesRouter from "./routes/pages.js";
import postsRouter from "./routes/posts.js";
import settingsRouter from "./routes/settings.js";

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

await viteBuild({ configFile: "src/vite.config.js" });
await viteBuild({ configFile: "admin/vite.config.js" });
const elev = new Eleventy("./", "./_site", {
  configPath: "src/.eleventy.js",
});
await elev.init();
await elev.watch();

app.use(express.static(path.join(rootDir, "_site")));
app.use("/admin", express.static(path.join(__dirname, "dist")));

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
  console.log("Admin dashboard running on http://localhost:3000/admin");
  console.log("Blog served onhttp://localhost:3000");
});

export default app;
