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

  test("should create a new page via the form and show a success alert", async ({ page }) => {
    await page.goto("/admin/pages/new");
    await page.locator("#title").fill("Playwright Test Page");
    await page.locator("#description").fill("A test page created by Playwright");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText("Page created successfully");
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

  test("should update a page via the form and show a success alert", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await page.locator("#title").fill("Updated Test Page");
    await page.locator("#description").fill("Updated description");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText("Page updated successfully");

    const fileContent = fs.readFileSync(testFile, "utf-8");
    expect(fileContent).toContain("Updated Test Page");
  });

  test("should reflect updated title in edit form", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Updated Test Page");
  });

  test("should delete a page via the UI and show a success alert", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await page.locator("#delete-btn").click();

    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await expect(page.locator("#confirm-dialog")).toContainText("Are you sure you want to delete this page?");
    await page.locator("#confirm-accept").click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText("Page deleted successfully");
    expect(fs.existsSync(testFile)).toBeFalsy();
  });

  test("should no longer show the deleted page in the list", async ({ page }) => {
    await page.goto("/admin/pages");
    await expect(page.locator(`a[href="/admin/pages/${testSlug}"]`)).toHaveCount(0);
  });

  test("should reject creating a page with reserved slug 'admin'", async ({ request }) => {
    const resp = await request.post("/admin/pages/new", {
      data: {
        title: "Admin",
        description: "This should be rejected",
        content: "Reserved slug test.",
      },
    });
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("reserved");
    expect(fs.existsSync(path.join(pagesDir, "admin.md"))).toBeFalsy();
  });

  test("should reject creating a page with reserved slug 'api'", async ({ request }) => {
    const resp = await request.post("/admin/pages/new", {
      data: {
        title: "API",
        description: "This should be rejected",
        content: "Reserved slug test.",
      },
    });
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("reserved");
    expect(fs.existsSync(path.join(pagesDir, "api.md"))).toBeFalsy();
  });
});
