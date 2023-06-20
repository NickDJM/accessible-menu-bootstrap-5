/**
 * Tests for public methods of the Bootstrap5TopLinkDisclosureMenuItem class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TopLinkDisclosureMenuItem from "../../../src/bootstrap5TopLinkDisclosureMenuItem.js";
import TopLinkDisclosureMenuItem from "accessible-menu/src/topLinkDisclosureMenuItem.js";

// Test TopLinkDisclosureMenuItem public methods.
describe("TopLinkDisclosureMenuItem public methods", () => {
  // Test TopLinkDisclosureMenuItem focus().
  describe("focus", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuItem implements the TopLinkDisclosureMenuItem focus() method.
    it("should implement the TopLinkDisclosureMenuItem focus() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenuItem.prototype.focus).toBe(
        TopLinkDisclosureMenuItem.prototype.focus
      );
    });
  });

  // Test TopLinkDisclosureMenuItem blur().
  describe("blur", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuItem implements the TopLinkDisclosureMenuItem blur() method.
    it("should implement the TopLinkDisclosureMenuItem blur() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenuItem.prototype.blur).toBe(
        TopLinkDisclosureMenuItem.prototype.blur
      );
    });
  });
});
