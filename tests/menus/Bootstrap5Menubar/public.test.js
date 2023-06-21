/**
 * Tests for public methods of Bootstrap5Menubar class.
 */

import { describe, it, expect } from "vitest";
import Bootstrap5Menubar from "../../../src/bootstrap5Menubar.js";
import Menubar from "accessible-menu/src/menubar.js";

// Test Bootstrap5Menubar public methods.
describe("Bootstrap5Menubar public methods", () => {
  // Test Bootstrap5Menubar focus().
  describe("focus", () => {
    // Test that Bootstrap5Menubar implements the Menubar focus() method.
    it("should implement the Menubar focus() method", () => {
      expect(Bootstrap5Menubar.prototype.focus).toBe(Menubar.prototype.focus);
    });
  });

  // Test Bootstrap5Menubar blur().
  describe("blur", () => {
    // Test that Bootstrap5Menubar implements the Menubar blur() method.
    it("should implement the Menubar blur() method", () => {
      expect(Bootstrap5Menubar.prototype.blur).toBe(Menubar.prototype.blur);
    });
  });

  // Test Bootstrap5Menubar focusCurrentChild().
  describe("focusCurrentChild", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusCurrentChild() method.
    it("should implement the Menubar focusCurrentChild() method", () => {
      expect(Bootstrap5Menubar.prototype.focusCurrentChild).toBe(
        Menubar.prototype.focusCurrentChild
      );
    });
  });

  // Test Bootstrap5Menubar blurCurrentChild().
  describe("blurCurrentChild", () => {
    // Test that Bootstrap5Menubar implements the Menubar blurCurrentChild() method.
    it("should implement the Menubar blurCurrentChild() method", () => {
      expect(Bootstrap5Menubar.prototype.blurCurrentChild).toBe(
        Menubar.prototype.blurCurrentChild
      );
    });
  });

  // Test Bootstrap5Menubar focusChild().
  describe("focusChild", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusChild() method.
    it("should implement the Menubar focusChild() method", () => {
      expect(Bootstrap5Menubar.prototype.focusChild).toBe(
        Menubar.prototype.focusChild
      );
    });
  });

  // Test Bootstrap5Menubar focusFirstChild().
  describe("focusFirstChild", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusFirstChild() method.
    it("should implement the Menubar focusFirstChild() method", () => {
      expect(Bootstrap5Menubar.prototype.focusFirstChild).toBe(
        Menubar.prototype.focusFirstChild
      );
    });
  });

  // Test Bootstrap5Menubar focusLastChild().
  describe("focusLastChild", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusLastChild() method.
    it("should implement the Menubar focusLastChild() method", () => {
      expect(Bootstrap5Menubar.prototype.focusLastChild).toBe(
        Menubar.prototype.focusLastChild
      );
    });
  });

  // Test Bootstrap5Menubar focusNextChild().
  describe("focusNextChild", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusNextChild() method.
    it("should implement the Menubar focusNextChild() method", () => {
      expect(Bootstrap5Menubar.prototype.focusNextChild).toBe(
        Menubar.prototype.focusNextChild
      );
    });
  });

  // Test Bootstrap5Menubar focusPreviousChild().
  describe("focusPreviousChild", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusPreviousChild() method.
    it("should implement the Menubar focusPreviousChild() method", () => {
      expect(Bootstrap5Menubar.prototype.focusPreviousChild).toBe(
        Menubar.prototype.focusPreviousChild
      );
    });
  });

  // Test Bootstrap5Menubar focusController().
  describe("focusController", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusController() method.
    it("should implement the Menubar focusController() method", () => {
      expect(Bootstrap5Menubar.prototype.focusController).toBe(
        Menubar.prototype.focusController
      );
    });
  });

  // Test Bootstrap5Menubar focusContainer().
  describe("focusContainer", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusContainer() method.
    it("should implement the Menubar focusContainer() method", () => {
      expect(Bootstrap5Menubar.prototype.focusContainer).toBe(
        Menubar.prototype.focusContainer
      );
    });
  });

  // Test Bootstrap5Menubar closeChildren().
  describe("closeChildren", () => {
    // Test that Bootstrap5Menubar implements the Menubar closeChildren() method.
    it("should implement the Menubar closeChildren() method", () => {
      expect(Bootstrap5Menubar.prototype.closeChildren).toBe(
        Menubar.prototype.closeChildren
      );
    });
  });

  // Test Bootstrap5Menubar BlurChildren().
  describe("blurChildren", () => {
    // Test that Bootstrap5Menubar implements the Menubar blurChildren() method.
    it("should implement the Menubar blurChildren() method", () => {
      expect(Bootstrap5Menubar.prototype.blurChildren).toBe(
        Menubar.prototype.blurChildren
      );
    });
  });

  // Test Bootstrap5Menubar focusNextChildWithCharacter().
  describe("focusNextChildWithCharacter", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusNextChildWithCharacter() method.
    it("should implement the Menubar focusNextChildWithCharacter() method", () => {
      expect(Bootstrap5Menubar.prototype.focusNextChildWithCharacter).toBe(
        Menubar.prototype.focusNextChildWithCharacter
      );
    });
  });
});
