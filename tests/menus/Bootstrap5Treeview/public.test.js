/**
 * Tests for public methods of Bootstrap5Treeview class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { twoLevel, threeLevel } from "../../../demo/menus.js";
import Bootstrap5Treeview from "../../../src/bootstrap5Treeview.js";
import Treeview from "accessible-menu/src/treeview.js";

// Test Bootstrap5Treeview public methods.
describe("Bootstrap5Treeview public methods", () => {
  // Test Bootstrap5Treeview focus().
  describe("focus", () => {
    // Test that Bootstrap5Treeview implements the Treeview focus() method.
    it("should implement the Treeview focus() method", () => {
      expect(Bootstrap5Treeview.prototype.focus).toBe(Treeview.prototype.focus);
    });
  });

  // Test Bootstrap5Treeview blur().
  describe("blur", () => {
    // Test that Bootstrap5Treeview implements the Treeview blur() method.
    it("should implement the Treeview blur() method", () => {
      expect(Bootstrap5Treeview.prototype.blur).toBe(Treeview.prototype.blur);
    });
  });

  // Test Bootstrap5Treeview focusCurrentChild().
  describe("focusCurrentChild", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusCurrentChild() method.
    it("should implement the Treeview focusCurrentChild() method", () => {
      expect(Bootstrap5Treeview.prototype.focusCurrentChild).toBe(
        Treeview.prototype.focusCurrentChild
      );
    });
  });

  // Test Bootstrap5Treeview blurCurrentChild().
  describe("blurCurrentChild", () => {
    // Test that Bootstrap5Treeview implements the Treeview blurCurrentChild() method.
    it("should implement the Treeview blurCurrentChild() method", () => {
      expect(Bootstrap5Treeview.prototype.blurCurrentChild).toBe(
        Treeview.prototype.blurCurrentChild
      );
    });
  });

  // Test Bootstrap5Treeview focusChild().
  describe("focusChild", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusChild() method.
    it("should implement the Treeview focusChild() method", () => {
      expect(Bootstrap5Treeview.prototype.focusChild).toBe(
        Treeview.prototype.focusChild
      );
    });
  });

  // Test Bootstrap5Treeview focusFirstChild().
  describe("focusFirstChild", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusFirstChild() method.
    it("should implement the Treeview focusFirstChild() method", () => {
      expect(Bootstrap5Treeview.prototype.focusFirstChild).toBe(
        Treeview.prototype.focusFirstChild
      );
    });
  });

  // Test Bootstrap5Treeview focusLastChild().
  describe("focusLastChild", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusLastChild() method.
    it("should implement the Treeview focusLastChild() method", () => {
      expect(Bootstrap5Treeview.prototype.focusLastChild).toBe(
        Treeview.prototype.focusLastChild
      );
    });
  });

  // Test Bootstrap5Treeview focusNextChild().
  describe("focusNextChild", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusNextChild() method.
    it("should implement the Treeview focusNextChild() method", () => {
      expect(Bootstrap5Treeview.prototype.focusNextChild).toBe(
        Treeview.prototype.focusNextChild
      );
    });
  });

  // Test Bootstrap5Treeview focusPreviousChild().
  describe("focusPreviousChild", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusPreviousChild() method.
    it("should implement the Treeview focusPreviousChild() method", () => {
      expect(Bootstrap5Treeview.prototype.focusPreviousChild).toBe(
        Treeview.prototype.focusPreviousChild
      );
    });
  });

  // Test Bootstrap5Treeview focusController().
  describe("focusController", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusController() method.
    it("should implement the Treeview focusController() method", () => {
      expect(Bootstrap5Treeview.prototype.focusController).toBe(
        Treeview.prototype.focusController
      );
    });
  });

  // Test Bootstrap5Treeview focusContainer().
  describe("focusContainer", () => {
    // Test that Bootstrap5Treeview implements the Treeview focusContainer() method.
    it("should implement the Treeview focusContainer() method", () => {
      expect(Bootstrap5Treeview.prototype.focusContainer).toBe(
        Treeview.prototype.focusContainer
      );
    });
  });

  // Test Bootstrap5Treeview closeChildren().
  describe("closeChildren", () => {
    // Test that Bootstrap5Treeview implements the Treeview closeChildren() method.
    it("should implement the Treeview closeChildren() method", () => {
      expect(Bootstrap5Treeview.prototype.closeChildren).toBe(
        Treeview.prototype.closeChildren
      );
    });
  });

  // Test Bootstrap5Treeview BlurChildren().
  describe("blurChildren", () => {
    // Test that Bootstrap5Treeview implements the Treeview blurChildren() method.
    it("should implement the Treeview blurChildren() method", () => {
      expect(Bootstrap5Treeview.prototype.blurChildren).toBe(
        Treeview.prototype.blurChildren
      );
    });
  });

  // Test Bootstrap5Treeview focusLastNode().
  describe("focusLastNode", () => {
    beforeEach(() => {
      document.body.innerHTML = twoLevel;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    // Test that focusLastNode calls focusLastChild() when the last child is not open.
    it("should call focusLastChild() when the last child is not open", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusLastChild");

      menu.focusLastNode();

      expect(spy).toHaveBeenCalled();
    });

    // Test that focusLastNode does not call focusLastChild() when the last child is open.
    it("should not call focusLastChild() when the last child is open", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Open the last child.
      menu.elements.submenuToggles[
        menu.elements.submenuToggles.length - 1
      ].open();

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusLastChild");

      menu.focusLastNode();

      expect(spy).not.toHaveBeenCalled();
    });

    // Test that focusLastNode calls focusLastChild() on the last open child's submenu.
    it("should call focusLastChild() on the last open child's submenu", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Open the last child.
      menu.elements.submenuToggles[
        menu.elements.submenuToggles.length - 1
      ].open();

      // Set up to check for focus.
      const spy = vi.spyOn(
        menu.elements.submenuToggles[menu.elements.submenuToggles.length - 1]
          .elements.controlledMenu,
        "focusLastChild"
      );

      menu.focusLastNode();

      expect(spy).toHaveBeenCalled();
    });
  });

  // Test openChildren().
  describe("openChildren", () => {
    beforeEach(() => {
      document.body.innerHTML = twoLevel;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    // Should call preview() on all submenu toggles in the menu.
    it("should call preview() on all submenu toggles in the menu", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Spy on all submenuToggles and preview() methods.
      const spy1 = vi.spyOn(menu.elements.submenuToggles[0], "preview");
      const spy2 = vi.spyOn(menu.elements.submenuToggles[1], "preview");
      const spy3 = vi.spyOn(menu.elements.submenuToggles[2], "preview");
      const spy4 = vi.spyOn(menu.elements.submenuToggles[3], "preview");
      const spy5 = vi.spyOn(menu.elements.submenuToggles[4], "preview");
      const spy6 = vi.spyOn(menu.elements.submenuToggles[5], "preview");

      menu.openChildren();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
      expect(spy3).toHaveBeenCalled();
      expect(spy4).toHaveBeenCalled();
      expect(spy5).toHaveBeenCalled();
      expect(spy6).toHaveBeenCalled();
    });
  });

  // Test Bootstrap5Treeview focusNextNodeWithCharacter().
  describe("focusNextNodeWithCharacter", () => {
    beforeEach(() => {
      document.body.innerHTML = threeLevel;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    // Test that focusNextNodeWithCharacter calls focusChild with the index of the item starting with a given character.
    it("should call focusChild with the index of the item starting with a given character", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.focusNextNodeWithCharacter("B");

      expect(spy).toHaveBeenCalledWith(4);
    });

    // Test that focusNextNodeWithCharacter does not call focusChild if no item starts with a given character.
    it("should not call focusChild if no item starts with a given character", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.focusNextNodeWithCharacter("Z");

      expect(spy).not.toHaveBeenCalled();
    });

    // Test that focusNextNodeWithCharacter does not call focusChild if there _is_ an item starting with a given character, but it is before the currentChild.
    it("should call focusChild if there is an item starting with a given character before the currentChild", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      menu.currentChild = 5;

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.focusNextNodeWithCharacter("B");

      expect(spy).toHaveBeenCalledWith(4);
    });

    // Test that focusNextNodeWithCharacter will call focusChild on open submenus if it contains the next item starting with a given character.
    it("should call focusChild on open submenu's if it contains the next item starting with a given character", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Open the first submenu.
      menu.elements.submenuToggles[0].open();

      // Set up to check for focus.
      const spy = vi.spyOn(
        menu.elements.submenuToggles[0].elements.controlledMenu,
        "focusChild"
      );

      menu.focusNextNodeWithCharacter("W");

      expect(spy).toHaveBeenCalledWith(1);
    });

    // Test that focusNextNodeWithCharacter will call focusChild on open submenu's submenus if it contains the next item starting with a given character.
    it("should call focusChild on open submenu's submenu's if it contains the next item starting with a given character", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Open the first submenu.
      menu.elements.submenuToggles[0].open();

      // Open the first submenu's submenu.
      menu.elements.submenuToggles[0].elements.controlledMenu.elements.submenuToggles[0].open();

      // Set up to check for focus.
      const spy = vi.spyOn(
        menu.elements.submenuToggles[0].elements.controlledMenu.elements
          .submenuToggles[0].elements.controlledMenu,
        "focusChild"
      );

      menu.focusNextNodeWithCharacter("L");

      expect(spy).toHaveBeenCalledWith(1);
    });

    // Test that focusNextNodeWithCharacter will call focusChild on a parent menu if it contains the next item starting with a given character.
    it("should call focusChild on a parent menu if it contains the next item starting with a given character", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Open the first submenu.
      menu.elements.submenuToggles[0].open();

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.elements.submenuToggles[0].elements.controlledMenu.focusNextNodeWithCharacter(
        "R"
      );

      expect(spy).toHaveBeenCalledWith(2);
    });

    // Test that focusNextNodeWithCharacter will call focusChild on a parent menu's parent menu if it contains the next item starting with a given character.
    it("should call focusChild on a parent menu's parent menu if it contains the next item starting with a given character", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Open the first submenu.
      menu.elements.submenuToggles[0].open();

      // Open the first submenu's submenu.
      menu.elements.submenuToggles[0].elements.controlledMenu.elements.submenuToggles[0].open();

      // Set up to check for focus.
      const spy = vi.spyOn(menu, "focusChild");

      menu.elements.submenuToggles[0].elements.controlledMenu.elements.submenuToggles[0].elements.controlledMenu.focusNextNodeWithCharacter(
        "R"
      );

      expect(spy).toHaveBeenCalledWith(2);
    });
  });

  // Test Bootstrap5Treeview focusParentsNextChild.
  describe("focusParentsNextChild", () => {
    beforeEach(() => {
      document.body.innerHTML = threeLevel;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    // Test that focusParentsNextChild calls focusNextChild on the parent menu.
    it("should call focusNextChild on the parent menu", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set the currentChild to 1.
      menu.currentChild = 1;

      // Open the first submenu.
      menu.elements.submenuToggles[0].open();

      // Set up to check for focus.
      const spy1 = vi.spyOn(menu, "focusNextChild");
      const spy2 = vi.spyOn(menu, "focusChild");

      menu.elements.submenuToggles[0].elements.controlledMenu.focusParentsNextChild();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalledWith(2);
    });

    // Test that focusParentsNextChild calls focusParentsNextChild on the parent menu if the parent menu is already focusing the last child.
    it("should call focusParentsNextChild on the parent menu if the parent menu is already focusing the last child", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set the currentChild to 1.
      menu.currentChild = 1;

      // Open the first submenu.
      menu.elements.submenuToggles[0].open();

      // Set the submenu's currentChild to 4.
      menu.elements.submenuToggles[0].elements.controlledMenu.currentChild = 4;

      // Open the third submenu in the first submenu.
      menu.elements.submenuToggles[0].elements.controlledMenu.elements.submenuToggles[2].open();

      // Set up to check for focus.
      const spy1 = vi.spyOn(
        menu.elements.submenuToggles[0].elements.controlledMenu,
        "focusNextChild"
      );
      const spy2 = vi.spyOn(
        menu.elements.submenuToggles[0].elements.controlledMenu,
        "focusParentsNextChild"
      );

      menu.elements.submenuToggles[0].elements.controlledMenu.elements.submenuToggles[2].elements.controlledMenu.focusParentsNextChild();

      expect(spy1).not.toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
    });

    // Test that focusParentsNextChild doesn't call anything if there is no parent menu.
    it("should not call anything if there is no parent menu", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      expect(() => {
        menu.focusParentsNextChild();
      }).not.toThrow();
    });
  });

  // Test Bootstrap5Treeview focusChildsLastNode.
  describe("focusChildsLastNode", () => {
    beforeEach(() => {
      document.body.innerHTML = threeLevel;
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    // Test that focusChildsLastNode calls focusLastChild on the open child menu.
    it("should call focusLastChild on the open child menu", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set the currentChild to 1.
      menu.currentChild = 1;

      // Open the first submenu.
      menu.elements.submenuToggles[0].open();

      // Set up to check for focus.
      const spy = vi.spyOn(
        menu.elements.submenuToggles[0].elements.controlledMenu,
        "focusLastChild"
      );

      menu.focusChildsLastNode();

      expect(spy).toHaveBeenCalled();
    });

    // Test that focusChildsLastNode calls focusChildsLastNode on the open child menu if it is focusing the last child that is also an open child menu.
    it("should call focusChildsLastNode on the open child menu if it is focusing the last child that is also an open child menu", () => {
      // Create a new Bootstrap5Treeview instance for testing.
      const menu = new Bootstrap5Treeview({
        menuElement: document.querySelector("ul"),
        submenuItemSelector: "li.dropdown",
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("button"),
      });

      // Set the currentChild to 1.
      menu.currentChild = 1;

      // Open the first submenu.
      menu.elements.submenuToggles[0].open();

      // Set the submenu's currentChild to 4.
      menu.elements.submenuToggles[0].elements.controlledMenu.currentChild = 4;

      // Open the third submenu in the first submenu.
      menu.elements.submenuToggles[0].elements.controlledMenu.elements.submenuToggles[2].open();

      // Set up to check for focus.
      const spy = vi.spyOn(
        menu.elements.submenuToggles[0].elements.controlledMenu,
        "focusChildsLastNode"
      );

      menu.focusChildsLastNode();

      expect(spy).toHaveBeenCalled();
    });
  });
});
