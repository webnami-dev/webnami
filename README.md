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

WebNami is an opinionated blogging tool for developers. You write in Markdown and get fast, static pages with clean HTML and minimal JavaScript. It ships with sensible defaults and built-in checks that handle the routine setup and catch common issues, so you can focus on writing.

## ✨ Features

- **Lightning Fast:** Built with 11ty for optimal performance and instant page loads.
- **Automatic Image Compression:** Optimized images for faster loading without quality loss.
- **CSS Minification and JS Bundling:** Optimized assets for production builds.
- **SEO Audit:** Dedicated command (`npm run seo`) to analyze your site for SEO issues and best practices.
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

## 📚 Documentation

**👉 [Visit Full Documentation](https://webnami.in/docs/)**

---

## 📬 Contact & Support

- **Email:** hello.webnami@gmail.com
- **Report Issues:** [GitHub Issues](https://github.com/webnami-dev/webnami/issues)

---

⭐ **Star this repo if WebNami helped you build your blog!**
