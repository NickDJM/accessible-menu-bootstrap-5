/**
 * Getter/Setter tests for the Bootstrap5TopLinkDisclosureMenuItem class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TopLinkDisclosureMenuItem from "../../../src/bootstrap5TopLinkDisclosureMenuItem.js";
import TopLinkDisclosureMenuItem from "accessible-menu/src/topLinkDisclosureMenuItem.js";

// Test all getter/setter methods in the Bootstrap5TopLinkDisclosureMenuItem class.
describe("Bootstrap5TopLinkDisclosureMenuItem getter/setters", () => {
  // Test Bootstrap5TopLinkDisclosureMenuItem dom.
  describe("dom", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuItem implements the TopLinkDisclosureMenuItem dom getter.
    it("should implement the TopLinkDisclosureMenuItem dom", () => {
      expect(Bootstrap5TopLinkDisclosureMenuItem.prototype.dom).toBe(
        TopLinkDisclosureMenuItem.prototype.dom
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuItem elements.
  describe("elements", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuItem implements the TopLinkDisclosureMenuItem elements getter.
    it("should implement the TopLinkDisclosureMenuItem elements", () => {
      expect(Bootstrap5TopLinkDisclosureMenuItem.prototype.elements).toBe(
        TopLinkDisclosureMenuItem.prototype.elements
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuItem isSubmenuItem.
  describe("isSubmenuItem", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuItem implements the TopLinkDisclosureMenuItem isSubmenuItem getter.
    it("should implement the TopLinkDisclosureMenuItem isSubmenuItem", () => {
      expect(Bootstrap5TopLinkDisclosureMenuItem.prototype.isSubmenuItem).toBe(
        TopLinkDisclosureMenuItem.prototype.isSubmenuItem
      );
    });
  });
});
