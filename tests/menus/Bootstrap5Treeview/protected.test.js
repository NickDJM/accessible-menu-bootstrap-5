/**
 * Tests for protected methods of Bootstrap5Treeview class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import * as bootstrap from "bootstrap";
import { twoLevel } from "../../../demo/menus.js";
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

describe("Bootstrap5Treeview native Bootstrap behaviour", () => {
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
      const menu = new Bootstrap5Treeview({
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
      const menu = new Bootstrap5Treeview({
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
      const menu = new Bootstrap5Treeview({
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
      ["Escape", false, "keyboard"],
    ])(
      "should preserve keydown defaults and ancestor event state for %s",
      (key, prevented, rootEvent) => {
        const menu = new Bootstrap5Treeview({
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
      const menu = new Bootstrap5Treeview({
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
      const menu = new Bootstrap5Treeview({
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
