/**
 * Types test for Bootstrap5Menubar component.
 */

import { describe, it, expect } from "vitest";
import { singleLevel, twoLevel } from "../../../demo/menus.js";
import Bootstrap5Menubar from "../../../src/bootstrap5Menubar.js";
import Bootstrap5MenubarItem from "../../../src/bootstrap5MenubarItem.js";
import Bootstrap5MenubarToggle from "../../../src/bootstrap5MenubarToggle.js";

// Test the Bootstrap5Menubar default class types.
describe("Bootstrap5Menubar", () => {
  // Create the test menu.
  document.body.innerHTML = singleLevel;

  // Create a new Bootstrap5Menubar instance for testing.
  const menu = new Bootstrap5Menubar({
    menuElement: document.querySelector("ul"),
  });

  // Test that the Bootstrap5Menubar's _MenuType is Bootstrap5Menubar.
  it("should have a _MenuType of Bootstrap5Menubar", () => {
    expect(menu._MenuType).toBe(Bootstrap5Menubar);
  });

  // Test that the Bootstrap5Menubar's _MenuItemType is Bootstrap5MenubarItem.
  it("should have a _MenuItemType of Bootstrap5MenubarItem", () => {
    expect(menu._MenuItemType).toBe(Bootstrap5MenubarItem);
  });

  // Test that the Bootstrap5Menubar's _MenuToggleType is Bootstrap5MenubarToggle.
  it("should have a _MenuToggleType of Bootstrap5MenubarToggle", () => {
    expect(menu._MenuToggleType).toBe(Bootstrap5MenubarToggle);
  });
});

// Test the Bootstrap5Menubar custom class types for a multi-level menu.
describe("Bootstrap5Menubar (multi-level)", () => {
  // Create the test menu.
  document.body.innerHTML = twoLevel;

  // Create a new Bootstrap5Menubar instance for testing.
  const menu = new Bootstrap5Menubar({
    menuElement: document.querySelector("ul"),
  });

  // Test that the Bootstrap5Menubar's _MenuType is Bootstrap5Menubar.
  it("should have a _MenuType of Bootstrap5Menubar", () => {
    expect(menu._MenuType).toBe(Bootstrap5Menubar);
  });

  // Test that the Bootstrap5Menubar's submenu's _MenuType is Bootstrap5Menubar.
  it("should have all submenu's _MenuType be Bootstrap5Menubar", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuType).toBe(Bootstrap5Menubar);
    });
  });

  // Test that the Bootstrap5Menubar's _MenuItemType is Bootstrap5MenubarItem.
  it("should have a _MenuItemType of Bootstrap5MenubarItem", () => {
    expect(menu._MenuItemType).toBe(Bootstrap5MenubarItem);
  });

  // Test that the Bootstrap5Menubar's submenu's _MenuItemType is Bootstrap5MenubarItem.
  it("should have all submenu's _MenuItemType be Bootstrap5MenubarItem", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      toggle.elements.controlledMenu.elements.menuItems.forEach((item) => {
        expect(item._MenuItemType).toBe(Bootstrap5MenubarItem);
      });
    });
  });

  // Test that the Bootstrap5Menubar's _MenuToggleType is Bootstrap5MenubarToggle.
  it("should have a _MenuToggleType of Bootstrap5MenubarToggle", () => {
    expect(menu._MenuToggleType).toBe(Bootstrap5MenubarToggle);
  });

  // Test that the Bootstrap5Menubar's submenu's _MenuToggleType is Bootstrap5MenubarToggle.
  it("should have all submenu's _MenuToggleType be Bootstrap5MenubarToggle", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle._MenuToggleType).toBe(Bootstrap5MenubarToggle);
    });
  });
});
