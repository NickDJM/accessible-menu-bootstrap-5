/**
 * Getter/Setter tests for the Bootstrap5TreeviewItem class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TreeviewItem from "../../../src/bootstrap5TreeviewItem.js";
import TreeviewItem from "accessible-menu/src/treeviewItem.js";

// Test all getter/setter methods in the Bootstrap5TreeviewItem class.
describe("Bootstrap5TreeviewItem getter/setters", () => {
  // Test Bootstrap5TreeviewItem dom.
  describe("dom", () => {
    // Test that Bootstrap5TreeviewItem implements the TreeviewItem dom getter.
    it("should implement the TreeviewItem dom", () => {
      expect(Bootstrap5TreeviewItem.prototype.dom).toBe(
        TreeviewItem.prototype.dom
      );
    });
  });

  // Test Bootstrap5TreeviewItem elements.
  describe("elements", () => {
    // Test that Bootstrap5TreeviewItem implements the TreeviewItem elements getter.
    it("should implement the TreeviewItem elements", () => {
      expect(Bootstrap5TreeviewItem.prototype.elements).toBe(
        TreeviewItem.prototype.elements
      );
    });
  });

  // Test Bootstrap5TreeviewItem isSubmenuItem.
  describe("isSubmenuItem", () => {
    // Test that Bootstrap5TreeviewItem implements the TreeviewItem isSubmenuItem getter.
    it("should implement the TreeviewItem isSubmenuItem", () => {
      expect(Bootstrap5TreeviewItem.prototype.isSubmenuItem).toBe(
        TreeviewItem.prototype.isSubmenuItem
      );
    });
  });
});
