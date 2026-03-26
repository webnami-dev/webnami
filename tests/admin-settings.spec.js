import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const configPath = path.resolve("sandbox/_metadata/config.json");

function readConfig() {
  return JSON.parse(fs.readFileSync(configPath, "utf-8"));
}

// Save original config before tests and restore after
let originalConfig;
test.beforeAll(() => {
  originalConfig = fs.readFileSync(configPath, "utf-8");
});
test.afterAll(async ({ request }) => {
  const original = JSON.parse(originalConfig);
  // Read current palette from theme CSS to avoid triggering palette-change restart
  const cssPath = path.resolve(
    `sandbox/themes/${original.theme}/assets/css/input.css`,
  );
  const css = fs.readFileSync(cssPath, "utf-8");
  const paletteMatch = css.match(/@import\s+["'][^"']*palette-(\w+)\.css["']/);
  const colorPalette = paletteMatch ? paletteMatch[1] : "Default";
  // Restore via API so it triggers a site rebuild with the original values
  await request.put("/admin/settings", {
    data: {
      blogName: original.site.name,
      blogUrl: original.site.url,
      homepageHeading: original.homepage.heading,
      colorPalette,
      socialLinks: JSON.stringify(original.footer.socialLinks || []),
    },
  });
});

test.describe("Settings Page", () => {
  test("should render the main settings fields", async ({ page }) => {
    await page.goto("/admin/settings");
    await expect(page.locator("#blogName")).toBeVisible();
    await expect(page.locator("#homepageHeading")).toBeVisible();
  });

  test("should populate general fields with current config values", async ({
    page,
  }) => {
    await page.goto("/admin/settings");
    const config = readConfig();
    await expect(page.locator("#blogName")).toHaveValue(config.site.name);
    await expect(page.locator("#homepageHeading")).toHaveValue(
      config.homepage.heading,
    );
    // blogUrl is inside the collapsed Advanced Settings section
    await expect(page.locator("#blogUrl")).toHaveValue(config.site.url);
  });

  test("should show color palette radio buttons", async ({ page }) => {
    await page.goto("/admin/settings");
    const radios = page.locator('input[name="colorPalette"]');
    await expect(radios).toHaveCount(await radios.count());
    const count = await radios.count();
    expect(count).toBeGreaterThan(0);
    // At least one should be checked
    const checked = page.locator('input[name="colorPalette"]:checked');
    await expect(checked).toHaveCount(1);
  });

  test("should save general settings, show a success alert, and persist on reload", async ({
    page,
  }) => {
    await page.goto("/admin/settings");
    await page.locator("#blogName").fill("Test Blog Name");
    await page.locator("#homepageHeading").fill("Test Heading");

    await page.locator('button[type="submit"]').click();
    await page.waitForURL("**/admin/settings");

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
    // Social links are always visible (no collapsible section)
    await page
      .locator(".social-link-href")
      .first()
      .waitFor({ state: "visible" });

    const firstRow = page.locator(".social-link-row").first();
    const href = "https://github.com/testuser";
    await firstRow.locator(".social-link-href").fill(href);

    await page.locator('button[type="submit"]').click();
    await page.waitForURL("**/admin/settings");

    await expect(page.locator(".alert-success")).toBeVisible();

    const config = readConfig();
    expect(config.footer.socialLinks[0].href).toBe(href);
  });
});
