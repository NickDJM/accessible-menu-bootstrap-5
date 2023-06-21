/**
 * Type tests for the Bootstrap5DisclosureMenu class.
 */

import { describe, it, expect } from "vitest";
import { singleLevel, twoLevel } from "../../../demo/menus.js";
import Bootstrap5DisclosureMenu from "../../../src/bootstrap5DisclosureMenu.js";
import Bootstrap5DisclosureMenuItem from "../../../src/bootstrap5DisclosureMenuItem.js";
import Bootstrap5DisclosureMenuToggle from "../../../src/bootstrap5DisclosureMenuToggle.js";

// Test the Bootstrap5DisclosureMenu default class types.
describe("Bootstrap5DisclosureMenu", () => {
  // Create the test menu.
  document.body.innerHTML = singleLevel;

  // Create a new Bootstrap5DisclosureMenu instance for testing.
  const menu = new Bootstrap5DisclosureMenu({
    menuElement: document.querySelector("ul"),
  });

  // Test that the Bootstrap5DisclosureMenu's _MenuType is Bootstrap5DisclosureMenu.
  it("should have a _MenuType of Bootstrap5DisclosureMenu", () => {
    expect(menu._MenuType).toBe(Bootstrap5DisclosureMenu);
  });

  // Test that the Bootstrap5DisclosureMenu's _MenuItemType is Bootstrap5DisclosureMenuItem.
  it("should have a _MenuItemType of Bootstrap5DisclosureMenuItem", () => {
    expect(menu._MenuItemType).toBe(Bootstrap5DisclosureMenuItem);
  });

  // Test that the Bootstrap5DisclosureMenu's _MenuToggleType is Bootstrap5DisclosureMenuToggle.
  it("should have a _MenuToggleType of Bootstrap5DisclosureMenuToggle", () => {
    expect(menu._MenuToggleType).toBe(Bootstrap5DisclosureMenuToggle);
  });

  // Clean up the test menu.
  document.body.innerHTML = "";
});

// Test the Bootstrap5DisclosureMenu custom class types for a multi-level menu.
describe("Bootstrap5DisclosureMenu (multi-level)", () => {
  // Create the test menu.
  document.body.innerHTML = twoLevel;

  // Create a new Bootstrap5DisclosureMenu instance for testing.
  const menu = new Bootstrap5DisclosureMenu({
    menuElement: document.querySelector("ul"),
  });

  // Test that the Bootstrap5DisclosureMenu's _MenuType is Bootstrap5DisclosureMenu.
  it("should have a _MenuType of Bootstrap5DisclosureMenu", () => {
    expect(menu._MenuType).toBe(Bootstrap5DisclosureMenu);
  });

  // Test that the Bootstrap5DisclosureMenu's submenu's _MenuType is Bootstrap5DisclosureMenu.
  it("should have all submenu's _MenuType be Bootstrap5DisclosureMenu", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuType).toBe(
        Bootstrap5DisclosureMenu
      );
    });
  });

  // Test that the Bootstrap5DisclosureMenu's _MenuItemType is Bootstrap5DisclosureMenuItem.
  it("should have a _MenuItemType of Bootstrap5DisclosureMenuItem", () => {
    expect(menu._MenuItemType).toBe(Bootstrap5DisclosureMenuItem);
  });

  // Test that the Bootstrap5DisclosureMenu's submenu's _MenuItemType is Bootstrap5DisclosureMenuItem.
  it("should have all submenu's _MenuItemType be Bootstrap5DisclosureMenuItem", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuItemType).toBe(
        Bootstrap5DisclosureMenuItem
      );
    });
  });

  // Test that the Bootstrap5DisclosureMenu's _MenuToggleType is Bootstrap5DisclosureMenuToggle.
  it("should have a _MenuToggleType of Bootstrap5DisclosureMenuToggle", () => {
    expect(menu._MenuToggleType).toBe(Bootstrap5DisclosureMenuToggle);
  });

  // Test that the Bootstrap5DisclosureMenu's submenu's _MenuToggleType is Bootstrap5DisclosureMenuToggle.
  it("should have all submenu's _MenuToggleType be Bootstrap5DisclosureMenuToggle", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuToggleType).toBe(
        Bootstrap5DisclosureMenuToggle
      );
    });
  });

  // Clean up the test menu.
  document.body.innerHTML = "";
});
