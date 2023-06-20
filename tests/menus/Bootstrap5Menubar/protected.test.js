/**
 * Tests for protected methods of Bootstrap5Menubar class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5Menubar from "../../../src/bootstrap5Menubar.js";
import Menubar from "accessible-menu/src/menubar.js";

// Test Bootstrap5Menubar protected methods.
describe("Bootstrap5Menubar protected methods", () => {
  // Test Bootstrap5Menubar _setDOMElementType().
  describe("_setDOMElementType", () => {
    // Test that Bootstrap5Menubar implements the Menubar _setDOMElementType() method.
    it("should implement the Menubar _setDOMElementType() method", () => {
      expect(Bootstrap5Menubar.prototype._setDOMElementType).toBe(
        Menubar.prototype._setDOMElementType
      );
    });
  });

  // Test Bootstrap5Menubar _resetDOMElementType().
  describe("_resetDOMElementType", () => {
    // Test that Bootstrap5Menubar implements the Menubar _resetDOMElementType() method.
    it("should implement the Menubar _resetDOMElementType() method", () => {
      expect(Bootstrap5Menubar.prototype._resetDOMElementType).toBe(
        Menubar.prototype._resetDOMElementType
      );
    });
  });

  // Test Bootstrap5Menubar _handleFocus().
  describe("_handleFocus", () => {
    // Test that Bootstrap5Menubar implements the Menubar _handleFocus() method.
    it("should implement the Menubar _handleFocus() method", () => {
      expect(Bootstrap5Menubar.prototype._handleFocus).toBe(
        Menubar.prototype._handleFocus
      );
    });
  });

  // Test Bootstrap5Menubar _handleClick().
  describe("_handleClick", () => {
    // Test that Bootstrap5Menubar implements the Menubar _handleClick() method.
    it("should implement the Menubar _handleClick() method", () => {
      expect(Bootstrap5Menubar.prototype._handleClick).toBe(
        Menubar.prototype._handleClick
      );
    });
  });

  // Test Bootstrap5Menubar _handleHover().
  describe("_handleHover", () => {
    // Test that Bootstrap5Menubar implements the Menubar _handleHover() method.
    it("should implement the Menubar _handleHover() method", () => {
      expect(Bootstrap5Menubar.prototype._handleHover).toBe(
        Menubar.prototype._handleHover
      );
    });
  });

  // Test Bootstrap5Menubar _handleKeydown().
  describe("_handleKeydown", () => {
    // Test that Bootstrap5Menubar implements the Menubar _handleKeydown() method.
    it("should implement the Menubar _handleKeydown() method", () => {
      expect(Bootstrap5Menubar.prototype._handleKeydown).toBe(
        Menubar.prototype._handleKeydown
      );
    });
  });

  // Test Bootstrap5Menubar _handleKeyup().
  describe("_handleKeyup", () => {
    // Test that Bootstrap5Menubar implements the Menubar _handleKeyup() method.
    it("should implement the Menubar _handleKeyup() method", () => {
      expect(Bootstrap5Menubar.prototype._handleKeyup).toBe(
        Menubar.prototype._handleKeyup
      );
    });
  });
});
