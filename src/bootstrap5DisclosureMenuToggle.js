/* eslint-disable jsdoc/no-undefined-types */

import DisclosureMenuToggle from "accessible-menu/src/disclosureMenuToggle.js";
import { addClass, removeClass } from "accessible-menu/src/domHelpers.js";

/*
 * A link or button that controls the visibility of a Bootstrap5DisclosureMenu.
 */
class Bootstrap5DisclosureMenuToggle extends DisclosureMenuToggle {
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
   * @param {object}                        options                     - The options for generating the menu toggle.
   * @param {HTMLElement}                   options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}                   options.parentElement       - The element containing the controlled menu.
   * @param {Bootstrap5DisclosureMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {Bootstrap5DisclosureMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}                       [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
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

  initialize() {
    super.initialize();

    // Bootstrap uses transitions on height for the main collapse component.
    // To match that style _and_ make sure you can still control it through the
    // menu config, we need to set the transition property on the container.
    if (
      this.elements.controlledMenu.bootstrapTransitions &&
      this.elements.controlledMenu.isTopLevel
    ) {
      this.dom.container.style.transition =
        "height var(--am-transition-duration) ease";
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
    const {
      openClass,
      closeClass,
      transitionClass,
      transitionDuration,
      bootstrapTransitions,
      isTopLevel,
    } = this.elements.controlledMenu;

    this.dom.toggle.setAttribute("aria-expanded", "true");
    this.elements.controlledMenu.elements.rootMenu.hasOpened = true;

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the close class,
    // add the open class, and finally remove the transition class.
    if (transitionClass !== "") {
      addClass(transitionClass, this.dom.container);

      requestAnimationFrame(() => {
        removeClass(closeClass, this.dom.container);

        // If the menu is emulating the bootstrap dropdown/collapse behaviour,
        // set an inline style for the height of the menu.
        if (bootstrapTransitions) {
          this.dom.container.style.height = `${this.dom.container.scrollHeight}px`;
        }

        requestAnimationFrame(() => {
          addClass(openClass, this.dom.container);

          // If the menu is emulating bootstrap dropdown/collapse behaviour,
          // we need to remove the inline style for the height of the menu
          // as well as the transition class.
          //
          // If the menu is top-level there will be a delay before removing the transition class.
          //
          // If the menu isn't emulating bootstrap dropdown/collapse behaviour,
          // we treat it as the strandard accessible-menu transition process.
          if (bootstrapTransitions) {
            requestAnimationFrame(() => {
              setTimeout(
                () => {
                  removeClass(transitionClass, this.dom.container);

                  // If the menu is emulating the bootstrap dropdown/collapse behaviour,
                  // remove the inline style for the height of the menu.
                  this.dom.container.style.height = "";
                },
                isTopLevel ? transitionDuration : 0
              );
            });
          } else {
            requestAnimationFrame(() => {
              setTimeout(() => {
                removeClass(transitionClass, this.dom.container);
              }, transitionDuration);
            });
          }
        });
      });
    } else {
      // Add the open class
      addClass(openClass, this.dom.container);

      // Remove the close class.
      removeClass(closeClass, this.dom.container);
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
    const {
      closeClass,
      openClass,
      transitionClass,
      transitionDuration,
      bootstrapTransitions,
      isTopLevel,
    } = this.elements.controlledMenu;

    this.dom.toggle.setAttribute("aria-expanded", "false");

    // If we're dealing with transition classes, then we need to utilize
    // requestAnimationFrame to add the transition class, remove the open class,
    // add the close class, and finally remove the transition class.
    if (transitionClass !== "") {
      // If the menu is emulating the bootstrap dropdown/collapse behaviour,
      // set an inline style for the height of the menu.
      if (bootstrapTransitions && isTopLevel) {
        this.dom.container.style.height = `${this.dom.container.offsetHeight}px`;
      }

      addClass(transitionClass, this.dom.container);

      requestAnimationFrame(() => {
        removeClass(openClass, this.dom.container);

        // If the menu is emulating the bootstrap dropdown/collapse behaviour,
        // remove the inline style for the height of the menu.
        if (bootstrapTransitions && isTopLevel) {
          requestAnimationFrame(() => {
            this.dom.container.style.height = "";

            requestAnimationFrame(() => {
              setTimeout(() => {
                removeClass(transitionClass, this.dom.container);
                addClass(closeClass, this.dom.container);
              }, transitionDuration);
            });
          });
        } else {
          requestAnimationFrame(() => {
            addClass(closeClass, this.dom.container);

            requestAnimationFrame(() => {
              setTimeout(() => {
                removeClass(transitionClass, this.dom.container);
              }, transitionDuration);
            });
          });
        }
      });
    } else {
      // Add the close class
      addClass(closeClass, this.dom.container);

      // Remove the open class.
      removeClass(openClass, this.dom.container);
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this._collapseEvent);
    }
  }
}

export default Bootstrap5DisclosureMenuToggle;
