---
layout: "layouts/docs"
title: "Documentation — WebNami"
permalink: "/docs/"
---

# WebNami Documentation

WebNami is a local-first, flat-file blogging platform. You write posts in Markdown, manage them through a browser-based admin dashboard, and Eleventy compiles everything into a fast static site you can deploy anywhere.

## What's in these docs

| Page | What it covers |
|------|---------------|
| [Getting Started](./getting-started/) | Installation, first run, project structure |
| [Content](./content/) | Writing posts and pages, frontmatter reference, drafts |
| [Admin Dashboard](./admin/) | Managing content through the browser UI |
| [Themes](./themes/) | Switching themes, building your own |
| [Configuration](./configuration/) | config.json reference, palettes, social links |
| [Images](./images/) | Uploading, responsive images, WebP conversion |
| [SEO](./seo/) | Meta tags, OpenGraph, JSON-LD, sitemap, RSS |
| [Deployment](./deployment/) | Building for production, hosting options |

## Quick start

```bash
npx create-webnami-blog@latest
cd my-blog
npm start
```

Open `http://localhost:3000/admin` and start writing.
