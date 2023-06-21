/**
 * Tests for protected methods of Bootstrap5TopLinkDisclosureMenu class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TopLinkDisclosureMenu from "../../../src/bootstrap5TopLinkDisclosureMenu.js";
import TopLinkDisclosureMenu from "accessible-menu/src/topLinkDisclosureMenu.js";

// Test Bootstrap5TopLinkDisclosureMenu protected methods.
describe("Bootstrap5TopLinkDisclosureMenu protected methods", () => {
  // Test Bootstrap5TopLinkDisclosureMenu _setDOMElementType().
  describe("_setDOMElementType", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _setDOMElementType() method.
    it("should implement the TopLinkDisclosureMenu _setDOMElementType() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._setDOMElementType).toBe(
        TopLinkDisclosureMenu.prototype._setDOMElementType
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _resetDOMElementType().
  describe("_resetDOMElementType", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _resetDOMElementType() method.
    it("should implement the TopLinkDisclosureMenu _resetDOMElementType() method", () => {
      expect(
        Bootstrap5TopLinkDisclosureMenu.prototype._resetDOMElementType
      ).toBe(TopLinkDisclosureMenu.prototype._resetDOMElementType);
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleFocus().
  describe("_handleFocus", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleFocus() method.
    it("should implement the TopLinkDisclosureMenu _handleFocus() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleFocus).toBe(
        TopLinkDisclosureMenu.prototype._handleFocus
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleClick().
  describe("_handleClick", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleClick() method.
    it("should implement the TopLinkDisclosureMenu _handleClick() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleClick).toBe(
        TopLinkDisclosureMenu.prototype._handleClick
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleHover().
  describe("_handleHover", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleHover() method.
    it("should implement the TopLinkDisclosureMenu _handleHover() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleHover).toBe(
        TopLinkDisclosureMenu.prototype._handleHover
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleKeydown().
  describe("_handleKeydown", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleKeydown() method.
    it("should implement the TopLinkDisclosureMenu _handleKeydown() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleKeydown).toBe(
        TopLinkDisclosureMenu.prototype._handleKeydown
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleKeyup().
  describe("_handleKeyup", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleKeyup() method.
    it("should implement the TopLinkDisclosureMenu _handleKeyup() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleKeyup).toBe(
        TopLinkDisclosureMenu.prototype._handleKeyup
      );
    });
  });
});
