/**
 * Tests for public methods of the Bootstrap5TopLinkDisclosureMenuToggle class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TopLinkDisclosureMenuToggle from "../../../src/bootstrap5TopLinkDisclosureMenuToggle.js";
import TopLinkDisclosureMenuToggle from "accessible-menu/src/topLinkDisclosureMenuToggle.js";

// Test Bootstrap5TopLinkDisclosureMenuToggle public methods.
describe("Bootstrap5TopLinkDisclosureMenuToggle public methods", () => {
  // Test Bootstrap5TopLinkDisclosureMenuItem open().
  describe("open", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle open.
    it("should implement the TopLinkDisclosureMenuToggle open", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype.open).toBe(
        TopLinkDisclosureMenuToggle.prototype.open
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle preview().
  describe("preview", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle preview.
    it("should implement the TopLinkDisclosureMenuToggle preview", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype.preview).toBe(
        TopLinkDisclosureMenuToggle.prototype.preview
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle close().
  describe("close", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle close.
    it("should implement the TopLinkDisclosureMenuToggle close", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype.close).toBe(
        TopLinkDisclosureMenuToggle.prototype.close
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle toggle().
  describe("toggle", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle toggle.
    it("should implement the TopLinkDisclosureMenuToggle toggle", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype.toggle).toBe(
        TopLinkDisclosureMenuToggle.prototype.toggle
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle closeSiblins().
  describe("closeSiblings", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle closeSiblings.
    it("should implement the TopLinkDisclosureMenuToggle closeSiblings", () => {
      expect(
        Bootstrap5TopLinkDisclosureMenuToggle.prototype.closeSiblings
      ).toBe(TopLinkDisclosureMenuToggle.prototype.closeSiblings);
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle closeChildren().
  describe("closeChildren", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle implements the TopLinkDisclosureMenuToggle closeChildren.
    it("should implement the TopLinkDisclosureMenuToggle closeChildren", () => {
      expect(
        Bootstrap5TopLinkDisclosureMenuToggle.prototype.closeChildren
      ).toBe(TopLinkDisclosureMenuToggle.prototype.closeChildren);
    });
  });
});
