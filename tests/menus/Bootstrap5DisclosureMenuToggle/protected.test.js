/**
 * Tests for protected methods in the Bootstrap5DisclosureMenuToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5DisclosureMenuToggle from "../../../src/bootstrap5DisclosureMenuToggle.js";
import DisclosureMenuToggle from "accessible-menu/src/disclosureMenuToggle.js";

// Test Bootstrap5DisclosureMenuToggle protected methods.
describe("Bootstrap5DisclosureMenuToggle protected methods", () => {
  // Test Bootstrap5DisclosureMenuToggle _expand().
  describe("_expand", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle _expand.
    it("should implement the DisclosureMenuToggle _expand", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype._expand).toBe(
        DisclosureMenuToggle.prototype._expand
      );
    });
  });

  // Test Bootstrap5DisclosureMenuToggle _collapse().
  describe("_collapse", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle _collapse.
    it("should implement the DisclosureMenuToggle _collapse", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype._collapse).toBe(
        DisclosureMenuToggle.prototype._collapse
      );
    });
  });
});
