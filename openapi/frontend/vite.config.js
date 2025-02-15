import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    outDir: "./dist",
  },
  resolve: {
    alias: {
      "@generated": "/generated/src",
    },
  },
});
