import { defineConfig } from "rolldown";

// Preserve the browser targets used by the previous Vite build.
const transform = {
  target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
};

// Keep ESM annotations so projects using the library can remove unused code.
const moduleMinify = {
  compress: true,
  mangle: true,
  codegen: false,
};

export default defineConfig([
  {
    input: "./build.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      dir: "dist",
      entryFileNames:
        format === "cjs"
          ? "accessible-menu-bs5.cjs.js"
          : `accessible-menu-bs5.${format}.js`,
      format,
      name: "AccessibleMenuBootstrap5",
      minify: format === "es" ? moduleMinify : true,
      comments: { annotation: format === "es", jsdoc: false, legal: false },
    })),
    platform: "browser",
    transform,
  },
  {
    input: "./src/bootstrap5DisclosureMenu.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      dir: "dist",
      entryFileNames:
        format === "cjs"
          ? "disclosure-menu-bs5.cjs.js"
          : `disclosure-menu-bs5.${format}.js`,
      format,
      name: "Bootstrap5DisclosureMenu",
      minify: format === "es" ? moduleMinify : true,
      comments: { annotation: format === "es", jsdoc: false, legal: false },
    })),
    platform: "browser",
    transform,
  },
  {
    input: "./src/bootstrap5Menubar.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      dir: "dist",
      entryFileNames:
        format === "cjs" ? "menubar-bs5.cjs.js" : `menubar-bs5.${format}.js`,
      format,
      name: "Bootstrap5Menubar",
      minify: format === "es" ? moduleMinify : true,
      comments: { annotation: format === "es", jsdoc: false, legal: false },
    })),
    platform: "browser",
    transform,
  },
  {
    input: "./src/bootstrap5TopLinkDisclosureMenu.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      dir: "dist",
      entryFileNames:
        format === "cjs"
          ? "top-link-disclosure-menu-bs5.cjs.js"
          : `top-link-disclosure-menu-bs5.${format}.js`,
      format,
      name: "Bootstrap5TopLinkDisclosureMenu",
      minify: format === "es" ? moduleMinify : true,
      comments: { annotation: format === "es", jsdoc: false, legal: false },
    })),
    platform: "browser",
    transform,
  },
  {
    input: "./src/bootstrap5Treeview.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      dir: "dist",
      entryFileNames:
        format === "cjs" ? "treeview-bs5.cjs.js" : `treeview-bs5.${format}.js`,
      format,
      name: "Bootstrap5Treeview",
      minify: format === "es" ? moduleMinify : true,
      comments: { annotation: format === "es", jsdoc: false, legal: false },
    })),
    platform: "browser",
    transform,
  },
]);
