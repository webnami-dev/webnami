import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const config = JSON.parse(
  fs.readFileSync(path.resolve("src/_data/config.json"), "utf-8"),
);

test.describe("Homepage", () => {
  test("should render the homepage heading", async ({ page }) => {
    await page.goto("/");
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
  });

  test("should render navbar links from config", async ({ page }) => {
    await page.goto("/");
    for (const link of config.navbar.links) {
      await expect(
        page.locator(`nav a[href="${link.href}"]`, { hasText: link.name }),
      ).toBeVisible();
    }
  });

  test("should render footer social links", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("should have correct meta title", async ({ page }) => {
    await page.goto("/");
    const title = await page.title();
    expect(title).toContain(config.homepage.metadata.title);
  });

  test("should have meta description", async ({ page }) => {
    await page.goto("/");
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description).toBeTruthy();
  });

  test("should have og:title meta tag", async ({ page }) => {
    await page.goto("/");
    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute("content");
    expect(ogTitle).toBeTruthy();
  });

  test("should have og:image meta tag", async ({ page }) => {
    await page.goto("/");
    const ogImage = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    expect(ogImage).toBeTruthy();
  });

  test("should have exactly one H1 tag", async ({ page }) => {
    await page.goto("/");
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);
  });
});

test.describe("Post Page", () => {
  test("should render a post with correct SEO tags", async ({ page }) => {
    // Navigate to a known post
    await page.goto("/this-is-the-latest-post/");

    // Check title
    const title = await page.title();
    expect(title).toContain("This is the latest post");

    // Check H1
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    // Check og:title
    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute("content");
    expect(ogTitle).toContain("This is the latest post");

    // Check og:description
    const ogDescription = await page
      .locator('meta[property="og:description"]')
      .getAttribute("content");
    expect(ogDescription).toBeTruthy();
    expect(ogDescription.length).toBeGreaterThan(0);

    // Check og:image
    const ogImage = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    expect(ogImage).toBeTruthy();

    // Check JSON-LD structured data
    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    const structured = JSON.parse(jsonLd);
    expect(structured["@type"]).toBe("BlogPosting");
    expect(structured.headline).toContain("This is the latest post");
    expect(structured.author.name).toBe("WebNami");
  });

  test("should have canonical URL", async ({ page }) => {
    await page.goto("/this-is-the-latest-post/");
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(canonical).toBeTruthy();
    expect(canonical).toContain("/this-is-the-latest-post/");
  });
});

test.describe("RSS Feed", () => {
  test("should return valid XML at /rss.xml", async ({ request }) => {
    const resp = await request.get("/rss.xml");
    expect(resp.ok()).toBeTruthy();
    const body = await resp.text();
    expect(body).toContain("<?xml");
    expect(body).toContain("<rss");
    expect(body).toContain("<channel>");
    expect(body).toContain("<title>");
  });

  test("should contain post entries in RSS", async ({ request }) => {
    const resp = await request.get("/rss.xml");
    const body = await resp.text();
    expect(body).toContain("<item>");
    expect(body).toContain("<title>");
    expect(body).toContain("<link>");
  });
});

test.describe("Sitemap", () => {
  test("sitemap index should reference pages and posts sitemaps", async ({
    request,
  }) => {
    const resp = await request.get("/sitemap.xml");
    expect(resp.ok()).toBeTruthy();
    const body = await resp.text();
    expect(body).toContain("<?xml");
    expect(body).toContain("<sitemapindex");
    expect(body).toContain("<sitemap>");
    expect(body).toContain("sitemap-pages.xml");
    expect(body).toContain("sitemap-posts.xml");
  });

  test("sitemap-pages should contain page URLs", async ({ request }) => {
    const resp = await request.get("/sitemap-pages.xml");
    expect(resp.ok()).toBeTruthy();
    const body = await resp.text();
    expect(body).toContain("<?xml");
    expect(body).toContain("<urlset");
    expect(body).toContain("<url>");
    expect(body).toContain("<loc>");
    expect(body).toContain("<lastmod>");
  });

  test("sitemap-posts should contain post URLs", async ({ request }) => {
    const resp = await request.get("/sitemap-posts.xml");
    expect(resp.ok()).toBeTruthy();
    const body = await resp.text();
    expect(body).toContain("<?xml");
    expect(body).toContain("<urlset");
    expect(body).toContain("<url>");
    expect(body).toContain("<loc>");
    expect(body).toContain("<lastmod>");
  });
});
