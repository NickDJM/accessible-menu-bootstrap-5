import Menubar from "accessible-menu/src/menubar.js";
import Bootstrap5MenubarItem from "./bootstrap5MenubarItem.js";
import Bootstrap5MenubarToggle from "./bootstrap5MenubarToggle.js";
import { preventEvent } from "accessible-menu/src/eventHandlers.js";
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
   * The DOM element to use as a fake target for bootstrap's dropdown events.
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
   * The DOM element to use as a fake target for bootstrap's collapse events.
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
   * @param {boolean}                  [options.disableBootstrap = true]                     - A flag to disable bootstrap's dropdown behaviour by making their events target a pseudo element.
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
   * A flag to disable bootstrap's dropdown behaviour.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _disableBootstrapDropdownBehaviour;
   */
  get bootstrapDisabled() {
    return this._disableBootstrap;
  }

  /**
   * The DOM element to use as a fake target for bootstrap's dropdown events.
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
   * The DOM element to use as a fake target for bootstrap's collapse events.
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
   * This is done by intercepting the bootstrap dropdown events (once) to get the
   * dropdown instance and then setting the dropdown instance's menu to an empty
   * element.
   *
   * We have to wait for the events because it's possible just selecting the
   * DOM elements will happen before Bootstrap initializes it's dropdown behaviour.
   *
   * This is a pretty brute-force method, but it works.
   *
   * @protected
   */
  _disableBootstrapDropdownBehaviour() {
    this.elements.submenuToggles.forEach((submenuToggle) => {
      // Intercept each bootstrap dropdown event once.
      this.bootstrapDropdownEvents.forEach((eventType) => {
        submenuToggle.dom.toggle.addEventListener(
          eventType,
          (event) => {
            preventEvent(event);

            const dropdownInstance = bootstrap.Dropdown.getInstance(
              event.target
            );

            if (!dropdownInstance) return;

            if (
              dropdownInstance._menu !== this.bootstrapPseudoDropdownElement
            ) {
              dropdownInstance._menu = this.bootstrapPseudoDropdownElement;
            }
          },
          {
            once: true,
          }
        );
      });
    });
  }

  /**
   * Disable bootstrap's collapse behaviour.
   *
   * This is done by intercepting the bootstrap collapse events (once) to get the
   * collapse instance and then setting the collapse instance's menu to an empty
   * element.
   *
   * We have to wait for the events because it's possible just selecting the
   * DOM elements will happen before Bootstrap initializes it's collapse behaviour.
   *
   * This is a pretty brute-force method, but it works.
   *
   * @protected
   */
  _disableBootstrapCollapseBehaviour() {
    if (!this.elements.controller) {
      return;
    }

    // Intercept each bootstrap collapse event once.
    this.bootstrapCollapseEvents.forEach((eventType) => {
      this.dom.container.addEventListener(
        eventType,
        (event) => {
          preventEvent(event);

          const collapseInstance = bootstrap.Collapse.getInstance(event.target);

          if (!collapseInstance) return;

          if (
            collapseInstance._element !== this.bootstrapPseudoCollapseElement
          ) {
            collapseInstance._element = this.bootstrapPseudoCollapseElement;
          }
        },
        {
          once: true,
        }
      );
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
