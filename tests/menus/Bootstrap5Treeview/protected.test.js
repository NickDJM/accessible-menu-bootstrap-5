/**
 * Tests for protected methods of Bootstrap5Treeview class.
 *
 * @todo Add tests for: _disableBootstrapDropdownBehaviour().
 */

import { describe, it, expect } from "vitest";
import Bootstrap5Treeview from "../../../src/bootstrap5Treeview.js";
import Treeview from "accessible-menu/src/treeview.js";

// Test Bootstrap5Treeview protected methods.
describe("Bootstrap5Treeview protected methods", () => {
  // Test Bootstrap5Treeview _setDOMElementType().
  describe("_setDOMElementType", () => {
    // Test that Bootstrap5Treeview implements the Treeview _setDOMElementType() method.
    it("should implement the Treeview _setDOMElementType() method", () => {
      expect(Bootstrap5Treeview.prototype._setDOMElementType).toBe(
        Treeview.prototype._setDOMElementType
      );
    });
  });

  // Test Bootstrap5Treeview _resetDOMElementType().
  describe("_resetDOMElementType", () => {
    // Test that Bootstrap5Treeview implements the Treeview _resetDOMElementType() method.
    it("should implement the Treeview _resetDOMElementType() method", () => {
      expect(Bootstrap5Treeview.prototype._resetDOMElementType).toBe(
        Treeview.prototype._resetDOMElementType
      );
    });
  });

  // Test Bootstrap5Treeview _handleFocus().
  describe("_handleFocus", () => {
    // Test that Bootstrap5Treeview implements the Treeview _handleFocus() method.
    it("should implement the Treeview _handleFocus() method", () => {
      expect(Bootstrap5Treeview.prototype._handleFocus).toBe(
        Treeview.prototype._handleFocus
      );
    });
  });

  // Test Bootstrap5Treeview _handleClick().
  describe("_handleClick", () => {
    // Test that Bootstrap5Treeview implements the Treeview _handleClick() method.
    it("should implement the Treeview _handleClick() method", () => {
      expect(Bootstrap5Treeview.prototype._handleClick).toBe(
        Treeview.prototype._handleClick
      );
    });
  });

  // Test Bootstrap5Treeview _handleHover().
  describe("_handleHover", () => {
    // Test that Bootstrap5Treeview implements the Treeview _handleHover() method.
    it("should implement the Treeview _handleHover() method", () => {
      expect(Bootstrap5Treeview.prototype._handleHover).toBe(
        Treeview.prototype._handleHover
      );
    });
  });

  // Test Bootstrap5Treeview _handleKeydown().
  describe("_handleKeydown", () => {
    // Test that Bootstrap5Treeview implements the Treeview _handleKeydown() method.
    it("should implement the Treeview _handleKeydown() method", () => {
      expect(Bootstrap5Treeview.prototype._handleKeydown).toBe(
        Treeview.prototype._handleKeydown
      );
    });
  });

  // Test Bootstrap5Treeview _handleKeyup().
  describe("_handleKeyup", () => {
    // Test that Bootstrap5Treeview implements the Treeview _handleKeyup() method.
    it("should implement the Treeview _handleKeyup() method", () => {
      expect(Bootstrap5Treeview.prototype._handleKeyup).toBe(
        Treeview.prototype._handleKeyup
      );
    });
  });
});
