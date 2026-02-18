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
    await expect(page.locator("#siteName")).toHaveValue(config.site.name);
    await expect(page.locator("#siteUrl")).toHaveValue(config.site.url);
    await expect(page.locator("#postsPerPage")).toHaveValue(
      String(config.postsPerPage),
    );
    await expect(page.locator("#homepageHeading")).toHaveValue(
      config.homepage.heading,
    );
    await expect(page.locator("#homepageTitle")).toHaveValue(
      config.homepage.metadata.title,
    );
    await expect(page.locator("#homepageDescription")).toHaveValue(
      config.homepage.metadata.description,
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
    await page.locator("#siteName").fill("Test Site Name");
    await page.locator("#homepageHeading").fill("Test Heading");

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("networkidle");

    await expect(page.locator(".alert-success")).toBeVisible();
    await expect(page.locator(".alert-success")).toContainText(
      "Settings saved successfully",
    );

    const config = readConfig();
    expect(config.site.name).toBe("Test Site Name");
    expect(config.homepage.heading).toBe("Test Heading");

    // Verify values persist on reload
    await page.goto("/admin/settings");
    await expect(page.locator("#siteName")).toHaveValue("Test Site Name");
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

  test("should render existing link groups", async ({ page }) => {
    await page.goto("/admin/settings");
    const config = readConfig();
    const groups = page.locator(".link-group");
    await expect(groups).toHaveCount(config.footer.linkGroups.length);
  });

  test("should add a link group with links, save, and persist", async ({
    page,
  }) => {
    await page.goto("/admin/settings");
    const initialCount = await page.locator(".link-group").count();

    await page.locator("#add-link-group").click();
    await expect(page.locator(".link-group")).toHaveCount(initialCount + 1);

    const newGroup = page.locator(".link-group").last();
    await newGroup.locator(".group-title").fill("Resources");
    await newGroup.locator(".add-group-link").click();

    const newLink = newGroup.locator(".group-link-row").last();
    await newLink.locator(".group-link-name").fill("Docs");
    await newLink.locator(".group-link-href").fill("/docs");

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("networkidle");

    const config = readConfig();
    expect(config.footer.linkGroups.length).toBe(initialCount + 1);
    const resourcesGroup = config.footer.linkGroups.find(
      (g) => g.title === "Resources",
    );
    expect(resourcesGroup).toBeTruthy();
    expect(resourcesGroup.links[0].name).toBe("Docs");
  });
});
