import Menubar from "accessible-menu/src/menubar.js";
import Bootstrap5MenubarItem from "./bootstrap5MenubarItem.js";
import Bootstrap5MenubarToggle from "./bootstrap5MenubarToggle.js";
import { preventEvent } from "accessible-menu/src/eventHandlers.js";
import { disableBootstrapDropdownKeyboardBehaviour } from "./bootstrapDropdowns.js";
import { isValidType } from "accessible-menu/src/validate.js";

/**
 * An accessible menubar navigation in the DOM.
 *
 * See https://www.w3.org/TR/wai-aria-practices-1.2/examples/menubar/menubar-1/menubar-1.html
 */
class Bootstrap5Menubar extends Menubar {
  /**
   * The class to use when generating submenus.
   *
   * @type {typeof Bootstrap5Menubar}
   *
   * @public
   */
  _MenuType = Bootstrap5Menubar;

  /**
   * The class to use when generating menu items.
   *
   * @type {typeof Bootstrap5MenubarItem}
   *
   * @public
   */
  _MenuItemType = Bootstrap5MenubarItem;

  /**
   * The class to use when generating submenu toggles.
   *
   * @type {typeof Bootstrap5MenubarToggle}
   *
   * @public
   */
  _MenuToggleType = Bootstrap5MenubarToggle;

  /**
   * A flag to disable bootstrap's dropdown behaviour.
   *
   * @type {boolean}
   *
   * @protected
   */
  _disableBootstrap = true;

  /**
   * An empty element available to subclasses that redirect bootstrap dropdown events.
   *
   * Built-in dropdown suppression does not create native Bootstrap instances.
   *
   * @type {HTMLElement}
   *
   * @protected
   */
  _pseudoDropdownElement = document.createElement("div");

  /**
   * Bootstrap events that need to be intercepted to disable dropdowns.
   *
   * @type {string[]}
   *
   * @protected
   */
  _bootstrapDropdownEvents = [
    "show.bs.dropdown",
    "shown.bs.dropdown",
    "hide.bs.dropdown",
    "hidden.bs.dropdown",
  ];

  /**
   * An empty element available to subclasses that redirect bootstrap collapse events.
   *
   * Built-in collapse suppression cancels events on the real container.
   *
   * @type {HTMLElement}
   *
   * @protected
   */
  _pseudoCollapseElement = document.createElement("div");

  /**
   * Bootstrap events that need to be intercepted to disable collapses.
   *
   * @type {string[]}
   *
   * @protected
   */
  _bootstrapCollapseEvents = [
    "show.bs.collapse",
    "shown.bs.collapse",
    "hide.bs.collapse",
    "hidden.bs.collapse",
  ];

  /**
   * A flag to emulate bootstrap's transitions for dropdowns and collapses.
   *
   * This will add an inline style for height to the submenu when it is transitioning
   * between "open" and "closed" states. This is to emulate the same behaviour as
   * Bootstrap's dropdowns and collapses.
   *
   * @type {boolean}
   *
   * @protected
   */
  _bootstrapTransitions = true;

