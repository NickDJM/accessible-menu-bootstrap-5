/**
 * Tests for public methods of the Bootstrap5MenubarToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5MenubarToggle from "../../../src/bootstrap5MenubarToggle.js";
import MenubarToggle from "accessible-menu/src/menubarToggle.js";

// Test Bootstrap5MenubarToggle public methods.
describe("Bootstrap5MenubarToggle public methods", () => {
  // Test Bootstrap5MenubarItem open().
  describe("open", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle open.
    it("should implement the MenubarToggle open", () => {
      expect(Bootstrap5MenubarToggle.prototype.open).toBe(
        MenubarToggle.prototype.open
      );
    });
  });

  // Test Bootstrap5MenubarToggle preview().
  describe("preview", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle preview.
    it("should implement the MenubarToggle preview", () => {
      expect(Bootstrap5MenubarToggle.prototype.preview).toBe(
        MenubarToggle.prototype.preview
      );
    });
  });

  // Test Bootstrap5MenubarToggle close().
  describe("close", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle close.
    it("should implement the MenubarToggle close", () => {
      expect(Bootstrap5MenubarToggle.prototype.close).toBe(
        MenubarToggle.prototype.close
      );
    });
  });

  // Test Bootstrap5MenubarToggle toggle().
  describe("toggle", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle toggle.
    it("should implement the MenubarToggle toggle", () => {
      expect(Bootstrap5MenubarToggle.prototype.toggle).toBe(
        MenubarToggle.prototype.toggle
      );
    });
  });

  // Test Bootstrap5MenubarToggle closeSiblins().
  describe("closeSiblings", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle closeSiblings.
    it("should implement the MenubarToggle closeSiblings", () => {
      expect(Bootstrap5MenubarToggle.prototype.closeSiblings).toBe(
        MenubarToggle.prototype.closeSiblings
      );
    });
  });

  // Test Bootstrap5MenubarToggle closeChildren().
  describe("closeChildren", () => {
    // Test that Bootstrap5MenubarToggle implements the MenubarToggle closeChildren.
    it("should implement the MenubarToggle closeChildren", () => {
      expect(Bootstrap5MenubarToggle.prototype.closeChildren).toBe(
        MenubarToggle.prototype.closeChildren
      );
    });
  });
});
