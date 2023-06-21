/**
 * Getter/Setter tests for the Bootstrap5DisclosureMenuItem class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5DisclosureMenuItem from "../../../src/bootstrap5DisclosureMenuItem.js";
import DisclosureMenuItem from "accessible-menu/src/disclosureMenuItem.js";

// Test all getter/setter methods in the Bootstrap5DisclosureMenuItem class.
describe("Bootstrap5DisclosureMenuItem getter/setters", () => {
  // Test Bootstrap5DisclosureMenuItem dom.
  describe("dom", () => {
    // Test that Bootstrap5DisclosureMenuItem implements the DisclosureMenuItem dom getter.
    it("should implement the DisclosureMenuItem dom", () => {
      expect(Bootstrap5DisclosureMenuItem.prototype.dom).toBe(
        DisclosureMenuItem.prototype.dom
      );
    });
  });

  // Test Bootstrap5DisclosureMenuItem elements.
  describe("elements", () => {
    // Test that Bootstrap5DisclosureMenuItem implements the DisclosureMenuItem elements getter.
    it("should implement the DisclosureMenuItem elements", () => {
      expect(Bootstrap5DisclosureMenuItem.prototype.elements).toBe(
        DisclosureMenuItem.prototype.elements
      );
    });
  });

  // Test Bootstrap5DisclosureMenuItem isSubmenuItem.
  describe("isSubmenuItem", () => {
    // Test that Bootstrap5DisclosureMenuItem implements the DisclosureMenuItem isSubmenuItem getter.
    it("should implement the DisclosureMenuItem isSubmenuItem", () => {
      expect(Bootstrap5DisclosureMenuItem.prototype.isSubmenuItem).toBe(
        DisclosureMenuItem.prototype.isSubmenuItem
      );
    });
  });
});
