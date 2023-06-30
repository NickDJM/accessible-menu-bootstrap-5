// eslint-disable-next-line no-unused-vars
/* global Bootstrap5Menubar Bootstrap5MenubarToggle */

import MenubarItem from "accessible-menu/src/menubarItem.js";

/**
 * A basic navigation link contained inside of a Bootstrap5Menubar.
 */
class Bootstrap5MenubarItem extends MenubarItem {
  /**
   * Constructs the menu item.
   *
   * @param {object}                       options                         - The options for generating the menu item.
   * @param {HTMLElement}                  options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}                  options.menuLinkElement         - The menu item's link in the DOM.
   * @param {Bootstrap5Menubar}            options.parentMenu              - The parent menu.
   * @param {boolean}                      [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {Bootstrap5Menubar|null}       [options.childMenu = null]      - The child menu.
   * @param {Bootstrap5MenubarToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}                      [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   */
  constructor({
    menuItemElement,
    menuLinkElement,
    parentMenu,
    isSubmenuItem = false,
    childMenu = null,
    toggle = null,
    initialize = true,
  }) {
    super({
      menuItemElement,
      menuLinkElement,
      parentMenu,
      isSubmenuItem,
      childMenu,
      toggle,
      initialize: false,
    });

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap5MenubarItem;
