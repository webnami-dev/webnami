import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";
import log from "../logger.js";

const siteDir = path.resolve("content/site");
const ALLOWED_LOGO_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]);
const LOGO_EXT_MAP = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
};

const logoStorage = multer.diskStorage({
  destination(_req, _file, cb) {
    if (!fs.existsSync(siteDir)) fs.mkdirSync(siteDir, { recursive: true });
    cb(null, siteDir);
  },
  filename(_req, file, cb) {
    const ext = LOGO_EXT_MAP[file.mimetype] ?? path.extname(file.originalname);
    cb(null, `logo${ext}`);
  },
});

const uploadLogo = multer({
  storage: logoStorage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter(_req, file, cb) {
    if (ALLOWED_LOGO_TYPES.has(file.mimetype)) cb(null, true);
    else cb(new Error("Only JPEG, PNG, WebP, and SVG images are allowed."));
  },
});

const router = express.Router();
const configPath = path.resolve("_metadata/config.json");
const themesDir = path.resolve("themes");

const colorPalettes = [
  { name: "Default", bg: "#fafafa", primary: "#3b5bdb", accent: "#6b7280" },
  { name: "Forest", bg: "#f4f7f2", primary: "#16a34a", accent: "#4a7a54" },
  { name: "Ink", bg: "#ffffff", primary: "#27272a", accent: "#64748b" },
  { name: "Ocean", bg: "#f0f9fc", primary: "#2563eb", accent: "#466e7c" },
  { name: "Plum", bg: "#faf8fd", primary: "#7c3aed", accent: "#7a5c96" },
  { name: "Rose", bg: "#fff5f7", primary: "#e11d48", accent: "#8c3f52" },
  { name: "Slate", bg: "#f8fafc", primary: "#475569", accent: "#5c7080" },
  { name: "Sunset", bg: "#fffbf5", primary: "#ea580c", accent: "#8a5820" },
];

function getColorPalette(themeName) {
  const inputCssPath = path.resolve(`themes/${themeName}/assets/css/input.css`);
  try {
    const css = fs.readFileSync(inputCssPath, "utf-8");
    const match = css.match(/@import\s+["'][^"']*palette-(\w+)\.css["']/);
    return match ? match[1] : "Default";
  } catch {
    return "Default";
  }
}

function setColorPalette(themeName, paletteName) {
  const inputCssPath = path.resolve(`themes/${themeName}/assets/css/input.css`);
  const css = fs.readFileSync(inputCssPath, "utf-8");
  const updated = css.replace(
    /@import\s+["'][^"']*palette-\w+\.css["']/,
    `@import "@palettes/palette-${paletteName}.css"`,
  );
  fs.writeFileSync(inputCssPath, updated);
}

router.post("/logo", uploadLogo.single("logo"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded." });

  // Delete old logo files with different extensions
  const ext = path.extname(req.file.filename);
  for (const e of Object.values(LOGO_EXT_MAP)) {
    if (e !== ext) {
      const old = path.join(siteDir, `logo${e}`);
      if (fs.existsSync(old)) fs.unlinkSync(old);
    }
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  config.site.logo = req.file.filename;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  log.success(`Logo uploaded: ${req.file.filename}`);
  res.json({ logo: req.file.filename });
});

router.delete("/logo", (req, res) => {
  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  if (config.site.logo) {
    const filePath = path.join(siteDir, config.site.logo);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    config.site.logo = "";
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  }
  log.success("Logo removed");
  res.json({ success: true });
});

router.use((err, _req, res, _next) => {
  if (err?.code === "LIMIT_FILE_SIZE") {
    return res
      .status(413)
      .json({ error: "File too large. Maximum size is 2 MB." });
  }
  res.status(400).json({ error: err.message ?? "Upload failed." });
});

router.get("/", (req, res) => {
  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const themes = fs
    .readdirSync(themesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const colorPalette = getColorPalette(config.theme);

  res.json({ config, themes, colorPalette, colorPalettes });
});

router.put("/", async (req, res) => {
  const data = req.body;
  const oldConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));

  const config = {
    theme: oldConfig.theme,
    author: data.author || "",
    themeSettings: oldConfig.themeSettings,
    postsPerPage: oldConfig.postsPerPage,
    site: {
      ...oldConfig.site,
      name: data.blogName,
      url: data.blogUrl,
    },
    homepage: {
      heading: data.homepageHeading,
    },
    footer: {
      socialLinks: JSON.parse(data.socialLinks || "[]"),
    },
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  const newColorPalette = data.colorPalette || "Default";

  setColorPalette(config.theme, newColorPalette);
  log.success("Settings updated");

  res.json({ success: true });
});

export default router;
