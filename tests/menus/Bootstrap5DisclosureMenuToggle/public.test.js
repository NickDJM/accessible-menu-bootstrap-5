/**
 * Tests for public methods of the Bootstrap5DisclosureMenuToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5DisclosureMenuToggle from "../../../src/bootstrap5DisclosureMenuToggle.js";
import DisclosureMenuToggle from "accessible-menu/src/disclosureMenuToggle.js";

// Test Bootstrap5DisclosureMenuToggle public methods.
describe("Bootstrap5DisclosureMenuToggle public methods", () => {
  // Test Bootstrap5DisclosureMenuItem open().
  describe("open", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle open.
    it("should implement the DisclosureMenuToggle open", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.open).toBe(
        DisclosureMenuToggle.prototype.open
      );
    });
  });

  // Test Bootstrap5DisclosureMenuToggle preview().
  describe("preview", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle preview.
    it("should implement the DisclosureMenuToggle preview", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.preview).toBe(
        DisclosureMenuToggle.prototype.preview
      );
    });
  });

  // Test Bootstrap5DisclosureMenuToggle close().
  describe("close", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle close.
    it("should implement the DisclosureMenuToggle close", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.close).toBe(
        DisclosureMenuToggle.prototype.close
      );
    });
  });

  // Test Bootstrap5DisclosureMenuToggle toggle().
  describe("toggle", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle toggle.
    it("should implement the DisclosureMenuToggle toggle", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.toggle).toBe(
        DisclosureMenuToggle.prototype.toggle
      );
    });
  });

  // Test Bootstrap5DisclosureMenuToggle closeSiblins().
  describe("closeSiblings", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle closeSiblings.
    it("should implement the DisclosureMenuToggle closeSiblings", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.closeSiblings).toBe(
        DisclosureMenuToggle.prototype.closeSiblings
      );
    });
  });

  // Test Bootstrap5DisclosureMenuToggle closeChildren().
  describe("closeChildren", () => {
    // Test that Bootstrap5DisclosureMenuToggle implements the DisclosureMenuToggle closeChildren.
    it("should implement the DisclosureMenuToggle closeChildren", () => {
      expect(Bootstrap5DisclosureMenuToggle.prototype.closeChildren).toBe(
        DisclosureMenuToggle.prototype.closeChildren
      );
    });
  });
});
