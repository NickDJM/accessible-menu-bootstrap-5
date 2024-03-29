/* eslint-disable jsdoc/no-undefined-types */

import TopLinkDisclosureMenuItem from "accessible-menu/src/topLinkDisclosureMenuItem.js";

/**
 * A basic navigation link contained inside of a Bootstrap5TopLinkDisclosureMenu.
 */
class Bootstrap5TopLinkDisclosureMenuItem extends TopLinkDisclosureMenuItem {
  /**
   * Constructs the menu item.
   *
   * @param {object}                                     options                         - The options for generating the menu item.
   * @param {HTMLElement}                                options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}                                options.menuLinkElement         - The menu item's link in the DOM.
   * @param {Bootstrap5TopLinkDisclosureMenu}            options.parentMenu              - The parent menu.
   * @param {boolean}                                    [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {Bootstrap5TopLinkDisclosureMenu|null}       [options.childMenu = null]      - The child menu.
   * @param {Bootstrap5TopLinkDisclosureMenuToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}                                    [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   * @param {Bootstrap5TopLinkDisclosureMenuToggle|null} [options.submenuSibling = null] - The sibling menu item that controls a submenu.
   */
  constructor({
    menuItemElement,
    menuLinkElement,
    parentMenu,
    isSubmenuItem = false,
    childMenu = null,
    toggle = null,
    initialize = true,
    submenuSibling = null,
  }) {
    super({
      menuItemElement,
      menuLinkElement,
      parentMenu,
      isSubmenuItem,
      childMenu,
      toggle,
      initialize: false,
      submenuSibling,
    });

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap5TopLinkDisclosureMenuItem;
