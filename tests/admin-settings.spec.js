import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const configPath = path.resolve("src/_data/config.json");

function readConfig() {
  return JSON.parse(fs.readFileSync(configPath, "utf-8"));
}

// Save original config before tests and restore after
let originalConfig;
test.beforeAll(() => {
  originalConfig = fs.readFileSync(configPath, "utf-8");
});
test.afterAll(() => {
  fs.writeFileSync(configPath, originalConfig);
});

test.describe("Settings Page", () => {
  test("should render all three sections", async ({ page }) => {
    await page.goto("/admin/settings");
    await expect(page.locator("h2", { hasText: "General" })).toBeVisible();
    await expect(page.locator("h2", { hasText: "Navbar" })).toBeVisible();
    await expect(page.locator("h2", { hasText: "Footer" })).toBeVisible();
  });

  test("should populate general fields with current config values", async ({
    page,
  }) => {
    await page.goto("/admin/settings");
    const config = readConfig();
    await expect(page.locator("#blogName")).toHaveValue(config.site.name);
    await expect(page.locator("#blogUrl")).toHaveValue(config.site.url);
    await expect(page.locator("#postsPerPage")).toHaveValue(
      String(config.postsPerPage),
    );
    await expect(page.locator("#homepageHeading")).toHaveValue(
      config.homepage.heading,
    );
  });

  test("should show image dropdowns for logo, favicon, and OG image", async ({
    page,
  }) => {
    await page.goto("/admin/settings");
    for (const id of ["#siteLogo", "#siteFavicon", "#homepageImg"]) {
      const select = page.locator(id);
      await expect(select).toBeVisible();
      const tagName = await select.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe("select");
      const optionCount = await select.locator("option").count();
      expect(optionCount).toBeGreaterThan(0);
    }
  });

  test("should save general settings, show a success alert, and persist on reload", async ({
    page,
  }) => {
    await page.goto("/admin/settings");
    await page.locator("#blogName").fill("Test Blog Name");
    await page.locator("#homepageHeading").fill("Test Heading");

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("networkidle");

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Settings saved successfully",
    );

    const config = readConfig();
    expect(config.site.name).toBe("Test Blog Name");
    expect(config.homepage.heading).toBe("Test Heading");

    // Verify values persist on reload
    await page.goto("/admin/settings");
    await expect(page.locator("#blogName")).toHaveValue("Test Blog Name");
    await expect(page.locator("#homepageHeading")).toHaveValue("Test Heading");
  });

  test("should render existing navbar links", async ({ page }) => {
    await page.goto("/admin/settings");
    const config = readConfig();
    const rows = page.locator(".navbar-link-row");
    await expect(rows).toHaveCount(config.navbar.links.length);
  });

  test("should add a navbar link, save, and persist", async ({ page }) => {
    await page.goto("/admin/settings");
    const initialCount = await page.locator(".navbar-link-row").count();

    await page.locator("#add-navbar-link").click();
    await expect(page.locator(".navbar-link-row")).toHaveCount(
      initialCount + 1,
    );

    const newRow = page.locator(".navbar-link-row").last();
    await newRow.locator(".navbar-link-name").fill("Blog");
    await newRow.locator(".navbar-link-href").fill("/blog");

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("networkidle");

    const config = readConfig();
    const blogLink = config.navbar.links.find((l) => l.name === "Blog");
    expect(blogLink).toBeTruthy();
    expect(blogLink.href).toBe("/blog");
  });

  test("should remove a navbar link, save, and persist", async ({ page }) => {
    await page.goto("/admin/settings");
    const initialCount = await page.locator(".navbar-link-row").count();
    expect(initialCount).toBeGreaterThan(0);

    await page
      .locator(".navbar-link-row")
      .first()
      .locator(".remove-row")
      .click();
    await expect(page.locator(".navbar-link-row")).toHaveCount(
      initialCount - 1,
    );

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("networkidle");

    const config = readConfig();
    expect(config.navbar.links.length).toBe(initialCount - 1);
  });

  test("should render existing social links", async ({ page }) => {
    await page.goto("/admin/settings");
    const config = readConfig();
    const rows = page.locator(".social-link-row");
    await expect(rows).toHaveCount(config.footer.socialLinks.length);
  });

  test("should add a social link, save, and persist", async ({ page }) => {
    await page.goto("/admin/settings");
    const initialCount = await page.locator(".social-link-row").count();

    await page.locator("#add-social-link").click();
    const newRow = page.locator(".social-link-row").last();
    await newRow.locator(".social-link-name").fill("github");
    await newRow.locator(".social-link-href").fill("https://github.com");

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("networkidle");

    const config = readConfig();
    expect(config.footer.socialLinks.length).toBe(initialCount + 1);
    const ghLink = config.footer.socialLinks.find((l) => l.name === "github");
    expect(ghLink).toBeTruthy();
  });

  test("should render existing footer links", async ({ page }) => {
    await page.goto("/admin/settings");
    const config = readConfig();
    const rows = page.locator(".footer-link-row");
    await expect(rows).toHaveCount(config.footer.links.length);
  });

  test("should add a footer link, save, and persist", async ({ page }) => {
    await page.goto("/admin/settings");
    const initialCount = await page.locator(".footer-link-row").count();

    await page.locator("#add-footer-link").click();
    await expect(page.locator(".footer-link-row")).toHaveCount(
      initialCount + 1,
    );

    const newRow = page.locator(".footer-link-row").last();
    await newRow.locator(".footer-link-name").fill("Docs");
    await newRow.locator(".footer-link-href").fill("/docs");

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("networkidle");

    const config = readConfig();
    expect(config.footer.links.length).toBe(initialCount + 1);
    const docsLink = config.footer.links.find((l) => l.name === "Docs");
    expect(docsLink).toBeTruthy();
    expect(docsLink.href).toBe("/docs");
  });
});
