import DisclosureMenu from "accessible-menu/src/disclosureMenu.js";
import Bootstrap5DisclosureMenuItem from "./bootstrap5DisclosureMenuItem.js";
import Bootstrap5DisclosureMenuToggle from "./bootstrap5DisclosureMenuToggle.js";

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
  _MenuType = Bootstrap5DisclosureMenu; // eslint-disable-line no-use-before-define

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
   * @param {(string|string[]|null)}          [options.openClass = show]                            - The class to apply when a menu is "open".
   * @param {(string|string[]|null)}          [options.closeClass = collapse]                       - The class to apply when a menu is "closed".
   * @param {boolean}                         [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5DisclosureMenu|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                          [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                          [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                         [options.optionalKeySupport = false]                  - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
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
    openClass = "show",
    closeClass = "collapse",
    isTopLevel = true,
    parentMenu = null,
    hoverType = "off",
    hoverDelay = 250,
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
      controllerElement,
      containerElement,
      openClass,
      closeClass,
      isTopLevel,
      parentMenu,
      hoverType,
      hoverDelay,
      optionalKeySupport,
      initialize: false,
    });

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap5DisclosureMenu;
