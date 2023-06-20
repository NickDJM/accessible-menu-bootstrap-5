/**
 * Getter/Setter tests for the Bootstrap5MenubarToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5MenubarToggle from "../../../src/bootstrap5MenubarToggle.js";
import MenubarToggle from "accessible-menu/src/menubarToggle.js";

// Test all getter/setter methods in the Bootstrap5MenubarToggle class.
describe("Bootstrap5MenubarToggle getter/setters", () => {
  // Test Bootstrap5MenubarToggle dom.
  describe("dom", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle dom getter.
    it("should implement the MenubarToggle dom", () => {
      expect(Bootstrap5MenubarToggle.prototype.dom).toBe(
        MenubarToggle.prototype.dom
      );
    });
  });

  // Test Bootstrap5MenubarToggle elements.
  describe("elements", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle elements getter.
    it("should implement the MenubarToggle elements", () => {
      expect(Bootstrap5MenubarToggle.prototype.elements).toBe(
        MenubarToggle.prototype.elements
      );
    });
  });

  // Test Bootstrap5MenubarToggle isOpen.
  describe("isOpen", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle isOpen getter.
    it("should implement the MenubarToggle isOpen", () => {
      expect(Bootstrap5MenubarToggle.prototype.isOpen).toBe(
        MenubarToggle.prototype.isOpen
      );
    });
  });
});
