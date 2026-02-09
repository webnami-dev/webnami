#!/usr/bin/env node

import fs from "fs";
import path from "path";

function createPost(title) {
  if (!title) {
    console.log('Usage: npm run post "Your Post Title"');
    process.exit(1);
  }

  // Generate filename from title (lowercase, replace spaces with hyphens, remove special chars)
  const filename = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split("T")[0];

  // Create frontmatter
  const frontmatter = `---
layout: "post"
title: "${title}"
tags: []
category: ""
author: ""
date: ${currentDate}
---
`;

  // Create file path
  const filePath = path.join("posts", `${filename}.md`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`❌ File already exists: ${filePath}`);
    process.exit(1);
  }
  // Write the file
  fs.writeFileSync(filePath, frontmatter);

  console.log(`✅ Created new post: ${filePath}`);
}

// Get title from command line arguments
const title = process.argv[2];
createPost(title);