  /**
   * Constructs the menu.
   *
   * @param {object}                   options                                               - The options for generating the menu.
   * @param {HTMLElement}              options.menuElement                                   - The menu element in the DOM.
   * @param {string}                   [options.menuItemSelector = .nav-item,li]             - The CSS selector string for menu items.
   * @param {string}                   [options.menuLinkSelector = .nav-link,.dropdown-item] - The CSS selector string for menu links.
   * @param {string}                   [options.submenuItemSelector = .dropdown]             - The CSS selector string for menu items containing submenus.
   * @param {string}                   [options.submenuToggleSelector = .dropdown-toggle]    - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                   [options.submenuSelector = .dropdown-menu]            - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}       [options.controllerElement = null]                    - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}       [options.containerElement = null]                     - The element containing the menu in the DOM.
   * @param {(string|string[]|null)}   [options.openClass = show]                            - The class to apply when a menu is "open".
   * @param {(string|string[]|null)}   [options.closeClass = collapse]                       - The class to apply when a menu is "closed".
   * @param {?(string|string[])}       [options.transitionClass = collapsing]                - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {number}                   [options.transitionDuration = 350]                    - The duration of the transition between "open" and "closed" states (in milliseconds).
   * @param {boolean}                  [options.openDuration = -1]                           - The duration of the transition from "closed" to "open" states (in milliseconds).
   * @param {boolean}                  [options.closeDuration = -1]                          - The duration of the transition from "open" to "closed" states (in milliseconds).
   * @param {boolean}                  [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5Menubar|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                   [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                   [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in milliseconds).
   * @param {number}                   [options.enterDelay = -1]                             - The delay for opening a menu if the menu is focusable (in milliseconds).
   * @param {number}                   [options.leaveDelay = -1]                             - The delay for closing a menu if the menu is focusable (in milliseconds).
   * @param {?string}                  [options.prefix = am-]                                - The prefix to use for CSS custom properties.
   * @param {boolean}                  [options.bootstrapTransitions = true]                 - A flag to emulate bootstrap's transitions for dropdowns and collapses.
   * @param {boolean}                  [options.disableBootstrap = true]                     - A flag to disable bootstrap's native dropdown and collapse behaviour.
   * @param {boolean}                  [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement,
    menuItemSelector = ".nav-item,li",
    menuLinkSelector = ".nav-link,.dropdown-item",
    submenuItemSelector = ".dropdown",
    submenuToggleSelector = ".dropdown-toggle",
    submenuSelector = ".dropdown-menu",
    controllerElement = null,
    containerElement = null,
    openClass = "show",
    closeClass = "collapse",
    transitionClass = "collapsing",
    transitionDuration = 350,
    openDuration = -1,
    closeDuration = -1,
    isTopLevel = true,
    parentMenu = null,
    hoverType = "off",
    hoverDelay = 250,
    enterDelay = -1,
    leaveDelay = -1,
    prefix = "am-",
    bootstrapTransitions = true,
    disableBootstrap = true,
    initialize = true,
  }) {
    super({
      menuElement,
      menuItemSelector,
      menuLinkSelector,
      submenuItemSelector,
      submenuToggleSelector,
      submenuSelector,
      controllerElement,
      containerElement,
      openClass,
      closeClass,
      transitionClass,
      transitionDuration,
      openDuration,
      closeDuration,
      isTopLevel,
      parentMenu,
      hoverType,
      hoverDelay,
      enterDelay,
      leaveDelay,
      prefix,
      initialize: false,
    });

    this._disableBootstrap = disableBootstrap;

    this._bootstrapTransitions = bootstrapTransitions;

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link Menubar#initialize|Menubar's initialize method}
   * as well as the {@link Bootstrap5Menubar#_disableBootstrapDropdownBehaviour|disableBootstrapDropdown}
   * and {@link Bootstrap5Menubar#_disableBootstrapCollapseBehaviour|disableBootstrapCollapseBehaviour} methods
   * for the menu.
   */
  initialize() {
    super.initialize();

    if (this.bootstrapDisabled) {
      this._disableBootstrapDropdownBehaviour();
      this._disableBootstrapCollapseBehaviour();
    }
  }

  /**
   * A flag to emulate bootstrap's transitions for dropdowns and collapses.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's bootstrap transition state.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _bootstrapTransitions
   */
  get bootstrapTransitions() {
    return this.isTopLevel
      ? this._bootstrapTransitions
      : this.elements.rootMenu.bootstrapTransitions;
  }

  /**
   * A flag to disable bootstrap's native dropdown and collapse behaviour.
   *
   * Submenus inherit their root menu's value.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _disableBootstrapDropdownBehaviour;
   */
  get bootstrapDisabled() {
    return this.isTopLevel
      ? this._disableBootstrap
      : this.elements.rootMenu.bootstrapDisabled;
  }

  /**
   * An empty element available to subclasses that redirect bootstrap dropdown events.
   *
   * Built-in dropdown suppression does not create native Bootstrap instances.
   *
   * @readonly
   *
   * @type {HTMLElement}
   *
   * @see _pseudoDropdownElement
   */
  get bootstrapPseudoDropdownElement() {
    return this._pseudoDropdownElement;
  }

  /**
   * Bootstrap events that need to be intercepted to disable dropdowns.
   *
   * @readonly
   *
   * @type {string[]}
   *
   * @see _bootstrapDropdownEvents
   */
  get bootstrapDropdownEvents() {
    return this._bootstrapDropdownEvents;
  }

  /**
   * An empty element available to subclasses that redirect bootstrap collapse events.
   *
   * Built-in collapse suppression cancels events on the real container.
   *
   * @readonly
   *
   * @type {HTMLElement}
   *
   * @see _pseudoCollapseElement
   */
  get bootstrapPseudoCollapseElement() {
    return this._pseudoCollapseElement;
  }

