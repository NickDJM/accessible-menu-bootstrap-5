/**
 * Tests for protected methods of Bootstrap5TopLinkDisclosureMenu class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import * as bootstrap from "bootstrap";
import {
  twoLevelDisclosureTopLink,
  threeLevelDisclosureTopLink,
} from "../../../demo/menus.js";
import Bootstrap5TopLinkDisclosureMenu from "../../../src/bootstrap5TopLinkDisclosureMenu.js";
import TopLinkDisclosureMenu from "accessible-menu/src/topLinkDisclosureMenu.js";

// Test Bootstrap5TopLinkDisclosureMenu protected methods.
describe("Bootstrap5TopLinkDisclosureMenu protected methods", () => {
  // Test Bootstrap5TopLinkDisclosureMenu _setDOMElementType().
  describe("_setDOMElementType", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _setDOMElementType() method.
    it("should implement the TopLinkDisclosureMenu _setDOMElementType() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._setDOMElementType).toBe(
        TopLinkDisclosureMenu.prototype._setDOMElementType
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _resetDOMElementType().
  describe("_resetDOMElementType", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _resetDOMElementType() method.
    it("should implement the TopLinkDisclosureMenu _resetDOMElementType() method", () => {
      expect(
        Bootstrap5TopLinkDisclosureMenu.prototype._resetDOMElementType
      ).toBe(TopLinkDisclosureMenu.prototype._resetDOMElementType);
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleFocus().
  describe("_handleFocus", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleFocus() method.
    it("should implement the TopLinkDisclosureMenu _handleFocus() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleFocus).toBe(
        TopLinkDisclosureMenu.prototype._handleFocus
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleClick().
  describe("_handleClick", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleClick() method.
    it("should implement the TopLinkDisclosureMenu _handleClick() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleClick).toBe(
        TopLinkDisclosureMenu.prototype._handleClick
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleHover().
  describe("_handleHover", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleHover() method.
    it("should implement the TopLinkDisclosureMenu _handleHover() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleHover).toBe(
        TopLinkDisclosureMenu.prototype._handleHover
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleKeydown().
  describe("_handleKeydown", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleKeydown() method.
    it("should implement the TopLinkDisclosureMenu _handleKeydown() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleKeydown).toBe(
        TopLinkDisclosureMenu.prototype._handleKeydown
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenu _handleKeyup().
  describe("_handleKeyup", () => {
    // Test that Bootstrap5TopLinkDisclosureMenu implements the TopLinkDisclosureMenu _handleKeyup() method.
    it("should implement the TopLinkDisclosureMenu _handleKeyup() method", () => {
      expect(Bootstrap5TopLinkDisclosureMenu.prototype._handleKeyup).toBe(
        TopLinkDisclosureMenu.prototype._handleKeyup
      );
    });
  });
});

describe("Bootstrap5TopLinkDisclosureMenu native Bootstrap behaviour", () => {
  beforeEach(() => {
    document.body.innerHTML = twoLevelDisclosureTopLink;
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
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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

    it.each([true, false])(
      "should move focus once per key when Bootstrap is available at initialization: %s",
      async (available) => {
        vi.stubGlobal("bootstrap", available ? bootstrap : undefined);
        const menu = new Bootstrap5TopLinkDisclosureMenu({
          menuElement: document.querySelector("ul"),
          optionalKeySupport: true,
          bootstrapTransitions: false,
          transitionClass: "",
        });
        const toggle = menu.elements.submenuToggles[0];
        const submenu = toggle.elements.controlledMenu;
        vi.stubGlobal("bootstrap", bootstrap);
        vi.spyOn(HTMLElement.prototype, "getClientRects").mockReturnValue([
          { width: 100, height: 20 },
        ]);
        const errors = vi.fn((event) => event.preventDefault());
        window.addEventListener("error", errors);

        try {
          toggle.dom.toggle.focus();

          for (const [key, expected] of [
            [" ", toggle.dom.toggle],
            ["ArrowDown", submenu.elements.menuItems[0].dom.link],
            ["ArrowDown", submenu.elements.menuItems[1].dom.link],
            ["ArrowUp", submenu.elements.menuItems[0].dom.link],
            ["End", submenu.elements.menuItems[4].dom.link],
            ["Home", submenu.elements.menuItems[0].dom.link],
            ["Escape", toggle.dom.toggle],
          ]) {
            document.activeElement.dispatchEvent(
              new KeyboardEvent("keydown", {
                key,
                bubbles: true,
                cancelable: true,
              })
            );
            document.activeElement.dispatchEvent(
              new KeyboardEvent("keyup", {
                key,
                bubbles: true,
                cancelable: true,
              })
            );
            await new Promise((resolve) =>
              requestAnimationFrame(() => requestAnimationFrame(resolve))
            );

            expect(document.activeElement).toBe(expected);
          }

          expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("false");
          expect(errors).not.toHaveBeenCalled();
        } finally {
          window.removeEventListener("error", errors);
        }
      }
    );

    it("should keep native keyboard handling away from existing dropdown instances", () => {
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });
      const toggle = menu.elements.submenuToggles[0];
      const nativeDropdown = new bootstrap.Dropdown(toggle.dom.toggle);
      const selectMenuItem = vi.spyOn(nativeDropdown, "_selectMenuItem");
      const submenu = toggle.elements.controlledMenu;

      submenu.elements.menuItems[0].dom.link.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "ArrowDown",
          bubbles: true,
          cancelable: true,
        })
      );

      expect(selectMenuItem).not.toHaveBeenCalled();
      expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("false");
    });

    it("should cancel native events for nested submenu controllers", () => {
      document.body.innerHTML = threeLevelDisclosureTopLink;
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
      });
      const submenu = menu.elements.submenuToggles[0].elements.controlledMenu;
      const toggle = submenu.elements.submenuToggles[0];
      const nativeDropdown = bootstrap.Dropdown.getOrCreateInstance(
        toggle.dom.toggle
      );

      nativeDropdown.show();
      nativeDropdown.show();

      expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("false");
      expect(
        toggle.elements.controlledMenu.dom.menu.classList.contains("show")
      ).toBe(false);
    });

    it("should handle toggle and controller clicks without native Bootstrap instances", () => {
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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
      [false, "ArrowDown", false, "keyboard"],
      [true, "ArrowDown", true, "mouse"],
      [false, "Escape", true, "mouse"],
    ])(
      "should preserve keydown defaults and ancestor event state for %s",
      (optionalKeySupport, key, prevented, rootEvent) => {
        const menu = new Bootstrap5TopLinkDisclosureMenu({
          menuElement: document.querySelector("ul"),
          optionalKeySupport,
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
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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
      const menu = new Bootstrap5TopLinkDisclosureMenu({
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
