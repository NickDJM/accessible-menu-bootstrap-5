/**
 * Tests for protected methods in the Bootstrap5TopLinkDisclosureMenuToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TopLinkDisclosureMenuToggle from "../../../src/bootstrap5TopLinkDisclosureMenuToggle.js";
import TopLinkDisclosureMenuToggle from "accessible-menu/src/topLinkDisclosureMenuToggle.js";

// Test Bootstrap5TopLinkDisclosureMenuToggle protected methods.
describe("Bootstrap5TopLinkDisclosureMenuToggle protected methods", () => {
  // Test Bootstrap5TopLinkDisclosureMenuToggle _expand().
  describe("_expand", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle _expand.
    it("should implement the TopLinkDisclosureMenuToggle _expand", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype._expand).toBe(
        TopLinkDisclosureMenuToggle.prototype._expand
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle _collapse().
  describe("_collapse", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle _collapse.
    it("should implement the TopLinkDisclosureMenuToggle _collapse", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype._collapse).toBe(
        TopLinkDisclosureMenuToggle.prototype._collapse
      );
    });
  });
});
