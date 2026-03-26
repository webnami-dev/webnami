import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 0,
  workers: 1,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
  webServer: {
    command: "node ../packages/admin/app.js",
    cwd: "./sandbox",
    port: 3000,
    timeout: 60000,
    reuseExistingServer: !process.env.CI,
  },
});
