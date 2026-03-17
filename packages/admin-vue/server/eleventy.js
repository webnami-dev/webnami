import Eleventy from "@11ty/eleventy";
import log from "./logger.js";
import { build as viteBuild } from "vite";
import { fileURLToPath } from "url";

const coreViteConfig = fileURLToPath(
  import.meta.resolve("@webnami/core/src/vite.config.js"),
);
const eleventyConfig = fileURLToPath(
  import.meta.resolve("@webnami/core/src/.eleventy.js"),
);

async function buildSiteWithVite() {
  log.info("Building Vite assets ...");
  await viteBuild({ configFile: coreViteConfig, logLevel: "silent" });
  log.success("Vite build complete");

  process.env.NODE_ENV = "development";
  log.info("Building site...");
  const elev = new Eleventy("./", "./_site", {
    configPath: eleventyConfig,
    quietMode: true,
  });
  await elev.init();
  await elev.write();
  log.success("Site built successfully");
}

async function buildSite() {
  log.info("Building site...");
  const elev = new Eleventy("./", "./_site", {
    configPath: eleventyConfig,
    quietMode: true,
  });
  await elev.init();
  await elev.write();
  log.success("Site built successfully");
}

export { buildSite, buildSiteWithVite };
