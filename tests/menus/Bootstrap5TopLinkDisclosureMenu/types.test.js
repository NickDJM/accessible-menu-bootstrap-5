/**
 * Type tests for the Bootstrap5TopLinkDisclosureMenu class.
 */

import { describe, it, expect } from "vitest";
import { singleLevel, twoLevel } from "../../../demo/menus.js";
import Bootstrap5TopLinkDisclosureMenu from "../../../src/bootstrap5TopLinkDisclosureMenu.js";
import Bootstrap5TopLinkDisclosureMenuItem from "../../../src/bootstrap5TopLinkDisclosureMenuItem.js";
import Bootstrap5TopLinkDisclosureMenuToggle from "../../../src/bootstrap5TopLinkDisclosureMenuToggle.js";

// Test the Bootstrap5TopLinkDisclosureMenu default class types.
describe("Bootstrap5TopLinkDisclosureMenu", () => {
  // Create the test menu.
  document.body.innerHTML = singleLevel;

  // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
  const menu = new Bootstrap5TopLinkDisclosureMenu({
    menuElement: document.querySelector("ul"),
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's _MenuType is Bootstrap5TopLinkDisclosureMenu.
  it("should have a _MenuType of Bootstrap5TopLinkDisclosureMenu", () => {
    expect(menu._MenuType).toBe(Bootstrap5TopLinkDisclosureMenu);
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's _MenuItemType is Bootstrap5TopLinkDisclosureMenuItem.
  it("should have a _MenuItemType of Bootstrap5TopLinkDisclosureMenuItem", () => {
    expect(menu._MenuItemType).toBe(Bootstrap5TopLinkDisclosureMenuItem);
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's _MenuToggleType is Bootstrap5TopLinkDisclosureMenuToggle.
  it("should have a _MenuToggleType of Bootstrap5TopLinkDisclosureMenuToggle", () => {
    expect(menu._MenuToggleType).toBe(Bootstrap5TopLinkDisclosureMenuToggle);
  });

  // Clean up the test menu.
  document.body.innerHTML = "";
});

// Test the Bootstrap5TopLinkDisclosureMenu custom class types for a multi-level menu.
describe("Bootstrap5TopLinkDisclosureMenu (multi-level)", () => {
  // Create the test menu.
  document.body.innerHTML = twoLevel;

  // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
  const menu = new Bootstrap5TopLinkDisclosureMenu({
    menuElement: document.querySelector("ul"),
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's _MenuType is Bootstrap5TopLinkDisclosureMenu.
  it("should have a _MenuType of Bootstrap5TopLinkDisclosureMenu", () => {
    expect(menu._MenuType).toBe(Bootstrap5TopLinkDisclosureMenu);
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's submenu's _MenuType is Bootstrap5TopLinkDisclosureMenu.
  it("should have all submenu's _MenuType be Bootstrap5TopLinkDisclosureMenu", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuType).toBe(
        Bootstrap5TopLinkDisclosureMenu
      );
    });
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's _MenuItemType is Bootstrap5TopLinkDisclosureMenuItem.
  it("should have a _MenuItemType of Bootstrap5TopLinkDisclosureMenuItem", () => {
    expect(menu._MenuItemType).toBe(Bootstrap5TopLinkDisclosureMenuItem);
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's submenu's _MenuItemType is Bootstrap5TopLinkDisclosureMenuItem.
  it("should have all submenu's _MenuItemType be Bootstrap5TopLinkDisclosureMenuItem", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuItemType).toBe(
        Bootstrap5TopLinkDisclosureMenuItem
      );
    });
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's _MenuToggleType is Bootstrap5TopLinkDisclosureMenuToggle.
  it("should have a _MenuToggleType of Bootstrap5TopLinkDisclosureMenuToggle", () => {
    expect(menu._MenuToggleType).toBe(Bootstrap5TopLinkDisclosureMenuToggle);
  });

  // Test that the Bootstrap5TopLinkDisclosureMenu's submenu's _MenuToggleType is Bootstrap5TopLinkDisclosureMenuToggle.
  it("should have all submenu's _MenuToggleType be Bootstrap5TopLinkDisclosureMenuToggle", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuToggleType).toBe(
        Bootstrap5TopLinkDisclosureMenuToggle
      );
    });
  });

  // Clean up the test menu.
  document.body.innerHTML = "";
});
