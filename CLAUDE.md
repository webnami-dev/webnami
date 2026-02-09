# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WebNami is a static blog generator built on **Eleventy 3.x** with **Vite** for asset bundling, **Tailwind CSS 4.x** for styling, and **Nunjucks** for templating. Content is authored in Markdown with YAML frontmatter. The site outputs to `_site/`.

## Commands

- **Dev server:** `npm run dev` (Vite build + Eleventy serve with watch/hot-reload)
- **Production build:** `npm run build` (Vite build + Eleventy build to `_site/`)
- **Create a new post:** `npm run post "Post Title"`
- **Run SEO audit:** `npm run seo` (scans all HTML in `_site/` for SEO issues)

There are no test or lint commands configured.

## Architecture

### Build Pipeline

Vite runs first (bundles CSS/JS from `src/assets/` into `_site/`), then Eleventy processes templates and content. Configuration lives in:

- `src/.eleventy.js` — Eleventy config: collections, filters, plugins, image transforms, shortcodes
- `src/vite.config.js` — Vite config with Tailwind CSS plugin
- `config.js` — Site-wide settings (site name, URL, navbar, footer, pagination)
- `custom.css` — Theme color CSS variables (light/dark mode)

### Content

- **Posts** go in `posts/` as Markdown files with frontmatter: `layout`, `title`, `tags` (array), `category` (single string), `author`, `date`. Set `draft: true` to hide a post.
- **Pages** go in `pages/`. Currently only `about.md` is processed (others are ignored via `.eleventyignore`).
- Post slugs/permalinks are auto-generated from the filename.

### Theming & Templates

Templates use Nunjucks and live under `themes/default/_includes/`:
- **Layouts:** `layouts/base.njk` (root HTML), `layouts/post.njk`, `layouts/page.njk`
- **Macros:** `macros/homepage.njk`, `macros/postlist.njk`, `macros/pages.njk` — reusable template blocks
- **Partials:** `partials/navbar.njk`, `partials/footer.njk`, `partials/category-nav.njk`

Layout hierarchy: `base.njk` wraps `post.njk`/`page.njk`. Base includes SEO meta tags, Open Graph, JSON-LD structured data, and CSP header.

### Plugins (`src/_plugins/`)

Custom Eleventy plugins that add filters/computed data:
- `post-management.js` — hides drafts and future-dated posts
- `excerpt-generator.js` — auto-generates 150-char excerpts from content
- `anchor-links.js` — adds anchor IDs to H2 headings
- `preview-image.js` — extracts first image from post for OG previews
- `seo-validator.js` — build-time SEO checks (H1 count, title length, alt text, etc.)

### Collections (defined in `.eleventy.js`)

Eleventy builds these collections: `posts`, `pages`, `paginatedPosts`, `tagPages`, `categoryPages`, `authorPages`, `categoryList`. Pagination is driven by `config.postsPerPage`.

### Client-Side JS

Minimal — Alpine.js manages dark/light theme toggle (persisted to localStorage). Entry point: `src/assets/js/main.js`.

### Icons

Uses Lucide icons via `{% icon "icon-name" %}` shortcode (kebab-case name, renders inline SVG).

### Image Optimization

Eleventy Image plugin auto-converts images to AVIF/WebP at 360/720/1080px widths with lazy loading. Cached in `.cache/`.

## Key Conventions

- `category` in frontmatter must be a single string, not an array. Use `tags` for multiple classifications.
- Post layout value is `"post"` (not `"layouts/post"` — Eleventy resolves it from the configured layouts dir).
- Page layout value is `"page"`.
- The project uses ES modules (`"type": "module"` in package.json).
- Node.js >= 20.0.0 required.
