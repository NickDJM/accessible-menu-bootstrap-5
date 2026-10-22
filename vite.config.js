import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
    },
  },
  test: {
    environment: "jsdom",
    environmentOptions: {
      pretendToBeVisual: true,
    },
  },
});
