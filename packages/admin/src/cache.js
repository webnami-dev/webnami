import fs from "fs";
import path from "path";
import matter from "gray-matter";
import log from "./logger.js";

const cacheDir = path.join(process.cwd(), ".cache");
const postsCache = path.join(cacheDir, "posts.json");
const pagesCache = path.join(cacheDir, "pages.json");

const postsDir = path.resolve("content/posts");
const postsDraftsDir = path.join(postsDir, "_drafts");
const pagesDir = path.resolve("content/pages");
const pagesDraftsDir = path.join(pagesDir, "_drafts");

function readMeta(dir, slug) {
  const filePath = path.join(dir, slug, "index.md");
  if (!fs.existsSync(filePath)) return null;
  return matter(fs.readFileSync(filePath, "utf-8")).data;
}

function buildPostsCache() {
  const posts = [];

  if (fs.existsSync(postsDir)) {
    for (const slug of fs
      .readdirSync(postsDir)
      .filter((s) => s !== "_drafts")) {
      const data = readMeta(postsDir, slug);
      if (!data) continue;
      posts.push({
        title: data.title || "",
        id: data.id || slug,
        slug,
        date: data.date || null,
        tags: Array.isArray(data.tags) ? data.tags : [],
        category: data.category || "",
        isDraft: false,
      });
    }
  }

  if (fs.existsSync(postsDraftsDir)) {
    for (const slug of fs.readdirSync(postsDraftsDir)) {
      const data = readMeta(postsDraftsDir, slug);
      if (!data) continue;
      posts.push({
        title: data.title || "",
        id: slug,
        slug,
        date: data.date || null,
        tags: Array.isArray(data.tags) ? data.tags : [],
        category: data.category || "",
        isDraft: true,
      });
    }
  }

  return posts;
}

function buildPagesCache() {
  const pages = [];

  if (fs.existsSync(pagesDir)) {
    for (const slug of fs
      .readdirSync(pagesDir)
      .filter((s) => s !== "_drafts")) {
      const data = readMeta(pagesDir, slug);
      if (!data) continue;
      pages.push({
        title: data.title || "",
        slug,
        id: data.id || slug,
        isDraft: false,
      });
    }
  }

  if (fs.existsSync(pagesDraftsDir)) {
    for (const slug of fs.readdirSync(pagesDraftsDir)) {
      const data = readMeta(pagesDraftsDir, slug);
      if (!data) continue;
      pages.push({
        title: data.title || "",
        slug,
        id: slug,
        isDraft: true,
      });
    }
  }

  return pages;
}

export function readPostsCache() {
  return JSON.parse(fs.readFileSync(postsCache, "utf-8"));
}

export function writePostsCache(posts) {
  fs.writeFileSync(postsCache, JSON.stringify(posts, null, 2));
}

export function upsertPost(entry) {
  const posts = readPostsCache();
  const idx = posts.findIndex((p) => p.slug === entry.slug);
  if (idx !== -1) posts[idx] = entry;
  else posts.push(entry);
  writePostsCache(posts);
}

export function removePost(slug) {
  const posts = readPostsCache();
  writePostsCache(posts.filter((p) => p.slug !== slug));
}

export function readPagesCache() {
  return JSON.parse(fs.readFileSync(pagesCache, "utf-8"));
}

export function writePagesCache(pages) {
  fs.writeFileSync(pagesCache, JSON.stringify(pages, null, 2));
}

export function upsertPage(entry) {
  const pages = readPagesCache();
  const idx = pages.findIndex((p) => p.slug === entry.slug);
  if (idx !== -1) pages[idx] = entry;
  else pages.push(entry);
  writePagesCache(pages);
}

export function removePage(slug) {
  const pages = readPagesCache();
  writePagesCache(pages.filter((p) => p.slug !== slug));
}

export function initCache() {
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }

  if (!fs.existsSync(postsCache)) {
    fs.writeFileSync(postsCache, JSON.stringify(buildPostsCache(), null, 2));
    log.info("Cache created: posts.json");
  }

  if (!fs.existsSync(pagesCache)) {
    fs.writeFileSync(pagesCache, JSON.stringify(buildPagesCache(), null, 2));
    log.info("Cache created: pages.json");
  }
}
