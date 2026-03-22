---
layout: "layouts/docs"
title: "Getting Started — WebNami Docs"
permalink: "/docs/getting-started/"
---

# Getting Started

## Requirements

- Node.js 18 or later
- npm 9 or later

## Installation

```bash
npx create-webnami-blog@latest
```

The installer asks for a project name, then scaffolds a new blog in that directory.

```bash
cd my-blog
npm start
```

The server starts on `http://localhost:3000`. The admin is at `http://localhost:3000/admin`.

## Project structure

```
my-blog/
├── content/
│   ├── posts/          # Blog post folders (one folder per post)
│   ├── pages/          # Page folders (one folder per page)
│   └── site/           # Site-level assets (OG image, favicon)
├── themes/
│   └── void/           # Default theme (Nunjucks + Tailwind CSS)
├── palettes/           # Color palette JSON files
├── _metadata/
│   └── config.json     # Site configuration
├── _site/              # Build output (do not edit)
└── package.json
```

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start the admin + blog server on port 3000 |
| `npm run build` | Production build to `_site/` |
| `npm run dev` | Eleventy + Vite watch mode only (no admin, port 8080) |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |

## How it works

1. `npm start` builds Vite assets, then runs Eleventy to generate `_site/`, then starts Express on port 3000.
2. Express serves the admin at `/admin` and the generated static site at `/`.
3. When you save a post or page through the admin, Eleventy rebuilds on demand — no full restart needed.
4. `npm run build` does a full production build with minification and cache-busted asset URLs.

## Next steps

- [Write your first post](./content/)
- [Configure your site](./configuration/)
