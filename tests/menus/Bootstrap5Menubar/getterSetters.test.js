/**
 * Getter/Setter tests for the Bootstrap5Menubar class
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Bootstrap5Menubar from "../../../src/bootstrap5Menubar.js";
import { twoLevel } from "../../../demo/menus.js";
import Menubar from "accessible-menu/src/menubar.js";
import * as validation from "accessible-menu/src/validate.js";

beforeEach(() => {
  document.body.innerHTML = twoLevel;
});

afterEach(() => {
  document.body.innerHTML = "";
});

// Test all getter/setter methods in the Bootstrap5Menubar class.
describe("Bootstrap5Menubar getter/setters", () => {
  // Test Bootstrap5Menubar dom.
  describe("dom", () => {
    // Test that Bootstrap5Menubar implements the Menubar dom getter.
    it("should implement the Menubar dom", () => {
      expect(Bootstrap5Menubar.prototype.dom).toBe(Menubar.prototype.dom);
    });
  });

  // Test Bootstrap5Menubar selectors.
  describe("selectors", () => {
    // Test that Bootstrap5Menubar implements the Menubar selectors getter.
    it("should implement the Menubar selectors", () => {
      expect(Bootstrap5Menubar.prototype.selectors).toBe(
        Menubar.prototype.selectors
      );
    });
  });

  // Test Bootstrap5Menubar elements.
  describe("elements", () => {
    // Test that Bootstrap5Menubar implements the Menubar elements getter.
    it("should implement the Menubar elements", () => {
      expect(Bootstrap5Menubar.prototype.elements).toBe(
        Menubar.prototype.elements
      );
    });
  });

  // Test Bootstrap5Menubar isTopLevel.
  describe("isTopLevel", () => {
    // Test that Bootstrap5Menubar implements the Menubar isTopLevel getter.
    it("should implement the Menubar isTopLevel", () => {
      expect(Bootstrap5Menubar.prototype.isTopLevel).toBe(
        Menubar.prototype.isTopLevel
      );
    });
  });

  // Test Bootstrap5Menubar openClass.
  // todo: Test that the open class for submenus defaults to the root menu's open class.
  describe("openClass", () => {
    // Test that openClass gets the open class name.
    it("should get the open class name", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.openClass).toBe(menu._openClass);
    });

    // Test that openClass sets the open class name.
    it("should set the open class name", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
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

  // Test Bootstrap5Menubar closeClass.
  // todo: Test that the close class for submenus defaults to the root menu's close class.
  describe("closeClass", () => {
    // Test that closeClass gets the close class name.
    it("should get the close class name", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.closeClass).toBe(menu._closeClass);
    });

    // Test that closeClass sets the close class name.
    it("should set the close class name", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
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

  // Test Bootstrap5Menubar transitionClass.
  // todo: Test that the transition class for submenus defaults to the root menu's transition class.
  describe("transitionClass", () => {
    // Test that transitionClass gets the transition class name.
    it("should get the transition class name", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.transitionClass).toBe(menu._transitionClass);
    });

    // Test that transitionClass sets the transition class name.
    it("should set the transition class name", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
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

  // Test Bootstrap5Menubar currentChild.
  describe("currentChild", () => {
    // Test that Bootstrap5Menubar implements the Menubar currentChild getter.
    it("should implement the Menubar currentChild", () => {
      expect(Bootstrap5Menubar.prototype.currentChild).toBe(
        Menubar.prototype.currentChild
      );
    });
  });

  // Test Bootstrap5Menubar focusState.
  describe("focusState", () => {
    // Test that Bootstrap5Menubar implements the Menubar focusState getter.
    it("should implement the Menubar focusState", () => {
      expect(Bootstrap5Menubar.prototype.focusState).toBe(
        Menubar.prototype.focusState
      );
    });
  });

  // Test Bootstrap5Menubar currentEvent.
  describe("currentEvent", () => {
    // Test that Bootstrap5Menubar implements the Menubar currentEvent getter.
    it("should implement the Menubar currentEvent", () => {
      expect(Bootstrap5Menubar.prototype.currentEvent).toBe(
        Menubar.prototype.currentEvent
      );
    });
  });

  // Test Bootstrap5Menubar currentMenuItem.
  describe("currentMenuItem", () => {
    // Test that currentMenuItem gets the current menu item.
    it("should get the current menu item", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.currentMenuItem).toBe(
        menu.elements.menuItems[menu.currentChild]
      );
    });
  });

  // Test Bootstrap5Menubar hoverType.
  describe("hoverType", () => {
    // Test that hoverType gets the hover type.
    it("should get the hover type", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.hoverType).toBe(menu._hoverType);
    });

    // Test that hoverType sets the hover type.
    it("should set the hover type", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
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

  // Test Bootstrap5Menubar hoverDelay.
  describe("hoverDelay", () => {
    // Test that hoverDelay gets the hover delay value.
    it("should get the hover delay value", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.hoverDelay).toBe(menu._hoverDelay);
    });

    // Test that hoverDelay sets the hover delay value.
    it("should set the hover delay value", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
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

  // Test Bootstrap5Menubar enterDelay.
  describe("enterDelay", () => {
    // Test that enterDelay gets the enter delay value.
    it("should get the enter delay value", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      // In this case, because we have not set the enter delay,
      // it should be the same as the hover delay.
      expect(menu.enterDelay).toBe(menu._hoverDelay);
    });

    // Test that enterDelay sets the enter delay value.
    it("should set the enter delay value", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
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

  // Test Bootstrap5Menubar leaveDelay.
  describe("leaveDelay", () => {
    // Test that leaveDelay gets the leave delay value.
    it("should get the leave delay value", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      // In this case, because we have not set the leave delay,
      // it should be the same as the hover delay.
      expect(menu.leaveDelay).toBe(menu._hoverDelay);
    });

    // Test that leaveDelay sets the leave delay value.
    it("should set the leave delay value", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
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

  // Test Bootstrap5Menubar shouldFocus.
  describe("shouldFocus", () => {
    // Test that Bootstrap5Menubar implements the Menubar shouldFocus getter.
    it("should implement the Menubar shouldFocus", () => {
      expect(Bootstrap5Menubar.prototype.shouldFocus).toBe(
        Menubar.prototype.shouldFocus
      );
    });
  });

  // Test Bootstrap5Menubar errors.
  describe("errors", () => {
    // Test that Bootstrap5Menubar implements the Menubar errors getter.
    it("should implement the Menubar errors", () => {
      expect(Bootstrap5Menubar.prototype.errors).toBe(Menubar.prototype.errors);
    });
  });

  // Test Bootstrap5Menubar bootstrapDisabled.
  describe("bootstrapDisabled", () => {
    // Test that bootstrapDisabled gets the bootstrap disabled value.
    it("should get the bootstrap disabled value", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapDisabled).toBe(menu._disableBootstrap);
    });
  });

  // Test Bootstrap5Menubar bootstrapPseudoDropdownElement.
  describe("bootstrapPseudoDropdownElement", () => {
    // Test that bootstrapPseudoDropdownElement gets the bootstrap pseudo dropdown element.
    it("should get the bootstrap pseudo dropdown element", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapPseudoDropdownElement).toBe(
        menu._pseudoDropdownElement
      );
    });
  });

  // Test Bootstrap5Menubar bootstrapEvents.
  describe("bootstrapEvents", () => {
    // Test that bootstrapEvents gets the bootstrap events array.
    it("should get the bootstrap events array", () => {
      // Create a new Bootstrap5Menubar instance for testing.
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapEvents).toEqual(menu._bootstrapEvents);
    });
  });
});
