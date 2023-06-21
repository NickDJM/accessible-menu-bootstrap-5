/**
 * Getter/Setter tests for the Bootstrap5MenubarItem class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5MenubarItem from "../../../src/bootstrap5MenubarItem.js";
import MenubarItem from "accessible-menu/src/menubarItem.js";

// Test all getter/setter methods in the Bootstrap5MenubarItem class.
describe("Bootstrap5MenubarItem getter/setters", () => {
  // Test Bootstrap5MenubarItem dom.
  describe("dom", () => {
    // Test that Bootstrap5MenubarItem implements the MenubarItem dom getter.
    it("should implement the MenubarItem dom", () => {
      expect(Bootstrap5MenubarItem.prototype.dom).toBe(
        MenubarItem.prototype.dom
      );
    });
  });

  // Test Bootstrap5MenubarItem elements.
  describe("elements", () => {
    // Test that Bootstrap5MenubarItem implements the MenubarItem elements getter.
    it("should implement the MenubarItem elements", () => {
      expect(Bootstrap5MenubarItem.prototype.elements).toBe(
        MenubarItem.prototype.elements
      );
    });
  });

  // Test Bootstrap5MenubarItem isSubmenuItem.
  describe("isSubmenuItem", () => {
    // Test that Bootstrap5MenubarItem implements the MenubarItem isSubmenuItem getter.
    it("should implement the MenubarItem isSubmenuItem", () => {
      expect(Bootstrap5MenubarItem.prototype.isSubmenuItem).toBe(
        MenubarItem.prototype.isSubmenuItem
      );
    });
  });
});
