import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { resolve } from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const assetsDir = resolve(__dirname, "../assets");

export default defineConfig({
  plugins: [tailwindcss()],
  root: assetsDir,
  build: {
    outDir: resolve(__dirname, "../dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        admin: resolve(assetsDir, "js/admin.js"),
        newPage: resolve(assetsDir, "js/new-page.js"),
        page: resolve(assetsDir, "js/page.js"),
        newPost: resolve(assetsDir, "js/new-post.js"),
        post: resolve(assetsDir, "js/post.js"),
        settings: resolve(assetsDir, "js/settings.js"),
        main: resolve(assetsDir, "css/admin.css"),
      },
      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: "css/[name].css",
      },
    },
  },
});
