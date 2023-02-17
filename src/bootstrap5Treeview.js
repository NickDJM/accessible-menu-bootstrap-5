import Treeview from "accessible-menu/src/treeview.js";
import Bootstrap5TreeviewItem from "./bootstrap5TreeviewItem.js";
import Bootstrap5TreeviewToggle from "./bootstrap5TreeviewToggle.js";

/**
 * An accessible treeview navigation in the DOM.
 *
 * See https://www.w3.org/TR/wai-aria-practices-1.2/examples/treeview/treeview-2/treeview-2a.html
 */
class Bootstrap5Treeview extends Treeview {
  /**
   * The class to use when generating submenus.
   *
   * @type {typeof Bootstrap5Treeview}
   *
   * @public
   */
  _MenuType = Bootstrap5Treeview;

  /**
   * The class to use when generating menu items.
   *
   * @type {typeof Bootstrap5TreeviewItem}
   *
   * @public
   */
  _MenuItemType = Bootstrap5TreeviewItem;

  /**
   * The class to use when generating submenu toggles.
   *
   * @type {typeof Bootstrap5TreeviewToggle}
   *
   * @public
   */
  _MenuToggleType = Bootstrap5TreeviewToggle;

  /**
   * Constructs the menu.
   *
   * @param {object}                    options                                               - The options for generating the menu.
   * @param {HTMLElement}               options.menuElement                                   - The menu element in the DOM.
   * @param {string}                    [options.menuItemSelector = .nav-item,li]             - The CSS selector string for menu items.
   * @param {string}                    [options.menuLinkSelector = .nav-link,.dropdown-item] - The CSS selector string for menu links.
   * @param {string}                    [options.submenuItemSelector = .dropdown]             - The CSS selector string for menu items containing submenus.
   * @param {string}                    [options.submenuToggleSelector = .dropdown-toggle]    - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                    [options.submenuSelector = .dropdown-menu]            - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}        [options.controllerElement = null]                    - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}        [options.containerElement = null]                     - The element containing the menu in the DOM.
   * @param {(string|string[]|null)}    [options.openClass = show]                            - The class to apply when a menu is "open".
   * @param {(string|string[]|null)}    [options.closeClass = collapse]                       - The class to apply when a menu is "closed".
   * @param {boolean}                   [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5Treeview|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                    [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                    [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                   [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
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
      initialize: false,
    });

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap5Treeview;
