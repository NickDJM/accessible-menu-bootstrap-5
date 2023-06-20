/**
 * Getter/Setter tests for the Bootstrap5TopLinkDisclosureMenuToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TopLinkDisclosureMenuToggle from "../../../src/bootstrap5TopLinkDisclosureMenuToggle.js";
import TopLinkDisclosureMenuToggle from "accessible-menu/src/topLinkDisclosureMenuToggle.js";

// Test all getter/setter methods in the Bootstrap5TopLinkDisclosureMenuToggle class.
describe("Bootstrap5TopLinkDisclosureMenuToggle getter/setters", () => {
  // Test Bootstrap5TopLinkDisclosureMenuToggle dom.
  describe("dom", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle dom getter.
    it("should implement the TopLinkDisclosureMenuToggle dom", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype.dom).toBe(
        TopLinkDisclosureMenuToggle.prototype.dom
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle elements.
  describe("elements", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle elements getter.
    it("should implement the TopLinkDisclosureMenuToggle elements", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype.elements).toBe(
        TopLinkDisclosureMenuToggle.prototype.elements
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle isOpen.
  describe("isOpen", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle isOpen getter.
    it("should implement the TopLinkDisclosureMenuToggle isOpen", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype.isOpen).toBe(
        TopLinkDisclosureMenuToggle.prototype.isOpen
      );
    });
  });
});
