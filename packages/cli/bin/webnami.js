#!/usr/bin/env node
import { execSync, spawn } from "child_process";
import { createRequire } from "module";
import path from "path";

const require = createRequire(import.meta.url);

const corePath = path.dirname(require.resolve("@webnami/core/package.json"));
const adminPath = path.dirname(
  require.resolve("@webnami/admin-vue/package.json"),
);

const viteConfig = path.join(corePath, "src/vite.config.js");
const eleventyConfig = path.join(corePath, "src/.eleventy.js");
const adminApp = path.join(adminPath, "app.js");

const localBin = path.join(process.cwd(), "node_modules/.bin");
const env = {
  ...process.env,
  PATH: `${localBin}${path.delimiter}${process.env.PATH}`,
};

const [, , command] = process.argv;

if (command === "build") {
  execSync(
    `cross-env NODE_ENV=production vite --config "${viteConfig}" build && cross-env NODE_ENV=production eleventy --config="${eleventyConfig}"`,
    { stdio: "inherit", env },
  );
} else if (command === "dev") {
  execSync(
    `vite --config "${viteConfig}" build && eleventy --config="${eleventyConfig}" --serve --watch`,
    { stdio: "inherit", env },
  );
} else {
  spawn("node", [adminApp], { stdio: "inherit" });
}
