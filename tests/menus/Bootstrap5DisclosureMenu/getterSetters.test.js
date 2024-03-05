/**
 * Getter/Setter tests for the Bootstrap5DisclosureMenu class
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Bootstrap5DisclosureMenu from "../../../src/bootstrap5DisclosureMenu.js";
import { twoLevelDisclosure } from "../../../demo/menus.js";
import DisclosureMenu from "accessible-menu/src/disclosureMenu.js";
import * as validation from "accessible-menu/src/validate.js";

beforeEach(() => {
  document.body.innerHTML = twoLevelDisclosure;
});

afterEach(() => {
  document.body.innerHTML = "";
});

// Test all getter/setter methods in the Bootstrap5DisclosureMenu class.
describe("Bootstrap5DisclosureMenu getter/setters", () => {
  // Test Bootstrap5DisclosureMenu dom.
  describe("dom", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu dom getter.
    it("should implement the DisclosureMenu dom", () => {
      expect(Bootstrap5DisclosureMenu.prototype.dom).toBe(
        DisclosureMenu.prototype.dom
      );
    });
  });

  // Test Bootstrap5DisclosureMenu selectors.
  describe("selectors", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu selectors getter.
    it("should implement the DisclosureMenu selectors", () => {
      expect(Bootstrap5DisclosureMenu.prototype.selectors).toBe(
        DisclosureMenu.prototype.selectors
      );
    });
  });

  // Test Bootstrap5DisclosureMenu elements.
  describe("elements", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu elements getter.
    it("should implement the DisclosureMenu elements", () => {
      expect(Bootstrap5DisclosureMenu.prototype.elements).toBe(
        DisclosureMenu.prototype.elements
      );
    });
  });

  // Test Bootstrap5DisclosureMenu isTopLevel.
  describe("isTopLevel", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu isTopLevel getter.
    it("should implement the DisclosureMenu isTopLevel", () => {
      expect(Bootstrap5DisclosureMenu.prototype.isTopLevel).toBe(
        DisclosureMenu.prototype.isTopLevel
      );
    });
  });

  // Test Bootstrap5DisclosureMenu openClass.
  // todo: Test that the open class for submenus defaults to the root menu's open class.
  describe("openClass", () => {
    // Test that openClass gets the open class name.
    it("should get the open class name", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.openClass).toBe(menu._openClass);
    });

    // Test that openClass sets the open class name.
    it("should set the open class name", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
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

  // Test Bootstrap5DisclosureMenu closeClass.
  // todo: Test that the close class for submenus defaults to the root menu's close class.
  describe("closeClass", () => {
    // Test that closeClass gets the close class name.
    it("should get the close class name", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.closeClass).toBe(menu._closeClass);
    });

    // Test that closeClass sets the close class name.
    it("should set the close class name", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
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

  // Test Bootstrap5DisclosureMenu transitionClass.
  // todo: Test that the transition class for submenus defaults to the root menu's transition class.
  describe("transitionClass", () => {
    // Test that transitionClass gets the transition class name.
    it("should get the transition class name", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.transitionClass).toBe(menu._transitionClass);
    });

    // Test that transitionClass sets the transition class name.
    it("should set the transition class name", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
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

  // Test Bootstrap5DisclosureMenu currentChild.
  describe("currentChild", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu currentChild getter.
    it("should implement the DisclosureMenu currentChild", () => {
      expect(Bootstrap5DisclosureMenu.prototype.currentChild).toBe(
        DisclosureMenu.prototype.currentChild
      );
    });
  });

  // Test Bootstrap5DisclosureMenu focusState.
  describe("focusState", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu focusState getter.
    it("should implement the DisclosureMenu focusState", () => {
      expect(Bootstrap5DisclosureMenu.prototype.focusState).toBe(
        DisclosureMenu.prototype.focusState
      );
    });
  });

  // Test Bootstrap5DisclosureMenu currentEvent.
  describe("currentEvent", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu currentEvent getter.
    it("should implement the DisclosureMenu currentEvent", () => {
      expect(Bootstrap5DisclosureMenu.prototype.currentEvent).toBe(
        DisclosureMenu.prototype.currentEvent
      );
    });
  });

  // Test Bootstrap5DisclosureMenu currentMenuItem.
  describe("currentMenuItem", () => {
    // Test that currentMenuItem gets the current menu item.
    it("should get the current menu item", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.currentMenuItem).toBe(
        menu.elements.menuItems[menu.currentChild]
      );
    });
  });

  // Test Bootstrap5DisclosureMenu hoverType.
  describe("hoverType", () => {
    // Test that hoverType gets the hover type.
    it("should get the hover type", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.hoverType).toBe(menu._hoverType);
    });

    // Test that hoverType sets the hover type.
    it("should set the hover type", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
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

  // Test Bootstrap5DisclosureMenu hoverDelay.
  describe("hoverDelay", () => {
    // Test that hoverDelay gets the hover delay value.
    it("should get the hover delay value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.hoverDelay).toBe(menu._hoverDelay);
    });

    // Test that hoverDelay sets the hover delay value.
    it("should set the hover delay value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
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

  // Test Bootstrap5DisclosureMenu enterDelay.
  describe("enterDelay", () => {
    // Test that enterDelay gets the enter delay value.
    it("should get the enter delay value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      // In this case, because we have not set the enter delay,
      // it should be the same as the hover delay.
      expect(menu.enterDelay).toBe(menu._hoverDelay);
    });

    // Test that enterDelay sets the enter delay value.
    it("should set the enter delay value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
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

  // Test Bootstrap5DisclosureMenu leaveDelay.
  describe("leaveDelay", () => {
    // Test that leaveDelay gets the leave delay value.
    it("should get the leave delay value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      // In this case, because we have not set the leave delay,
      // it should be the same as the hover delay.
      expect(menu.leaveDelay).toBe(menu._hoverDelay);
    });

    // Test that leaveDelay sets the leave delay value.
    it("should set the leave delay value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
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

  // Test Bootstrap5DisclosureMenu shouldFocus.
  describe("shouldFocus", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu shouldFocus getter.
    it("should implement the DisclosureMenu shouldFocus", () => {
      expect(Bootstrap5DisclosureMenu.prototype.shouldFocus).toBe(
        DisclosureMenu.prototype.shouldFocus
      );
    });
  });

  // Test Bootstrap5DisclosureMenu errors.
  describe("errors", () => {
    // Test that Bootstrap5DisclosureMenu implements the DisclosureMenu errors getter.
    it("should implement the DisclosureMenu errors", () => {
      expect(Bootstrap5DisclosureMenu.prototype.errors).toBe(
        DisclosureMenu.prototype.errors
      );
    });
  });

  // Test Bootstrap5DisclosureMenu optionalKeySupport.
  // todo: Test that the optional key support for submenus defaults to the root menu's optional key support.
  describe("optionalKeySupport", () => {
    // Test that optionalKeySupport gets the optional key support value.
    it("should get the optional key support value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.optionalKeySupport).toEqual(menu._optionalSupport);
    });

    // Test that optionalKeySupport sets the optional key support value.
    it("should set the optional key support value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
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

  // Test Bootstrap5DisclosureMenu bootstrapDisabled.
  describe("bootstrapDisabled", () => {
    // Test that bootstrapDisabled gets the bootstrap disabled value.
    it("should get the bootstrap disabled value", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapDisabled).toBe(menu._disableBootstrap);
    });
  });

  // Test Bootstrap5DisclosureMenu bootstrapPseudoDropdownElement.
  describe("bootstrapPseudoDropdownElement", () => {
    // Test that bootstrapPseudoDropdownElement gets the bootstrap pseudo dropdown element.
    it("should get the bootstrap pseudo dropdown element", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapPseudoDropdownElement).toBe(
        menu._pseudoDropdownElement
      );
    });
  });

  // Test Bootstrap5DisclosureMenu bootstrapEvents.
  describe("bootstrapEvents", () => {
    // Test that bootstrapEvents gets the bootstrap events array.
    it("should get the bootstrap events array", () => {
      // Create a new Bootstrap5DisclosureMenu instance for testing.
      const menu = new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("ul"),
      });

      expect(menu.bootstrapEvents).toEqual(menu._bootstrapEvents);
    });
  });
});
