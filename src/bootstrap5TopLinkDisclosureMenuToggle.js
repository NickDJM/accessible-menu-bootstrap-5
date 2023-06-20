/* eslint-disable jsdoc/no-undefined-types */

import TopLinkDisclosureMenuToggle from "accessible-menu/src/topLinkDisclosureMenuToggle.js";
import { addClass, removeClass } from "accessible-menu/src/domHelpers.js";

/*
 * A link or button that controls the visibility of a Bootstrap5TopLinkDisclosureMenu.
 */
class Bootstrap5TopLinkDisclosureMenuToggle extends TopLinkDisclosureMenuToggle {
  /**
   * The DOM elements within the menu toggle.
   *
   * @type {Object<HTMLElement>}
   *
   * @property {HTMLElement} toggle    - The menu toggle.
   * @property {HTMLElement} parent    - The menu containing this toggle.
   * @property {HTMLElement} container - The element that controlls the visibility of the child menu.
   * @protected
   */
  _dom = {
    toggle: null,
    parent: null,
    container: null,
  };

  /**
   * Constructs the menu toggle.
   *
   * @param {object}                               options                     - The options for generating the menu toggle.
   * @param {HTMLElement}                          options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}                          options.parentElement       - The element containing the controlled menu.
   * @param {Bootstrap5TopLinkDisclosureMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {Bootstrap5TopLinkDisclosureMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}                              [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement,
    parentElement,
    controlledMenu,
    parentMenu = null,
    initialize = true,
  }) {
    super({
      menuToggleElement,
      parentElement,
      controlledMenu,
      parentMenu,
      initialize: false,
    });

    // Set DOM elements.
    this._dom.toggle = menuToggleElement;
    this._dom.parent = parentElement;
    // The container differs based on if the menu is top-level or not.
    this._dom.container = controlledMenu.isTopLevel
      ? controlledMenu.dom.container
      : controlledMenu.dom.menu;

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Initializes the toggle by removing the default bootstrap toggle information
   * and running the parent's initialization.
   */
  initialize() {
    super.initialize();

    if (this.dom.toggle.hasAttribute("data-bs-toggle")) {
      this.dom.toggle.removeAttribute("data-bs-toggle");
    }

    if (this.dom.toggle.hasAttribute("data-bs-target")) {
      this.dom.toggle.removeAttribute("data-bs-target");
    }
  }

  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(emit = true) {
    const { openClass, transitionClass } = this.elements.controlledMenu;

    this.dom.toggle.setAttribute("aria-expanded", "true");

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, add the open class,
    // and then remove the transition class.
    if (transitionClass !== "") {
      addClass(transitionClass, this.dom.container);

      requestAnimationFrame(() => {
        addClass(openClass, this.dom.container);

        requestAnimationFrame(() => {
          removeClass(transitionClass, this.dom.container);
        });
      });
    } else if (openClass !== "") {
      addClass(openClass, this.dom.container);
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this._expandEvent);
    }
  }

  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(emit = true) {
    const { closeClass, openClass, transitionClass } =
      this.elements.controlledMenu;

    this.dom.toggle.setAttribute("aria-expanded", "false");

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the open class,
    // add the close class, and finally remove the transition class.
    if (transitionClass !== "") {
      addClass(transitionClass, this.dom.container);

      requestAnimationFrame(() => {
        if (openClass !== "") {
          removeClass(openClass, this.dom.container);
        }

        requestAnimationFrame(() => {
          if (closeClass !== "") {
            addClass(closeClass, this.dom.container);
          }

          requestAnimationFrame(() => {
            removeClass(transitionClass, this.dom.container);
          });
        });
      });
    } else {
      // Add the close class
      if (closeClass !== "") {
        addClass(closeClass, this.dom.container);
      }

      // Remove the open class.
      if (openClass !== "") {
        removeClass(openClass, this.dom.container);
      }
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this._collapseEvent);
    }
  }
}

export default Bootstrap5TopLinkDisclosureMenuToggle;
