/**
 * Tests for public methods of the Bootstrap5TreeviewToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TreeviewToggle from "../../../src/bootstrap5TreeviewToggle.js";
import TreeviewToggle from "accessible-menu/src/treeviewToggle.js";

// Test Bootstrap5TreeviewToggle public methods.
describe("Bootstrap5TreeviewToggle public methods", () => {
  // Test Bootstrap5TreeviewItem open().
  describe("open", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle open.
    it("should implement the TreeviewToggle open", () => {
      expect(Bootstrap5TreeviewToggle.prototype.open).toBe(
        TreeviewToggle.prototype.open
      );
    });
  });

  // Test Bootstrap5TreeviewToggle preview().
  describe("preview", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle preview.
    it("should implement the TreeviewToggle preview", () => {
      expect(Bootstrap5TreeviewToggle.prototype.preview).toBe(
        TreeviewToggle.prototype.preview
      );
    });
  });

  // Test Bootstrap5TreeviewToggle close().
  describe("close", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle close.
    it("should implement the TreeviewToggle close", () => {
      expect(Bootstrap5TreeviewToggle.prototype.close).toBe(
        TreeviewToggle.prototype.close
      );
    });
  });

  // Test Bootstrap5TreeviewToggle toggle().
  describe("toggle", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle toggle.
    it("should implement the TreeviewToggle toggle", () => {
      expect(Bootstrap5TreeviewToggle.prototype.toggle).toBe(
        TreeviewToggle.prototype.toggle
      );
    });
  });

  // Test Bootstrap5TreeviewToggle closeSiblins().
  describe("closeSiblings", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle closeSiblings.
    it("should implement the TreeviewToggle closeSiblings", () => {
      expect(Bootstrap5TreeviewToggle.prototype.closeSiblings).toBe(
        TreeviewToggle.prototype.closeSiblings
      );
    });
  });

  // Test Bootstrap5TreeviewToggle closeChildren().
  describe("closeChildren", () => {
    // Test that Bootstrap5TreeviewToggle implements the TreeviewToggle closeChildren.
    it("should implement the TreeviewToggle closeChildren", () => {
      expect(Bootstrap5TreeviewToggle.prototype.closeChildren).toBe(
        TreeviewToggle.prototype.closeChildren
      );
    });
  });
});
