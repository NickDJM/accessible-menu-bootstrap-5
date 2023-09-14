import TopLinkDisclosureMenu from "accessible-menu/src/topLinkDisclosureMenu.js";
import Bootstrap5TopLinkDisclosureMenuItem from "./bootstrap5TopLinkDisclosureMenuItem.js";
import Bootstrap5TopLinkDisclosureMenuToggle from "./bootstrap5TopLinkDisclosureMenuToggle.js";
import { preventEvent } from "accessible-menu/src/eventHandlers.js";
import { isValidType } from "accessible-menu/src/validate.js";

/**
 * An accessible disclosure menu in the DOM.
 *
 * See {@link https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html|Example Disclosure for Navigation Menus}
 *
 * @extends TopLinkDisclosureMenu
 */
class Bootstrap5TopLinkDisclosureMenu extends TopLinkDisclosureMenu {
  /**
   * The class to use when generating submenus.
   *
   * @type {typeof Bootstrap5TopLinkDisclosureMenu}
   *
   * @protected
   */
  _MenuType = Bootstrap5TopLinkDisclosureMenu;

  /**
   * The class to use when generating menu items.
   *
   * @type {typeof Bootstrap5TopLinkDisclosureMenuItem}
   *
   * @protected
   */
  _MenuItemType = Bootstrap5TopLinkDisclosureMenuItem;

  /**
   * The class to use when generating submenu toggles.
   *
   * @type {typeof Bootstrap5TopLinkDisclosureMenuToggle}
   *
   * @protected
   */
  _MenuToggleType = Bootstrap5TopLinkDisclosureMenuToggle;

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
   * Bootstrap events that need to be intercepted to disbaled dropdowns.
   *
   * @type {string[]}
   *
   * @protected
   */
  _bootstrapEvents = [
    "show.bs.dropdown",
    "shown.bs.dropdown",
    "hide.bs.dropdown",
    "hidden.bs.dropdown",
  ];

  /**
   * Constructs the menu.
   *
   * @param {object}                                 options                                               - The options for generating the menu.
   * @param {HTMLElement}                            options.menuElement                                   - The menu element in the DOM.
   * @param {string}                                 [options.menuItemSelector = .nav-item,li]             - The CSS selector string for menu items.
   * @param {string}                                 [options.menuLinkSelector = .nav-link,.dropdown-item] - The CSS selector string for menu links.
   * @param {string}                                 [options.submenuItemSelector = .dropdown]             - The CSS selector string for menu items containing submenus.
   * @param {string}                                 [options.submenuToggleSelector = .dropdown-toggle]    - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                                 [options.submenuSelector = .dropdown-menu]            - The CSS selector string for submenus.
   * @param {string}                                 [options.submenuSubtoggleSelector = .dropdown-toggle] - The CSS selector string for submenu toggle buttons/links below the top level.
   * @param {(HTMLElement|null)}                     [options.controllerElement = null]                    - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}                     [options.containerElement = null]                     - The element containing the menu in the DOM.
   * @param {(string|string[]|null)}                 [options.openClass = show]                            - The class to apply when a menu is "open".
   * @param {(string|string[]|null)}                 [options.closeClass = collapse]                       - The class to apply when a menu is "closed".
   * @param {?(string|string[])}                     [options.transitionClass = transitioning]             - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}                                [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5TopLinkDisclosureMenu|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                                 [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                                 [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {number}                                 [options.enterDelay = -1]                             - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}                                 [options.leaveDelay = -1]                             - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}                                [options.optionalKeySupport = false]                  - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                         [options.disableBootstrap = true]                     - A flag to disable bootstrap's dropdown behaviour by making their events target a pseudo element.
   * @param {boolean}                                [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement,
    menuItemSelector = ".nav-item,li",
    menuLinkSelector = ".nav-link,.dropdown-item",
    submenuItemSelector = ".dropdown",
    submenuToggleSelector = ".dropdown-toggle",
    submenuSelector = ".dropdown-menu",
    submenuSubtoggleSelector = ".dropdown-toggle",
    controllerElement = null,
    containerElement = null,
    openClass = "show",
    closeClass = "collapse",
    transitionClass = "transitioning",
    isTopLevel = true,
    parentMenu = null,
    hoverType = "off",
    hoverDelay = 250,
    enterDelay = -1,
    leaveDelay = -1,
    optionalKeySupport = false,
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
      submenuSubtoggleSelector,
      controllerElement,
      containerElement,
      openClass,
      closeClass,
      transitionClass,
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

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link TopLinkDisclosureMenu#initialize|TopLinkDisclosureMenu's initialize method}
   * as well as the {@link Bootstrap5TopLinkDisclosureMenu#_disableBootstrapDropdownBehaviour|disableBootstrapDropdown} event
   * for the menu.
   */
  initialize() {
    super.initialize();

    if (this.bootstrapDisabled) {
      this._disableBootstrapDropdownBehaviour();
    }
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
   * Bootstrap events that need to be intercepted to disbaled dropdowns.
   *
   * @readonly
   *
   * @type {string[]}
   *
   * @see _bootstrapEvents
   */
  get bootstrapEvents() {
    return this._bootstrapEvents;
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
      this.bootstrapEvents.forEach((eventType) => {
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
}

export default Bootstrap5TopLinkDisclosureMenu;
