import TopLinkDisclosureMenu from "accessible-menu/src/topLinkDisclosureMenu.js";
import Bootstrap5TopLinkDisclosureMenuItem from "./bootstrap5TopLinkDisclosureMenuItem.js";
import Bootstrap5TopLinkDisclosureMenuToggle from "./bootstrap5TopLinkDisclosureMenuToggle.js";

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

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap5TopLinkDisclosureMenu;
