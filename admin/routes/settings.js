import express from "express";
import fs from "fs";
import path from "path";
import { buildSite } from "../eleventy.js";
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

function getTypographyPreset(themeSettings = {}) {
  const { headerFont, bodyFont } = themeSettings;
  const match = Object.entries(typographyPresets).find(
    ([, v]) => v.headerFont === headerFont && v.bodyFont === bodyFont,
  );
  return match ? match[0] : "default";
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

  res.render("settings/settings.njk", {
    title: "Settings",
    config,
    images,
    themes,
    typographyPreset,
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
  await buildSite();
  log.success("Settings updated");
  res.json({ success: true });
});

export default router;
