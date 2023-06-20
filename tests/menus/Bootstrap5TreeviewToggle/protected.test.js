/**
 * Tests for protected methods in the Bootstrap5TreeviewToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TreeviewToggle from "../../../src/bootstrap5TreeviewToggle.js";
import TreeviewToggle from "accessible-menu/src/treeviewToggle.js";

// Test Bootstrap5TreeviewToggle protected methods.
describe("Bootstrap5TreeviewToggle protected methods", () => {
  // Test Bootstrap5TreeviewToggle _expand().
  describe("_expand", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle _expand.
    it("should implement the TreeviewToggle _expand", () => {
      expect(Bootstrap5TreeviewToggle.prototype._expand).toBe(
        TreeviewToggle.prototype._expand
      );
    });
  });

  // Test Bootstrap5TreeviewToggle _collapse().
  describe("_collapse", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle _collapse.
    it("should implement the TreeviewToggle _collapse", () => {
      expect(Bootstrap5TreeviewToggle.prototype._collapse).toBe(
        TreeviewToggle.prototype._collapse
      );
    });
  });
});
