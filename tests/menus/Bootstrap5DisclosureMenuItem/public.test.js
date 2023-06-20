/**
 * Tests for public methods of the Bootstrap5DisclosureMenuItem class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5DisclosureMenuItem from "../../../src/bootstrap5DisclosureMenuItem.js";
import DisclosureMenuItem from "accessible-menu/src/disclosureMenuItem.js";

// Test DisclosureMenuItem public methods.
describe("DisclosureMenuItem public methods", () => {
  // Test DisclosureMenuItem focus().
  describe("focus", () => {
    // Test that Bootstrap5DisclosureMenuItem implements the DisclosureMenuItem focus() method.
    it("should implement the DisclosureMenuItem focus() method", () => {
      expect(Bootstrap5DisclosureMenuItem.prototype.focus).toBe(
        DisclosureMenuItem.prototype.focus
      );
    });
  });

  // Test DisclosureMenuItem blur().
  describe("blur", () => {
    // Test that Bootstrap5DisclosureMenuItem implements the DisclosureMenuItem blur() method.
    it("should implement the DisclosureMenuItem blur() method", () => {
      expect(Bootstrap5DisclosureMenuItem.prototype.blur).toBe(
        DisclosureMenuItem.prototype.blur
      );
    });
  });
});
