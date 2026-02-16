import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const pagesDir = path.resolve("pages");
const testSlug = "playwright-test-page";
const renamedSlug = "updated-test-page";
const testFile = path.join(pagesDir, `${testSlug}.md`);
const renamedFile = path.join(pagesDir, `${renamedSlug}.md`);

// Clean up test pages after all tests
test.afterAll(() => {
  if (fs.existsSync(testFile)) fs.unlinkSync(testFile);
  if (fs.existsSync(renamedFile)) fs.unlinkSync(renamedFile);
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

  test("should create a new page via the form and show a success alert", async ({
    page,
  }) => {
    await page.goto("/admin/pages/new");
    await page.locator("#title").fill("Playwright Test Page");
    await page
      .locator("#description")
      .fill("A test page created by Playwright");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Page created successfully",
    );
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should show the created page in the list", async ({ page }) => {
    await page.goto("/admin/pages");
    await expect(
      page.locator(`a[href="/admin/pages/${testSlug}"]`),
    ).toBeVisible();
  });

  test("should reject creating a page with a duplicate slug via the UI", async ({
    page,
  }) => {
    await page.goto("/admin/pages/new");
    await page.locator("#title").fill("Playwright Test Page");
    await page.locator("#description").fill("Duplicate page attempt");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-error")).toBeVisible();
    await expect(page.locator(".alert-error")).toContainText("already exists");
  });

  test("should show the edit form with page data", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Playwright Test Page");
    await expect(page.locator("#description")).toHaveValue(
      "A test page created by Playwright",
    );
  });

  test("should rename file when title is updated", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await page.locator("#title").fill("Updated Test Page");
    await page.locator("#description").fill("Updated description");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Page updated successfully",
    );

    // Old file should be gone, new file should exist
    expect(fs.existsSync(testFile)).toBeFalsy();
    expect(fs.existsSync(renamedFile)).toBeTruthy();

    const fileContent = fs.readFileSync(renamedFile, "utf-8");
    expect(fileContent).toContain("Updated Test Page");
  });

  test("should reflect updated title at the new slug", async ({ page }) => {
    await page.goto(`/admin/pages/${renamedSlug}`);
    await expect(page.locator("#title")).toHaveValue("Updated Test Page");
  });

  test("should reject renaming to a reserved slug via API", async ({
    request,
  }) => {
    const resp = await request.put(`/admin/pages/${renamedSlug}`, {
      data: {
        title: "Admin",
        description: "Trying reserved slug",
        content: "Reserved slug rename test.",
      },
    });
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("reserved");
    // Original file should still exist
    expect(fs.existsSync(renamedFile)).toBeTruthy();
  });

  test("should reject renaming to a duplicate slug via API", async ({
    request,
  }) => {
    // Create a second page to collide with
    await request.post("/admin/pages/new", {
      data: {
        title: "Collision Page",
        description: "Temporary",
        content: "Temp.",
      },
    });

    const resp = await request.put(`/admin/pages/${renamedSlug}`, {
      data: {
        title: "Collision Page",
        description: "Trying duplicate slug",
        content: "Duplicate slug rename test.",
      },
    });
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("already exists");
    // Original file should still exist unchanged
    expect(fs.existsSync(renamedFile)).toBeTruthy();

    // Clean up collision page
    const collisionFile = path.join(pagesDir, "collision-page.md");
    if (fs.existsSync(collisionFile)) fs.unlinkSync(collisionFile);
  });

  test("should not delete page when clicking Cancel in confirm dialog", async ({
    page,
  }) => {
    await page.goto(`/admin/pages/${renamedSlug}`);
    await page.locator("#delete-btn").click();

    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await page.locator("#confirm-cancel").click();

    await expect(page.locator("#confirm-dialog")).toBeHidden();
    expect(fs.existsSync(renamedFile)).toBeTruthy();
  });

  test("should not delete page when clicking backdrop of confirm dialog", async ({
    page,
  }) => {
    await page.goto(`/admin/pages/${renamedSlug}`);
    await page.locator("#delete-btn").click();

    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await page
      .locator("#confirm-dialog .bg-black\\/50")
      .click({ position: { x: 10, y: 10 } });

    await expect(page.locator("#confirm-dialog")).toBeHidden();
    expect(fs.existsSync(renamedFile)).toBeTruthy();
  });

  test("should delete a page via the UI and show a success alert", async ({
    page,
  }) => {
    await page.goto(`/admin/pages/${renamedSlug}`);
    await page.locator("#delete-btn").click();

    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await expect(page.locator("#confirm-dialog")).toContainText(
      "Are you sure you want to delete this page?",
    );
    await page.locator("#confirm-accept").click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Page deleted successfully",
    );
    expect(fs.existsSync(renamedFile)).toBeFalsy();
  });

  test("should no longer show the deleted page in the list", async ({
    page,
  }) => {
    await page.goto("/admin/pages");
    await expect(
      page.locator(`a[href="/admin/pages/${renamedSlug}"]`),
    ).toHaveCount(0);
  });

  test("should reject creating a page with reserved slug 'admin'", async ({
    request,
  }) => {
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

  test("should reject creating a page with reserved slug 'api'", async ({
    request,
  }) => {
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
