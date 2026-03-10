<p align="center"><img src="images/logo.svg" width="200" alt="WebNami logo"></p>

<h1 align="center">WebNami</h1>

<p align="center">
🚀 <b>A fast, zero-config, local-first blogging platform for developers</b>
</p>

<p align="center">
Own your content. Write in Markdown. Ship blazing-fast static blogs.
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/webnami-dev/webnami?style=social" />
  <img src="https://img.shields.io/github/license/webnami-dev/webnami" />
  <img src="https://img.shields.io/github/issues/webnami-dev/webnami" />
  <img src="https://img.shields.io/github/issues-closed/webnami-dev/webnami" />
</p>

---

# 📝 Project Overview

**WebNami** is an opinionated blogging platform built for developers who want **full ownership of their content without the complexity of traditional CMS platforms**.

It combines the simplicity of **Markdown writing** with a **browser-based admin dashboard**, while generating a **fully static, SEO-optimized site without any configuration** powered by **Eleventy and Vite**.

Unlike traditional blogging platforms, WebNami follows a **local-first philosophy**:

- Your content lives in your repository
- No vendor lock-in
- No proprietary database
- Deploy anywhere that serves static files

Write posts in Markdown, manage them via the dashboard, and deploy a **fast, beautiful blog in minutes.**

---

# ✨ Key Features

### 🧑‍💻 Developer Friendly

- Markdown-first workflow
- Works directly with your repository
- No database or proprietary backend
- Static output deployable anywhere

### 🖥 Admin Dashboard

A built-in browser UI for managing:

- Posts
- Pages
- Categories & tags
- Site settings

Includes a Markdown editor powered by **EasyMDE** with slash commands:

- `/upload-image`
- `/insert-link`

### 🎨 Customization

- **8 built-in color palettes**  
  Default, Forest, Ink, Ocean, Plum, Rose, Slate, Sunset

- **Theme system**  
  Swappable themes inside `themes/`

- **Dark / Light mode**

### ⚡ Performance

- Static HTML output
- No client-side framework
- Optimized CSS via Tailwind CSS v4
- Automatic asset optimization

### 🖼 Image Handling

- Image uploads from editor
- Automatic responsive images
- WebP conversion
- Generated sizes: **360 / 720 / 1080 px**

### 🔎 SEO Ready

Built-in SEO features:

- Meta tags like title, description
- Canonical URLs
- OpenGraph & Twitter cards
- JSON-LD BlogPosting schema
- Sitemap generation
- RSS feed
- robots.txt
- Custom 404 page

### 📄 Content Organization

- Tag and category filtering
- Paginated post listing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20 or higher
- **npm** v10 or higher

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

### First Run

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) for the blog and [http://localhost:3000/admin](http://localhost:3000/admin) for the admin dashboard.

---

## ⌨️ Commands

- **Start admin + blog server:**

  ```bash
  npm start
  ```

  Builds assets (Vite) and the static site (Eleventy), then serves both at [http://localhost:3000](http://localhost:3000). Admin at [http://localhost:3000/admin](http://localhost:3000/admin). Content changes trigger automatic rebuilds.

- **Development mode (static site only, no admin):**

  ```bash
  npm run dev
  ```

  Vite and Eleventy in watch mode with hot reload at [http://localhost:8080](http://localhost:8080). Use this when working on templates or themes.

- **Build for production:**

  ```bash
  npm run build
  ```

  Generates the optimized static site in `_site/` with image optimization, HTML/CSS/JS minification, and cache-busted assets.

---

## 📬 Contact & Support

- **Email:** hello.webnami@gmail.com
- **Report Issues:** [GitHub Issues](https://github.com/webnami-dev/webnami/issues)

---

⭐ **Star this repo if WebNami helped you build your blog!**
