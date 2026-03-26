import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const postsDir = path.resolve("sandbox/content/posts");
const testSlug = "playwright-test-post";
const testDir = path.join(postsDir, testSlug);
const testFile = path.join(testDir, "index.md");

test.afterAll(() => {
  if (fs.existsSync(testDir)) fs.rmSync(testDir, { recursive: true });
});

test.describe("Posts CRUD", () => {
  test.describe.configure({ mode: "serial" });

  test("should show the posts list page", async ({ page }) => {
    await page.goto("/admin/posts");
    await expect(page.locator("h1", { hasText: "Posts" })).toBeVisible();
  });

  test("should create a new post and show a success alert", async ({
    page,
  }) => {
    await page.goto("/admin/posts");
    await page.getByRole("button", { name: "New Post" }).click();
    await page.waitForURL("**/admin/posts/draft-post-*");
    await expect(page.locator("#title")).toBeVisible();
    await expect(page.locator("#category")).toBeVisible();
    await expect(page.locator("#tags")).toBeVisible();
    await page.locator("#title").fill("Playwright Test Post");
    await page.locator("#tags").fill("test, playwright");
    await page.locator("#category").fill("testing");
    await page.getByRole("button", { name: "Save Draft" }).click();
    await expect(page.locator(".alert-success")).toBeVisible();
    await page.getByRole("button", { name: "Publish" }).click();
    await page.waitForURL(`**/admin/posts/${testSlug}`);
    await expect(
      page.locator(".alert-success", {
        hasText: "Post published successfully",
      }),
    ).toBeVisible();
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should show the created post in the list", async ({ page }) => {
    await page.goto("/admin/posts");
    await expect(
      page.locator(`a[href="/admin/posts/${testSlug}"]`),
    ).toBeVisible();
  });

  test("should reject publishing a duplicate slug via the UI", async ({
    page,
  }) => {
    await page.goto("/admin/posts");
    await page.getByRole("button", { name: "New Post" }).click();
    await page.waitForURL("**/admin/posts/draft-post-*");
    const draftSlug = page.url().split("/admin/posts/")[1];
    await page.locator("#title").fill("Playwright Test Post");
    await page.getByRole("button", { name: "Save Draft" }).click();
    await expect(page.locator(".alert-success")).toBeVisible();
    await page.getByRole("button", { name: "Publish" }).click();
    await expect(page.locator(".alert-error")).toBeVisible();
    await expect(page.locator(".alert-error")).toContainText("already exists");
    await page.request.delete(`/api/posts/${draftSlug}`);
  });

  test("should show the edit form with post data", async ({ page }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Playwright Test Post");
    await expect(page.locator("#category")).toHaveValue("testing");
  });

  test("should update post title", async ({ page }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await page.locator("#title").fill("Updated Test Post");
    await page.getByRole("button", { name: "Save Changes" }).click();
    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Post saved successfully",
    );
    const fileContent = fs.readFileSync(testFile, "utf-8");
    expect(fileContent).toContain("Updated Test Post");
  });

  test("should reflect updated title", async ({ page }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Updated Test Post");
  });

  test("should reject publishing a draft with a reserved slug via API", async ({
    request,
  }) => {
    const createRes = await request.post("/api/posts");
    const { slug: draftSlug } = await createRes.json();
    await request.put(`/api/posts/${draftSlug}`, {
      data: { title: "Admin", tags: "", category: "", content: "" },
    });
    const resp = await request.post(`/api/posts/${draftSlug}/publish`);
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("reserved");
    await request.delete(`/api/posts/${draftSlug}`);
  });

  test("should reject publishing a draft with a duplicate slug via API", async ({
    request,
  }) => {
    // Create a collision post
    const createCollision = await request.post("/api/posts");
    const { slug: collisionDraft } = await createCollision.json();
    await request.put(`/api/posts/${collisionDraft}`, {
      data: { title: "Collision Post", tags: "", category: "", content: "" },
    });
    const publishRes = await request.post(
      `/api/posts/${collisionDraft}/publish`,
    );
    const { slug: collisionSlug } = await publishRes.json();

    // Try to publish a duplicate
    const createDuplicate = await request.post("/api/posts");
    const { slug: duplicateDraft } = await createDuplicate.json();
    await request.put(`/api/posts/${duplicateDraft}`, {
      data: { title: "Collision Post", tags: "", category: "", content: "" },
    });
    const resp = await request.post(`/api/posts/${duplicateDraft}/publish`);
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("already exists");

    // Clean up
    await request.delete(`/api/posts/${duplicateDraft}`);
    await request.delete(`/api/posts/${collisionSlug}`);
  });

  test("should not delete post when clicking Cancel in confirm dialog", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await page.locator("#delete-btn").click();
    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await page.locator("#confirm-cancel").click();
    await expect(page.locator("#confirm-dialog")).toBeHidden();
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should not delete post when clicking backdrop of confirm dialog", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await page.locator("#delete-btn").click();
    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await page
      .locator("#confirm-dialog .bg-black\\/50")
      .click({ position: { x: 10, y: 10 } });
    await expect(page.locator("#confirm-dialog")).toBeHidden();
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should delete a post via the UI and show a success alert", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await page.locator("#delete-btn").click();
    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await expect(page.locator("#confirm-dialog")).toContainText(
      "Are you sure you want to delete this post?",
    );
    await page.locator("#confirm-accept").click();
    await page.waitForURL("**/admin/posts");
    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Post deleted successfully",
    );
    expect(fs.existsSync(testFile)).toBeFalsy();
  });

  test("should no longer show the deleted post in the list", async ({
    page,
  }) => {
    await page.goto("/admin/posts");
    await expect(
      page.locator(`a[href="/admin/posts/${testSlug}"]`),
    ).toHaveCount(0);
  });
});
