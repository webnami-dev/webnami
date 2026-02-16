<p align="center"><img src="images/logo.svg" width="200" alt="WebNami logo"></p>

<h1 align="center">WebNami</h1>

<p align="center">
🚀 <b>A Fast, Lightweight, SEO-ready blogging tool for developers</b>
</p>

<p align="center">
  <a href="https://webnami-blog.pages.dev/" target="_blank">🌐 Live Demo</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/webnami-dev/webnami?style=social" />
  <img src="https://img.shields.io/github/license/webnami-dev/webnami" />
  <img src="https://img.shields.io/github/issues/webnami-dev/webnami" />
  <img src="https://img.shields.io/github/issues-closed/webnami-dev/webnami" />
</p>

---

## 📝 Project Overview

WebNami is an opinionated blogging platform built on Eleventy and Vite. It pairs a static site generator with a full admin dashboard — create and manage posts, pages, and site settings from a browser UI, or write Markdown files directly. The site builds to static HTML with optimized images, Tailwind CSS, and zero client-side framework overhead. Themes are swappable, SEO checks run per-page from the admin, and the whole thing deploys anywhere that serves static files.

## ✨ Features

- **Lightning Fast:** Built with 11ty for optimal performance and instant page loads.
- **Automatic Image Compression:** Optimized images for faster loading without quality loss.
- **CSS Minification and JS Bundling:** Optimized assets for production builds.
- **SEO Audit:** Per-page SEO analysis from the admin dashboard.
- **Multiple Layouts:** Choose from 6 built-in layouts (trio, triofeatured, mono, duo, monofeatured, duofeatured).
- **Perfect Performance:** Achieves 100/100 on Core Web Vitals for speed, accessibility, and best practices.
- **RSS Feed:** Automatic RSS feed generation for easy syndication.
- **Sitemap:** Auto-generated XML sitemap for better search engine indexing.
- **Robots.txt:** SEO-friendly robots.txt included by default.
- **Custom 404 Page:** Prestyled 404 error page.
- **Canonical Links:** Proper canonical URL management to avoid duplicate content.
- **Meta Tags:** Complete title, description, and Open Graph tags for social sharing.
- **Syntax Highlighting:** Built-in code syntax highlighting.
- **Structured Data Markup:** Rich snippets and structured data for enhanced SEO and search engine visibility.
- **Dark/Light Mode:** Toggle between dark and light modes with automatic system preference detection.
- **Theming:** Switch between themes from the admin dashboard. Add custom themes in the `themes/` directory.
- **Admin Dashboard:** Built-in admin panel for managing posts, pages, and site settings with a visual editor (EasyMDE).
- **Minimal Design:** Clean, beautiful, and fully responsive design out of the box.

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

- **Start admin dashboard:**

  ```bash
  node admin/app.js
  ```

  Starts the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin) and serves the blog at [http://localhost:3000](http://localhost:3000). Create, edit, and delete posts/pages, run SEO checks, and manage site settings from the browser.

- **Start development server (static site only):**

  ```bash
  npm run dev
  ```

  Runs Eleventy with hot reload at [http://localhost:8080](http://localhost:8080). Use this when working on templates or themes without the admin.

- **Build for production:**

  ```bash
  npm run build
  ```

  Generates the optimized static site in `_site/` with image compression, CSS/JS minification, and cache-busted assets.

- **Lint code:**

  ```bash
  npm run lint
  ```

  Runs ESLint across the project. Use `npm run lint:fix` to auto-fix issues.

- **Run tests:**

  ```bash
  npm run test
  ```

  Runs Playwright E2E tests (auto-starts the admin server).

---

## 📚 Documentation

**👉 [Visit Full Documentation](https://webnami.in/docs/)**

---

## 📬 Contact & Support

- **Email:** hello.webnami@gmail.com
- **Report Issues:** [GitHub Issues](https://github.com/webnami-dev/webnami/issues)

---

⭐ **Star this repo if WebNami helped you build your blog!**
