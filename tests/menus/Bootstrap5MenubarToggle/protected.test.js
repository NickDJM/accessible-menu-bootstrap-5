/**
 * Tests for protected methods in the Bootstrap5MenubarToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5MenubarToggle from "../../../src/bootstrap5MenubarToggle.js";
import MenubarToggle from "accessible-menu/src/menubarToggle.js";

// Test Bootstrap5MenubarToggle protected methods.
describe("Bootstrap5MenubarToggle protected methods", () => {
  // Test Bootstrap5MenubarToggle _expand().
  describe("_expand", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle _expand.
    it("should implement the MenubarToggle _expand", () => {
      expect(Bootstrap5MenubarToggle.prototype._expand).toBe(
        MenubarToggle.prototype._expand
      );
    });
  });

  // Test Bootstrap5MenubarToggle _collapse().
  describe("_collapse", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle _collapse.
    it("should implement the MenubarToggle _collapse", () => {
      expect(Bootstrap5MenubarToggle.prototype._collapse).toBe(
        MenubarToggle.prototype._collapse
      );
    });
  });
});
