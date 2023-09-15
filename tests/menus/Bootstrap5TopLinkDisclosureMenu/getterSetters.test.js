/**
 * Getter/Setter tests for the Bootstrap5TopLinkDisclosureMenu class
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Bootstrap5TopLinkDisclosureMenu from "../../../src/bootstrap5TopLinkDisclosureMenu.js";
import { twoLevelTopLink } from "../../../demo/menus.js";
import TopLinkDisclosureMenu from "accessible-menu/src/topLinkDisclosureMenu.js";
import * as validation from "accessible-menu/src/validate.js";

beforeEach(() => {
  document.body.innerHTML = twoLevelTopLink;
});

afterEach(() => {
  document.body.innerHTML = "";
});

// Test all getter/setter methods in the Bootstrap5TopLinkDisclosureMenu class.
describe("Bootstrap5TopLinkDisclosureMenu getter/setters", () => {
  // Test Bootstrap5TopLinkDisclosureMenu dom.
  describe("dom", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu dom getter.
    it("should implement the TopLinkDisclosureMenu dom", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.dom).toBe(
        TopLinkDisclosureMenu.prototype.dom
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu selectors.
  describe("selectors", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu selectors getter.
    it("should implement the TopLinkDisclosureMenu selectors", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.selectors).toBe(
        TopLinkDisclosureMenu.prototype.selectors
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu elements.
  describe("elements", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu elements getter.
    it("should implement the TopLinkDisclosureMenu elements", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.elements).toBe(
        TopLinkDisclosureMenu.prototype.elements
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu isTopLevel.
  describe("isTopLevel", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu isTopLevel getter.
    it("should implement the TopLinkDisclosureMenu isTopLevel", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.isTopLevel).toBe(
        TopLinkDisclosureMenu.prototype.isTopLevel
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu openClass.
  // todo: Test that the open class for submenus defaults to the root menu's open class.
  describe("openClass", () => {
    // Test that openClass gets the open class name.
    it("should get the open class name", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.openClass).toBe(menu._openClass);
    });

    // Test that openClass sets the open class name.
    it("should set the open class name", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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

  // Test Bootstrap5TopLinkDisclosureMenu closeClass.
  // todo: Test that the close class for submenus defaults to the root menu's close class.
  describe("closeClass", () => {
    // Test that closeClass gets the close class name.
    it("should get the close class name", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.closeClass).toBe(menu._closeClass);
    });

    // Test that closeClass sets the close class name.
    it("should set the close class name", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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

  // Test Bootstrap5TopLinkDisclosureMenu transitionClass.
  // todo: Test that the transition class for submenus defaults to the root menu's transition class.
  describe("transitionClass", () => {
    // Test that transitionClass gets the transition class name.
    it("should get the transition class name", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.transitionClass).toBe(menu._transitionClass);
    });

    // Test that transitionClass sets the transition class name.
    it("should set the transition class name", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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

  // Test Bootstrap5TopLinkDisclosureMenu currentChild.
  describe("currentChild", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu currentChild getter.
    it("should implement the TopLinkDisclosureMenu currentChild", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.currentChild).toBe(
        TopLinkDisclosureMenu.prototype.currentChild
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu focusState.
  describe("focusState", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu focusState getter.
    it("should implement the TopLinkDisclosureMenu focusState", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.focusState).toBe(
        TopLinkDisclosureMenu.prototype.focusState
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu currentEvent.
  describe("currentEvent", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu currentEvent getter.
    it("should implement the TopLinkDisclosureMenu currentEvent", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.currentEvent).toBe(
        TopLinkDisclosureMenu.prototype.currentEvent
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu currentMenuItem.
  describe("currentMenuItem", () => {
    // Test that currentMenuItem gets the current menu item.
    it("should get the current menu item", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.currentMenuItem).toBe(
        menu.elements.menuItems[menu.currentChild]
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu hoverType.
  describe("hoverType", () => {
    // Test that hoverType gets the hover type.
    it("should get the hover type", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.hoverType).toBe(menu._hoverType);
    });

    // Test that hoverType sets the hover type.
    it("should set the hover type", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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

  // Test Bootstrap5TopLinkDisclosureMenu hoverDelay.
  describe("hoverDelay", () => {
    // Test that hoverDelay gets the hover delay value.
    it("should get the hover delay value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.hoverDelay).toBe(menu._hoverDelay);
    });

    // Test that hoverDelay sets the hover delay value.
    it("should set the hover delay value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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

  // Test Bootstrap5TopLinkDisclosureMenu enterDelay.
  describe("enterDelay", () => {
    // Test that enterDelay gets the enter delay value.
    it("should get the enter delay value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      // In this case, because we have not set the enter delay,
      // it should be the same as the hover delay.
      expect(menu.enterDelay).toBe(menu._hoverDelay);
    });

    // Test that enterDelay sets the enter delay value.
    it("should set the enter delay value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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

  // Test Bootstrap5TopLinkDisclosureMenu leaveDelay.
  describe("leaveDelay", () => {
    // Test that leaveDelay gets the leave delay value.
    it("should get the leave delay value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      // In this case, because we have not set the leave delay,
      // it should be the same as the hover delay.
      expect(menu.leaveDelay).toBe(menu._hoverDelay);
    });

    // Test that leaveDelay sets the leave delay value.
    it("should set the leave delay value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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

  // Test Bootstrap5TopLinkDisclosureMenu shouldFocus.
  describe("shouldFocus", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu shouldFocus getter.
    it("should implement the TopLinkDisclosureMenu shouldFocus", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.shouldFocus).toBe(
        TopLinkDisclosureMenu.prototype.shouldFocus
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu errors.
  describe("errors", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu errors getter.
    it("should implement the TopLinkDisclosureMenu errors", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype.errors).toBe(
        TopLinkDisclosureMenu.prototype.errors
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu optionalKeySupport.
  // todo: Test that the optional key support for submenus defaults to the root menu's optional key support.
  describe("optionalKeySupport", () => {
    // Test that optionalKeySupport gets the optional key support value.
    it("should get the optional key support value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.optionalKeySupport).toEqual(menu._optionalSupport);
    });

    // Test that optionalKeySupport sets the optional key support value.
    it("should set the optional key support value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      // Set up to check for validation.
      const spy = vi.spyOn(validation, "isValidType");

      // Set the menu's optional key support value.
      menu.optionalKeySupport = true;

      expect(spy).toHaveBeenCalledWith("boolean", { optionalKeySupport: true });
      expect(menu._optionalSupport).toBeTruthy();
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu bootstrapDisabled.
  describe("bootstrapDisabled", () => {
    // Test that bootstrapDisabled gets the bootstrap disabled value.
    it("should get the bootstrap disabled value", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapDisabled).toBe(menu._disableBootstrap);
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu bootstrapPseudoDropdownElement.
  describe("bootstrapPseudoDropdownElement", () => {
    // Test that bootstrapPseudoDropdownElement gets the bootstrap pseudo dropdown element.
    it("should get the bootstrap pseudo dropdown element", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapPseudoDropdownElement).toBe(
        menu._pseudoDropdownElement
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu bootstrapEvents.
  describe("bootstrapEvents", () => {
    // Test that bootstrapEvents gets the bootstrap events array.
    it("should get the bootstrap events array", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapEvents).toEqual(menu._bootstrapEvents);
    });
  });
});
