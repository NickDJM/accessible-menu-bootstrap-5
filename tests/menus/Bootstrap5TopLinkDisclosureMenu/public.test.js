/**
 * Tests for public methods of Bootstrap5TopLinkDisclosureMenu class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5TopLinkDisclosureMenu from "../../../src/bootstrap5TopLinkDisclosureMenu.js";
import TopLinkDisclosureMenu from "accessible-menu/src/topLinkDisclosureMenu.js";

// Test Bootstrap5TopLinkDisclosureMenu public methods.
describe("Bootstrap5TopLinkDisclosureMenu public methods", () => {
  // Test Bootstrap5TopLinkDisclosureMenu focus().
  describe("focus", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focus() method.
    it("should implement the TopLinkDisclosureMenu focus() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focus).toBe(
        TopLinkDisclosureMenu.prototype.focus
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu blur().
  describe("blur", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu blur() method.
    it("should implement the TopLinkDisclosureMenu blur() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.blur).toBe(
        TopLinkDisclosureMenu.prototype.blur
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusCurrentChild().
  describe("focusCurrentChild", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusCurrentChild() method.
    it("should implement the TopLinkDisclosureMenu focusCurrentChild() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusCurrentChild).toBe(
        TopLinkDisclosureMenu.prototype.focusCurrentChild
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu blurCurrentChild().
  describe("blurCurrentChild", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu blurCurrentChild() method.
    it("should implement the TopLinkDisclosureMenu blurCurrentChild() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.blurCurrentChild).toBe(
        TopLinkDisclosureMenu.prototype.blurCurrentChild
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusChild().
  describe("focusChild", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusChild() method.
    it("should implement the TopLinkDisclosureMenu focusChild() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusChild).toBe(
        TopLinkDisclosureMenu.prototype.focusChild
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusFirstChild().
  describe("focusFirstChild", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusFirstChild() method.
    it("should implement the TopLinkDisclosureMenu focusFirstChild() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusFirstChild).toBe(
        TopLinkDisclosureMenu.prototype.focusFirstChild
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusLastChild().
  describe("focusLastChild", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusLastChild() method.
    it("should implement the TopLinkDisclosureMenu focusLastChild() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusLastChild).toBe(
        TopLinkDisclosureMenu.prototype.focusLastChild
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusNextChild().
  describe("focusNextChild", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusNextChild() method.
    it("should implement the TopLinkDisclosureMenu focusNextChild() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusNextChild).toBe(
        TopLinkDisclosureMenu.prototype.focusNextChild
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusPreviousChild().
  describe("focusPreviousChild", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusPreviousChild() method.
    it("should implement the TopLinkDisclosureMenu focusPreviousChild() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusPreviousChild).toBe(
        TopLinkDisclosureMenu.prototype.focusPreviousChild
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusController().
  describe("focusController", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusController() method.
    it("should implement the TopLinkDisclosureMenu focusController() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusController).toBe(
        TopLinkDisclosureMenu.prototype.focusController
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusContainer().
  describe("focusContainer", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusContainer() method.
    it("should implement the TopLinkDisclosureMenu focusContainer() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusContainer).toBe(
        TopLinkDisclosureMenu.prototype.focusContainer
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu closeChildren().
  describe("closeChildren", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu closeChildren() method.
    it("should implement the TopLinkDisclosureMenu closeChildren() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.closeChildren).toBe(
        TopLinkDisclosureMenu.prototype.closeChildren
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu BlurChildren().
  describe("blurChildren", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu blurChildren() method.
    it("should implement the TopLinkDisclosureMenu blurChildren() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.blurChildren).toBe(
        TopLinkDisclosureMenu.prototype.blurChildren
      );
    });
  });
});
