import express from "express";
import fs from "fs";
import path from "path";
import { buildSite } from "../eleventy.js";

const router = express.Router();
const configPath = path.resolve("src/_data/config.json");
const imagesDir = path.resolve("images");

router.get("/", (req, res) => {
  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const images = fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(png|jpg|jpeg|gif|svg|ico|webp|avif)$/i.test(f))
    .map((f) => `${f}`);

  res.render("settings/settings.njk", {
    title: "Settings",
    config,
    images,
  });
});

router.put("/", async (req, res) => {
  const data = req.body;

  const config = {
    theme: "default",
    site: {
      name: data.siteName,
      url: data.siteUrl,
      language: data.siteLanguage,
      logo: data.siteLogo,
      favicon: data.siteFavicon,
      csp: data.siteCsp,
    },
    postsPerPage: parseInt(data.postsPerPage, 10) || 20,
    homepage: {
      heading: data.homepageHeading,
      metadata: {
        title: data.homepageTitle,
        description: data.homepageDescription,
        img: data.homepageImg,
      },
    },
    navbar: {
      links: JSON.parse(data.navbarLinks || "[]"),
    },
    footer: {
      socialLinks: JSON.parse(data.socialLinks || "[]"),
      linkGroups: JSON.parse(data.linkGroups || "[]"),
    },
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  await buildSite();
  res.json({ success: true });
});

export default router;
