import DisclosureMenu from "accessible-menu/src/disclosureMenu.js";
import Bootstrap5DisclosureMenuItem from "./bootstrap5DisclosureMenuItem.js";
import Bootstrap5DisclosureMenuToggle from "./bootstrap5DisclosureMenuToggle.js";
import { preventEvent } from "accessible-menu/src/eventHandlers.js";
import { isValidType } from "accessible-menu/src/validate.js";

/**
 * An accessible disclosure menu in the DOM.
 *
 * See {@link https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html|Example Disclosure for Navigation Menus}
 *
 * @extends DisclosureMenu
 */
class Bootstrap5DisclosureMenu extends DisclosureMenu {
  /**
   * The class to use when generating submenus.
   *
   * @type {typeof Bootstrap5DisclosureMenu}
   *
   * @protected
   */
  _MenuType = Bootstrap5DisclosureMenu;

  /**
   * The class to use when generating menu items.
   *
   * @type {typeof Bootstrap5DisclosureMenuItem}
   *
   * @protected
   */
  _MenuItemType = Bootstrap5DisclosureMenuItem;

  /**
   * The class to use when generating submenu toggles.
   *
   * @type {typeof Bootstrap5DisclosureMenuToggle}
   *
   * @protected
   */
  _MenuToggleType = Bootstrap5DisclosureMenuToggle;

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
   * Bootstrap events that need to be intercepted to disbale dropdowns.
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
   * Bootstrap events that need to be intercepted to disbale collapses.
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
   * @param {object}                          options                                               - The options for generating the menu.
   * @param {HTMLElement}                     options.menuElement                                   - The menu element in the DOM.
   * @param {string}                          [options.menuItemSelector = .nav-item,li]             - The CSS selector string for menu items.
   * @param {string}                          [options.menuLinkSelector = .nav-link,.dropdown-item] - The CSS selector string for menu links.
   * @param {string}                          [options.submenuItemSelector = .dropdown]             - The CSS selector string for menu items containing submenus.
   * @param {string}                          [options.submenuToggleSelector = .dropdown-toggle]    - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                          [options.submenuSelector = .dropdown-menu]            - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}              [options.controllerElement = null]                    - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}              [options.containerElement = null]                     - The element containing the menu in the DOM.
   * @param {(string|string[]|null)}          [options.openClass = ["collapse", "show"]]            - The class to apply when a menu is "open".
   * @param {(string|string[]|null)}          [options.closeClass = collapse]                       - The class to apply when a menu is "closed".
   * @param {?(string|string[])}              [options.transitionClass = collapsing]                - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {number}                          [options.transitionDuration = 250]                    - The duration of the transition between "open" and "closed" states (in miliseconds).
   * @param {boolean}                         [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5DisclosureMenu|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                          [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                          [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {number}                          [options.enterDelay = -1]                             - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}                          [options.leaveDelay = -1]                             - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}                         [options.optionalKeySupport = false]                  - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                         [options.bootstrapTransitions = true]                 - A flag to emulate bootstrap's transitions for dropdowns and collapses.
   * @param {boolean}                         [options.disableBootstrap = true]                     - A flag to disable bootstrap's dropdown behaviour by making their events target a pseudo element.
   * @param {boolean}                         [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
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
    openClass = ["collapse", "show"],
    closeClass = "collapse",
    transitionClass = "collapsing",
    transitionDuration = 250,
    isTopLevel = true,
    parentMenu = null,
    hoverType = "off",
    hoverDelay = 250,
    enterDelay = -1,
    leaveDelay = -1,
    optionalKeySupport = false,
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
      isTopLevel,
      parentMenu,
      hoverType,
      hoverDelay,
      enterDelay,
      leaveDelay,
      optionalKeySupport,
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
   * Initialize will call the {@link DisclosureMenu#initialize|DisclosureMenu's initialize method}
   * as well as the {@link Bootstrap5DisclosureMenu#_disableBootstrapDropdownBehaviour|disableBootstrapDropdown}
   * and {@link Bootstrap5DisclosureMenu#_disableBootstrapCollapseBehaviour|disableBootstrapCollapseBehaviour} methods
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
   * Bootstrap events that need to be intercepted to disbale dropdowns.
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
   * Bootstrap events that need to be intercepted to disbale collapses.
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
   * Sets the transition duration of the menu as a CSS custom property.
   *
   * The custom property is `--am-transition-duration`.
   *
   * @protected
   */
  _setTransitionDuration() {
    super._setTransitionDuration();
    this.dom.container.style.setProperty(
      "--am-transition-duration",
      `${this.transitionDuration}ms`
    );
  }
}

export default Bootstrap5DisclosureMenu;
