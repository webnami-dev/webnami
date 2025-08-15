<p align="center"><img src="images/logo.svg" width="200" alt="WebNami logo"></p>

<h1 align="center">WebNami</h1>

<p align="center">
🚀 <b>A Fast, Lightweight, SEO-ready blogging tool</b>
</p>

<p align="center">
  <a href="https://webnami-blog.pages.dev/" target="_blank">🌐 Live Demo</a> •
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/webnami-dev/webnami?style=social" />
  <img src="https://img.shields.io/github/license/webnami-dev/webnami" />
  <img src="https://img.shields.io/github/issues/webnami-dev/webnami" />
  <img src="https://img.shields.io/github/issues-closed/webnami-dev/webnami" />
</p>

![Hero Section](docs/screenshots/hero-section.png)

---

## 📝 Project Overview

**WebNami** is an opinionated fast, lightweight, SEO-focused blogging website generator built with [11ty (Eleventy)](https://www.11ty.dev/). It is designed for anyone who wants to create a fast, modern blog with built-in SEO and minimal setup.

---

## ✨ Features

- ⚡ **Lightning Fast:** Built with 11ty for optimal performance and instant page loads.
- 🔍 **SEO Audit:** Dedicated command (`npm run seo`) to analyze your site for SEO issues and best practices.
- 🎨 **Multiple Layouts:** Choose from 6 built-in layouts (trio, triofeatured, mono, duo, monofeatured, duofeatured).
- 📊 **Perfect Performance:** Achieves 100/100 on Core Web Vitals for speed, accessibility, and best practices.
- 📡 **RSS Feed:** Automatic RSS feed generation for easy syndication.
- 🗺️ **Sitemap:** Auto-generated XML sitemap for better search engine indexing.
- 🤖 **Robots.txt:** SEO-friendly robots.txt included by default.
- 🚫 **Custom 404 Page:** Beautiful error page for a better user experience.
- 🔗 **Canonical Links:** Proper canonical URL management to avoid duplicate content.
- 📱 **Meta Tags:** Complete title, description, and Open Graph tags for social sharing.
- 💻 **Syntax Highlighting:** Built-in code syntax highlighting.
- 📋 **Structured Data Markup:** Rich snippets and structured data for enhanced SEO and search engine visibility.
- 🌙 **Dark/Light Mode:** Toggle between dark and light modes with automatic system preference detection.
- 🎨 **Minimal Design:** Clean, beautiful, and fully responsive design out of the box.

---

## 📸 Screenshots

- **SEO Audit in Terminal:**

  ![SEO Audit Build Output](docs/screenshots/seo-audit-build.png)
  <br/><sub>SEO issues and warnings are displayed in the terminal.</sub>

- **Core Web Vitals (Lighthouse):**

  ![Core Web Vitals](docs/screenshots/core-web-vitals.png)
  <br/><sub>WebNami achieves perfect scores on Core Web Vitals.</sub>

---

## 🗂️ Project Structure

```
webnami/
├── config.js                # Main configuration file
├── package.json             # Project metadata and dependencies
├── custom.css               # Main CSS file for custom styles
├── images/                  # Image assets
├── pages/                   # Static pages (only about.md allowed)
├── posts/                   # Blog posts [Markdown only]
├── src/                     # Source code (templates, assets, system pages, scripts)
│   ├── _includes/           # Nunjucks templates and layouts
│   ├── _plugins/            # Eleventy plugins
│   ├── assets/              # CSS, JS, and font files
│   ├── scripts/             # Build and utility scripts
│   └── system/              # System-generated pages
├── _site/                   # Generated output (do not edit directly)
└── README.md                # Project documentation
```

- **pages/**: Only `about.md` is allowed for the about page
- **posts/**: Only Markdown files for blog posts
- **images/**: Store your image assets here
- **custom.css**: Use this file for all your custom styles
- **src/**: Contains all templates, plugins, and build system
- **\_site/**: This is the build output folder (generated automatically)

---

## 🛠️ How to Use

### Pages Folder

- Only `pages/about.md` is allowed for the about page
- Do not add additional page files - only the about page is supported

### Posts Folder

- Create blog posts in `posts/` using Markdown (`.md`) files only
- Use the command `npm run post "Your Post Title"` to generate new posts automatically
- Each post must start with frontmatter.

### custom.css

- Customize your site's look by editing `custom.css` in the project root.
- Override colors for both light and dark modes (primary, background, content, accent, and footer colors)

---

## 🏷️ Frontmatter Reference

Both pages and posts require frontmatter at the top of each Markdown file. Here are the required fields and their explanations:

### For Pages (About Page)

```markdown
---
layout: "layouts/page"
eleventyComputed:
  title: "About Us - Learn More About {{ config.site.name }}"
  description: "About Us - Learn More About {{ config.site.name }}"
  img: "{{ config.homepage.metadata.img }}"
permalink: "/about/"
---
```

- **title**: The page title (required)
- **description**: Short description for SEO and meta tags (recommended)
- **img**: Image for social sharing and meta tags (recommended)
- **permalink**: The URL path for the page (required)

### For Posts

```markdown
---
title: "Sample Blog Post Title"
tags:
category:
author:
date: 2024-07-25
---
```

- **title**: The post title (required)
- **tags**: List of tags for the post (optional, used for tag pages)
- **category**: Category name (optional, used for category pages)
- **author**: Author name (optional)
- **date**: Publish date in YYYY-MM-DD format (required)

**Note**: Use `npm run post "Your Post Title"` to automatically generate posts with the correct frontmatter structure.

---

## ⚙️ Configuration (config.js)

The `config.js` file controls your site's settings. Here is an explanation of the main fields:

- **layout**: Choose from available layouts (`"triofeatured"`, `"trio"`, `"mono"`, `"duo"`, `"monofeatured"`, `"duofeatured"`)
- **site**: Core site information
  - `name`: The name of your site
  - `url`: The base URL for your site
  - `language`: The language code for your site (e.g., "en")
  - `logo`: Path to your logo image
  - `favicon`: Path to your favicon
  - `csp`: Content Security Policy string
- **postsPerPage**: Number of posts per page on listing pages
- **homepage**: Homepage specific settings
  - `heading`: Main homepage heading text
  - `metadata.title`: Title for SEO/meta tags
  - `metadata.description`: Description for SEO/meta tags
  - `metadata.img`: Social sharing image URL
- **navbar**: Navigation bar links
  - `links`: Array of navigation links (each with `name` and `href`)
- **footer**: Footer configuration
  - `socialLinks`: Array of social media links (each with `name` and `href`)
  - `linkGroups`: Array of grouped footer links (each with optional `title` and `links`)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20 or higher
- **npm** v10 or higher (or use `yarn`/`pnpm`)

### Installation

#### Option 1: Using npx (Recommended)

```bash
npx create-webnami-blog my-blog-name
cd my-blog-name
```

#### Option 2: Using npm

```bash
npm create webnami-blog my-blog-name
cd my-blog-name
```

### Initial Configuration

- Edit `config.js` to set your site name, URL, and other settings.
- Add your logo and favicon to the `images/` directory.

### First Run

```bash
npm run dev
```

Visit [http://localhost:8080](http://localhost:8080) to see your site.

---

## ⌨️ Commands

- **Build for production:**

  ```bash
  npm run build
  ```

  Generates the static site in the `_site/` directory.

- **Start development server:**

  ```bash
  npm run dev
  ```

  Runs a local server with hot reload.

- **Create a new post:**

  ```bash
  npm run post "Your Post Title"
  ```

  Automatically generates a new post with proper frontmatter.

- **Run SEO analysis:**

  ```bash
  npm run seo
  ```

  Analyzes all HTML files for SEO issues and best practices.

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=webnami-dev/webnami&type=Timeline)](https://www.star-history.com/#webnami-dev/webnami&Timeline)

---

## 📬 Contact & Support

- **Email:** hello.webnami@gmail.com
- **Report Issues:** [GitHub Issues](https://github.com/webnami-dev/webnami/issues)

---

**WebNami** — The modern, fast, and SEO-friendly way to blog.
