/**
 * Getter/Setter tests for the Bootstrap5TreeviewToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TreeviewToggle from "../../../src/bootstrap5TreeviewToggle.js";
import TreeviewToggle from "accessible-menu/src/treeviewToggle.js";

// Test all getter/setter methods in the Bootstrap5TreeviewToggle class.
describe("Bootstrap5TreeviewToggle getter/setters", () => {
  // Test Bootstrap5TreeviewToggle dom.
  describe("dom", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle dom getter.
    it("should implement the TreeviewToggle dom", () => {
      expect(Bootstrap5TreeviewToggle.prototype.dom).toBe(
        TreeviewToggle.prototype.dom
      );
    });
  });

  // Test Bootstrap5TreeviewToggle elements.
  describe("elements", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle elements getter.
    it("should implement the TreeviewToggle elements", () => {
      expect(Bootstrap5TreeviewToggle.prototype.elements).toBe(
        TreeviewToggle.prototype.elements
      );
    });
  });

  // Test Bootstrap5TreeviewToggle isOpen.
  describe("isOpen", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle isOpen getter.
    it("should implement the TreeviewToggle isOpen", () => {
      expect(Bootstrap5TreeviewToggle.prototype.isOpen).toBe(
        TreeviewToggle.prototype.isOpen
      );
    });
  });
});
