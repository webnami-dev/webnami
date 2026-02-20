import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const postsDir = path.resolve("posts");
const testSlug = "playwright-test-post";
const renamedSlug = "updated-test-post";
const testFile = path.join(postsDir, `${testSlug}.md`);
const renamedFile = path.join(postsDir, `${renamedSlug}.md`);

// Clean up test posts after all tests
test.afterAll(() => {
  if (fs.existsSync(testFile)) fs.unlinkSync(testFile);
  if (fs.existsSync(renamedFile)) fs.unlinkSync(renamedFile);
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

  test("should create a new post via the form and show a success alert", async ({
    page,
  }) => {
    await page.goto("/admin/posts/new");
    await page.locator("#title").fill("Playwright Test Post");
    await page
      .locator("#description")
      .fill("A test post created by Playwright");
    await page.locator("#tags").fill("test, playwright");
    await page.locator("#category").fill("testing");
    await page.locator("#date").evaluate((el) => {
      el.removeAttribute("readonly");
    });
    await page.locator("#date").fill("2025-01-01");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Post created successfully",
    );
    expect(fs.existsSync(testFile)).toBeTruthy();
  });

  test("should show the created post in the list", async ({ page }) => {
    await page.goto("/admin/posts");
    await expect(
      page.locator(`a[href="/admin/posts/${testSlug}"]`),
    ).toBeVisible();
  });

  test("should reject creating a post with a duplicate slug via the UI", async ({
    page,
  }) => {
    await page.goto("/admin/posts/new");
    await page.locator("#title").fill("Playwright Test Post");
    await page.locator("#description").fill("Duplicate post attempt");
    await page.locator("#tags").fill("test");
    await page.locator("#category").fill("testing");
    await page.locator("#date").evaluate((el) => {
      el.removeAttribute("readonly");
    });
    await page.locator("#date").fill("2025-01-01");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-error")).toBeVisible();
    await expect(page.locator(".alert-error")).toContainText("already exists");
  });

  test("should show the edit form with post data", async ({ page }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Playwright Test Post");
    await expect(page.locator("#category")).toHaveValue("testing");
  });

  test("should rename file when title is updated", async ({ page }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await page.locator("#title").fill("Updated Test Post");
    await page.locator("#description").fill("Updated description");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Post updated successfully",
    );

    // Old file should be gone, new file should exist
    expect(fs.existsSync(testFile)).toBeFalsy();
    expect(fs.existsSync(renamedFile)).toBeTruthy();

    const fileContent = fs.readFileSync(renamedFile, "utf-8");
    expect(fileContent).toContain("Updated Test Post");
  });

  test("should reflect updated title at the new slug", async ({ page }) => {
    await page.goto(`/admin/posts/${renamedSlug}`);
    await expect(page.locator("#title")).toHaveValue("Updated Test Post");
  });

  test("should reject renaming to a reserved slug via API", async ({
    request,
  }) => {
    const resp = await request.put(`/admin/posts/${renamedSlug}`, {
      data: {
        title: "Admin",
        description: "Trying reserved slug",
        tags: "test",
        category: "testing",
        date: "2025-01-01",
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
    // Create a second post to collide with
    await request.post("/admin/posts/new", {
      data: {
        title: "Collision Post",
        description: "Temporary",
        tags: "test",
        category: "test",
        date: "2025-01-01",
        content: "Temp.",
      },
    });

    const resp = await request.put(`/admin/posts/${renamedSlug}`, {
      data: {
        title: "Collision Post",
        description: "Trying duplicate slug",
        tags: "test",
        category: "testing",
        date: "2025-01-01",
        content: "Duplicate slug rename test.",
      },
    });
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("already exists");
    // Original file should still exist unchanged
    expect(fs.existsSync(renamedFile)).toBeTruthy();

    // Clean up collision post
    const collisionFile = path.join(postsDir, "collision-post.md");
    if (fs.existsSync(collisionFile)) fs.unlinkSync(collisionFile);
  });

  test("should not delete post when clicking Cancel in confirm dialog", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${renamedSlug}`);
    await page.locator("#delete-btn").click();

    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await page.locator("#confirm-cancel").click();

    await expect(page.locator("#confirm-dialog")).toBeHidden();
    expect(fs.existsSync(renamedFile)).toBeTruthy();
  });

  test("should not delete post when clicking backdrop of confirm dialog", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${renamedSlug}`);
    await page.locator("#delete-btn").click();

    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await page
      .locator("#confirm-dialog .bg-black\\/50")
      .click({ position: { x: 10, y: 10 } });

    await expect(page.locator("#confirm-dialog")).toBeHidden();
    expect(fs.existsSync(renamedFile)).toBeTruthy();
  });

  test("should delete a post via the UI and show a success alert", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${renamedSlug}`);
    await page.locator("#delete-btn").click();

    await expect(page.locator("#confirm-dialog")).toBeVisible();
    await expect(page.locator("#confirm-dialog")).toContainText(
      "Are you sure you want to delete this post?",
    );
    await page.locator("#confirm-accept").click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Post deleted successfully",
    );
    expect(fs.existsSync(renamedFile)).toBeFalsy();
  });

  test("should no longer show the deleted post in the list", async ({
    page,
  }) => {
    await page.goto("/admin/posts");
    await expect(
      page.locator(`a[href="/admin/posts/${renamedSlug}"]`),
    ).toHaveCount(0);
  });

  test("should reject creating a post with reserved slug 'admin'", async ({
    request,
  }) => {
    const resp = await request.post("/admin/posts/new", {
      data: {
        title: "Admin",
        description: "This should be rejected",
        tags: "test",
        category: "test",
        date: "2025-01-01",
        content: "Reserved slug test.",
      },
    });
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("reserved");
    expect(fs.existsSync(path.join(postsDir, "admin.md"))).toBeFalsy();
  });

  test("should reject creating a post with reserved slug 'api'", async ({
    request,
  }) => {
    const resp = await request.post("/admin/posts/new", {
      data: {
        title: "API",
        description: "This should be rejected",
        tags: "test",
        category: "test",
        date: "2025-01-01",
        content: "Reserved slug test.",
      },
    });
    expect(resp.status()).toBe(400);
    const data = await resp.json();
    expect(data.error).toContain("reserved");
    expect(fs.existsSync(path.join(postsDir, "api.md"))).toBeFalsy();
  });
});
