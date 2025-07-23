import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import configColorsPlugin from "./src/vite-plugin/config-colors.js";

export default defineConfig({
  plugins: [configColorsPlugin(), tailwindcss()],
  build: {
    outDir: "./out",
    rollupOptions: {
      input: {
        bundle: "./src/assets/js/main.js",
        main: "./src/assets/css/input.css", // CSS entry point
      },
      output: {
        entryFileNames: "assets/js/[name].js",
        assetFileNames: "assets/css/[name].css",
      },
    },
    copyPublicDir: false,
  },
});
