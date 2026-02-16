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
    await page.locator("#author").fill("Tester");
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
    await page.locator("#author").fill("Tester");
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
    await expect(page.locator("#author")).toHaveValue("Tester");
  });

  test("should update a post via the form and show a success alert", async ({
    page,
  }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await page.locator("#title").fill("Updated Test Post");
    await page.locator("#description").fill("Updated description");
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Post updated successfully",
    );

    const fileContent = fs.readFileSync(testFile, "utf-8");
    expect(fileContent).toContain("Updated Test Post");
  });

  test("should reflect updated title in edit form", async ({ page }) => {
    await page.goto(`/admin/posts/${testSlug}`);
    await expect(page.locator("#title")).toHaveValue("Updated Test Post");
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

  test("should reject creating a post with reserved slug 'admin'", async ({
    request,
  }) => {
    const resp = await request.post("/admin/posts/new", {
      data: {
        title: "Admin",
        description: "This should be rejected",
        tags: "test",
        category: "test",
        author: "Tester",
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
        author: "Tester",
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
