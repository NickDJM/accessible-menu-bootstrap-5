/**
 * Tests for public methods of the Bootstrap5MenubarItem class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5MenubarItem from "../../../src/bootstrap5MenubarItem.js";
import MenubarItem from "accessible-menu/src/menubarItem.js";

// Test MenubarItem public methods.
describe("MenubarItem public methods", () => {
  // Test MenubarItem focus().
  describe("focus", () => {
    // Test that Bootstrap5MenubarItem implements the MenubarItem focus() method.
    it("should implement the MenubarItem focus() method", () => {
      expect(Bootstrap5MenubarItem.prototype.focus).toBe(
        MenubarItem.prototype.focus
      );
    });
  });

  // Test MenubarItem blur().
  describe("blur", () => {
    // Test that Bootstrap5MenubarItem implements the MenubarItem blur() method.
    it("should implement the MenubarItem blur() method", () => {
      expect(Bootstrap5MenubarItem.prototype.blur).toBe(
        MenubarItem.prototype.blur
      );
    });
  });
});
