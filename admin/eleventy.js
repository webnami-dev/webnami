import Eleventy from "@11ty/eleventy";
import log from "./logger.js";
import { build as viteBuild } from "vite";

async function buildSiteWithVite() {
  log.info("Building Vite assets ...");
  await viteBuild({ configFile: "src/vite.config.js", logLevel: "silent" });
  log.success("Vite build complete");

  process.env.NODE_ENV = "development";
  log.info("Building site...");
  const elev = new Eleventy("./", "./_site", {
    configPath: "src/.eleventy.js",
    quietMode: true,
  });
  await elev.init();
  await elev.write();
  log.success("Site built successfully");
}

async function buildSite() {
  log.info("Building site...");
  const elev = new Eleventy("./", "./_site", {
    configPath: "src/.eleventy.js",
    quietMode: true,
  });
  await elev.init();
  await elev.write();
  log.success("Site built successfully");
}

export { buildSite, buildSiteWithVite };
