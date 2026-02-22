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

/** Expand a collapsed settings section by its label text and wait for content to appear */
async function expandSection(page, labelText) {
  await page.locator(`button:has-text("${labelText}")`).click();
}

test.describe("Settings Page", () => {
  test("should render the main settings fields", async ({ page }) => {
    await page.goto("/admin/settings");
    await expect(page.locator("#blogName")).toBeVisible();
    await expect(page.locator("#postsPerPage")).toBeVisible();
    await expect(page.locator("#homepageHeading")).toBeVisible();
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
    await expandSection(page, "Site Settings");
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

  test("should render existing social links", async ({ page }) => {
    await page.goto("/admin/settings");
    const config = readConfig();
    const rows = page.locator(".social-link-row");
    await expect(rows).toHaveCount(config.footer.socialLinks.length);
  });

  test("should edit a social link href, save, and persist", async ({
    page,
  }) => {
    await page.goto("/admin/settings");
    await expandSection(page, "Social Links");
    // Wait for the collapsed section to fully open
    await page
      .locator(".social-link-href")
      .first()
      .waitFor({ state: "visible" });

    const firstRow = page.locator(".social-link-row").first();
    const href = "https://github.com/testuser";
    await firstRow.locator(".social-link-href").fill(href);

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("networkidle");

    await expect(page.locator(".alert-success")).toBeVisible();

    const config = readConfig();
    expect(config.footer.socialLinks[0].href).toBe(href);
  });
});
