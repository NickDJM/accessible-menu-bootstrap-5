/**
 * Type tests for the Bootstrap5Treeview class.
 */

import { describe, it, expect } from "vitest";
import { singleLevel, twoLevel } from "../../../demo/menus.js";
import Bootstrap5Treeview from "../../../src/bootstrap5Treeview.js";
import Bootstrap5TreeviewItem from "../../../src/bootstrap5TreeviewItem.js";
import Bootstrap5TreeviewToggle from "../../../src/bootstrap5TreeviewToggle.js";

// Test the Bootstrap5Treeview default class types.
describe("Bootstrap5Treeview", () => {
  // Create the test menu.
  document.body.innerHTML = singleLevel;

  // Create a new Bootstrap5Treeview instance for testing.
  const menu = new Bootstrap5Treeview({
    menuElement: document.querySelector("ul"),
  });

  // Test that the Bootstrap5Treeview's _MenuType is Bootstrap5Treeview.
  it("should have a _MenuType of Bootstrap5Treeview", () => {
    expect(menu._MenuType).toBe(Bootstrap5Treeview);
  });

  // Test that the Bootstrap5Treeview's _MenuItemType is Bootstrap5TreeviewItem.
  it("should have a _MenuItemType of Bootstrap5TreeviewItem", () => {
    expect(menu._MenuItemType).toBe(Bootstrap5TreeviewItem);
  });

  // Test that the Bootstrap5Treeview's _MenuToggleType is Bootstrap5TreeviewToggle.
  it("should have a _MenuToggleType of Bootstrap5TreeviewToggle", () => {
    expect(menu._MenuToggleType).toBe(Bootstrap5TreeviewToggle);
  });

  // Clean up the test menu.
  document.body.innerHTML = "";
});

// Test the Bootstrap5Treeview custom class types for a multi-level menu.
describe("Bootstrap5Treeview (multi-level)", () => {
  // Create the test menu.
  document.body.innerHTML = twoLevel;

  // Create a new Bootstrap5Treeview instance for testing.
  const menu = new Bootstrap5Treeview({
    menuElement: document.querySelector("ul"),
  });

  // Test that the Bootstrap5Treeview's _MenuType is Bootstrap5Treeview.
  it("should have a _MenuType of Bootstrap5Treeview", () => {
    expect(menu._MenuType).toBe(Bootstrap5Treeview);
  });

  // Test that the Bootstrap5Treeview's submenu's _MenuType is Bootstrap5Treeview.
  it("should have all submenu's _MenuType be Bootstrap5Treeview", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuType).toBe(Bootstrap5Treeview);
    });
  });

  // Test that the Bootstrap5Treeview's _MenuItemType is Bootstrap5TreeviewItem.
  it("should have a _MenuItemType of Bootstrap5TreeviewItem", () => {
    expect(menu._MenuItemType).toBe(Bootstrap5TreeviewItem);
  });

  // Test that the Bootstrap5Treeview's submenu's _MenuItemType is Bootstrap5TreeviewItem.
  it("should have all submenu's _MenuItemType be Bootstrap5TreeviewItem", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuItemType).toBe(
        Bootstrap5TreeviewItem
      );
    });
  });

  // Test that the Bootstrap5Treeview's _MenuToggleType is Bootstrap5TreeviewToggle.
  it("should have a _MenuToggleType of Bootstrap5TreeviewToggle", () => {
    expect(menu._MenuToggleType).toBe(Bootstrap5TreeviewToggle);
  });

  // Test that the Bootstrap5Treeview's submenu's _MenuToggleType is Bootstrap5TreeviewToggle.
  it("should have all submenu's _MenuToggleType be Bootstrap5TreeviewToggle", () => {
    menu.elements.submenuToggles.forEach((toggle) => {
      expect(toggle.elements.controlledMenu._MenuToggleType).toBe(
        Bootstrap5TreeviewToggle
      );
    });
  });

  // Clean up the test menu.
  document.body.innerHTML = "";
});
