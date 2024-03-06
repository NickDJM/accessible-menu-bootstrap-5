/**
 * Tests for protected methods in the Bootstrap5TopLinkDisclosureMenuToggle class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { twoLevelDisclosureTopLink } from "../../../demo/menus.js";
import Bootstrap5TopLinkDisclosureMenu from "../../../src/bootstrap5TopLinkDisclosureMenu.js";
import Bootstrap5TopLinkDisclosureMenuToggle from "../../../src/bootstrap5TopLinkDisclosureMenuToggle.js";
import TopLinkDisclosureMenuToggle from "accessible-menu/src/topLinkDisclosureMenuToggle.js";

vi.mock("accessible-menu/src/domHelpers.js");

beforeEach(() => {
  document.body.innerHTML = twoLevelDisclosureTopLink;
});

afterEach(() => {
  document.body.innerHTML = "";
});

// Test Bootstrap5TopLinkDisclosureMenuToggle protected methods.
describe("Bootstrap5TopLinkDisclosureMenuToggle protected methods", () => {
  // Test Bootstrap5TopLinkDisclosureMenuToggle _expand().
  describe("_expand", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle does not implement the TopLinkDisclosureMenuToggle _expand.
    it("should not implement the TopLinkDisclosureMenuToggle _expand", () => {
      expect(Bootstrap5TopLinkDisclosureMenuToggle.prototype._expand).not.toBe(
        TopLinkDisclosureMenuToggle.prototype._expand
      );
    });

    // Test that expand sets the aria-expanded attribute on the toggle to true.
    it("should set the aria-expanded attribute on the toggle to true", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      // Expand the menu.
      menuToggle._expand();

      expect(menuToggle.dom.toggle.getAttribute("aria-expanded")).toBe("true");
    });

    // Test that expand emits accessibleMenuExpand event.
    it("should emit accessibleMenuExpand event", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      // Set up to check for the accessibleMenuExpand event.
      const spy = vi.spyOn(menuToggle.dom.toggle, "dispatchEvent");

      // Expand the menu.
      menuToggle._expand();

      expect(spy).toHaveBeenCalledWith(menuToggle._expandEvent);
    });

    // Test that expand does not emit accessibleMenuExpand event if false is passed as an argument.
    it("should not emit accessibleMenuExpand event if false is passed as an argument", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      // Set up to check for the accessibleMenuExpand event.
      const spy = vi.spyOn(menuToggle.dom.toggle, "dispatchEvent");

      // Expand the menu.
      menuToggle._expand(false);

      expect(spy).not.toHaveBeenCalledWith(menuToggle._expandEvent);
    });

    // Test that expand adds the open class to the controlled menu.
    it("should add the open class to the controlled menu", async () => {
      // Mock removeClass.
      const domHelpers = await import("accessible-menu/src/domHelpers.js");
      domHelpers.removeClass = vi.fn();

      // Mock requestAnimationFrame.
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(
        (callback) => {
          callback();
        }
      );

      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      const spy = vi.spyOn(domHelpers, "addClass");

      // Expand the menu.
      menuToggle._expand();

      expect(spy).toHaveBeenCalledWith(
        menu.openClass,
        menuToggle.dom.container
      );
    });

    // Test that expand adds the transition class to the controlled menu.
    it("should add the transition class to the controlled menu", async () => {
      // Mock removeClass.
      const domHelpers = await import("accessible-menu/src/domHelpers.js");
      domHelpers.removeClass = vi.fn();

      // Mock requestAnimationFrame.
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(
        (callback) => {
          callback();
        }
      );

      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      const spy = vi.spyOn(domHelpers, "addClass");

      // Expand the menu.
      menuToggle._expand();

      expect(spy).toHaveBeenCalledWith(
        menu.transitionClass,
        menuToggle.dom.container
      );
    });

    // Test that expand removes the transition class from the controlled menu.
    it("should remove the transition class from the controlled menu after the transition is complete", async () => {
      // Mock removeClass.
      const domHelpers = await import("accessible-menu/src/domHelpers.js");
      domHelpers.removeClass = vi.fn();

      // Mock requestAnimationFrame.
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(
        (callback) => {
          callback();
        }
      );

      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
        transitionDuration: 0,
      });

      const menuToggle = menu.elements.submenuToggles[0];

      const spy = vi.spyOn(domHelpers, "removeClass");

      // Expand the menu.
      menuToggle._expand();

      expect(spy).toHaveBeenCalledWith(
        menu.transitionClass,
        menuToggle.dom.container
      );
    });
  });

  // Test Bootstrap5TopLinkDisclosureMenuToggle _collapse().
  describe("_collapse", () => {
    // Test that Bootstrap5TopLinkDisclosureMenuToggle does not implement the TopLinkDisclosureMenuToggle _collapse.
    it("should not implement the TopLinkDisclosureMenuToggle _collapse", () => {
      expect(
        Bootstrap5TopLinkDisclosureMenuToggle.prototype._collapse
      ).not.toBe(TopLinkDisclosureMenuToggle.prototype._collapse);
    });

    // Test that collapse sets the aria-expanded attribute on the toggle to false.
    it("should set the aria-expanded attribute on the toggle to false", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      // Set up the menu.
      menuToggle.dom.toggle.setAttribute("aria-expanded", "true");

      // Collapse the menu.
      menuToggle._collapse();

      expect(menuToggle.dom.toggle.getAttribute("aria-expanded")).toBe("false");
    });

    // Test that collapse emits accessibleMenuCollapse event.
    it("should emit accessibleMenuCollapse event", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      // Set up to check for the accessibleMenuCollapse event.
      const spy = vi.spyOn(menuToggle.dom.toggle, "dispatchEvent");

      // Collapse the menu.
      menuToggle._collapse();

      expect(spy).toHaveBeenCalledWith(menuToggle._collapseEvent);
    });

    // Test that collapse does not emit accessibleMenuCollapse event if false is passed as an argument.
    it("should not emit accessibleMenuCollapse event if false is passed as an argument", () => {
      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      // Set up to check for the accessibleMenuCollapse event.
      const spy = vi.spyOn(menuToggle.dom.toggle, "dispatchEvent");

      // Collapse the menu.
      menuToggle._collapse(false);

      expect(spy).not.toHaveBeenCalledWith(menuToggle._collapseEvent);
    });

    // Test that collapse removes the open class from the controlled menu.
    it("should remove the open class from the controlled menu", async () => {
      // Mock removeClass.
      const domHelpers = await import("accessible-menu/src/domHelpers.js");
      domHelpers.removeClass = vi.fn();

      // Mock requestAnimationFrame.
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(
        (callback) => {
          callback();
        }
      );

      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      const spy = vi.spyOn(domHelpers, "removeClass");

      // Collapse the menu.
      menuToggle._collapse();

      expect(spy).toHaveBeenCalledWith(
        menu.openClass,
        menuToggle.dom.container
      );
    });

    // Test that collapse adds the close class to the controlled menu.
    it("should add the close class to the controlled menu", async () => {
      // Mock removeClass.
      const domHelpers = await import("accessible-menu/src/domHelpers.js");
      domHelpers.removeClass = vi.fn();

      // Mock requestAnimationFrame.
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(
        (callback) => {
          callback();
        }
      );

      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      const spy = vi.spyOn(domHelpers, "addClass");

      // Collapse the menu.
      menuToggle._collapse();

      expect(spy).toHaveBeenCalledWith(
        menu.closeClass,
        menuToggle.dom.container
      );
    });

    // Test that collapse adds the transition class to the controlled menu.
    it("should add the transition class to the controlled menu", async () => {
      // Mock removeClass.
      const domHelpers = await import("accessible-menu/src/domHelpers.js");
      domHelpers.removeClass = vi.fn();

      // Mock requestAnimationFrame.
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(
        (callback) => {
          callback();
        }
      );

      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
      });

      const menuToggle = menu.elements.submenuToggles[0];

      const spy = vi.spyOn(domHelpers, "addClass");

      // Collapse the menu.
      menuToggle._collapse();

      expect(spy).toHaveBeenCalledWith(
        menu.transitionClass,
        menuToggle.dom.container
      );
    });

    // Test that collapse removes the transition class from the controlled menu.
    it("should remove the transition class from the controlled menu after the transition is complete", async () => {
      // Mock removeClass.
      const domHelpers = await import("accessible-menu/src/domHelpers.js");
      domHelpers.removeClass = vi.fn();

      // Mock requestAnimationFrame.
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(
        (callback) => {
          callback();
        }
      );

      // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
      const menu = new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: ".dropdown",
        transitionDuration: 0,
      });

      const menuToggle = menu.elements.submenuToggles[0];

      const spy = vi.spyOn(domHelpers, "removeClass");

      // Collapse the menu.
      menuToggle._collapse();

      expect(spy).toHaveBeenCalledWith(
        menu.transitionClass,
        menuToggle.dom.container
      );
    });
  });
});