  /**
   * Bootstrap events that need to be intercepted to disable collapses.
   *
   * @readonly
   *
   * @type {string[]}
   *
   * @see _bootstrapCollapseEvents
   */
  get bootstrapCollapseEvents() {
    return this._bootstrapCollapseEvents;
  }

  /**
   * Validates all aspects of the menu to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let check = super._validate();

    // Bootstrap transitions check.
    const bootstrapTransitionsCheck = isValidType("boolean", {
      bootstrapTransitions: this._bootstrapTransitions,
    });

    if (!bootstrapTransitionsCheck.status) {
      this._errors.push(bootstrapTransitionsCheck.error.message);
      check = false;
    }

    // Bootstrap disabled check.
    const bootstrapDisabledCheck = isValidType("boolean", {
      disableBootstrap: this._disableBootstrap,
    });

    if (!bootstrapDisabledCheck.status) {
      this._errors.push(bootstrapDisabledCheck.error.message);
      check = false;
    }

    return check;
  }

  /**
   * Disable bootstrap's dropdown behaviour.
   *
   * Remove native dropdown data hooks, cancel native lifecycle events, and
   * handle submenu keys before Bootstrap's delegated keyboard listener runs.
   *
   * @protected
   */
  _disableBootstrapDropdownBehaviour() {
    this.elements.submenuToggles.forEach((submenuToggle) => {
      // Accessible Menu owns this control, including its click behaviour.
      if (
        submenuToggle.dom.toggle.getAttribute("data-bs-toggle") === "dropdown"
      ) {
        submenuToggle.dom.toggle.removeAttribute("data-bs-toggle");
      }

      this.bootstrapDropdownEvents.forEach((eventType) => {
        submenuToggle.dom.toggle.addEventListener(eventType, (event) => {
          preventEvent(event);
        });
      });
    });

    disableBootstrapDropdownKeyboardBehaviour(this);
  }

  /**
   * Handle submenu keydown defaults before Bootstrap can intercept the event.
   *
   * Only ArrowUp, ArrowDown, and Escape reach this method. Their navigation
   * actions remain in the inherited keyup handler.
   *
   * @param {KeyboardEvent} event - The submenu keydown event.
   * @return {boolean} - Whether this menu handled the keydown defaults.
   *
   * @protected
   */
  _handleBootstrapKeydown(event) {
    this.currentEvent = "keyboard";

    if (
      !this.isTopLevel ||
      (this.focusState === "self" &&
        ((event.key === "Escape" && this.elements.controller) ||
          (event.key !== "Escape" && this.currentMenuItem.isSubmenuItem)))
    ) {
      event.preventDefault();

      return true;
    }

    return false;
  }

  /**
   * Disable bootstrap's collapse behaviour.
   *
   * Cancel every native collapse event on the controlled container so repeated
   * calls cannot change its classes, dimensions, or controller's ARIA state.
   *
   * @protected
   */
  _disableBootstrapCollapseBehaviour() {
    if (!this.elements.controller) {
      return;
    }

    // Keep Bootstrap from creating a collapse instance on controller clicks.
    if (this.dom.controller.getAttribute("data-bs-toggle") === "collapse") {
      this.dom.controller.removeAttribute("data-bs-toggle");
    }

    this.bootstrapCollapseEvents.forEach((eventType) => {
      this.dom.container.addEventListener(eventType, (event) => {
        if (event.target === this.dom.container) {
          preventEvent(event);
        }
      });
    });
  }

  /**
   * Sets the transition durations of the menu as a CSS custom properties.
   *
   * The custom properties are:
   *   - `--am-transition-duration`,
   *   - `--am-open-transition-duration`, and
   *   - `--am-close-transition-duration`.
   *
   * The prefix of `am-` can be changed by setting the menu's prefix value.
   *
   * @protected
   */
  _setTransitionDurations() {
    super._setTransitionDurations();

    if (this.isTopLevel && this.elements.controller) {
      this.elements.controller.dom.container.style.setProperty(
        `--${this.prefix}transition-duration`,
        `${this.transitionDuration}ms`
      );

      this.elements.controller.dom.container.style.setProperty(
        `--${this.prefix}open-transition-duration`,
        `${this.openDuration}ms`
      );

      this.elements.controller.dom.container.style.setProperty(
        `--${this.prefix}close-transition-duration`,
        `${this.closeDuration}ms`
      );
    }
  }
}

export default Bootstrap5Menubar;
