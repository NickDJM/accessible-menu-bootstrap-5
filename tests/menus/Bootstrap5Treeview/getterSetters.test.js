/**
 * Getter/Setter tests for the Bootstrap5Treeview class
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Bootstrap5Treeview from "../../../src/bootstrap5Treeview.js";
import { twoLevel } from "../../../demo/menus.js";
import Treeview from "accessible-menu/src/treeview.js";
import * as validation from "accessible-menu/src/validate.js";

beforeEach(() => {
  document.body.innerHTML = twoLevel;
});

afterEach(() => {
  document.body.innerHTML = "";
});

// Test all getter methods in the Bootstrap5Treeview class.
describe("Bootstrap5Treeview getter/setters", () => {
  // Test Bootstrap5Treeview dom.
  describe("dom", () => {
    // Test that Bootstrap5Treeview implements the Treeview dom getter.
    it("should implement the Treeview dom", () => {
      expect(Bootstrap5Treeview.prototype.dom).toBe(Treeview.prototype.dom);
    });
  });

  // Test Bootstrap5Treeview selectors.
  describe("selectors", () => {
    // Test that Bootstrap5Treeview implements the Treeview selectors getter.
    it("should implement the Treeview selectors", () => {
      expect(Bootstrap5Treeview.prototype.selectors).toBe(
        Treeview.prototype.selectors
      );
    });
  });

  // Test Bootstrap5Treeview elements.
  describe("elements", () => {
    // Test that Bootstrap5Treeview implements the Treeview elements getter.
    it("should implement the Treeview elements", () => {
      expect(Bootstrap5Treeview.prototype.elements).toBe(
        Treeview.prototype.elements
      );
    });
  });

  // Test Bootstrap5Treeview isTopLevel.
  describe("isTopLevel", () => {
    // Test that Bootstrap5Treeview implements the Treeview isTopLevel getter.
    it("should implement the Treeview isTopLevel", () => {
      expect(Bootstrap5Treeview.prototype.isTopLevel).toBe(
        Treeview.prototype.isTopLevel
      );
    });
  });

  // Test Bootstrap5Treeview openClass.
  // todo: Test that the open class for submenus defaults to the root menu's open class.
  describe("openClass", () => {
    // Test that openClass gets the open class name.
    it("should get the open class name", () => {
      // Create a Bootstrap5Treeview instance for testing.
      const menu = Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.openClass).toBe(menu._openClass);
    });

    // Test that openClass sets the open class name.
    it("should set the open class name", () => {
      // Create a Bootstrap5Treeview instance for testing.
      const menu = Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // Set up to check for validation.
      const spy = vi.spyOn(validation, "isValidClassList");

      // Set the menu's open class name.
      menu.openClass = "test-open";

      expect(spy).toHaveBeenCalledWith({ openClass: "test-open" });
      expect(menu._openClass).toBe("test-open");
    });
  });

  // Test Bootstrap5Treeview closeClass.
  // todo: Test that the close class for submenus defaults to the root menu's close class.
  describe("closeClass", () => {
    // Test that closeClass gets the close class name.
    it("should get the close class name", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.closeClass).toBe(menu._closeClass);
    });

    // Test that closeClass sets the close class name.
    it("should set the close class name", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // Set up to check for validation.
      const spy = vi.spyOn(validation, "isValidClassList");

      // Set the menu's close class name.
      menu.closeClass = "test-close";

      expect(spy).toHaveBeenCalledWith({ closeClass: "test-close" });
      expect(menu._closeClass).toBe("test-close");
    });
  });

  // Test Bootstrap5Treeview transitionClass.
  // todo: Test that the transition class for submenus defaults to the root menu's transition class.
  describe("transitionClass", () => {
    // Test that transitionClass gets the transition class name.
    it("should get the transition class name", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.transitionClass).toBe(menu._transitionClass);
    });

    // Test that transitionClass sets the transition class name.
    it("should set the transition class name", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // Set up to check for validation.
      const spy = vi.spyOn(validation, "isValidClassList");

      // Set the menu's transition class name.
      menu.transitionClass = "test-transition";

      expect(spy).toHaveBeenCalledWith({ transitionClass: "test-transition" });
      expect(menu._transitionClass).toBe("test-transition");
    });
  });

  // Test Bootstrap5Treeview currentChild.
  describe("currentChild", () => {
    // Test that Bootstrap5Treeview implements the Treeview currentChild getter.
    it("should implement the Treeview currentChild", () => {
      expect(Bootstrap5Treeview.prototype.currentChild).toBe(
        Treeview.prototype.currentChild
      );
    });
  });

  // Test Bootstrap5Treeview focusState.
  describe("focusState", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusState getter.
    it("should implement the Treeview focusState", () => {
      expect(Bootstrap5Treeview.prototype.focusState).toBe(
        Treeview.prototype.focusState
      );
    });
  });

  // Test Bootstrap5Treeview currentEvent.
  describe("currentEvent", () => {
    // Test that Bootstrap5Treeview implements the Treeview currentEvent getter.
    it("should implement the Treeview currentEvent", () => {
      expect(Bootstrap5Treeview.prototype.currentEvent).toBe(
        Treeview.prototype.currentEvent
      );
    });
  });

  // Test Bootstrap5Treeview currentMenuItem.
  describe("currentMenuItem", () => {
    // Test that currentMenuItem gets the current menu item.
    it("should get the current menu item", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.currentMenuItem).toBe(
        menu.elements.menuItems[menu.currentChild]
      );
    });
  });

  // Test Bootstrap5Treeview hoverType.
  describe("hoverType", () => {
    // Test that hoverType gets the hover type.
    it("should get the hover type", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.hoverType).toBe(menu._hoverType);
    });

    // Test that hoverType sets the hover type.
    it("should set the hover type", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // Set up to check for validation.
      const spy = vi.spyOn(validation, "isValidHoverType");

      // Set the menu's hover type.
      menu.hoverType = "on";

      expect(spy).toHaveBeenCalledWith({ value: "on" });
      expect(menu._hoverType).toBe("on");
    });
  });

  // Test Bootstrap5Treeview hoverDelay.
  describe("hoverDelay", () => {
    // Test that hoverDelay gets the hover delay value.
    it("should get the hover delay value", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.hoverDelay).toBe(menu._hoverDelay);
    });

    // Test that hoverDelay sets the hover delay value.
    it("should set the hover delay value", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // Set up to check for validation.
      const spy = vi.spyOn(validation, "isValidType");

      // Set the menu's hover delay value.
      menu.hoverDelay = 200;

      expect(spy).toHaveBeenCalledWith("number", { value: 200 });
      expect(menu._hoverDelay).toBe(200);
    });
  });

  // Test Bootstrap5Treeview enterDelay.
  describe("enterDelay", () => {
    // Test that enterDelay gets the enter delay value.
    it("should get the enter delay value", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // In this case, because we have not set the enter delay,
      // it should be the same as the hover delay.
      expect(menu.enterDelay).toBe(menu._hoverDelay);
    });

    // Test that enterDelay sets the enter delay value.
    it("should set the enter delay value", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // Set up to check for validation.
      const spy = vi.spyOn(validation, "isValidType");

      // Set the menu's enter delay value.
      menu.enterDelay = 100;

      expect(spy).toHaveBeenCalledWith("number", { value: 100 });
      expect(menu._enterDelay).toBe(100);
    });
  });

  // Test Bootstrap5Treeview leaveDelay.
  describe("leaveDelay", () => {
    // Test that leaveDelay gets the leave delay value.
    it("should get the leave delay value", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // In this case, because we have not set the leave delay,
      // it should be the same as the hover delay.
      expect(menu.leaveDelay).toBe(menu._hoverDelay);
    });

    // Test that leaveDelay sets the leave delay value.
    it("should set the leave delay value", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
      });

      // Set up to check for validation.
      const spy = vi.spyOn(validation, "isValidType");

      // Set the menu's leave delay value.
      menu.leaveDelay = 100;

      expect(spy).toHaveBeenCalledWith("number", { value: 100 });
      expect(menu._leaveDelay).toBe(100);
    });
  });

  // Test Bootstrap5Treeview shouldFocus.
  describe("shouldFocus", () => {
    // Test that Bootstrap5Treeview implements the Treeview shouldFocus getter.
    it("should implement the Treeview shouldFocus", () => {
      expect(Bootstrap5Treeview.prototype.shouldFocus).toBe(
        Treeview.prototype.shouldFocus
      );
    });
  });

  // Test Bootstrap5Treeview errors.
  describe("errors", () => {
    // Test that Bootstrap5Treeview implements the Treeview errors getter.
    it("should implement the Treeview errors", () => {
      expect(Bootstrap5Treeview.prototype.errors).toBe(
        Treeview.prototype.errors
      );
    });
  });
});
