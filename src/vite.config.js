import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "_site",
    rollupOptions: {
      input: {
        bundle: "src/assets/js/main.js",
        main: "src/assets/css/input.css", // CSS entry point
      },
      output: {
        entryFileNames: "assets/js/[name].js",
        assetFileNames: "assets/css/[name].css",
      },
    },
    copyPublicDir: false,
  },
});
