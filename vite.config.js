import { resolve } from "path";
import { defineConfig } from "vite";
import BrowserSync from "vite-plugin-browser-sync";
import { fileURLToPath, URL } from "url";
import process from "process";

// Get the current directory path.
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// The type of menu to build from the BUILD_TYPE environment variable.
// If BUILD_TYPE is not set, the default build is used
const buildType = process.env.BUILD_TYPE ?? "default";

// Supported build types.
const formats = ["iife", "es", "cjs"];

// The library options for the different menus.
const lib = {
  default: {
    entry: resolve(__dirname, "build.js"),
    name: "AccessibleMenuBootstrap5",
    formats,
    fileName: (format) => `accessible-menu-bs5.${format}.js`,
  },
  DisclosureMenu: {
    entry: resolve(__dirname, "/src/bootstrap5DisclosureMenu.js"),
    name: "Bootstrap5DisclosureMenu",
    formats,
    fileName: (format) => `disclosure-menu-bs5.${format}.js`,
  },
  Menubar: {
    entry: resolve(__dirname, "/src/bootstrap5Menubar.js"),
    name: "Bootstrap5Menubar",
    formats,
    fileName: (format) => `menubar-bs5.${format}.js`,
  },
  TopLinkDisclosureMenu: {
    entry: resolve(__dirname, "/src/bootstrap5TopLinkDisclosureMenu.js"),
    name: "Bootstrap5TopLinkDisclosureMenu",
    formats,
    fileName: (format) => `top-link-disclosure-menu-bs5.${format}.js`,
  },
  Treeview: {
    entry: resolve(__dirname, "/src/bootstrap5Treeview.js"),
    name: "Bootstrap5Treeview",
    formats,
    fileName: (format) => `treeview-bs5.${format}.js`,
  },
};

export default defineConfig({
  plugins: [BrowserSync()],
  build: {
    lib: lib[buildType] || lib.default,
    emptyOutDir: false,
  },
  test: {
    environment: "jsdom",
    environmentOptions: {
      pretendToBeVisual: true,
    },
  },
});
