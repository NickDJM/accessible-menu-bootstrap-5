import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import cleanup from "rollup-plugin-cleanup";

export default [
  {
    input: "./rollup.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve(), cleanup()],
    output: [
      {
        name: "AccessibleMenuBootstrap5",
        format: "iife",
        sourcemap: true,
        file: "dist/accessible-menu-bs5.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
      },
      {
        name: "AccessibleMenuBootstrap5",
        format: "iife",
        sourcemap: true,
        file: "dist/accessible-menu-bs5.min.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
        plugins: [terser()],
      },
    ],
  },
  {
    input: "./src/bootstrap5DisclosureMenu.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve(), cleanup()],
    output: [
      {
        name: "Bootstrap5DisclosureMenu",
        format: "iife",
        sourcemap: true,
        file: "dist/disclosure-menu-bs5.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
      },
      {
        name: "Bootstrap5DisclosureMenu",
        format: "iife",
        sourcemap: true,
        file: "dist/disclosure-menu-bs5.min.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
        plugins: [terser()],
      },
      {
        name: "Bootstrap5DisclosureMenu",
        format: "esm",
        sourcemap: true,
        file: "dist/disclosure-menu-bs5.esm.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
      },
      {
        name: "Bootstrap5DisclosureMenu",
        format: "esm",
        sourcemap: true,
        file: "dist/disclosure-menu-bs5.esm.min.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
        plugins: [terser()],
      },
    ],
  },
  {
    input: "./src/bootstrap5Menubar.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve(), cleanup()],
    output: [
      {
        name: "Bootstrap5Menubar",
        format: "iife",
        sourcemap: true,
        file: "dist/menubar-bs5.js",
        globals: {
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
        },
      },
      {
        name: "Bootstrap5Menubar",
        format: "iife",
        sourcemap: true,
        file: "dist/menubar-bs5.min.js",
        globals: {
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
        },
        plugins: [terser()],
      },
      {
        name: "Bootstrap5Menubar",
        format: "esm",
        sourcemap: true,
        file: "dist/menubar-bs5.esm.js",
        globals: {
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
        },
      },
      {
        name: "Bootstrap5Menubar",
        format: "esm",
        sourcemap: true,
        file: "dist/menubar-bs5.esm.min.js",
        globals: {
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
        },
        plugins: [terser()],
      },
    ],
  },
  {
    input: "./src/bootstrap5Treeview.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve(), cleanup()],
    output: [
      {
        name: "Bootstrap5Treeview",
        format: "iife",
        sourcemap: true,
        file: "dist/treeview-bs5.js",
        globals: {
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
      },
      {
        name: "Bootstrap5Treeview",
        format: "iife",
        sourcemap: true,
        file: "dist/treeview-bs5.min.js",
        globals: {
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
        plugins: [terser()],
      },
      {
        name: "Bootstrap5Treeview",
        format: "esm",
        sourcemap: true,
        file: "dist/treeview-bs5.esm.js",
        globals: {
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
      },
      {
        name: "Bootstrap5Treeview",
        format: "esm",
        sourcemap: true,
        file: "dist/treeview-bs5.esm.min.js",
        globals: {
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
        plugins: [terser()],
      },
    ],
  },
];
