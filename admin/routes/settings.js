import express from "express";
import fs from "fs";
import path from "path";
import { buildSite, buildSiteWithVite } from "../eleventy.js";
import log from "../logger.js";

const router = express.Router();
const configPath = path.resolve("src/_data/config.json");
const imagesDir = path.resolve("images");
const themesDir = path.resolve("themes");

const typographyPresets = {
  default: { headerFont: "Geist", bodyFont: "Inter" },
  editorial: { headerFont: "Lora", bodyFont: "Inter" },
  minimal: { headerFont: "Geist", bodyFont: "Source Sans 3" },
  developer: { headerFont: "JetBrains Mono", bodyFont: "Inter" },
};

const colorPalettes = [
  { name: "Crimson", bg: "#fdf8f8", primary: "#b91c1c", accent: "#9f6060" },
  { name: "Default", bg: "#fffff8", primary: "#3d3d3d", accent: "#8a8a8a" },
  { name: "Forest", bg: "#f4f7f2", primary: "#3a6b4a", accent: "#7a9a82" },
  { name: "Ink", bg: "#ffffff", primary: "#0a0a0a", accent: "#666666" },
  { name: "Ocean", bg: "#f0f9fc", primary: "#0e7490", accent: "#5f9aaa" },
  { name: "Plum", bg: "#faf8fd", primary: "#7e22ce", accent: "#9070a8" },
  { name: "Sunset", bg: "#fffbf5", primary: "#c2410c", accent: "#a8784a" },
  { name: "Warm", bg: "#fef9f0", primary: "#b45309", accent: "#92765a" },
];

function getTypographyPreset(themeSettings = {}) {
  const { headerFont, bodyFont } = themeSettings;
  const match = Object.entries(typographyPresets).find(
    ([, v]) => v.headerFont === headerFont && v.bodyFont === bodyFont,
  );
  return match ? match[0] : "default";
}

function getColorTheme(themeName) {
  const inputCssPath = path.resolve(`themes/${themeName}/assets/css/input.css`);
  try {
    const css = fs.readFileSync(inputCssPath, "utf-8");
    const match = css.match(/@import\s+["'][^"']*theme-(\w+)\.css["']/);
    return match ? match[1] : "Default";
  } catch {
    return "Default";
  }
}

function setColorTheme(themeName, colorName) {
  const inputCssPath = path.resolve(`themes/${themeName}/assets/css/input.css`);
  const css = fs.readFileSync(inputCssPath, "utf-8");
  const updated = css.replace(
    /@import\s+["'][^"']*theme-\w+\.css["']/,
    `@import "./theme-${colorName}.css"`,
  );
  fs.writeFileSync(inputCssPath, updated);
}

router.get("/", (req, res) => {
  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const images = fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(png|jpg|jpeg|gif|svg|ico|webp|avif)$/i.test(f))
    .map((f) => `${f}`);
  const themes = fs
    .readdirSync(themesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const typographyPreset = getTypographyPreset(config.themeSettings);
  const colorTheme = getColorTheme(config.theme);

  res.render("settings/settings.njk", {
    title: "Settings",
    config,
    images,
    themes,
    typographyPreset,
    colorTheme,
    colorPalettes,
  });
});

router.put("/", async (req, res) => {
  const data = req.body;
  const oldConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));

  const themeSettings =
    typographyPresets[data.typography] || typographyPresets.default;

  const config = {
    theme: oldConfig.theme,
    themeSettings,
    postsPerPage: oldConfig.postsPerPage,
    site: {
      name: data.blogName,
      url: data.blogUrl,
      logo: data.siteLogo,
      favicon: data.siteFavicon,
    },
    homepage: {
      heading: data.homepageHeading,
      metadata: {
        img: data.homepageImg,
      },
    },
    footer: {
      socialLinks: JSON.parse(data.socialLinks || "[]"),
    },
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  const oldColorTheme = getColorTheme(oldConfig.theme);
  const newColorTheme = data.colorTheme || "Default";
  const colorChanged = oldColorTheme !== newColorTheme;

  if (colorChanged) {
    setColorTheme(config.theme, newColorTheme);
    await buildSiteWithVite();
    log.success(
      `Color theme changed from "${oldColorTheme}" to "${newColorTheme}".`,
    );
  } else {
    await buildSite();
  }

  log.success("Settings updated");
  res.json({ success: true });
});

export default router;
