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

// Template is one level up from bin/
const templateDir = path.join(__dirname, "..");
const targetDir = path.join(process.cwd(), projectName);

console.log("Creating new blog project...");

// Copy all template files except package/ and node_modules
const excludePatterns = [
  "bin",
  "node_modules",
  "_site",
  ".git",
  "README.md",
  ".env",
  ".prettierignore",
  "docs",
  ".cache",
  "LICENSE",
];

fs.copySync(templateDir, targetDir, {
  filter: (src) => {
    const basename = path.basename(src);
    return !excludePatterns.some((pattern) => basename.includes(pattern));
  },
});

fs.copySync(
  path.join(templateDir, ".gitignore.template"),
  path.join(targetDir, ".gitignore")
);

const gitignoreTarget = path.join(targetDir, ".gitignore");

const gitignoreSource = gitignoreCandidates.find((p) => fs.existsSync(p));

if (gitignoreSource) {
  fs.copySync(gitignoreSource, gitignoreTarget);
} else {
  // Last-resort: keep scaffolding working even if template was not packaged.
  fs.writeFileSync(
    gitignoreTarget,
    ["node_modules/", "_site/", ".cache/", ".env", "*.log", "dist/"].join(
      "\n"
    ) + "\n"
  );
  console.warn(
    "⚠️  .gitignore template not found in package; created a minimal .gitignore."
  );
}

// Install dependencies
console.log("Installing dependencies...");
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

console.log(`✅ Blog created in ${projectName}/`);
console.log(`Run: cd ${projectName} && npm run dev`);
