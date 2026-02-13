import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  root: "admin/assets",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        admin: "admin/assets/js/admin.js",
        newPage: "admin/assets/js/new-page.js",
        page: "admin/assets/js/page.js",
        newPost: "admin/assets/js/new-post.js",
        post: "admin/assets/js/post.js",
        main: "admin/assets/css/admin.css",
      },
      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: "css/[name].css",
      },
    },
  },
});
