/**
 * Tests for public methods of Bootstrap5DisclosureMenu class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5DisclosureMenu from "../../../src/bootstrap5DisclosureMenu.js";
import DisclosureMenu from "accessible-menu/src/disclosureMenu.js";

// Test Bootstrap5DisclosureMenu public methods.
describe("Bootstrap5DisclosureMenu public methods", () => {
  // Test Bootstrap5DisclosureMenu focus().
  describe("focus", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focus() method.
    it("should implement the DisclosureMenu focus() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focus).toBe(
        DisclosureMenu.prototype.focus
      );
    });
  });

  // Test Bootstrap5DisclosureMenu blur().
  describe("blur", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu blur() method.
    it("should implement the DisclosureMenu blur() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.blur).toBe(
        DisclosureMenu.prototype.blur
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusCurrentChild().
  describe("focusCurrentChild", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusCurrentChild() method.
    it("should implement the DisclosureMenu focusCurrentChild() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusCurrentChild).toBe(
        DisclosureMenu.prototype.focusCurrentChild
      );
    });
  });

  // Test Bootstrap5DisclosureMenu blurCurrentChild().
  describe("blurCurrentChild", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu blurCurrentChild() method.
    it("should implement the DisclosureMenu blurCurrentChild() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.blurCurrentChild).toBe(
        DisclosureMenu.prototype.blurCurrentChild
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusChild().
  describe("focusChild", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusChild() method.
    it("should implement the DisclosureMenu focusChild() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusChild).toBe(
        DisclosureMenu.prototype.focusChild
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusFirstChild().
  describe("focusFirstChild", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusFirstChild() method.
    it("should implement the DisclosureMenu focusFirstChild() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusFirstChild).toBe(
        DisclosureMenu.prototype.focusFirstChild
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusLastChild().
  describe("focusLastChild", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusLastChild() method.
    it("should implement the DisclosureMenu focusLastChild() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusLastChild).toBe(
        DisclosureMenu.prototype.focusLastChild
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusNextChild().
  describe("focusNextChild", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusNextChild() method.
    it("should implement the DisclosureMenu focusNextChild() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusNextChild).toBe(
        DisclosureMenu.prototype.focusNextChild
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusPreviousChild().
  describe("focusPreviousChild", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusPreviousChild() method.
    it("should implement the DisclosureMenu focusPreviousChild() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusPreviousChild).toBe(
        DisclosureMenu.prototype.focusPreviousChild
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusController().
  describe("focusController", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusController() method.
    it("should implement the DisclosureMenu focusController() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusController).toBe(
        DisclosureMenu.prototype.focusController
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusContainer().
  describe("focusContainer", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusContainer() method.
    it("should implement the DisclosureMenu focusContainer() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusContainer).toBe(
        DisclosureMenu.prototype.focusContainer
      );
    });
  });

  // Test Bootstrap5DisclosureMenu closeChildren().
  describe("closeChildren", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu closeChildren() method.
    it("should implement the DisclosureMenu closeChildren() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.closeChildren).toBe(
        DisclosureMenu.prototype.closeChildren
      );
    });
  });

  // Test Bootstrap5DisclosureMenu BlurChildren().
  describe("blurChildren", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu blurChildren() method.
    it("should implement the DisclosureMenu blurChildren() method", () => {
      expect(Bootstrap5DisclosureMenu.prototype.blurChildren).toBe(
        DisclosureMenu.prototype.blurChildren
      );
    });
  });
});
