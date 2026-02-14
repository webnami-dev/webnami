import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const postsDir = path.resolve("posts");
const testSlug = "playwright-test-post";
const testFile = path.join(postsDir, `${testSlug}.md`);

// Clean up test post after all tests
test.afterAll(() => {
  if (fs.existsSync(testFile)) {
    fs.unlinkSync(testFile);
  }
});

test.describe("Posts CRUD", () => {
  test("should show the posts list page", async ({ page }) => {
    await page.goto("/admin/posts");
    await expect(page.locator("h1", { hasText: "Posts" })).toBeVisible();
  });

  test("should show the new post form", async ({ page }) => {
    await page.goto("/admin/posts/new");
    await expect(page.locator("h1", { hasText: "New Post" })).toBeVisible();
    await expect(page.locator("#title")).toBeVisible();
    await expect(page.locator("#date")).toBeVisible();
  });

  test("should create a new post via API", async ({ request }) => {
    const resp = await request.post("/admin/posts/new", {
      data: {
        title: "Playwright Test Post",
        description: "A test post created by Playwright",
        tags: "test, playwright",
        category: "testing",
        author: "Tester",
        date: "2025-01-01",
        content: "This is test content for the Playwright E2E test.",
      },
    });
    expect(resp.ok()).toBeTruthy();
    const data = await resp.json();
    expect(data.slug).toBe(testSlug);
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should show the created post in the list", async ({ page }) => {
    await page.goto("/admin/posts");
    await expect(page.locator(`a[href="/admin/posts/${testSlug}"]`)).toBeVisible();
  });

  test("should show the edit form with post data", async ({ page }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Playwright Test Post");
    await expect(page.locator("#category")).toHaveValue("testing");
    await expect(page.locator("#author")).toHaveValue("Tester");
  });

  test("should update a post via API", async ({ request }) => {
    const resp = await request.put(`/admin/posts/${testSlug}`, {
      data: {
        title: "Updated Test Post",
        description: "Updated description",
        tags: "test, updated",
        category: "testing",
        author: "Tester",
        date: "2025-01-01",
        content: "Updated content.",
      },
    });
    expect(resp.ok()).toBeTruthy();

    const fileContent = fs.readFileSync(testFile, "utf-8");
    expect(fileContent).toContain("Updated Test Post");
  });

  test("should reflect updated title in edit form", async ({ page }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Updated Test Post");
  });

  test("should delete a post via API", async ({ request }) => {
    const resp = await request.delete(`/admin/posts/${testSlug}`);
    expect(resp.ok()).toBeTruthy();
    expect(fs.existsSync(testFile)).toBeFalsy();
  });

  test("should no longer show the deleted post in the list", async ({ page }) => {
    await page.goto("/admin/posts");
    await expect(page.locator(`a[href="/admin/posts/${testSlug}"]`)).toHaveCount(0);
  });
});
