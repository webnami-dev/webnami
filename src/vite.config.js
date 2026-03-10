import { readFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const config = JSON.parse(readFileSync("src/_data/config.json", "utf-8"));
const { theme } = config;

export default defineConfig({
  resolve: {
    alias: {
      "@palettes": resolve("palettes"),
    },
  },
  plugins: [tailwindcss()],
  build: {
    outDir: "_site",
    rollupOptions: {
      input: {
        bundle: `themes/${theme}/assets/js/main.js`,
        main: `themes/${theme}/assets/css/input.css`, // CSS entry point
      },
      output: {
        entryFileNames: "assets/js/[name].js",
        assetFileNames: "assets/css/[name].css",
      },
    },
    copyPublicDir: false,
  },
});
