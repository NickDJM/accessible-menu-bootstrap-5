/**
 * Tests for protected methods of Bootstrap5Menubar class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import * as bootstrap from "bootstrap";
import { twoLevel } from "../../../demo/menus.js";
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

describe("Bootstrap5Menubar native Bootstrap behaviour", () => {
  beforeEach(() => {
    document.body.innerHTML = twoLevel;
    vi.stubGlobal("bootstrap", bootstrap);
  });

  afterEach(() => {
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
      bootstrap.Dropdown.getInstance(toggle)?.dispose();
    });
    bootstrap.Collapse.getInstance(
      document.querySelector(".navbar-collapse")
    )?.dispose();
    document.body.innerHTML = "";
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  describe("_disableBootstrapDropdownBehaviour", () => {
    it("should cancel repeated native expansion attempts without changing ARIA", () => {
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
      });
      const toggle = menu.elements.submenuToggles[0];
      const nativeDropdown = bootstrap.Dropdown.getOrCreateInstance(
        toggle.dom.toggle
      );

      nativeDropdown.show();
      nativeDropdown.show();

      expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("false");
      expect(
        toggle.elements.controlledMenu.dom.menu.classList.contains("show")
      ).toBe(false);
      expect(nativeDropdown._menu.classList.contains("show")).toBe(false);
    });

    it("should handle toggle and controller clicks without native Bootstrap instances", () => {
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        controllerElement: document.querySelector(".navbar-toggler"),
        containerElement: document.querySelector(".navbar-collapse"),
        bootstrapTransitions: false,
        transitionClass: "",
      });
      const toggle = menu.elements.submenuToggles[0];
      const getDropdown = vi.spyOn(bootstrap.Dropdown, "getOrCreateInstance");
      const getCollapse = vi.spyOn(bootstrap.Collapse, "getOrCreateInstance");

      menu.dom.controller.click();

      expect(menu.elements.controller.isOpen).toBe(true);
      expect(menu.dom.controller.getAttribute("data-bs-toggle")).toBeNull();

      toggle.dom.toggle.click();

      expect(toggle.isOpen).toBe(true);
      expect(toggle.dom.toggle.getAttribute("data-bs-toggle")).toBeNull();
      expect(getDropdown).not.toHaveBeenCalled();
      expect(getCollapse).not.toHaveBeenCalled();
      expect(bootstrap.Dropdown.getInstance(toggle.dom.toggle)).toBeNull();
      expect(bootstrap.Collapse.getInstance(menu.dom.container)).toBeNull();
    });

    it("should leave native instances alone when disableBootstrap is false", () => {
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        disableBootstrap: false,
      });
      const toggle = menu.elements.submenuToggles[0];
      const nativeDropdown = bootstrap.Dropdown.getOrCreateInstance(
        toggle.dom.toggle
      );

      expect(nativeDropdown._menu).toBe(
        toggle.elements.controlledMenu.dom.menu
      );
    });
  });

  describe("_handleBootstrapKeydown", () => {
    it.each([
      ["ArrowDown", true, "mouse"],
      ["Escape", true, "mouse"],
    ])(
      "should preserve keydown defaults and ancestor event state for %s",
      (key, prevented, rootEvent) => {
        const menu = new Bootstrap5Menubar({
          menuElement: document.querySelector("ul"),
        });
        const submenu = menu.elements.submenuToggles[0].elements.controlledMenu;
        const link = submenu.elements.menuItems[0].dom.link;
        const getDropdown = vi.spyOn(bootstrap.Dropdown, "getOrCreateInstance");
        submenu.currentEvent = "mouse";
        menu.currentEvent = "mouse";
        link.focus();
        const event = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });

        link.dispatchEvent(event);

        expect(event.defaultPrevented).toBe(prevented);
        expect(submenu.currentEvent).toBe("keyboard");
        expect(menu.currentEvent).toBe(rootEvent);
        expect(getDropdown).not.toHaveBeenCalled();
      }
    );
  });

  describe("_disableBootstrapCollapseBehaviour", () => {
    it("should cancel repeated native expansion and collapse events", () => {
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        controllerElement: document.querySelector(".navbar-toggler"),
        containerElement: document.querySelector(".navbar-collapse"),
      });

      for (const type of ["show.bs.collapse", "hide.bs.collapse"]) {
        const first = new Event(type, { bubbles: true, cancelable: true });
        const second = new Event(type, { bubbles: true, cancelable: true });

        menu.dom.container.dispatchEvent(first);
        menu.dom.container.dispatchEvent(second);

        expect(first.defaultPrevented).toBe(true);
        expect(second.defaultPrevented).toBe(true);
      }
    });

    it("should cancel repeated native expansion and collapse attempts", () => {
      const menu = new Bootstrap5Menubar({
        menuElement: document.querySelector("ul"),
        controllerElement: document.querySelector(".navbar-toggler"),
        containerElement: document.querySelector(".navbar-collapse"),
      });
      const nativeCollapse = new bootstrap.Collapse(menu.dom.container, {
        toggle: false,
      });

      nativeCollapse.show();
      nativeCollapse.show();

      expect(menu.dom.container.classList.contains("collapsing")).toBe(false);
      expect(menu.dom.container.classList.contains("show")).toBe(false);
      expect(menu.dom.controller.getAttribute("aria-expanded")).toBe("false");

      menu.dom.container.classList.add("show");
      menu.dom.controller.setAttribute("aria-expanded", "true");

      nativeCollapse.hide();
      nativeCollapse.hide();

      expect(menu.dom.container.classList.contains("collapsing")).toBe(false);
      expect(menu.dom.container.classList.contains("show")).toBe(true);
      expect(menu.dom.controller.getAttribute("aria-expanded")).toBe("true");
    });
  });
});
