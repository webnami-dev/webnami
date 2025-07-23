export default {
  build: {
    outDir: "./out/assets/js",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        bundle: "./src/assets/js/main.js",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
    copyPublicDir: false,
  },
};
