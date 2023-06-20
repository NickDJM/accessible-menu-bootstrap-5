/**
 * Tests for public methods of the Bootstrap5TreeviewItem class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TreeviewItem from "../../../src/bootstrap5TreeviewItem.js";
import TreeviewItem from "accessible-menu/src/treeviewItem.js";

// Test TreeviewItem public methods.
describe("TreeviewItem public methods", () => {
  // Test TreeviewItem focus().
  describe("focus", () => {
    // Test that Bootstrap5TreeviewItem implements the TreeviewItem focus() method.
    it("should implement the TreeviewItem focus() method", () => {
      expect(Bootstrap5TreeviewItem.prototype.focus).toBe(
        TreeviewItem.prototype.focus
      );
    });
  });

  // Test TreeviewItem blur().
  describe("blur", () => {
    // Test that Bootstrap5TreeviewItem implements the TreeviewItem blur() method.
    it("should implement the TreeviewItem blur() method", () => {
      expect(Bootstrap5TreeviewItem.prototype.blur).toBe(
        TreeviewItem.prototype.blur
      );
    });
  });
});
