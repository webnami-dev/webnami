import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const postsDir = path.resolve("posts");
const pagesDir = path.resolve("pages");
const testPostSlug = "seo-test-post";
const testPageSlug = "seo-test-page";
const testPostFile = path.join(postsDir, `${testPostSlug}.md`);
const testPageFile = path.join(pagesDir, `${testPageSlug}.md`);

test.afterAll(() => {
  if (fs.existsSync(testPostFile)) fs.unlinkSync(testPostFile);
  if (fs.existsSync(testPageFile)) fs.unlinkSync(testPageFile);
});

const seoCheckNames = [
  "H1 Tag",
  "Title Length",
  "Word Count",
  "Meta Description",
  "Image Alt Text",
  "H2 Structure",
  "Duplicate H2s",
  "Open Graph",
  "Canonical URL",
];

test.describe("SEO Check - Posts", () => {
  test("should create a test post", async ({ page }) => {
    await page.goto("/admin/posts/new");
    await page.locator("#title").fill("SEO Test Post");
    await page.locator("#description").fill("A test post for SEO analysis");
    await page.locator("#tags").fill("seo, test");
    await page.locator("#category").fill("testing");
    await page.locator("#date").evaluate((el) => {
      el.removeAttribute("readonly");
    });
    await page.locator("#date").fill("2025-06-01");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    expect(fs.existsSync(testPostFile)).toBeTruthy();
  });

  test("should show the SEO Check button on the edit post page", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testPostSlug}`);
    await expect(page.locator("#seo-btn")).toBeVisible();
    await expect(page.locator("#seo-btn")).toContainText("SEO Check");
  });

  test("should open the SEO modal when clicking SEO Check", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testPostSlug}`);
    await page.locator("#seo-btn").click();

    const modal = page.locator("#seo-modal");
    await expect(modal).toBeVisible();
    await expect(
      modal.locator("h2", { hasText: "SEO Analysis" }),
    ).toBeVisible();
  });

  test("should display all SEO check results in the modal", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testPostSlug}`);
    await page.locator("#seo-btn").click();

    const modal = page.locator("#seo-modal");
    await expect(modal).toBeVisible();

    // Wait for loading to finish
    await expect(modal.locator(".animate-spin")).toBeHidden({ timeout: 10000 });

    // Verify all 9 check names appear (target the .font-medium span specifically)
    for (const name of seoCheckNames) {
      await expect(
        modal.locator(".font-medium", { hasText: name }),
      ).toBeVisible();
    }
  });

  test("should display the summary counts in the modal", async ({ page }) => {
    await page.goto(`/admin/posts/${testPostSlug}`);
    await page.locator("#seo-btn").click();

    const modal = page.locator("#seo-modal");
    await expect(modal.locator(".animate-spin")).toBeHidden({ timeout: 10000 });

    // Summary should show "X passed" and "X failed"
    await expect(modal.locator("text=/\\d+ passed/")).toBeVisible();
    await expect(modal.locator("text=/\\d+ failed/")).toBeVisible();
  });

  test("should close the SEO modal when clicking the close button", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testPostSlug}`);
    await page.locator("#seo-btn").click();

    const modal = page.locator("#seo-modal");
    await expect(modal).toBeVisible();
    await expect(modal.locator(".animate-spin")).toBeHidden({ timeout: 10000 });

    // Click the X button inside the modal header to close
    await modal.locator("h2 + button").click();
    await expect(modal).toBeHidden();
  });

  test("should close the SEO modal when clicking the backdrop", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testPostSlug}`);
    await page.locator("#seo-btn").click();

    const modal = page.locator("#seo-modal");
    await expect(modal).toBeVisible();
    await expect(modal.locator(".animate-spin")).toBeHidden({ timeout: 10000 });

    // Click the backdrop to close
    await modal.locator(".bg-black\\/50").click({ position: { x: 10, y: 10 } });
    await expect(modal).toBeHidden();
  });

  test("should return correct data from the SEO API endpoint", async ({
    request,
  }) => {
    const resp = await request.get(`/admin/posts/${testPostSlug}/seo`);
    expect(resp.status()).toBe(200);

    const data = await resp.json();
    expect(data.checks).toHaveLength(9);
    expect(data.summary).toHaveProperty("passed");
    expect(data.summary).toHaveProperty("failed");
    expect(data.summary).toHaveProperty("info");
    expect(data.summary.passed + data.summary.failed + data.summary.info).toBe(
      9,
    );

    for (const check of data.checks) {
      expect(check).toHaveProperty("name");
      expect(check).toHaveProperty("status");
      expect(check).toHaveProperty("message");
      expect(["pass", "fail", "info"]).toContain(check.status);
    }
  });

  test("should return 404 for SEO check on non-existent post", async ({
    request,
  }) => {
    const resp = await request.get("/admin/posts/this-post-does-not-exist/seo");
    expect(resp.status()).toBe(404);
    const data = await resp.json();
    expect(data.error).toBeTruthy();
  });

  test("should delete the test post", async ({ page }) => {
    await page.goto(`/admin/posts/${testPostSlug}`);
    await page.locator("#delete-btn").click();
    await page.locator("#confirm-accept").click();
    await expect(page.locator(".alert-success")).toBeVisible();
    expect(fs.existsSync(testPostFile)).toBeFalsy();
  });
});

test.describe("SEO Check - Pages", () => {
  test("should create a test page", async ({ page }) => {
    await page.goto("/admin/pages/new");
    await page.locator("#title").fill("SEO Test Page");
    await page.locator("#description").fill("A test page for SEO analysis");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    expect(fs.existsSync(testPageFile)).toBeTruthy();
  });

  test("should show the SEO Check button on the edit page", async ({
    page,
  }) => {
    await page.goto(`/admin/pages/${testPageSlug}`);
    await expect(page.locator("#seo-btn")).toBeVisible();
    await expect(page.locator("#seo-btn")).toContainText("SEO Check");
  });

  test("should open the SEO modal and display results for a page", async ({
    page,
  }) => {
    await page.goto(`/admin/pages/${testPageSlug}`);
    await page.locator("#seo-btn").click();

    const modal = page.locator("#seo-modal");
    await expect(modal).toBeVisible();
    await expect(modal.locator(".animate-spin")).toBeHidden({ timeout: 10000 });

    // All check names should be present
    for (const name of seoCheckNames) {
      await expect(
        modal.locator(".font-medium", { hasText: name }),
      ).toBeVisible();
    }

    // Summary should be visible
    await expect(modal.locator("text=/\\d+ passed/")).toBeVisible();
    await expect(modal.locator("text=/\\d+ failed/")).toBeVisible();
  });

  test("should return correct data from the pages SEO API endpoint", async ({
    request,
  }) => {
    const resp = await request.get(`/admin/pages/${testPageSlug}/seo`);
    expect(resp.status()).toBe(200);

    const data = await resp.json();
    expect(data.checks).toHaveLength(9);
    expect(data.summary.passed + data.summary.failed + data.summary.info).toBe(
      9,
    );
  });

  test("should return 404 for SEO check on non-existent page", async ({
    request,
  }) => {
    const resp = await request.get("/admin/pages/this-page-does-not-exist/seo");
    expect(resp.status()).toBe(404);
    const data = await resp.json();
    expect(data.error).toBeTruthy();
  });

  test("should delete the test page", async ({ page }) => {
    await page.goto(`/admin/pages/${testPageSlug}`);
    await page.locator("#delete-btn").click();
    await page.locator("#confirm-accept").click();
    await expect(page.locator(".alert-success")).toBeVisible();
    expect(fs.existsSync(testPageFile)).toBeFalsy();
  });
});
