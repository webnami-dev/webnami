import express from "express";
import fs from "fs";
import path from "path";
import { buildSite } from "../eleventy.js";
import log from "../logger.js";

const router = express.Router();
const configPath = path.resolve("src/_data/config.json");
const imagesDir = path.resolve("images");
const themesDir = path.resolve("themes");

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

  res.render("settings/settings.njk", {
    title: "Settings",
    config,
    images,
    themes,
  });
});

router.put("/", async (req, res) => {
  const data = req.body;
  const oldConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const themeChanged = oldConfig.theme !== (data.theme || "default");

  const config = {
    theme: data.theme || "default",
    site: {
      name: data.blogName,
      url: data.blogUrl,
      logo: data.siteLogo,
      favicon: data.siteFavicon,
    },
    postsPerPage: parseInt(data.postsPerPage, 10) || 20,
    homepage: {
      heading: data.homepageHeading,
      metadata: {
        img: data.homepageImg,
      },
    },
    navbar: {
      links: JSON.parse(data.navbarLinks || "[]"),
    },
    footer: {
      socialLinks: JSON.parse(data.socialLinks || "[]"),
      links: JSON.parse(data.footerLinks || "[]"),
    },
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  if (themeChanged) {
    log.warn(
      `Theme changed from "${oldConfig.theme}" to "${config.theme}". Please restart the server for the new theme to take effect.`,
    );
    res.json({
      success: true,
      restartRequired: true,
      message: `Theme changed to "${config.theme}". Please restart the server for changes to take effect.`,
    });
  } else {
    await buildSite();
    log.success("Settings updated");
    res.json({ success: true });
  }
});

export default router;
