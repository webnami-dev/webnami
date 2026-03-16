import express from "express";
import fs from "fs";
import path from "path";
import { buildSite } from "../eleventy.js";
import log from "../logger.js";

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

router.get("/", (req, res) => {
  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const themes = fs
    .readdirSync(themesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const colorPalette = getColorPalette(config.theme);

  res.render("settings/settings.njk", {
    title: "Settings",
    config,
    themes,
    colorPalette,
    colorPalettes,
  });
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

  const oldColorPalette = getColorPalette(oldConfig.theme);
  const newColorPalette = data.colorPalette || "Default";
  const colorChanged = oldColorPalette !== newColorPalette;
  const nameChanged = oldConfig.site.name !== data.blogName;

  if (colorChanged) {
    setColorPalette(config.theme, newColorPalette);
    log.warn(
      `Color palette changed from "${oldColorPalette}" to "${newColorPalette}". Restart required.`,
    );
    return res.json({
      restartRequired: true,
      message:
        "Color palette changed. Please restart the server for changes to take effect.",
    });
  }

  if (nameChanged) {
    return res.json({
      success: true,
      nameChanged: true,
      message: "Blog name changed. Please restart the server.",
    });
  }

  await buildSite();
  log.success("Settings updated");

  res.json({ success: true });
});

export default router;
