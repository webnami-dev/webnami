import Eleventy from "@11ty/eleventy";

async function buildSite() {
  const elev = new Eleventy("./", "./_site", {
    configPath: "src/.eleventy.js",
  });
  await elev.init();
  await elev.write();
}

export { buildSite };
