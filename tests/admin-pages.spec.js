import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const pagesDir = path.resolve("pages");
const testSlug = "playwright-test-page";
const testFile = path.join(pagesDir, `${testSlug}.md`);

// Clean up test page after all tests
test.afterAll(() => {
  if (fs.existsSync(testFile)) {
    fs.unlinkSync(testFile);
  }
});

test.describe("Pages CRUD", () => {
  test("should show the pages list page", async ({ page }) => {
    await page.goto("/admin/pages");
    await expect(page.locator("h1", { hasText: "Pages" })).toBeVisible();
  });

  test("should show the new page form", async ({ page }) => {
    await page.goto("/admin/pages/new");
    await expect(page.locator("h1", { hasText: "New Page" })).toBeVisible();
    await expect(page.locator("#title")).toBeVisible();
  });

  test("should create a new page via API", async ({ request }) => {
    const resp = await request.post("/admin/pages/new", {
      data: {
        title: "Playwright Test Page",
        description: "A test page created by Playwright",
        content: "This is test page content.",
      },
    });
    expect(resp.ok()).toBeTruthy();
    const data = await resp.json();
    expect(data.slug).toBe(testSlug);
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should show the created page in the list", async ({ page }) => {
    await page.goto("/admin/pages");
    await expect(page.locator(`a[href="/admin/pages/${testSlug}"]`)).toBeVisible();
  });

  test("should show the edit form with page data", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Playwright Test Page");
    await expect(page.locator("#description")).toHaveValue("A test page created by Playwright");
  });

  test("should update a page via API", async ({ request }) => {
    const resp = await request.put(`/admin/pages/${testSlug}`, {
      data: {
        title: "Updated Test Page",
        description: "Updated description",
        content: "Updated page content.",
      },
    });
    expect(resp.ok()).toBeTruthy();

    const fileContent = fs.readFileSync(testFile, "utf-8");
    expect(fileContent).toContain("Updated Test Page");
  });

  test("should reflect updated title in edit form", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Updated Test Page");
  });

  test("should delete a page via API", async ({ request }) => {
    const resp = await request.delete(`/admin/pages/${testSlug}`);
    expect(resp.ok()).toBeTruthy();
    expect(fs.existsSync(testFile)).toBeFalsy();
  });

  test("should no longer show the deleted page in the list", async ({ page }) => {
    await page.goto("/admin/pages");
    await expect(page.locator(`a[href="/admin/pages/${testSlug}"]`)).toHaveCount(0);
  });
});
