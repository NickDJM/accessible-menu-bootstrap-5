/**
 * Tests for protected methods of Bootstrap5DisclosureMenu class.
 *
 * @todo Add tests for: _disableBootstrapDropdownBehaviour().
 */

import { describe, it, expect } from "vitest";
import Bootstrap5DisclosureMenu from "../../../src/bootstrap5DisclosureMenu.js";
import DisclosureMenu from "accessible-menu/src/disclosureMenu.js";

// Test Bootstrap5DisclosureMenu protected methods.
describe("Bootstrap5DisclosureMenu protected methods", () => {
  // Test Bootstrap5DisclosureMenu _setDOMElementType().
  describe("_setDOMElementType", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu _setDOMElementType() method.
    it("should implement the DisclosureMenu _setDOMElementType() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype._setDOMElementType).toBe(
        DisclosureMenu.prototype._setDOMElementType
      );
    });
  });

  // Test Bootstrap5DisclosureMenu _resetDOMElementType().
  describe("_resetDOMElementType", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu _resetDOMElementType() method.
    it("should implement the DisclosureMenu _resetDOMElementType() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype._resetDOMElementType).toBe(
        DisclosureMenu.prototype._resetDOMElementType
      );
    });
  });

  // Test Bootstrap5DisclosureMenu _handleFocus().
  describe("_handleFocus", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu _handleFocus() method.
    it("should implement the DisclosureMenu _handleFocus() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype._handleFocus).toBe(
        DisclosureMenu.prototype._handleFocus
      );
    });
  });

  // Test Bootstrap5DisclosureMenu _handleClick().
  describe("_handleClick", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu _handleClick() method.
    it("should implement the DisclosureMenu _handleClick() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype._handleClick).toBe(
        DisclosureMenu.prototype._handleClick
      );
    });
  });

  // Test Bootstrap5DisclosureMenu _handleHover().
  describe("_handleHover", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu _handleHover() method.
    it("should implement the DisclosureMenu _handleHover() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype._handleHover).toBe(
        DisclosureMenu.prototype._handleHover
      );
    });
  });

  // Test Bootstrap5DisclosureMenu _handleKeydown().
  describe("_handleKeydown", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu _handleKeydown() method.
    it("should implement the DisclosureMenu _handleKeydown() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype._handleKeydown).toBe(
        DisclosureMenu.prototype._handleKeydown
      );
    });
  });

  // Test Bootstrap5DisclosureMenu _handleKeyup().
  describe("_handleKeyup", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu _handleKeyup() method.
    it("should implement the DisclosureMenu _handleKeyup() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype._handleKeyup).toBe(
        DisclosureMenu.prototype._handleKeyup
      );
    });
  });
});
