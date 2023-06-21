/**
 * Getter/Setter tests for the Bootstrap5DisclosureMenuToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5DisclosureMenuToggle from "../../../src/bootstrap5DisclosureMenuToggle.js";
import DisclosureMenuToggle from "accessible-menu/src/disclosureMenuToggle.js";

// Test all getter/setter methods in the Bootstrap5DisclosureMenuToggle class.
describe("Bootstrap5DisclosureMenuToggle getter/setters", () => {
  // Test Bootstrap5DisclosureMenuToggle dom.
  describe("dom", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle dom getter.
    it("should implement the DisclosureMenuToggle dom", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.dom).toBe(
        DisclosureMenuToggle.prototype.dom
      );
    });
  });

  // Test Bootstrap5DisclosureMenuToggle elements.
  describe("elements", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle elements getter.
    it("should implement the DisclosureMenuToggle elements", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.elements).toBe(
        DisclosureMenuToggle.prototype.elements
      );
    });
  });

  // Test Bootstrap5DisclosureMenuToggle isOpen.
  describe("isOpen", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle isOpen getter.
    it("should implement the DisclosureMenuToggle isOpen", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.isOpen).toBe(
        DisclosureMenuToggle.prototype.isOpen
      );
    });
  });
});
