import Eleventy from "@11ty/eleventy";
import log from "./logger.js";

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

export { buildSite };
