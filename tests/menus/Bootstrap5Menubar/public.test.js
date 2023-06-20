/**
 * Tests for public methods of Bootstrap5Menubar class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { twoLevel } from "../../../demo/menus.js";
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
    beforeEach(() => {
      document.body.innerHTML = twoLevel;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    // Test that Bootstrap5Menubar does not implement the Menubar focusNextChild() method.
    it("should not implement the Menubar focusNextChild() method", () => {
      expect(Bootstrap5Menubar.prototype.focusNextChild).not.toBe(
        Menubar.prototype.focusNextChild
      );
    });

    // Test that focusNextChild calls focusChild() with the index of the next menu item.
    it("should call focusChild() with the index of the next menu item", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.focusNextChild();

      expect(spy).toHaveBeenCalledWith(1);
    });

    // Test that focusNextChild calls focusFirstChild() if the currentChild index is the last menu item.
    it("should call focusFirstChild() if the currentChild index is the last menu item", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set the current child to the last menu item.
      menu.currentChild = 7;

      // Set up to check for focus.
      const spy1 = vi.spyOn(menu, "focusFirstChild");
      const spy2 = vi.spyOn(menu, "focusChild");

      menu.focusNextChild();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalledWith(8);
    });
  });

  // Test Bootstrap5Menubar focusPreviousChild().
  describe("focusPreviousChild", () => {
    beforeEach(() => {
      document.body.innerHTML = twoLevel;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    // Test that Bootstrap5Menubar does not implement the Menubar focusPreviousChild() method.
    it("should not implement the Menubar focusPreviousChild() method", () => {
      expect(Bootstrap5Menubar.prototype.focusPreviousChild).not.toBe(
        Menubar.prototype.focusPreviousChild
      );
    });

    // Test that focusPreviousChild calls focusChild() with the index of the previous menu item.
    it("should call focusChild() with the index of the previous menu item", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set the current child to the last menu item.
      menu.currentChild = 6;

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.focusPreviousChild();

      expect(spy).toHaveBeenCalledWith(5);
    });

    // Test that focusPreviousChild calls focusLastChild() if the currentChild index is the first menu item.
    it("should call focusLastChild() if the currentChild index is the first menu item", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusLastChild");
      const spy2 = vi.spyOn(menu, "focusChild");

      menu.focusPreviousChild();

      expect(spy).toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalledWith(-2);
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
    beforeEach(() => {
      document.body.innerHTML = twoLevel;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    // Test that focusNextChildWithCharacter calls focusChild with the index of the item starting with a given character.
    it("should call focusChild with the index of the item starting with a given character", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.focusNextChildWithCharacter("B");

      expect(spy).toHaveBeenCalledWith(4);
    });

    // Test that focusNextChildWithCharacter does not call focusChild if no item starts with a given character.
    it("should not call focusChild if no item starts with a given character", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.focusNextChildWithCharacter("Z");

      expect(spy).not.toHaveBeenCalled();
    });

    // Test that focusNextChildWithCharacter does not call focusChild if there _is_ an item starting with a given character, but it is before the currentChild.
    it("should not call focusChild if there is an item starting with a given character, but it is before the currentChild", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      menu.currentChild = 5;

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.focusNextChildWithCharacter("B");

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
