#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

if (!projectName) {
  console.log("Usage: npx create-webnami-blog <project-name>");
  process.exit(1);
}

const templateDir = path.join(__dirname, "..");
const targetDir = path.join(process.cwd(), projectName);

console.log("Creating new blog project...");

// Copy scaffold directories (admin/dist is a build artifact — skip it)
const scaffoldDirs = [
  "admin",
  "images",
  "pages",
  "posts",
  "palettes",
  "src",
  "themes",
];

for (const dir of scaffoldDirs) {
  const src = path.join(templateDir, dir);
  const dest = path.join(targetDir, dir);
  if (fs.existsSync(src)) {
    fs.copySync(src, dest, {
      filter: (srcPath) =>
        !srcPath.startsWith(path.join(templateDir, "admin", "dist")),
    });
  }
}

// Write .gitignore directly — avoids npm stripping .gitignore/.gitignore.template on publish
fs.writeFileSync(
  path.join(targetDir, ".gitignore"),
  `${[
    "node_modules/",
    "_site/",
    "admin/dist/",
    ".cache/",
    ".env",
    "*.log",
    ".DS_Store",
    ".vscode/",
  ].join("\n")}\n`,
);

// Generate a clean package.json for the scaffolded project
const sourcePkg = JSON.parse(
  fs.readFileSync(path.join(templateDir, "package.json"), "utf-8"),
);
const scaffoldPkg = {
  name: projectName.toLowerCase().replace(/[^a-z0-9-]+/g, "-"),
  version: "1.0.0",
  type: "module",
  scripts: {
    start: sourcePkg.scripts.start,
    build: sourcePkg.scripts.build,
  },
  dependencies: sourcePkg.dependencies,
  devDependencies: sourcePkg.devDependencies,
  engines: sourcePkg.engines,
};
fs.writeFileSync(
  path.join(targetDir, "package.json"),
  `${JSON.stringify(scaffoldPkg, null, 2)}\n`,
);

// Install dependencies
console.log("Installing dependencies...");
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

console.log(`✅ Blog created in ${projectName}/`);
console.log(`Run: cd ${projectName} && npm start`);
