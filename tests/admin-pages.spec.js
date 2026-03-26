import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const pagesDir = path.resolve("sandbox/content/pages");
const testSlug = "playwright-test-page";
const testDir = path.join(pagesDir, testSlug);
const testFile = path.join(testDir, "index.md");

test.afterAll(() => {
  if (fs.existsSync(testDir)) fs.rmSync(testDir, { recursive: true });
});

test.describe("Pages CRUD", () => {
  test.describe.configure({ mode: "serial" });

  test("should show the pages list page", async ({ page }) => {
    await page.goto("/admin/pages");
    await expect(page.locator("h1", { hasText: "Pages" })).toBeVisible();
  });

  test("should create a new page and show a success alert", async ({
    page,
  }) => {
    await page.goto("/admin/pages");
    await page.getByRole("button", { name: "New Page" }).click();
    await page.waitForURL("**/admin/pages/draft-page-*");
    await expect(page.locator("#title")).toBeVisible();
    await page.locator("#title").fill("Playwright Test Page");
    await page.getByRole("button", { name: "Save Draft" }).click();
    await expect(page.locator(".alert-success")).toBeVisible();
    await page.getByRole("button", { name: "Publish" }).click();
    await page.waitForURL(`**/admin/pages/${testSlug}`);
    await expect(
      page.locator(".alert-success", {
        hasText: "Page published successfully",
      }),
    ).toBeVisible();
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should show the created page in the list", async ({ page }) => {
    await page.goto("/admin/pages");
    await expect(
      page.locator(`a[href="/admin/pages/${testSlug}"]`),
    ).toBeVisible();
  });

  test("should reject publishing a duplicate slug via the UI", async ({
    page,
  }) => {
    await page.goto("/admin/pages");
    await page.getByRole("button", { name: "New Page" }).click();
    await page.waitForURL("**/admin/pages/draft-page-*");
    const draftSlug = page.url().split("/admin/pages/")[1];
    await page.locator("#title").fill("Playwright Test Page");
    await page.getByRole("button", { name: "Save Draft" }).click();
    await expect(page.locator(".alert-success")).toBeVisible();
    await page.getByRole("button", { name: "Publish" }).click();
    await expect(page.locator(".alert-error")).toBeVisible();
    await expect(page.locator(".alert-error")).toContainText("already exists");
    await page.request.delete(`/api/pages/${draftSlug}`);
  });

  test("should show the edit form with page data", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Playwright Test Page");
  });

  test("should update page title", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await page.locator("#title").fill("Updated Test Page");
    await page.getByRole("button", { name: "Save Changes" }).click();
    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Page saved successfully",
    );
    const fileContent = fs.readFileSync(testFile, "utf-8");
    expect(fileContent).toContain("Updated Test Page");
  });

  test("should reflect updated title", async ({ page }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Updated Test Page");
  });

  test("should reject publishing a draft with a reserved slug via API", async ({
    request,
  }) => {
    const createRes = await request.post("/api/pages");
    const { slug: draftSlug } = await createRes.json();
    await request.put(`/api/pages/${draftSlug}`, {
      data: { title: "Admin", content: "" },
    });
    const resp = await request.post(`/api/pages/${draftSlug}/publish`);
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("reserved");
    await request.delete(`/api/pages/${draftSlug}`);
  });

  test("should reject publishing a draft with a duplicate slug via API", async ({
    request,
  }) => {
    // Create a collision page
    const createCollision = await request.post("/api/pages");
    const { slug: collisionDraft } = await createCollision.json();
    await request.put(`/api/pages/${collisionDraft}`, {
      data: { title: "Collision Page", content: "" },
    });
    const publishRes = await request.post(
      `/api/pages/${collisionDraft}/publish`,
    );
    const { slug: collisionSlug } = await publishRes.json();

    // Try to publish a duplicate
    const createDuplicate = await request.post("/api/pages");
    const { slug: duplicateDraft } = await createDuplicate.json();
    await request.put(`/api/pages/${duplicateDraft}`, {
      data: { title: "Collision Page", content: "" },
    });
    const resp = await request.post(`/api/pages/${duplicateDraft}/publish`);
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("already exists");

    // Clean up
    await request.delete(`/api/pages/${duplicateDraft}`);
    await request.delete(`/api/pages/${collisionSlug}`);
  });

  test("should not delete page when clicking Cancel in confirm dialog", async ({
    page,
  }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await page.locator("#delete-btn").click();
    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await page.locator("#confirm-cancel").click();
    await expect(page.locator("#confirm-dialog")).toBeHidden();
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should not delete page when clicking backdrop of confirm dialog", async ({
    page,
  }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await page.locator("#delete-btn").click();
    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await page
      .locator("#confirm-dialog .bg-black\\/50")
      .click({ position: { x: 10, y: 10 } });
    await expect(page.locator("#confirm-dialog")).toBeHidden();
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should delete a page via the UI and show a success alert", async ({
    page,
  }) => {
    await page.goto(`/admin/pages/${testSlug}`);
    await page.locator("#delete-btn").click();
    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await expect(page.locator("#confirm-dialog")).toContainText(
      "Are you sure you want to delete this page?",
    );
    await page.locator("#confirm-accept").click();
    await page.waitForURL("**/admin/pages");
    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Page deleted successfully",
    );
    expect(fs.existsSync(testFile)).toBeFalsy();
  });

  test("should no longer show the deleted page in the list", async ({
    page,
  }) => {
    await page.goto("/admin/pages");
    await expect(
      page.locator(`a[href="/admin/pages/${testSlug}"]`),
    ).toHaveCount(0);
  });
});
