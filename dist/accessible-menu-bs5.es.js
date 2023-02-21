var B = Object.defineProperty;
var W = (o, s, e) => s in o ? B(o, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[s] = e;
var h = (o, s, e) => (W(o, typeof s != "symbol" ? s + "" : s, e), e);
function I(o, s) {
  try {
    if (typeof s != "object") {
      const e = typeof s;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in s)
      if (!(s[e] instanceof o)) {
        const t = typeof s[e];
        throw new TypeError(
          `${e} must be an instance of ${o.name}. "${t}" given.`
        );
      }
    return {
      status: !0,
      error: null
    };
  } catch (e) {
    return {
      status: !1,
      error: e
    };
  }
}
function y(o, s) {
  try {
    if (typeof s != "object") {
      const e = typeof s;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in s) {
      const t = typeof s[e];
      if (t !== o)
        throw new TypeError(`${e} must be a ${o}. "${t}" given.`);
    }
    return {
      status: !0,
      error: null
    };
  } catch (e) {
    return {
      status: !1,
      error: e
    };
  }
}
function S(o) {
  try {
    if (typeof o != "object") {
      const s = typeof o;
      throw new TypeError(
        `Values given to isCSSSelector() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in o)
      try {
        if (o[s] === null)
          throw new Error();
        document.querySelector(o[s]);
      } catch {
        throw new TypeError(
          `${s} must be a valid CSS selector. "${o[s]}" given.`
        );
      }
    return {
      status: !0,
      error: null
    };
  } catch (s) {
    return {
      status: !1,
      error: s
    };
  }
}
function v(o) {
  try {
    if (typeof o != "object" || Array.isArray(o)) {
      const s = typeof o;
      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in o) {
      const e = typeof o[s];
      if (e !== "string")
        if (Array.isArray(o[s]))
          o[s].forEach((t) => {
            if (typeof t != "string")
              throw new TypeError(
                `${s} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${s} must be a string or an array of strings. "${e}" given.`
          );
      else {
        const t = {};
        t[s] = o[s], S(t);
      }
    }
    return {
      status: !0,
      error: null
    };
  } catch (s) {
    return {
      status: !1,
      error: s
    };
  }
}
function Z(o) {
  try {
    if (typeof o != "object") {
      const e = typeof o;
      throw new TypeError(
        `Values given to isValidState() must be inside of an object. "${e}" given.`
      );
    }
    const s = ["none", "self", "child"];
    for (const e in o)
      if (!s.includes(o[e]))
        throw new TypeError(
          `${e} must be one of the following values: ${s.join(
            ", "
          )}. "${o[e]}" given.`
        );
    return {
      status: !0,
      error: null
    };
  } catch (s) {
    return {
      status: !1,
      error: s
    };
  }
}
function G(o) {
  try {
    if (typeof o != "object") {
      const e = typeof o;
      throw new TypeError(
        `Values given to isValidEvent() must be inside of an object. "${e}" given.`
      );
    }
    const s = ["none", "mouse", "keyboard", "character"];
    for (const e in o)
      if (!s.includes(o[e]))
        throw new TypeError(
          `${e} must be one of the following values: ${s.join(
            ", "
          )}. "${o[e]}" given.`
        );
    return {
      status: !0,
      error: null
    };
  } catch (s) {
    return {
      status: !1,
      error: s
    };
  }
}
function F(o) {
  try {
    if (typeof o != "object") {
      const e = typeof o;
      throw new TypeError(
        `Values given to isValidHoverType() must be inside of an object. "${e}" given.`
      );
    }
    const s = ["off", "on", "dynamic"];
    for (const e in o)
      if (!s.includes(o[e]))
        throw new TypeError(
          `${e} must be one of the following values: ${s.join(
            ", "
          )}. "${o[e]}" given.`
        );
    return {
      status: !0,
      error: null
    };
  } catch (s) {
    return {
      status: !1,
      error: s
    };
  }
}
function J(o, s) {
  if (y("string", { tagName: o }).status && I(HTMLElement, s).status) {
    const e = o.toLowerCase();
    let t = !0;
    for (const n in s)
      s[n].tagName.toLowerCase() !== e && (t = !1);
    return t;
  } else
    return !1;
}
class T {
  /**
   * Constructs the menu toggle.
   *
   * @param {object}        options                     - The options for generating the menu toggle.
   * @param {HTMLElement}   options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}   options.parentElement       - The element containing the controlled menu.
   * @param {BaseMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {BaseMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   */
  constructor({
    menuToggleElement: s,
    parentElement: e,
    controlledMenu: t,
    parentMenu: n = null
  }) {
    /**
     * The DOM elements within the menu toggle.
     *
     * @protected
     *
     * @type {Object<HTMLElement>}
     *
     * @property {HTMLElement} toggle - The menu toggle.
     * @property {HTMLElement} parent - The menu containing this toggle.
     */
    h(this, "_dom", {
      toggle: null,
      parent: null
    });
    /**
     * The declared accessible-menu elements within the menu toggle.
     *
     * @protected
     *
     * @type {Object<BaseMenu>}
     *
     * @property {BaseMenu} controlledMenu - The menu controlled by this toggle.
     * @property {BaseMenu} parentMenu     - The menu containing this toggle.
     */
    h(this, "_elements", {
      controlledMenu: null,
      parentMenu: null
    });
    /**
     * The open state of the menu toggle.
     *
     * @protected
     *
     * @type {boolean}
     */
    h(this, "_open", !1);
    /**
     * Expand event.
     *
     * @protected
     *
     * @event accessibleMenuExpand
     *
     * @type {CustomEvent}
     *
     * @property {Object<BaseMenuToggle>} details - The details object containing the BaseMenuToggle itself.
     */
    h(this, "_expandEvent", new CustomEvent("accessibleMenuExpand", {
      bubbles: !0,
      detail: { toggle: this }
    }));
    /**
     * Collapse event.
     *
     * @protected
     *
     * @event accessibleMenuCollapse
     *
     * @type {CustomEvent}
     *
     * @property {Object<BaseMenuToggle>} details - The details object containing the BaseMenuToggle itself.
     */
    h(this, "_collapseEvent", new CustomEvent("accessibleMenuCollapse", {
      bubbles: !0,
      detail: { toggle: this }
    }));
    this._dom.toggle = s, this._dom.parent = e, this._elements.controlledMenu = t, this._elements.parentMenu = n;
  }
  /**
   * Initializes the menu toggle.
   *
   * Initialize does a lot of setup on the menu toggle.
   *
   * The most basic setup steps are to ensure that the toggle has `aria-haspopup`
   * set to "true", `aria-expanded` initially set to "false" and, if the toggle
   * element is not a `<button>`, set the `role` to "button".
   *
   * The next step to the initialization is to ensure both the toggle and the
   * menu it controlls have IDs.
   *
   * If they do not, the following steps take place:
   * - Generate a random 10 character string,
   * - Get the innerText of the toggle,
   * - Set the toggle's ID to: `${toggle-inner-text}-${the-random-string}-menu-button`
   * - Set the menu's ID to: `${toggle-inner-text}-${the-random-string}-menu`
   *
   * Once the ID's have been generated, the menu's `aria-labelledby` is set to
   * the toggle's ID, and the toggle's `aria-controls` is set to the menu's ID.
   *
   * Finally, the collapse method is called to make sure the submenu is closed.
   */
  initialize() {
    if (this.dom.toggle.setAttribute("aria-haspopup", "true"), this.dom.toggle.setAttribute("aria-expanded", "false"), J("button", { toggle: this.dom.toggle }) || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.id === "" || this.elements.controlledMenu.dom.menu.id === "") {
      const s = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
      let e = this.dom.toggle.innerText.replace(/[^a-zA-Z0-9\s]/g, ""), t = s;
      !e.replace(/\s/g, "").length && this.dom.toggle.getAttribute("aria-label") && (e = this.dom.toggle.getAttribute("aria-label").replace(/[^a-zA-Z0-9\s]/g, "")), e.replace(/\s/g, "").length > 0 && (e = e.toLowerCase().replace(/\s+/g, "-"), e.startsWith("-") && (e = e.substring(1)), e.endsWith("-") && (e = e.slice(0, -1)), t = `${e}-${t}`), this.dom.toggle.id = this.dom.toggle.id || `${t}-menu-button`, this.elements.controlledMenu.dom.menu.id = this.elements.controlledMenu.dom.menu.id || `${t}-menu`;
    }
    this.elements.controlledMenu.dom.menu.setAttribute(
      "aria-labelledby",
      this.dom.toggle.id
    ), this.dom.toggle.setAttribute(
      "aria-controls",
      this.elements.controlledMenu.dom.menu.id
    ), this._collapse(!1);
  }
  /**
   * Get the DOM elements within the toggle.
   *
   * @readonly
   *
   * @type {Object<HTMLElement>}
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }
  /**
   * Get the declared accessible-menu elements within the menu toggle.
   *
   * @readonly
   *
   * @type {Object<BaseMenu>}
   *
   * @see _elements
   */
  get elements() {
    return this._elements;
  }
  /**
   * Get the open state on the menu.
   *
   * @type {boolean}
   *
   * @see _open
   */
  get isOpen() {
    return this._open;
  }
  set isOpen(s) {
    y("boolean", { value: s }), this._open = s;
  }
  /**
   * Expands the controlled menu.
   *
   * Sets the toggle's `aria-expanded` to "true", adds the
   * {@link BaseMenu#openClass|open class} to the toggle's parent menu item
   * and controlled menu, and removed the {@link BaseMenu#closeClass|closed class}
   * from the toggle's parent menu item and controlled menu.
   *
   * If `emit` is set to `true`, this will also emit a custom event
   * called {@link accessibleMenuExpand}
   *
   * @protected
   *
   * @fires accessibleMenuExpand
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(s = !0) {
    const { closeClass: e, openClass: t } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), t !== "" && (typeof t == "string" ? this.elements.controlledMenu.dom.menu.classList.add(t) : this.elements.controlledMenu.dom.menu.classList.add(...t)), e !== "" && (typeof e == "string" ? this.elements.controlledMenu.dom.menu.classList.remove(e) : this.elements.controlledMenu.dom.menu.classList.remove(...e)), s && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Sets the toggle's `aria-expanded` to "false", adds the
   * {@link BaseMenu#closeClass|closed class} to the toggle's parent menu item
   * and controlled menu, and removes the {@link BaseMenu#openClass|open class}
   * from the toggle's parent menu item and controlled menu.
   *
   * If `emit` is set to `true`, this will also emit a custom event
   * called {@link accessibleMenuCollapse}
   *
   * @protected
   *
   * @fires accessibleMenuCollapse
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(s = !0) {
    const { closeClass: e, openClass: t } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), e !== "" && (typeof e == "string" ? this.elements.controlledMenu.dom.menu.classList.add(e) : this.elements.controlledMenu.dom.menu.classList.add(...e)), t !== "" && (typeof t == "string" ? this.elements.controlledMenu.dom.menu.classList.remove(t) : this.elements.controlledMenu.dom.menu.classList.remove(...t)), s && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
  /**
   * Opens the controlled menu.
   *
   * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "self"
   * and the parent menu's focus state to "child", calls {@link BaseMenuToggle#expand|expand},
   * and sets the {@link BaseMenuToggle#isOpen|isOpen} value to `true`.
   */
  open() {
    this.elements.controlledMenu.focusState = "self", this._expand(), this.isOpen = !0;
  }
  /**
   * Opens the controlled menu without the current focus entering it.
   *
   * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "self"
   * and the parent menu's focus state to "child",
   * and calls {@link BaseMenuToggle#expand|expand}.
   */
  preview() {
    this.elements.parentMenu && (this.elements.parentMenu.focusState = "self"), this._expand(), this.isOpen = !0;
  }
  /**
   * Closes the controlled menu.
   *
   * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "none"
   * and the parent menu's focus state to "self", blurs the controlled menu
   * and sets it's {@link BaseMenu#currentChild|current child index} to 0,
   * calls {@link BaseMenuToggle#collapse|collapse}, and sets
   * the {@link BaseMenuToggle#isOpen|isOpen} value to `false`.
   */
  close() {
    this.isOpen && (this.elements.controlledMenu.currentChild = 0, this.elements.controlledMenu.blur(), this.elements.parentMenu && (this.elements.parentMenu.focusState = "self"), this._collapse(), this.isOpen = !1);
  }
  /**
   * Toggles the open state of the controlled menu between `true` and `false`.
   */
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  /**
   * Closes all sibling menus.
   */
  closeSiblings() {
    this.elements.parentMenu && this.elements.parentMenu.elements.submenuToggles.forEach((s) => {
      s !== this && s.close();
    });
  }
  /**
   * Closes all child menus.
   */
  closeChildren() {
    this.elements.controlledMenu.elements.submenuToggles.forEach(
      (s) => s.close()
    );
  }
}
class w {
  /**
   * Constructs the menu item.
   *
   * @param {object}          options                         - The options for generating the menu item.
   * @param {HTMLElement}     options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}     options.menuLinkElement         - The menu item's link in the DOM.
   * @param {BaseMenu}        options.parentMenu              - The parent menu.
   * @param {boolean}         [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {?BaseMenu}       [options.childMenu = null]      - The child menu.
   * @param {?BaseMenuToggle} [options.toggle = null]         - The controller for the child menu.
   */
  constructor({
    menuItemElement: s,
    menuLinkElement: e,
    parentMenu: t,
    isSubmenuItem: n = !1,
    childMenu: i = null,
    toggle: r = null
  }) {
    /**
     * The DOM elements within the menu item.
     *
     * @type {Object<HTMLElement>}
     *
     * @protected
     *
     * @property {HTMLElement} item - The menu item.
     * @property {HTMLElement} link - The menu item's link.
     */
    h(this, "_dom", {
      item: null,
      link: null
    });
    /**
     * The declared accessible-menu elements within the menu item.
     *
     * @type {Object<BaseMenu, BaseMenuToggle>}
     *
     * @protected
     *
     * @property {BaseMenu}        parentMenu - The menu containing this menu item.
     * @property {?BaseMenu}       childMenu  - The menu contained within this menu item.
     * @property {?BaseMenuToggle} toggle     - The menu toggle within this menu item that controls the `childMenu`.
     */
    h(this, "_elements", {
      parentMenu: null,
      childMenu: null,
      toggle: null
    });
    /**
     * A flag marking a submenu item.
     *
     * @type {boolean}
     */
    h(this, "_submenu", !1);
    this._dom.item = s, this._dom.link = e, this._elements.parentMenu = t, this._elements.childMenu = i, this._elements.toggle = r, this._submenu = n;
  }
  /**
   * Initialize the menu item.
   */
  initialize() {
  }
  /**
   * The DOM elements within the menu item.
   *
   * @type {Object<HTMLElement>}
   *
   * @readonly
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }
  /**
   * The declared accessible-menu elements within the menu item.
   *
   * @type {Object<BaseMenu, BaseMenuToggle>}
   *
   * @readonly
   *
   * @see _elements
   */
  get elements() {
    return this._elements;
  }
  /**
   * A flag marking a submenu item.
   *
   * @type {boolean}
   *
   * @readonly
   *
   * @see _submenu
   */
  get isSubmenuItem() {
    return this._submenu;
  }
  /**
   * Focuses the menu item's link if the parent menu's
   * {@link BaseMenu#shouldFocus|shouldFocus} value is `true`.
   */
  focus() {
    this.elements.parentMenu.shouldFocus && this.dom.link.focus();
  }
  /**
   * Blurs the menu item's link if the parent menu's
   * {@link BaseMenu#shouldFocus|shouldFocus} value is `true`.
   */
  blur() {
    this.elements.parentMenu.shouldFocus && this.dom.link.blur();
  }
}
function C(o) {
  try {
    const s = o.key || o.keyCode, e = {
      Enter: s === "Enter" || s === 13,
      Space: s === " " || s === "Spacebar" || s === 32,
      Escape: s === "Escape" || s === "Esc" || s === 27,
      ArrowUp: s === "ArrowUp" || s === "Up" || s === 38,
      ArrowRight: s === "ArrowRight" || s === "Right" || s === 39,
      ArrowDown: s === "ArrowDown" || s === "Down" || s === 40,
      ArrowLeft: s === "ArrowLeft" || s === "Left" || s === 37,
      Home: s === "Home" || s === 36,
      End: s === "End" || s === 35,
      Character: isNaN(s) && !!s.match(/^[a-zA-Z]{1}$/),
      Tab: s === "Tab" || s === 9,
      Asterisk: s === "*" || s === 56
    };
    return Object.keys(e).find((t) => e[t] === !0) || "";
  } catch {
    return "";
  }
}
function l(o) {
  o.preventDefault(), o.stopPropagation();
}
class E {
  /**
   * Constructs the menu.
   *
   * @param {object}                 options                             - The options for generating the menu.
   * @param {HTMLElement}            options.menuElement                 - The menu element in the DOM.
   * @param {string}                 [options.menuItemSelector = li]     - The CSS selector string for menu items.
   * @param {string}                 [options.menuLinkSelector = a]      - The CSS selector string for menu links.
   * @param {string}                 [options.submenuItemSelector]       - The CSS selector string for menu items containing submenus.
   * @param {string}                 [options.submenuToggleSelector = a] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                 [options.submenuSelector = ul]      - The CSS selector string for submenus.
   * @param {?HTMLElement}           [options.controllerElement = null]  - The element controlling the menu in the DOM.
   * @param {?HTMLElement}           [options.containerElement = null]   - The element containing the menu in the DOM.
   * @param {?(string|string[])}     [options.openClass = show]          - The class to apply when a menu is "open".
   * @param {?(string|string[])}     [options.closeClass = hide]         - The class to apply when a menu is "closed".
   * @param {boolean}                [options.isTopLevel = false]        - A flag to mark the root menu.
   * @param {?BaseMenu}              [options.parentMenu = null]         - The parent menu to this menu.
   * @param {string}                 [options.hoverType = off]           - The type of hoverability a menu has.
   * @param {number}                 [options.hoverDelay = 250]          - The delay for closing menus if the menu is hoverable (in miliseconds).
   */
  constructor({
    menuElement: s,
    menuItemSelector: e = "li",
    menuLinkSelector: t = "a",
    submenuItemSelector: n = "",
    submenuToggleSelector: i = "a",
    submenuSelector: r = "ul",
    controllerElement: u = null,
    containerElement: c = null,
    openClass: m = "show",
    closeClass: d = "hide",
    isTopLevel: a = !0,
    parentMenu: f = null,
    hoverType: p = "off",
    hoverDelay: g = 250
  }) {
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof BaseMenu}
     */
    h(this, "_MenuType", E);
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof BaseMenuItem}
     */
    h(this, "_MenuItemType", w);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof BaseMenuToggle}
     */
    h(this, "_MenuToggleType", T);
    /**
     * The DOM elements within the menu.
     *
     * @protected
     *
     * @type {Object<HTMLElement, HTMLElement[]>}
     *
     * @property {HTMLElement}   menu           - The menu element.
     * @property {HTMLElement[]} menuItems      - An array of menu items.
     * @property {HTMLElement[]} submenuItems   - An array of menu items that also contain submenu elements.
     * @property {HTMLElement[]} submenuToggles - An array of menu links that function as submenu toggles.
     * @property {HTMLElement[]} submenus       - An array of submenu elements.
     * @property {HTMLElement}   controller     - The toggle for this menu.
     * @property {HTMLElement}   container      - The container for this menu.
     */
    h(this, "_dom", {
      menu: null,
      menuItems: [],
      submenuItems: [],
      submenuToggles: [],
      submenus: [],
      controller: null,
      container: null
    });
    /**
     * The CSS selectors used by the menu to populate the {@link BaseMenu#dom|dom}.
     *
     * @protected
     *
     * @type {Object<string>}
     *
     * @property {string} menuItems      - The CSS selector for menu items.
     * @property {string} menuLinks      - The CSS selector for menu links.
     * @property {string} submenuItems   - The CSS selector for menu items containing submenus.
     * @property {string} submenuToggles - The CSS selector for menu links that function as submenu toggles.
     * @property {string} submenus       - The CSS selector for for submenus.
     */
    h(this, "_selectors", {
      menuItems: "",
      menuLinks: "",
      submenuItems: "",
      submenuToggles: "",
      submenus: ""
    });
    /**
     * The declared accessible-menu elements within the menu.
     *
     * @protected
     *
     * @type {Object<BaseMenu, BaseMenuToggle, BaseMenuItem[], BaseMenuToggle[]>}
     *
     * @property {BaseMenuItem[]}   menuItems      - An array of menu items.
     * @property {BaseMenuToggle[]} submenuToggles - An array of menu toggles.
     * @property {?BaseMenuToggle}  controller     - A menu toggle that controls this menu.
     * @property {?BaseMenu}        parentMenu     - The parent menu.
     * @property {?BaseMenu}        rootMenu       - The root menu of the menu tree.
     */
    h(this, "_elements", {
      menuItems: [],
      submenuToggles: [],
      controller: null,
      parentMenu: null,
      rootMenu: null
    });
    /**
     * The class(es) to apply when the menu is open.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    h(this, "_openClass", "show");
    /**
     * The class(es) to apply when the menu is closed.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    h(this, "_closeClass", "hide");
    /**
     * A flag marking the root menu.
     *
     * @protected
     *
     * @type {boolean}
     */
    h(this, "_root", !0);
    /**
     * The index of the currently selected {@link BaseMenuItem|menu item} in the menu.
     *
     * @protected
     *
     * @type {number}
     */
    h(this, "_currentChild", 0);
    /**
     * The current state of the menu's focus.
     *
     * @protected
     *
     * @type {string}
     */
    h(this, "_focusState", "none");
    /**
     * This last event triggered on the menu.
     *
     * @protected
     *
     * @type {string}
     */
    h(this, "_currentEvent", "none");
    /**
     * The type of hoverability for the menu.
     *
     * @protected
     *
     * @type {string}
     */
    h(this, "_hoverType", "off");
    /**
     * The delay time (in miliseconds) used for mouseout events to take place.
     *
     * @protected
     *
     * @type {number}
     */
    h(this, "_hoverDelay", 250);
    /**
     * An array of error messages generated by the menu.
     *
     * @protected
     *
     * @type {string[]}
     */
    h(this, "_errors", []);
    this._dom.menu = s, this._dom.controller = u, this._dom.container = c, this._selectors.menuItems = e, this._selectors.menuLinks = t, this._selectors.submenuItems = n, this._selectors.submenuToggles = i, this._selectors.submenus = r, this._elements.menuItems = [], this._elements.submenuToggles = [], this._elements.controller = null, this._elements.parentMenu = f, this._elements.rootMenu = a ? this : null, this._openClass = m || "", this._closeClass = d || "", this._root = a, this._hoverType = p, this._hoverDelay = g;
  }
  /**
   * Initializes the menu.
   *
   * The following steps will be taken to initialize the menu:
   * - {@link BaseMenu#validate|Validate} that the menu can initialize,
   * - find the root menu of the menu tree if it isn't already set,
   * - populate all DOM elements within the {@link BaseMenu#dom|dom},
   * - if the current menu is the root menu _and_ has a controller, initialize
   *   the controller, and
   * - populate the menu elements within the {@link BaseMenu#elements|elements}
   *
   * @throws {Error} Will throw an Error if validate returns `false`.
   */
  initialize() {
    if (!this._validate())
      throw new Error(
        `AccesibleMenu: cannot initialize menu. The following errors have been found:
 - ${this.errors.join(
          `
 - `
        )}`
      );
    if (this.elements.rootMenu === null && this._findRootMenu(this), this._setDOMElements(), this.isTopLevel && this.dom.controller && this.dom.container) {
      const s = new this._MenuToggleType({
        menuToggleElement: this.dom.controller,
        parentElement: this.dom.container,
        controlledMenu: this
      });
      this._elements.controller = s;
    }
    this._createChildElements();
  }
  /**
   * The DOM elements within the menu.
   *
   * @readonly
   *
   * @type {Object<HTMLElement, HTMLElement[]>}
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }
  /**
   * The CSS selectors used by the menu to populate the {@link BaseMenu#dom|dom}.
   *
   * @readonly
   *
   * @type {Object<string>}
   *
   * @see _selectors
   */
  get selectors() {
    return this._selectors;
  }
  /**
   * The declared accessible-menu elements within the menu.
   *
   * @readonly
   *
   * @type {Object<BaseMenu, BaseMenuToggle, BaseMenuItem[], BaseMenuToggle[]>}
   *
   * @see _elements
   */
  get elements() {
    return this._elements;
  }
  /**
   * The flag marking the root menu.
   *
   * @readonly
   *
   * @type {boolean}
   *
   * @see _root
   */
  get isTopLevel() {
    return this._root;
  }
  /**
   * The class(es) to apply when the menu is open.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's open class(es).
   *
   * @type {string|string[]}
   *
   * @see _openClass
   */
  get openClass() {
    return this.isTopLevel ? this._openClass : this.elements.rootMenu.openClass;
  }
  /**
   * The class(es) to apply when the menu is closed.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's close class(es).
   *
   * @type {string|string[]}
   *
   * @see _closeClass
   */
  get closeClass() {
    return this.isTopLevel ? this._closeClass : this.elements.rootMenu.closeClass;
  }
  /**
   * The index of the currently selected {@link BaseMenuItem|menu item} in the menu.
   *
   * - Attempting to set a value less than -1 will set the current child to -1.
   * - Attempting to set a value greater than or equal to the number of menu items
   *   will set the current child to the index of the last menu item in the menu.
   *
   * If the current menu has a parent menu _and_ the menu's
   * {@link BaseMenu#currentEvent|current event} is "mouse", The parent menu
   * will have it's current child updated as well to help with transitioning
   * between mouse and keyboard naviation.
   *
   * @type {number}
   *
   * @see _currentChild
   */
  get currentChild() {
    return this._currentChild;
  }
  /**
   * The current state of the menu's focus.
   *
   * - If the menu has submenus, setting the focus state to "none" or "self" will
   *   update all child menus to have the focus state of "none".
   * - If the menu has a parent menu, setting the focus state to "self" or "child"
   *   will update all parent menus to have the focus state of "child".
   *
   * @type {string}
   *
   * @see _focusState
   */
  get focusState() {
    return this._focusState;
  }
  /**
   * The last event triggered on the menu.
   *
   * @type {string}
   *
   * @see _currentEvent
   */
  get currentEvent() {
    return this._currentEvent;
  }
  /**
   * The currently selected menu item.
   *
   * @type {BaseMenuItem}
   */
  get currentMenuItem() {
    return this.elements.menuItems[this.currentChild];
  }
  /**
   * The type of hoverability for the menu.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's hoverability.
   *
   * @type {string}
   *
   * @see _hoverType
   */
  get hoverType() {
    return this._root ? this._hoverType : this.elements.rootMenu.hoverType;
  }
  /**
   * The delay time (in miliseconds) used for mouseout events to take place.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's hover delay.
   *
   * @type {number}
   *
   * @see _hoverDelay
   */
  get hoverDelay() {
    return this._root ? this._hoverDelay : this.elements.rootMenu.hoverDelay;
  }
  /**
   * A flag to check if the menu's focus methods should _actually_ move the focus in the DOM.
   *
   * This will be `false` unless any of the following criteria are met:
   * - The menu's {@link BaseMenu#currentEvent|current event} is "keyboard".
   * - The menu's current event is "character".
   * - The menu's current event is "mouse" _and_ the menu's
   *   {@link BaseMenu_hoverTypeType|hover type} is "dynamic".
   *
   * @type {boolean}
   */
  get shouldFocus() {
    let s = !1;
    return (this.currentEvent === "keyboard" || this.currentEvent === "character") && (s = !0), this.currentEvent === "mouse" && this.hoverType === "dynamic" && (s = !0), s;
  }
  /**
   * An array of error messages generated by the menu.
   *
   * @readonly
   *
   * @type {string[]}
   *
   * @see _errors
   */
  get errors() {
    return this._errors;
  }
  set openClass(s) {
    v({ openClass: s }), this._openClass !== s && (this._openClass = s);
  }
  set closeClass(s) {
    v({ closeClass: s }), this._closeClass !== s && (this._closeClass = s);
  }
  set currentChild(s) {
    y("number", { value: s });
    function e(t) {
      if (["mouse", "character"].includes(t.currentEvent) && t.elements.parentMenu) {
        let i = 0, r = !1;
        for (; !r && i < t.elements.parentMenu.elements.menuItems.length; ) {
          const u = t.elements.parentMenu.elements.menuItems[i];
          u.isSubmenuItem && u.elements.toggle.elements.controlledMenu === t && (r = !0, t.elements.parentMenu.currentEvent = t.currentEvent, t.elements.parentMenu.currentChild = i), i++;
        }
      }
    }
    s < -1 ? (this._currentChild = -1, e(this)) : s >= this.elements.menuItems.length ? (this._currentChild = this.elements.menuItems.length - 1, e(this)) : this.focusChild !== s && (this._currentChild = s, e(this));
  }
  set focusState(s) {
    Z({ value: s }), this._focusState !== s && (this._focusState = s), this.elements.submenuToggles.length > 0 && (s === "self" || s === "none") && this.elements.submenuToggles.forEach((e) => {
      e.elements.controlledMenu.focusState = "none";
    }), this.elements.parentMenu && (s === "self" || s === "child") && (this.elements.parentMenu.focusState = "child");
  }
  set currentEvent(s) {
    G({ value: s }), this._currentEvent !== s && (this._currentEvent = s, this.elements.submenuToggles.length > 0 && this.elements.submenuToggles.forEach((e) => {
      e.elements.controlledMenu.currentEvent = s;
    }));
  }
  set hoverType(s) {
    F({ value: s }), this._hoverType !== s && (this._hoverType = s);
  }
  set hoverDelay(s) {
    y("number", { value: s }), this._hoverDelay !== s && (this._hoverDelay = s);
  }
  /**
   * Validates all aspects of the menu to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let s = !0, e;
    this._dom.container !== null || this._dom.controller !== null ? e = I(HTMLElement, {
      menuElement: this._dom.menu,
      controllerElement: this._dom.controller,
      containerElement: this._dom.container
    }) : e = I(HTMLElement, {
      menuElement: this._dom.menu
    }), e.status || (this._errors.push(e.error.message), s = !1);
    let t;
    if (this._selectors.submenuItems !== "" ? t = S({
      menuItemSelector: this._selectors.menuItems,
      menuLinkSelector: this._selectors.menuLinks,
      submenuItemSelector: this._selectors.submenuItems,
      submenuToggleSelector: this._selectors.submenuToggles,
      submenuSelector: this._selectors.submenus
    }) : t = S({
      menuItemSelector: this._selectors.menuItems,
      menuLinkSelector: this._selectors.menuLinks
    }), t.status || (this._errors.push(t.error.message), s = !1), this._openClass !== "") {
      const u = v({ openClass: this._openClass });
      u.status || (this._errors.push(u.error.message), s = !1);
    }
    if (this._closeClass !== "") {
      const u = v({
        closeClass: this._closeClass
      });
      u.status || (this._errors.push(u.error.message), s = !1);
    }
    const n = y("boolean", { isTopLevel: this._root });
    if (n.status || (this._errors.push(n.error.message), s = !1), this._elements.parentMenu !== null) {
      const u = I(E, {
        parentMenu: this._elements.parentMenu
      });
      u.status || (this._errors.push(u.error.message), s = !1);
    }
    const i = F({ hoverType: this._hoverType });
    i.status || (this._errors.push(i.error.message), s = !1);
    const r = y("number", {
      hoverDelay: this._hoverDelay
    });
    return r.status || (this._errors.push(r.error.message), s = !1), s;
  }
  /**
   * Sets DOM elements within the menu.
   *
   * Elements that are not stored inside an array cannot be set through this method.
   *
   * @protected
   *
   * @param {string}      elementType            - The type of element to populate.
   * @param {HTMLElement} [base = this.dom.menu] - The element used as the base for the querySelect.
   * @param {boolean}     [overwrite = true]     - A flag to set if the existing elements will be overwritten.
   */
  _setDOMElementType(s, e = this.dom.menu, t = !0) {
    if (typeof this.selectors[s] == "string") {
      if (!Array.isArray(this.dom[s]))
        throw new Error(
          `AccessibleMenu: The "${s}" element cannot be set through _setDOMElementType.`
        );
      e !== this.dom.menu && I(HTMLElement, { base: e });
      const i = Array.from(
        e.querySelectorAll(this.selectors[s])
      ).filter(
        (r) => r.parentElement === e
      );
      t ? this._dom[s] = i : this._dom[s] = [
        ...this._dom[s],
        ...i
      ];
    } else
      throw new Error(
        `AccessibleMenu: "${s}" is not a valid element type within the menu.`
      );
  }
  /**
   * Resets DOM elements within the menu.
   *
   * Elements that are not stored inside an array cannot be reset through this method.
   *
   * @protected
   *
   * @param {string} elementType - The type of element to clear.
   */
  _resetDOMElementType(s) {
    if (typeof this.dom[s] < "u") {
      if (!Array.isArray(this.dom[s]))
        throw new Error(
          `AccessibleMenu: The "${s}" element cannot be reset through _resetDOMElementType.`
        );
      this._dom[s] = [];
    } else
      throw new Error(
        `AccessibleMenu: "${s}" is not a valid element type within the menu.`
      );
  }
  /**
   * Sets all DOM elements within the menu.
   *
   * Utiliizes {@link BaseMenu#_setDOMElementType|_setDOMElementType} and
   * {@link BaseMenu#_resetDOMElementType|_resetDOMElementType}.
   *
   * @protected
   */
  _setDOMElements() {
    this._setDOMElementType("menuItems"), this.selectors.submenuItems !== "" && (this._setDOMElementType("submenuItems"), this._resetDOMElementType("submenuToggles"), this._resetDOMElementType("submenus"), this.dom.submenuItems.forEach((s) => {
      this._setDOMElementType("submenuToggles", s, !1), this._setDOMElementType("submenus", s, !1);
    }));
  }
  /**
   * Finds the root menu element.
   *
   * @protected
   *
   * @param {BaseMenu} menu - The menu to check.
   */
  _findRootMenu(s) {
    if (s.isTopLevel)
      this._elements.rootMenu = s;
    else if (s.elements.parentMenu !== null)
      this._findRootMenu(s.elements.parentMenu);
    else
      throw new Error("Cannot find root menu.");
  }
  /**
   * Creates and initializes all menu items and submenus.
   *
   * @protected
   */
  _createChildElements() {
    this.dom.menuItems.forEach((s) => {
      let e;
      if (this.dom.submenuItems.includes(s)) {
        const t = s.querySelector(this.selectors.submenuToggles), n = s.querySelector(this.selectors.submenus), i = new this._MenuType({
          menuElement: n,
          menuItemSelector: this.selectors.menuItems,
          menuLinkSelector: this.selectors.menuLinks,
          submenuItemSelector: this.selectors.submenuItems,
          submenuToggleSelector: this.selectors.submenuToggles,
          submenuSelector: this.selectors.submenus,
          openClass: this.openClass,
          closeClass: this.closeClass,
          isTopLevel: !1,
          parentMenu: this,
          hoverType: this.hoverType,
          hoverDelay: this.hoverDelay
        }), r = new this._MenuToggleType({
          menuToggleElement: t,
          parentElement: s,
          controlledMenu: i,
          parentMenu: this
        });
        this._elements.submenuToggles.push(r), e = new this._MenuItemType({
          menuItemElement: s,
          menuLinkElement: t,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: i,
          toggle: r
        });
      } else {
        const t = s.querySelector(this.selectors.menuLinks);
        e = new this._MenuItemType({
          menuItemElement: s,
          menuLinkElement: t,
          parentMenu: this
        });
      }
      this._elements.menuItems.push(e);
    });
  }
  /**
   * Handles focus events throughout the menu for proper menu use.
   *
   * - Adds a `focus` listener to every menu item so when it gains focus,
   *   it will set the item's containing menu's {@link BaseMenu#focusState|focus state}
   *   to "self".
   *
   * @protected
   */
  _handleFocus() {
    this.elements.menuItems.forEach((s, e) => {
      s.dom.link.addEventListener("focus", () => {
        this.focusState = "self", this.currentChild = e;
      });
    });
  }
  /**
   * Handles click events throughout the menu for proper use.
   *
   * - Adds a `pointerdown` listener to every menu item that will blur
   *   all menu items in the entire menu structure (starting at the root menu) and
   *   then properly focus the clicked item.
   * - Adds a `pointerup` listener to every submenu item that will properly
   *   toggle the submenu open/closed.
   * - Adds a `pointerup` listener to the menu's controller
   *   (if the menu is the root menu) so when it is clicked it will properly
   *   toggle open/closed.
   *
   * @protected
   */
  _handleClick() {
    function s(e, t, n) {
      l(n), t.toggle(), t.isOpen && (e.focusState = "self", t.elements.controlledMenu.focusState = "none");
    }
    this.elements.menuItems.forEach((e, t) => {
      e.dom.link.addEventListener(
        "pointerdown",
        () => {
          this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusChild(t);
        },
        { passive: !0 }
      ), e.isSubmenuItem && e.elements.toggle.dom.toggle.addEventListener(
        "pointerup",
        (n) => {
          this.currentEvent = "mouse", s(this, e.elements.toggle, n);
        }
      );
    }), this.isTopLevel && this.elements.controller && this.elements.controller.dom.toggle.addEventListener(
      "pointerup",
      (e) => {
        this.currentEvent = "mouse", s(this, this.elements.controller, e);
      }
    );
  }
  /**
   * Handles hover events throughout the menu for proper use.
   *
   * Adds `pointerenter` listeners to all menu items and `pointerleave` listeners
   * to all submenu items which function differently depending on
   * the menu's {@link BaseMenu_hoverTypeType|hover type}.
   *
   * Before executing anything, the event is checked to make sure the event wasn't
   * triggered by a pen or touch.
   *
   * <strong>Hover Type "on"</strong>
   * - When a `pointerenter` event triggers on any menu item the menu's
   *   {@link BaseMenu#currentChild| current child} value will change to that
   *   menu item.
   * - When a `pointerenter` event triggers on a submenu item the
   *   {@link BaseMenuToggle#preview|preview method} for the submenu item's
   *   toggle will be called.
   * - When a `pointerleave` event triggers on an open submenu item the
   *   {@link BaseMenuToggle#close|close method} for the submenu item's toggle
   *   will be called after a delay set by the menu's {@link BaseMenu_hoverTypeDelay|hover delay}.
   *
   * <strong>Hover Type "dynamic"</strong>
   * - When a `pointerenter` event triggers on any menu item the menu's
   *   current child value will change to that menu item.
   * - When a `pointerenter` event triggers on any menu item, and the menu's
   *   {@link BaseMenu#focusState|focus state} is not "none", the menu item
   *   will be focused.
   * - When a `pointerenter` event triggers on a submenu item, and a submenu is
   *   already open, the preview method for the submenu item's toggle will be called.
   * - When a `pointerenter` event triggers on a submenu item, and no submenu is
   *   open, no submenu-specific methods will be called.
   * - When a `pointerleave` event triggers on an open submenu item that is not a
   *   root-level submenu item the close method for the submenu item's toggle
   *   will be called and the submenu item will be focused after a delay set by
   *   the menu's hover delay.
   * - When a `pointerleave` event triggers on an open submenu item that is a
   *   root-level submenu item no submenu-specific methods will be called.
   *
   * <strong>Hover Type "off"</strong>
   * All `pointerenter` and `pointerleave` events are ignored.
   *
   * @protected
   */
  _handleHover() {
    this.elements.menuItems.forEach((s, e) => {
      s.dom.link.addEventListener("pointerenter", (t) => {
        if (!(t.pointerType === "pen" || t.pointerType === "touch")) {
          if (this.hoverType === "on")
            this.currentEvent = "mouse", this.currentChild = e, s.isSubmenuItem && s.elements.toggle.preview();
          else if (this.hoverType === "dynamic") {
            const n = this.elements.submenuToggles.some(
              (i) => i.isOpen
            );
            this.currentChild = e, (!this.isTopLevel || this.focusState !== "none") && (this.currentEvent = "mouse", this.focusCurrentChild()), s.isSubmenuItem && (!this.isTopLevel || n) && (this.currentEvent = "mouse", s.elements.toggle.preview());
          }
        }
      }), s.isSubmenuItem && s.dom.item.addEventListener("pointerleave", (t) => {
        t.pointerType === "pen" || t.pointerType === "touch" || (this.hoverType === "on" ? this.hoverDelay > 0 ? setTimeout(() => {
          this.currentEvent = "mouse", s.elements.toggle.close();
        }, this.hoverDelay) : (this.currentEvent = "mouse", s.elements.toggle.close()) : this.hoverType === "dynamic" && (this.isTopLevel || (this.hoverDelay > 0 ? setTimeout(() => {
          this.currentEvent = "mouse", s.elements.toggle.close(), this.focusCurrentChild();
        }, this.hoverDelay) : (this.currentEvent = "mouse", s.elements.toggle.close(), this.focusCurrentChild()))));
      });
    });
  }
  /**
   * Handles keydown events throughout the menu for proper menu use.
   *
   * This method exists to assit the {@link BaseMenu#_handleKeyup|_handleKeyup method}.
   *
   * - Adds a `keydown` listener to the menu's controller (if the menu is the root menu).
   *   - Blocks propagation on "Space", "Enter", and "Escape" keys.
   *
   * @protected
   */
  _handleKeydown() {
    this.isTopLevel && this.elements.controller && this.elements.controller.dom.toggle.addEventListener(
      "keydown",
      (s) => {
        this.currentEvent = "keyboard";
        const e = C(s);
        (e === "Space" || e === "Enter") && l(s);
      }
    );
  }
  /**
   * Handles keyup events throughout the menu for proper menu use.
   *
   * - Adds a `keyup` listener to the menu's controller (if the menu is the root menu).
   *   - Opens the menu when the user hits "Space" or "Enter".
   *
   * @protected
   */
  _handleKeyup() {
    this.isTopLevel && this.elements.controller && this.elements.controller.dom.toggle.addEventListener("keyup", (s) => {
      this.currentEvent = "keyboard";
      const e = C(s);
      (e === "Space" || e === "Enter") && (l(s), this.elements.controller.open(), this.focusFirstChild());
    });
  }
  /**
   * Focus the menu.
   *
   * Sets the menu's {@link BaseMenu#focusState|focus state} to "self" and
   * focusses the menu if the menu's {@link BaseMenu#shouldFocus|shouldFocus}
   * value is `true`.
   */
  focus() {
    this.focusState = "self", this.shouldFocus && this.dom.menu.focus();
  }
  /**
   * Unfocus the menu.
   *
   * Sets the menu's {@link BaseMenu#focusState|focus state} to "none"
   * and blurs the menu if the menu's {@link BaseMenu#shouldFocus|shouldFocus}
   * vallue is `true`.
   */
  blur() {
    this.focusState = "none", this.shouldFocus && this.dom.menu.blur();
  }
  /**
   * Focus the menu's current child.
   */
  focusCurrentChild() {
    this.focusState = "self", this.currentChild !== -1 && this.currentMenuItem.focus();
  }
  /**
   * Focuses the menu's child at a given index.
   *
   * @param {number} index - The index of the child to focus.
   */
  focusChild(s) {
    this.blurCurrentChild(), this.currentChild = s, this.focusCurrentChild();
  }
  /**
   * Focues the menu's first child.
   */
  focusFirstChild() {
    this.focusChild(0);
  }
  /**
   * Focus the menu's last child.
   */
  focusLastChild() {
    this.focusChild(this.elements.menuItems.length - 1);
  }
  /**
   * Focus the menu's next child.
   */
  focusNextChild() {
    this.currentChild < this.elements.menuItems.length - 1 ? this.focusChild(this.currentChild + 1) : this.focusCurrentChild();
  }
  /**
   * Focus the menu's previous child.
   */
  focusPreviousChild() {
    this.currentChild > 0 ? this.focusChild(this.currentChild - 1) : this.focusCurrentChild();
  }
  /**
   * Blurs the menu's current child.
   */
  blurCurrentChild() {
    this.focusState = "none", this.currentChild !== -1 && this.currentMenuItem.blur();
  }
  /**
   * Focus the menu's controller.
   */
  focusController() {
    this.dom.controller && (this.shouldFocus && this.dom.controller.focus(), this.focusState = "none");
  }
  /**
   * Focus the menu's container.
   */
  focusContainer() {
    this.dom.container && (this.shouldFocus && this.dom.container.focus(), this.focusState = "none");
  }
  /**
   * Close all submenu children.
   */
  closeChildren() {
    this.elements.submenuToggles.forEach((s) => s.close());
  }
  /**
   * Blurs all children and submenu's children.
   */
  blurChildren() {
    this.elements.menuItems.forEach((s) => {
      s.blur(), s.isSubmenuItem && s.elements.childMenu.blurChildren();
    });
  }
}
class N extends w {
  /**
   * Constructs the menu item.
   *
   * @param {object}                    options                         - The options for generating the menu item.
   * @param {HTMLElement}               options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}               options.menuLinkElement         - The menu item's link in the DOM.
   * @param {DisclosureMenu}            options.parentMenu              - The parent menu.
   * @param {boolean}                   [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {DisclosureMenu|null}       [options.childMenu = null]      - The child menu.
   * @param {DisclosureMenuToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}                   [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   */
  constructor({
    menuItemElement: s,
    menuLinkElement: e,
    parentMenu: t,
    isSubmenuItem: n = !1,
    childMenu: i = null,
    toggle: r = null,
    initialize: u = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: r
    }), u && this.initialize();
  }
}
class H extends T {
  /**
   * Constructs the menu toggle.
   *
   * @param {object}              options                     - The options for generating the menu toggle.
   * @param {HTMLElement}         options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}         options.parentElement       - The element containing the controlled menu.
   * @param {DisclosureMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {DisclosureMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}             [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement: s,
    parentElement: e,
    controlledMenu: t,
    parentMenu: n = null,
    initialize: i = !0
  }) {
    super({
      menuToggleElement: s,
      parentElement: e,
      controlledMenu: t,
      parentMenu: n
    }), i && this.initialize();
  }
  /**
   * Opens the controlled menu.
   *
   * Calls the {@link DisclosureMenuToggle#closeSiblings| closeSiblings method}
   * and _then_ {@link BaseMenuToggle#open|BaseMenuToggle's open method}.
   */
  open() {
    this.closeSiblings(), super.open();
  }
  /**
   * Opens the controlled menu without the current focus entering it.
   *
   * Calls the {@link DisclosureMenuToggle#closeSiblings| closeSiblings method}
   * and _then_ {@link BaseMenuToggle#preview|BaseMenuToggle's preview method}.
   */
  preview() {
    this.closeSiblings(), super.preview();
  }
  /**
   * Closes the controlled menu.
   *
   * Calls the {@link DisclosureMenuToggle#closeChildren| closeChildren method}
   * and _then_ {@link BaseMenuToggle#close|BaseMenuToggle's close method}.
   */
  close() {
    this.isOpen && this.closeChildren(), super.close();
  }
}
class k extends E {
  /**
   * Constructs the menu.
   *
   * @param {object}                 options                              - The options for generating the menu.
   * @param {HTMLElement}            options.menuElement                  - The menu element in the DOM.
   * @param {string}                 [options.menuItemSelector = li]      - The CSS selector string for menu items.
   * @param {string}                 [options.menuLinkSelector = a]       - The CSS selector string for menu links.
   * @param {string}                 [options.submenuItemSelector]        - The CSS selector string for menu items containing submenus.
   * @param {string}                 [options.submenuToggleSelector = a]  - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                 [options.submenuSelector = ul]       - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}     [options.controllerElement = null]   - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}     [options.containerElement = null]    - The element containing the menu in the DOM.
   * @param {(string|string[]|null)} [options.openClass = show]           - The class to apply when a menu is "open".
   * @param {(string|string[]|null)} [options.closeClass = hide]          - The class to apply when a menu is "closed".
   * @param {boolean}                [options.isTopLevel = true]          - A flag to mark the root menu.
   * @param {(DisclosureMenu|null)}  [options.parentMenu = null]          - The parent menu to this menu.
   * @param {string}                 [options.hoverType = off]            - The type of hoverability a menu has.
   * @param {number}                 [options.hoverDelay = 250]           - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                [options.optionalKeySupport = false] - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                [options.initialize = true]          - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: n = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: r = "a",
    submenuSelector: u = "ul",
    controllerElement: c = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: a = "hide",
    isTopLevel: f = !0,
    parentMenu: p = null,
    hoverType: g = "off",
    hoverDelay: M = 250,
    optionalKeySupport: b = !1,
    initialize: _ = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: r,
      submenuSelector: u,
      controllerElement: c,
      containerElement: m,
      openClass: d,
      closeClass: a,
      isTopLevel: f,
      parentMenu: p,
      hoverType: g,
      hoverDelay: M
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof DisclosureMenu}
     */
    h(this, "_MenuType", k);
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof DisclosureMenuItem}
     */
    h(this, "_MenuItemType", N);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof DisclosureMenuToggle}
     */
    h(this, "_MenuToggleType", H);
    /**
     * The index of the currently selected {@link BaseMenuItem|menu item} in the menu.
     *
     * @protected
     *
     * @type {number}
     */
    h(this, "_currentChild", -1);
    /**
     * A flag to add optional keyboard support (Arrow keys, "Home", and "End") to the menu.
     *
     * @protected
     *
     * @type {boolean}
     */
    h(this, "_optionalSupport", !1);
    this._optionalSupport = b, _ && this.initialize();
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link BaseMenu#initialize|BaseMenu's initialize method}
   * as well as set up {@link DisclosureMenu#_handleFocus|focus},
   * {@link DisclosureMenu#_handleClick|click},
   * {@link DisclosureMenu#_handleHover|hover},
   * {@link DisclosureMenu#_handleKeydown|keydown}, and
   * {@link DisclosureMenu#_handleKeyup|keyup} events for the menu.
   *
   * If the BaseMenu's initialize method throws an error,
   * this will catch it and log it to the console.
   */
  initialize() {
    try {
      super.initialize(), this._handleFocus(), this._handleClick(), this._handleHover(), this._handleKeydown(), this._handleKeyup();
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * A flag to add optional keyboard support (Arrow keys, "Home", and "End") to the menu.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's optionalKeySupport.
   *
   * @type {boolean}
   *
   * @see _optionalSupport
   */
  get optionalKeySupport() {
    return this.isTopLevel ? this._optionalSupport : this.elements.rootMenu.optionalKeySupport;
  }
  set optionalKeySupport(e) {
    y("boolean", { optionalKeySupport: e }), this._optionalSupport = e;
  }
  /**
   * Validates all aspects of the menu to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let e = super._validate();
    const t = y("boolean", {
      optionalKeySupport: this._optionalSupport
    });
    return t.status || (this._errors.push(t.error.message), e = !1), e;
  }
  /**
   * Handles click events throughout the menu for proper use.
   *
   * - Adds all event listeners listed in
   *   {@link BaseMenu#_handleClick|BaseMenu's _handleClick method}, and
   * - adds a `pointerup` listener to the `document` so if the user
   *   clicks outside of the menu it will close if it is open.
   *
   * @protected
   */
  _handleClick() {
    super._handleClick(), document.addEventListener("pointerup", (e) => {
      this.focusState !== "none" && (this.currentEvent = "mouse", !this.dom.menu.contains(e.target) && !this.dom.menu !== e.target && (this.closeChildren(), this.blur(), this.elements.controller && this.elements.controller.close()));
    });
  }
  /**
   * Handles keydown events throughout the menu for proper menu use.
   *
   * This method exists to assist the {@link DisclosureMenu#_handleKeyup|_handleKeyup method}.
   * - Adds all `keydown` listeners from {@link BaseMenu#_handleKeydown|BaseMenu's _handleKeydown method}
   * - Adds a `keydown` listener to the menu/all submenus.
   *   - Blocks propagation on the following keys: "Space", "Enter", and "Escape".
   *   - _If_ {@link DisclosureMenu#optionalKeySupport|optional keyboard support}
   *     is enabled, blocks propagation on the following keys:
   *     "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", and "End".
   *
   * @protected
   */
  _handleKeydown() {
    super._handleKeydown(), this.dom.menu.addEventListener("keydown", (e) => {
      this.currentEvent = "keyboard";
      const t = C(e);
      if (this.focusState === "self") {
        const n = ["Space", "Enter"], i = ["Escape"], r = ["Escape"];
        this.optionalKeySupport ? [
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
          "ArrowLeft",
          "Home",
          "End"
        ].includes(t) && l(e) : (this.currentMenuItem.isSubmenuItem && n.includes(t) || this.elements.controller && i.includes(t) || this.elements.parentMenu && r.includes(t)) && l(e);
      }
    });
  }
  /**
   * Handles keyup events throughout the menu for proper menu use.
   *
   * Adds all `keyup` listeners from {@link BaseMenu#_handleKeyup|BaseMenu's _handleKeyup method}.
   *
   * Adds the following keybindings (explanations are taken from the
   * {@link https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html#kbd_label|WAI ARIA Pracitices Example Disclosure for Navigation Menus}):
   *
   * | Key | Function |
   * | --- | --- |
   * | _Tab_ or _Shift + Tab_ | Move keyboard focus among top-level buttons, and if a dropdown is open, into and through links in the dropdown. |
   * | _Space_ or _Enter_ | <ul><li>If focus is on a disclosure button, activates the button, which toggles the visibility of the dropdown.</li><li>If focus is on a link:<ul><li>If any link has aria-current set, removes it.</li><li>Sets aria-current="page" on the focused link.</li><li>Activates the focused link.</li></ul></li></ul> |
   * | _Escape_ | If a dropdown is open, closes it and sets focus on the button that controls that dropdown. |
   * | _Down Arrow_ or _Right Arrow_ (Optional}) | <ul><li>If focus is on a button and its dropdown is collapsed, and it is not the last button, moves focus to the next button.</li><li>if focus is on a button and its dropdown is expanded, moves focus to the first link in the dropdown.</li><li>If focus is on a link, and it is not the last link, moves focus to the next link.</li></ul> |
   * | _Up Arrow_ or _Left Arrow_ (Optional}) | <ul><li>If focus is on a button, and it is not the first button, moves focus to the previous button.</li><li>If focus is on a link, and it is not the first link, moves focus to the previous link.</li></ul> |
   * | _Home_ (Optional}) | <ul><li>If focus is on a button, and it is not the first button, moves focus to the first button.</li><li>If focus is on a link, and it is not the first link, moves focus to the first link.</li></ul> |
   * | _End_ (Optional}) | <ul><li>If focus is on a button, and it is not the last button, moves focus to the last button.</li><li>If focus is on a link, and it is not the last link, moves focus to the last link.</li></ul> |
   *
   * The optional keybindings are controlled by the menu's {@link DisclosureMenu#optionalKeySupport|optionalKeySupport} value.
   *
   * @protected
   */
  _handleKeyup() {
    super._handleKeyup(), this.dom.menu.addEventListener("keyup", (e) => {
      this.currentEvent = "keyboard";
      const t = C(e);
      this.focusState === "self" && (t === "Space" || t === "Enter" ? this.currentMenuItem.isSubmenuItem ? (l(e), this.currentMenuItem.elements.toggle.isOpen ? this.currentMenuItem.elements.toggle.close() : this.currentMenuItem.elements.toggle.preview()) : this.currentMenuItem.dom.link.click() : t === "Escape" ? this.elements.submenuToggles.some(
        (i) => i.isOpen
      ) ? (l(e), this.closeChildren()) : this.elements.parentMenu ? (l(e), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.closeChildren(), this.elements.parentMenu.focusCurrentChild()) : this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (this.elements.controller.close(), this.focusController()) : this.optionalKeySupport && (t === "ArrowDown" || t === "ArrowRight" ? (l(e), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.childMenu.focusFirstChild()) : this.focusNextChild()) : t === "ArrowUp" || t === "ArrowLeft" ? (l(e), this.focusPreviousChild()) : t === "Home" ? (l(e), this.focusFirstChild()) : t === "End" && (l(e), this.focusLastChild())));
    });
  }
}
class Q extends N {
  /**
   * Constructs the menu item.
   *
   * @param {object}                              options                         - The options for generating the menu item.
   * @param {HTMLElement}                         options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}                         options.menuLinkElement         - The menu item's link in the DOM.
   * @param {Bootstrap5DisclosureMenu}            options.parentMenu              - The parent menu.
   * @param {boolean}                             [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {Bootstrap5DisclosureMenu|null}       [options.childMenu = null]      - The child menu.
   * @param {Bootstrap5DisclosureMenuToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}                             [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   */
  constructor({
    menuItemElement: s,
    menuLinkElement: e,
    parentMenu: t,
    isSubmenuItem: n = !1,
    childMenu: i = null,
    toggle: r = null,
    initialize: u = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: r,
      initialize: !1
    }), u && this.initialize();
  }
}
class X extends H {
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
    menuToggleElement: e,
    parentElement: t,
    controlledMenu: n,
    parentMenu: i = null,
    initialize: r = !0
  }) {
    super({
      menuToggleElement: e,
      parentElement: t,
      controlledMenu: n,
      parentMenu: i,
      initialize: !1
    });
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
    h(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = e, this._dom.parent = t, this._dom.container = n.isTopLevel ? n.dom.container : n.dom.menu, r && this.initialize();
  }
  /**
   * Initializes the toggle by removing the default bootstrap toggle information
   * and running the parent's initialization.
   */
  initialize() {
    super.initialize(), this.dom.toggle.hasAttribute("data-bs-toggle") && this.dom.toggle.removeAttribute("data-bs-toggle"), this.dom.toggle.hasAttribute("data-bs-target") && this.dom.toggle.removeAttribute("data-bs-target");
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(e = !0) {
    const { openClass: t } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), t !== "" && (typeof t == "string" ? this.dom.container.classList.add(t) : this.dom.container.classList.add(...t)), e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(e = !0) {
    const { closeClass: t, openClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), t !== "" && (typeof t == "string" ? this.dom.container.classList.add(t) : this.dom.container.classList.add(...t)), n !== "" && (typeof n == "string" ? this.dom.container.classList.remove(n) : this.dom.container.classList.remove(...n)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class A extends k {
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
    menuElement: e,
    menuItemSelector: t = ".nav-item,li",
    menuLinkSelector: n = ".nav-link,.dropdown-item",
    submenuItemSelector: i = ".dropdown",
    submenuToggleSelector: r = ".dropdown-toggle",
    submenuSelector: u = ".dropdown-menu",
    controllerElement: c = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: a = "collapse",
    isTopLevel: f = !0,
    parentMenu: p = null,
    hoverType: g = "off",
    hoverDelay: M = 250,
    optionalKeySupport: b = !1,
    initialize: _ = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: r,
      submenuSelector: u,
      controllerElement: c,
      containerElement: m,
      openClass: d,
      closeClass: a,
      isTopLevel: f,
      parentMenu: p,
      hoverType: g,
      hoverDelay: M,
      optionalKeySupport: b,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5DisclosureMenu}
     *
     * @protected
     */
    h(this, "_MenuType", A);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5DisclosureMenuItem}
     *
     * @protected
     */
    h(this, "_MenuItemType", Q);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5DisclosureMenuToggle}
     *
     * @protected
     */
    h(this, "_MenuToggleType", X);
    _ && this.initialize();
  }
}
class j extends w {
  /**
   * Constructs the menu item.
   *
   * @param {object}             options                         - The options for generating the menu item.
   * @param {HTMLElement}        options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}        options.menuLinkElement         - The menu item's link in the DOM.
   * @param {Menubar}            options.parentMenu              - The parent menu.
   * @param {boolean}            [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {Menubar|null}       [options.childMenu = null]      - The child menu.
   * @param {MenubarToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}            [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   */
  constructor({
    menuItemElement: s,
    menuLinkElement: e,
    parentMenu: t,
    isSubmenuItem: n = !1,
    childMenu: i = null,
    toggle: r = null,
    initialize: u = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: r
    }), u && this.initialize();
  }
  /**
   * Initialize the menu item.
   *
   * Initialize will call the {@link BaseMenuItem#initialize|BaseMenuItem's initialize method}
   * as well as set the menu item's `role` to "none",
   * the menu link's `role` to "menuitem", and
   * the menu link's `tabIndex` to -1 in the DOM.
   */
  initialize() {
    super.initialize(), this.dom.item.setAttribute("role", "none"), this.dom.link.setAttribute("role", "menuitem"), this.dom.link.tabIndex = -1;
  }
  /**
   * Focuses the menu item's link if the parent menu's
   * {@link Menubar#shouldFocus|shouldFocus} value is `true`.
   *
   * This will call the {@link BaseMenuItem#focus|BaseMenuItem's focus method}
   * as well as set the menu link's `tabIndex` to 0 if the parent menu
   * is the root menu.
   */
  focus() {
    super.focus(), this.elements.parentMenu.isTopLevel && (this.dom.link.tabIndex = 0);
  }
  /**
   * Blurs the menu item's link if the parent menu's
   * {@link Menubar#shouldFocus|shouldFocus} value is `true`.
   *
   * This will call the {@link BaseMenuItem#blur|BaseMenuItem's blur method}
   * as well as set the menu link's `tabIndex` to -1 if the parent menu
   * is the root menu.
   */
  blur() {
    super.blur(), this.elements.parentMenu.isTopLevel && (this.dom.link.tabIndex = -1);
  }
}
class V extends T {
  /**
   * Constructs the menu toggle.
   *
   * @param {object}       options                     - The options for generating the menu toggle.
   * @param {HTMLElement}  options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}  options.parentElement       - The element containing the controlled menu.
   * @param {Menubar}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {Menubar|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}      [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement: s,
    parentElement: e,
    controlledMenu: t,
    parentMenu: n = null,
    initialize: i = !0
  }) {
    super({
      menuToggleElement: s,
      parentElement: e,
      controlledMenu: t,
      parentMenu: n
    }), i && this.initialize();
  }
  /**
   * Opens the controlled menu.
   *
   * Calls the {@link MenubarToggle#closeSiblings| closeSiblings method}
   * and _then_ {@link BaseMenuToggle#open|BaseMenuToggle's open method}.
   */
  open() {
    this.closeSiblings(), super.open();
  }
  /**
   * Opens the controlled menu without the current focus entering it.
   *
   * Calls the {@link MenubarToggle#closeSiblings| closeSiblings method}
   * and _then_ {@link BaseMenuToggle#preview|BaseMenuToggle's preview method}.
   */
  preview() {
    this.closeSiblings(), super.preview();
  }
  /**
   * Closes the controlled menu.
   *
   * Calls the {@link MenubarToggle#closeChildren| closeChildren method}
   * and _then_ {@link BaseMenuToggle#close|BaseMenuToggle's close method}.
   */
  close() {
    this.isOpen && this.closeChildren(), super.close();
  }
}
class x extends E {
  /**
   * Constructs the menu.
   *
   * @param {object}                 options                             - The options for generating the menu.
   * @param {HTMLElement}            options.menuElement                 - The menu element in the DOM.
   * @param {string}                 [options.menuItemSelector = li]     - The CSS selector string for menu items.
   * @param {string}                 [options.menuLinkSelector = a]      - The CSS selector string for menu links.
   * @param {string}                 [options.submenuItemSelector]       - The CSS selector string for menu items containing submenus.
   * @param {string}                 [options.submenuToggleSelector = a] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                 [options.submenuSelector = ul]      - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}     [options.controllerElement = null]  - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}     [options.containerElement = null]   - The element containing the menu in the DOM.
   * @param {(string|string[]|null)} [options.openClass = show]          - The class to apply when a menu is "open".
   * @param {(string|string[]|null)} [options.closeClass = hide]         - The class to apply when a menu is "closed".
   * @param {boolean}                [options.isTopLevel = true]         - A flag to mark the root menu.
   * @param {(Menubar|null)}         [options.parentMenu = null]         - The parent menu to this menu.
   * @param {string}                 [options.hoverType = off]           - The type of hoverability a menu has.
   * @param {number}                 [options.hoverDelay = 250]          - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                [options.initialize = true]         - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: n = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: r = "a",
    submenuSelector: u = "ul",
    controllerElement: c = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: a = "hide",
    isTopLevel: f = !0,
    parentMenu: p = null,
    hoverType: g = "off",
    hoverDelay: M = 250,
    initialize: b = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: r,
      submenuSelector: u,
      controllerElement: c,
      containerElement: m,
      openClass: d,
      closeClass: a,
      isTopLevel: f,
      parentMenu: p,
      hoverType: g,
      hoverDelay: M
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof Menubar}
     */
    h(this, "_MenuType", x);
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof MenubarItem}
     */
    h(this, "_MenuItemType", j);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof MenubarToggle}
     */
    h(this, "_MenuToggleType", V);
    b && this.initialize();
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link BaseMenu#initialize|BaseMenu's initialize method}
   * as well as set up {@link Menubar#_handleFocus|focus},
   * {@link Menubar#_handleClick|click},
   * {@link Menubar#_handleHover|hover},
   * {@link Menubar#_handleKeydown|keydown}, and
   * {@link Menubar#_handleKeyup|keyup} events for the menu.
   *
   * This will also set the menu's `role` to "menubar" in the DOM.
   *
   * If the menu is a root menu the first menu item's `tabIndex` will be set to
   * 0 in the DOM.
   *
   * If the BaseMenu's initialize method throws an error,
   * this will catch it and log it to the console.
   */
  initialize() {
    try {
      super.initialize(), this.dom.menu.setAttribute("role", "menubar"), this._handleFocus(), this._handleClick(), this._handleHover(), this._handleKeydown(), this._handleKeyup(), this.isTopLevel && (this.elements.menuItems[0].dom.link.tabIndex = 0);
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * Handles click events throughout the menu for proper use.
   *
   * - Adds all event listeners listed in
   *   {@link BaseMenu#_handleClick|BaseMenu's _handleClick method}, and
   * - adds a `pointerup` listener to the `document` so if the user
   *   clicks outside of the menu it will close if it is open.
   *
   * @protected
   */
  _handleClick() {
    super._handleClick(), document.addEventListener("pointerup", (e) => {
      this.focusState !== "none" && (this.currentEvent = "mouse", !this.dom.menu.contains(e.target) && !this.dom.menu !== e.target && (this.closeChildren(), this.blur(), this.elements.controller && this.elements.controller.close()));
    });
  }
  /**
   * Handles keydown events throughout the menu for proper menu use.
   *
   * This method exists to assist the {@link Menubar#_handleKeyup|_handleKeyup method}.
   * - Adds all `keydown` listeners from {@link BaseMenu#_handleKeydown|BaseMenu's _handleKeydown method}
   * - Adds a `keydown` listener to the menu/all submenus.
   *   - Blocks propagation on the following keys: "ArrowUp", "ArrowRight",
   *     "ArrowDown", "ArrowLeft", "Home", "End", "Space", "Enter", "Escape",
   *     and "A" through "Z".
   *   - Completely closes the menu and moves focus out if the "Tab" key is pressed.
   *
   * @protected
   */
  _handleKeydown() {
    super._handleKeydown(), this.dom.menu.addEventListener("keydown", (e) => {
      this.currentEvent = "keyboard";
      const t = C(e);
      if (t === "Tab" && (this.elements.rootMenu.focusState !== "none" ? (this.elements.rootMenu.blur(), this.elements.rootMenu.closeChildren()) : this.elements.rootMenu.focus()), t === "Character")
        l(e);
      else if (this.isTopLevel) {
        if (this.focusState === "self") {
          const n = ["ArrowRight", "ArrowLeft", "Home", "End"], i = ["Space", "Enter", "ArrowDown", "ArrowUp"], r = ["Escape"];
          (n.includes(t) || this.currentMenuItem.isSubmenuItem && i.includes(t) || this.elements.controller && r.includes(t)) && l(e);
        }
      } else {
        const n = [
          "Escape",
          "ArrowRight",
          "ArrowLeft",
          "ArrowDown",
          "ArrowUp",
          "Home",
          "End"
        ], i = ["Space", "Enter"];
        (n.includes(t) || this.currentMenuItem.isSubmenuItem && i.includes(t)) && l(e);
      }
    });
  }
  /**
   * Handles keyup events throughout the menu for proper menu use.
   *
   * Adds all `keyup` listeners from {@link BaseMenu#_handleKeyup|BaseMenu's _handleKeyup method}.
   *
   * Adds the following keybindings (explanations are taken from the
   * {@link https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-1/menubar-1.html#kbd_label|Navigation Menubar Example}):
   *
   * <strong>Menubar</strong>
   *
   * | Key | Function |
   * | --- | --- |
   * | _Space_ or _Enter_ | Opens submenu and moves focus to first item in the submenu. |
   * | _Right Arrow_ | <ul><li>Moves focus to the next item in the menubar.</li><li>If focus is on the last item, moves focus to the first item.</li></ul> |
   * | _Left Arrow_ | <ul><li>Moves focus to the previous item in the menubar.</li><li>If focus is on the first item, moves focus to the last item.</li></ul> |
   * | _Down Arrow_ | Opens submenu and moves focus to first item in the submenu. |
   * | _Up Arrow_ | Opens submenu and moves focus to last item in the submenu. |
   * | _Home_ | Moves focus to first item in the menubar. |
   * | _End_ | Moves focus to last item in the menubar. |
   * | _Character_ | <ul><li>Moves focus to next item in the menubar having a name that starts with the typed character.</li><li>If none of the items have a name starting with the typed character, focus does not move.</li></ul> |
   *
   * <strong>Submenu</strong>
   *
   * | Key | Function |
   * | --- | --- |
   * | _Space_ or _Enter_ | <ul><li>Activates menu item, causing the link to be activated.</li><li>NOTE: the links go to dummy pages; use the browser go-back function to return to this menubar example page.</li></ul> |
   * | _Escape_ | <ul><li>Closes submenu.</li><li>Moves focus to parent menubar item.</li></ul> |
   * | _Right Arrow_ | <ul><li>If focus is on an item with a submenu, opens the submenu and places focus on the first item.</li><li>If focus is on an item that does not have a submenu:<ul><li>Closes submenu.</li><li>Moves focus to next item in the menubar.</li><li>Opens submenu of newly focused menubar item, keeping focus on that parent menubar item.</li></ul></li></ul> |
   * | _Left Arrow_ | <ul><li>Closes submenu and moves focus to parent menu item.</li><li>If parent menu item is in the menubar, also:<ul><li>moves focus to previous item in the menubar.</li><li>Opens submenu of newly focused menubar item, keeping focus on that parent menubar item.</li></ul></li></ul> |
   * | _Down Arrow_ | <ul><li>Moves focus to the next item in the submenu.</li><li>If focus is on the last item, moves focus to the first item.</li></ul> |
   * | _Up Arrow_ | <ul><li>Moves focus to previous item in the submenu.</li><li>If focus is on the first item, moves focus to the last item.</li></ul> |
   * | Home | Moves focus to the first item in the submenu. |
   * | End | Moves focus to the last item in the submenu. |
   * | _Character_ | <ul><li>Moves focus to the next item having a name that starts with the typed character.</li><li>If none of the items have a name starting with the typed character, focus does not move.</li></ul> |
   *
   * @protected
   */
  _handleKeyup() {
    super._handleKeyup(), this.dom.menu.addEventListener("keyup", (e) => {
      this.currentEvent = "keyboard";
      const t = C(e), { altKey: n, crtlKey: i, metaKey: r } = e;
      if (t === "Character" && !(n || i || r))
        l(e), this.elements.rootMenu.currentEvent = "character", this.focusNextChildWithCharacter(e.key);
      else if (this.isTopLevel) {
        if (this.focusState === "self")
          if (t === "Space" || t === "Enter")
            this.currentMenuItem.isSubmenuItem ? (l(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
              this.currentMenuItem.elements.childMenu.focusFirstChild();
            })) : this.currentMenuItem.dom.link.click();
          else if (t === "ArrowRight") {
            l(e);
            const c = this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen;
            this.focusNextChild(), c && (this.currentMenuItem.isSubmenuItem ? (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.preview()) : this.closeChildren());
          } else if (t === "ArrowLeft") {
            l(e);
            const c = this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen;
            this.focusPreviousChild(), c && (this.currentMenuItem.isSubmenuItem ? (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.preview()) : this.closeChildren());
          } else
            t === "ArrowDown" ? this.currentMenuItem.isSubmenuItem && (l(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
              this.currentMenuItem.elements.childMenu.focusFirstChild();
            })) : t === "ArrowUp" ? this.currentMenuItem.isSubmenuItem && (l(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
              this.currentMenuItem.elements.childMenu.focusLastChild();
            })) : t === "Home" ? (l(e), this.focusFirstChild()) : t === "End" ? (l(e), this.focusLastChild()) : t === "Escape" && (this.elements.submenuToggles.some(
              (m) => m.isOpen
            ) ? (l(e), this.closeChildren()) : this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (l(e), this.elements.controller.close(), this.focusController()));
      } else
        t === "Space" || t === "Enter" ? this.currentMenuItem.isSubmenuItem ? (l(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
          this.currentMenuItem.elements.childMenu.focusFirstChild();
        })) : this.currentMenuItem.dom.link.click() : t === "Escape" ? (l(e), this.elements.rootMenu.closeChildren(), this.elements.rootMenu.focusCurrentChild()) : t === "ArrowRight" ? this.currentMenuItem.isSubmenuItem ? (l(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
          this.currentMenuItem.elements.childMenu.focusFirstChild();
        })) : (l(e), this.elements.rootMenu.closeChildren(), this.elements.rootMenu.focusNextChild(), this.elements.rootMenu.currentMenuItem.isSubmenuItem && this.elements.rootMenu.currentMenuItem.elements.toggle.preview()) : t === "ArrowLeft" ? this.elements.parentMenu.currentMenuItem.isSubmenuItem && (l(e), this.elements.parentMenu.currentMenuItem.elements.toggle.close(), this.elements.parentMenu.focusCurrentChild(), this.elements.parentMenu === this.elements.rootMenu && (this.elements.rootMenu.closeChildren(), this.elements.rootMenu.focusPreviousChild(), this.elements.rootMenu.currentMenuItem.isSubmenuItem && (this.elements.rootMenu.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.elements.rootMenu.currentMenuItem.elements.toggle.preview()))) : t === "ArrowDown" ? (l(e), this.focusNextChild()) : t === "ArrowUp" ? (l(e), this.focusPreviousChild()) : t === "Home" ? (l(e), this.focusFirstChild()) : t === "End" && (l(e), this.focusLastChild());
    });
  }
  /**
   * Focus the menu's next child.
   *
   * If the currently focussed child in the menu is the last child then this will
   * focus the first child in the menu.
   */
  focusNextChild() {
    this.currentChild === this.elements.menuItems.length - 1 ? this.focusFirstChild() : this.focusChild(this.currentChild + 1);
  }
  /**
   * Focus the menu's previous child.
   *
   * If the currently focussed child in the menu is the first child then this will
   * focus the last child in the menu.
   */
  focusPreviousChild() {
    this.currentChild === 0 ? this.focusLastChild() : this.focusChild(this.currentChild - 1);
  }
  /**
   * Focus the menu's next child starting with a specific letter.
   *
   * @param {string} char - The character to look for.
   */
  focusNextChildWithCharacter(e) {
    const t = e.toLowerCase();
    let n = this.currentChild + 1, i = !1;
    for (; !i && n < this.elements.menuItems.length; ) {
      let r = "";
      this.elements.menuItems[n].dom.item.innerText ? r = this.elements.menuItems[n].dom.item.innerText : r = this.elements.menuItems[n].dom.item.textContent, r = r.replace(/[\s]/g, "").toLowerCase().charAt(0), r === t && (i = !0, this.focusChild(n)), n++;
    }
  }
}
class Y extends j {
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
    menuItemElement: s,
    menuLinkElement: e,
    parentMenu: t,
    isSubmenuItem: n = !1,
    childMenu: i = null,
    toggle: r = null,
    initialize: u = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: r,
      initialize: !1
    }), u && this.initialize();
  }
}
class ee extends V {
  /**
   * Constructs the menu toggle.
   *
   * @param {object}                 options                     - The options for generating the menu toggle.
   * @param {HTMLElement}            options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}            options.parentElement       - The element containing the controlled menu.
   * @param {Bootstrap5Menubar}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {Bootstrap5Menubar|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}                [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement: e,
    parentElement: t,
    controlledMenu: n,
    parentMenu: i = null,
    initialize: r = !0
  }) {
    super({
      menuToggleElement: e,
      parentElement: t,
      controlledMenu: n,
      parentMenu: i,
      initialize: !1
    });
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
    h(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = e, this._dom.parent = t, this._dom.container = n.isTopLevel ? n.dom.container : n.dom.menu, r && this.initialize();
  }
  /**
   * Initializes the toggle by removing the default bootstrap toggle information
   * and running the parent's initialization.
   */
  initialize() {
    super.initialize(), this.dom.toggle.hasAttribute("data-bs-toggle") && this.dom.toggle.removeAttribute("data-bs-toggle"), this.dom.toggle.hasAttribute("data-bs-target") && this.dom.toggle.removeAttribute("data-bs-target");
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(e = !0) {
    const { openClass: t } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), t !== "" && (typeof t == "string" ? this.dom.container.classList.add(t) : this.dom.container.classList.add(...t)), e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(e = !0) {
    const { closeClass: t, openClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), t !== "" && (typeof t == "string" ? this.dom.container.classList.add(t) : this.dom.container.classList.add(...t)), n !== "" && (typeof n == "string" ? this.dom.container.classList.remove(n) : this.dom.container.classList.remove(...n)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class z extends x {
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
   * @param {boolean}                  [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5Menubar|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                   [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                   [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                  [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = ".nav-item,li",
    menuLinkSelector: n = ".nav-link,.dropdown-item",
    submenuItemSelector: i = ".dropdown",
    submenuToggleSelector: r = ".dropdown-toggle",
    submenuSelector: u = ".dropdown-menu",
    controllerElement: c = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: a = "collapse",
    isTopLevel: f = !0,
    parentMenu: p = null,
    hoverType: g = "off",
    hoverDelay: M = 250,
    initialize: b = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: r,
      submenuSelector: u,
      controllerElement: c,
      containerElement: m,
      openClass: d,
      closeClass: a,
      isTopLevel: f,
      parentMenu: p,
      hoverType: g,
      hoverDelay: M,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5Menubar}
     *
     * @public
     */
    h(this, "_MenuType", z);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5MenubarItem}
     *
     * @public
     */
    h(this, "_MenuItemType", Y);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5MenubarToggle}
     *
     * @public
     */
    h(this, "_MenuToggleType", ee);
    b && this.initialize();
  }
}
class R extends w {
  /**
   * Constructs the menu item.
   *
   * @param {object}                           options                         - The options for generating the menu item.
   * @param {HTMLElement}                      options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}                      options.menuLinkElement         - The menu item's link in the DOM.
   * @param {TopLinkDisclosureMenu}            options.parentMenu              - The parent menu.
   * @param {boolean}                          [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {TopLinkDisclosureMenu|null}       [options.childMenu = null]      - The child menu.
   * @param {TopLinkDisclosureMenuToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}                          [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   * @param {TopLinkDisclosureMenuItem|null}   [options.submenuSibling = null] - The sibling menu item that controls a submenu.
   */
  constructor({
    menuItemElement: e,
    menuLinkElement: t,
    parentMenu: n,
    isSubmenuItem: i = !1,
    childMenu: r = null,
    toggle: u = null,
    initialize: c = !0,
    submenuSibling: m = null
  }) {
    super({
      menuItemElement: e,
      menuLinkElement: t,
      parentMenu: n,
      isSubmenuItem: i,
      childMenu: r,
      toggle: u
    });
    /**
     * The declared accessible-menu elements within the menu item.
     *
     * @type {Object<BaseMenu, BaseMenuToggle>}
     *
     * @protected
     *
     * @property {BaseMenu}                   parentMenu - The menu containing this menu item.
     * @property {?BaseMenu}                  childMenu  - The menu contained within this menu item.
     * @property {?BaseMenuToggle}            toggle     - The menu toggle within this menu item that controls the `childMenu`.
     * @property {?TopLinkDisclosureMenuItem} sibling    - The sibling menu item that is a submenu item.
     */
    h(this, "_elements", {
      parentMenu: null,
      childMenu: null,
      toggle: null,
      sibling: null
    });
    this._elements.parentMenu = n, this._elements.childMenu = r, this._elements.toggle = u, this._elements.sibling = m, c && this.initialize();
  }
}
class P extends T {
  /**
   * Constructs the menu toggle.
   *
   * @param {object}                     options                     - The options for generating the menu toggle.
   * @param {HTMLElement}                options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}                options.parentElement       - The element containing the controlled menu.
   * @param {TopLinkDisclosureMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {TopLinkDisclosureMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}                    [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement: s,
    parentElement: e,
    controlledMenu: t,
    parentMenu: n = null,
    initialize: i = !0
  }) {
    super({
      menuToggleElement: s,
      parentElement: e,
      controlledMenu: t,
      parentMenu: n
    }), i && this.initialize();
  }
  /**
   * Opens the controlled menu.
   *
   * Calls the {@link TopLinkDisclosureMenuToggle#closeSiblings| closeSiblings method}
   * and _then_ {@link BaseMenuToggle#open|BaseMenuToggle's open method}.
   */
  open() {
    this.closeSiblings(), super.open();
  }
  /**
   * Opens the controlled menu without the current focus entering it.
   *
   * Calls the {@link TopLinkDisclosureMenuToggle#closeSiblings| closeSiblings method}
   * and _then_ {@link BaseMenuToggle#preview|BaseMenuToggle's preview method}.
   */
  preview() {
    this.closeSiblings(), super.preview();
  }
  /**
   * Closes the controlled menu.
   *
   * Calls the {@link TopLinkDisclosureMenuToggle#closeChildren| closeChildren method}
   * and _then_ {@link BaseMenuToggle#close|BaseMenuToggle's close method}.
   */
  close() {
    this.isOpen && this.closeChildren(), super.close();
  }
}
class O extends E {
  /**
   * Constructs the menu.
   *
   * @param {object}                       options                                  - The options for generating the menu.
   * @param {HTMLElement}                  options.menuElement                      - The menu element in the DOM.
   * @param {string}                       [options.menuItemSelector = li]          - The CSS selector string for menu items.
   * @param {string}                       [options.menuLinkSelector = a]           - The CSS selector string for menu links.
   * @param {string}                       [options.submenuItemSelector]            - The CSS selector string for menu items containing submenus.
   * @param {string}                       [options.submenuToggleSelector = button] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                       [options.submenuSelector = ul]           - The CSS selector string for submenus.
   * @param {string}                       [options.submenuSubtoggleSelector = a]   - The CSS selector string for submenu toggle buttons/links below the top level.
   * @param {(HTMLElement|null)}           [options.controllerElement = null]       - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}           [options.containerElement = null]        - The element containing the menu in the DOM.
   * @param {(string|string[]|null)}       [options.openClass = show]               - The class to apply when a menu is "open".
   * @param {(string|string[]|null)}       [options.closeClass = hide]              - The class to apply when a menu is "closed".
   * @param {boolean}                      [options.isTopLevel = true]              - A flag to mark the root menu.
   * @param {(TopLinkDisclosureMenu|null)} [options.parentMenu = null]              - The parent menu to this menu.
   * @param {string}                       [options.hoverType = off]                - The type of hoverability a menu has.
   * @param {number}                       [options.hoverDelay = 250]               - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                      [options.optionalKeySupport = false]     - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                      [options.initialize = true]              - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: n = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: r = "button",
    submenuSelector: u = "ul",
    submenuSubtoggleSelector: c = "a",
    controllerElement: m = null,
    containerElement: d = null,
    openClass: a = "show",
    closeClass: f = "hide",
    isTopLevel: p = !0,
    parentMenu: g = null,
    hoverType: M = "off",
    hoverDelay: b = 250,
    optionalKeySupport: _ = !1,
    initialize: L = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuSelector: u,
      submenuToggleSelector: r,
      controllerElement: m,
      containerElement: d,
      openClass: a,
      closeClass: f,
      isTopLevel: p,
      parentMenu: g,
      hoverType: M,
      hoverDelay: b
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof TopLinkDisclosureMenu}
     */
    h(this, "_MenuType", O);
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof TopLinkDisclosureMenuItem}
     */
    h(this, "_MenuItemType", R);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof TopLinkDisclosureMenuToggle}
     */
    h(this, "_MenuToggleType", P);
    /**
     * The index of the currently selected {@link BaseMenuItem|menu item} in the menu.
     *
     * @protected
     *
     * @type {number}
     */
    h(this, "_currentChild", -1);
    /**
     * The CSS selectors used by the menu to populate the {@link BaseMenu#dom|dom}.
     *
     * @protected
     *
     * @type {Object<string>}
     *
     * @property {string} menuItems         - The CSS selector for menu items.
     * @property {string} menuLinks         - The CSS selector for menu links.
     * @property {string} submenuItems      - The CSS selector for menu items containing submenus.
     * @property {string} submenuToggles    - The CSS selector for menu links that function as submenu toggles.
     * @property {string} submenus          - The CSS selector for for submenus.
     * @property {string} submenuSubtoggles - The CSS selector for menu links that function as submenu toggles below the top level.
     */
    h(this, "_selectors", {
      menuItems: "",
      menuLinks: "",
      submenuItems: "",
      submenuToggles: "",
      submenus: "",
      submenuSubtoggles: ""
    });
    /**
     * A flag to add optional keyboard support (Arrow keys, "Home", and "End") to the menu.
     *
     * @protected
     *
     * @type {boolean}
     */
    h(this, "_optionalSupport", !1);
    this._optionalSupport = _, this._selectors.menuItems = t, this._selectors.submenuItems = i, this._selectors.submenuToggles = r, this._selectors.submenus = u, this._selectors.submenuSubtoggles = c, this._selectors.menuLinks = [
      .../* @__PURE__ */ new Set([n, r])
    ].join(","), L && this.initialize();
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link BaseMenu#initialize|BaseMenu's initialize method}
   * as well as set up {@link TopLinkDisclosureMenu#_handleFocus|focus},
   * {@link TopLinkDisclosureMenu#_handleClick|click},
   * {@link TopLinkDisclosureMenu#_handleHover|hover},
   * {@link TopLinkDisclosureMenu#_handleKeydown|keydown}, and
   * {@link TopLinkDisclosureMenu#_handleKeyup|keyup} events for the menu.
   *
   * If the BaseMenu's initialize method throws an error,
   * this will catch it and log it to the console.
   */
  initialize() {
    try {
      super.initialize(), this._handleFocus(), this._handleClick(), this._handleHover(), this._handleKeydown(), this._handleKeyup();
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * A flag to add optional keyboard support (Arrow keys, "Home", and "End") to the menu.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's optionalKeySupport.
   *
   * @type {boolean}
   *
   * @see _optionalSupport
   */
  get optionalKeySupport() {
    return this.isTopLevel ? this._optionalSupport : this.elements.rootMenu.optionalKeySupport;
  }
  set optionalKeySupport(e) {
    y("boolean", { optionalKeySupport: e }), this._optionalSupport = e;
  }
  /**
   * Creates and initializes all menu items and submenus.
   *
   * @protected
   */
  _createChildElements() {
    this.dom.menuItems.forEach((e) => {
      let t, n;
      const i = e.querySelector(this.selectors.menuLinks);
      if (this.dom.submenuItems.includes(e)) {
        const r = e.querySelector(this.selectors.submenuToggles), u = e.querySelector(this.selectors.submenus), c = new this._MenuType({
          menuElement: u,
          menuItemSelector: this.selectors.menuItems,
          menuLinkSelector: this.selectors.menuLinks,
          submenuItemSelector: this.selectors.submenuItems,
          submenuToggleSelector: this.selectors.submenuSubtoggles,
          submenuSelector: this.selectors.submenus,
          submenuSubtoggleSelector: this.selectors.submenuSubtoggles,
          openClass: this.openClass,
          closeClass: this.closeClass,
          isTopLevel: !1,
          parentMenu: this,
          hoverType: this.hoverType,
          hoverDelay: this.hoverDelay
        }), m = new this._MenuToggleType({
          menuToggleElement: r,
          parentElement: e,
          controlledMenu: c,
          parentMenu: this
        });
        this._elements.submenuToggles.push(m), r !== i ? (n = new this._MenuItemType({
          menuItemElement: e,
          menuLinkElement: r,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: c,
          toggle: m
        }), t = new this._MenuItemType({
          menuItemElement: e,
          menuLinkElement: i,
          parentMenu: this,
          submenuSibling: n
        })) : t = new this._MenuItemType({
          menuItemElement: e,
          menuLinkElement: i,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: c,
          toggle: m
        });
      } else
        t = new this._MenuItemType({
          menuItemElement: e,
          menuLinkElement: i,
          parentMenu: this
        });
      this._elements.menuItems.push(t), typeof n < "u" && this._elements.menuItems.push(n);
    });
  }
  /**
   * Validates all aspects of the menu to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let e = super._validate();
    const t = S({
      submenuSubtoggleSelector: this._selectors.submenuSubtoggles
    });
    t.status || (this._errors.push(t.error.message), e = !1);
    const n = y("boolean", {
      optionalKeySupport: this._optionalSupport
    });
    return n.status || (this._errors.push(n.error.message), e = !1), e;
  }
  /**
   * Handles click events throughout the menu for proper use.
   *
   * - Adds all event listeners listed in
   *   {@link BaseMenu#_handleClick|BaseMenu's _handleClick method}, and
   * - adds a `pointerup` listener to the `document` so if the user
   *   clicks outside of the menu it will close if it is open.
   *
   * @protected
   */
  _handleClick() {
    super._handleClick(), document.addEventListener("pointerup", (e) => {
      this.focusState !== "none" && (this.currentEvent = "mouse", !this.dom.menu.contains(e.target) && !this.dom.menu !== e.target && (this.closeChildren(), this.blur(), this.elements.controller && this.elements.controller.close()));
    });
  }
  /**
   * Handles hover events throughout the menu for proper use.
   *
   * Adds `pointerenter` listeners to all menu items and `pointerleave` listeners
   * to all submenu items which function differently depending on
   * the menu's {@link BaseMenu_hoverTypeType|hover type}.
   *
   * Before executing anything, the event is checked to make sure the event wasn't
   * triggered by a pen or touch.
   *
   * <strong>Hover Type "on"</strong>
   * - When a `pointerenter` event triggers on any menu item the menu's
   *   {@link BaseMenu#currentChild| current child} value will change to that
   *   menu item.
   * - When a `pointerenter` event triggers on a submenu item the
   *   {@link BaseMenuToggle#preview|preview method} for the submenu item's
   *   toggle will be called.
   * - When a `pointerleave` event triggers on an open submenu item the
   *   {@link BaseMenuToggle#close|close method} for the submenu item's toggle
   *   will be called after a delay set by the menu's {@link BaseMenu_hoverTypeDelay|hover delay}.
   *
   * <strong>Hover Type "dynamic"</strong>
   * - When a `pointerenter` event triggers on any menu item the menu's
   *   current child value will change to that menu item.
   * - When a `pointerenter` event triggers on any menu item, and the menu's
   *   {@link BaseMenu#focusState|focus state} is not "none", the menu item
   *   will be focused.
   * - When a `pointerenter` event triggers on a submenu item, and a submenu is
   *   already open, the preview method for the submenu item's toggle will be called.
   * - When a `pointerenter` event triggers on a submenu item, and no submenu is
   *   open, no submenu-specific methods will be called.
   * - When a `pointerleave` event triggers on an open submenu item that is not a
   *   root-level submenu item the close method for the submenu item's toggle
   *   will be called and the submenu item will be focused after a delay set by
   *   the menu's hover delay.
   * - When a `pointerleave` event triggers on an open submenu item that is a
   *   root-level submenu item no submenu-specific methods will be called.
   *
   * <strong>Hover Type "off"</strong>
   * All `pointerenter` and `pointerleave` events are ignored.
   *
   * @protected
   */
  _handleHover() {
    this.elements.menuItems.forEach((e, t) => {
      e.dom.link.addEventListener("pointerenter", (n) => {
        if (!(n.pointerType === "pen" || n.pointerType === "touch")) {
          if (this.hoverType === "on")
            this.currentEvent = "mouse", this.currentChild = t, e.isSubmenuItem ? e.elements.toggle.preview() : e.elements.sibling !== null && e.elements.sibling.elements.toggle.preview();
          else if (this.hoverType === "dynamic") {
            const i = this.elements.submenuToggles.some(
              (r) => r.isOpen
            );
            this.currentChild = t, (!this.isTopLevel || this.focusState !== "none") && (this.currentEvent = "mouse", this.focusCurrentChild()), (!this.isTopLevel || i) && (this.currentEvent = "mouse", e.isSubmenuItem ? e.elements.toggle.preview() : e.elements.sibling !== null && e.elements.sibling.elements.toggle.preview());
          }
        }
      }), e.isSubmenuItem && e.dom.item.addEventListener("pointerleave", (n) => {
        n.pointerType === "pen" || n.pointerType === "touch" || (this.hoverType === "on" ? this.hoverDelay > 0 ? setTimeout(() => {
          this.currentEvent = "mouse", e.elements.toggle.close();
        }, this.hoverDelay) : (this.currentEvent = "mouse", e.elements.toggle.close()) : this.hoverType === "dynamic" && (this.isTopLevel || (this.hoverDelay > 0 ? setTimeout(() => {
          this.currentEvent = "mouse", e.elements.toggle.close(), this.focusCurrentChild();
        }, this.hoverDelay) : (this.currentEvent = "mouse", e.elements.toggle.close(), this.focusCurrentChild()))));
      });
    });
  }
  /**
   * Handles keydown events throughout the menu for proper menu use.
   *
   * This method exists to assist the {@link TopLinkDisclosureMenu#_handleKeyup|_handleKeyup method}.
   * - Adds all `keydown` listeners from {@link BaseMenu#_handleKeydown|BaseMenu's _handleKeydown method}
   * - Adds a `keydown` listener to the menu/all submenus.
   *   - Blocks propagation on the following keys: "Space", "Enter", and "Escape".
   *   - _If_ {@link TopLinkDisclosureMenu#optionalKeySupport|optional keyboard support}
   *     is enabled, blocks propagation on the following keys:
   *     "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", and "End".
   *
   * @protected
   */
  _handleKeydown() {
    super._handleKeydown(), this.dom.menu.addEventListener("keydown", (e) => {
      this.currentEvent = "keyboard";
      const t = C(e);
      if (this.focusState === "self") {
        const n = ["Space", "Enter"], i = ["Escape"], r = ["Escape"];
        this.optionalKeySupport ? [
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
          "ArrowLeft",
          "Home",
          "End"
        ].includes(t) && l(e) : (this.currentMenuItem.isSubmenuItem && n.includes(t) || this.elements.controller && i.includes(t) || this.elements.parentMenu && r.includes(t)) && l(e);
      }
    });
  }
  /**
   * Handles keyup events throughout the menu for proper menu use.
   *
   * Adds all `keyup` listeners from {@link BaseMenu#_handleKeyup|BaseMenu's _handleKeyup method}.
   *
   * Adds the following keybindings (explanations are taken from the
   * {@link https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html#kbd_label|WAI ARIA Pracitices Example Disclosure for Navigation Menus}):
   *
   * | Key | Function |
   * | --- | --- |
   * | _Tab_ or _Shift + Tab_ | Move keyboard focus among top-level buttons, and if a dropdown is open, into and through links in the dropdown. |
   * | _Space_ or _Enter_ | <ul><li>If focus is on a disclosure button, activates the button, which toggles the visibility of the dropdown.</li><li>If focus is on a link:<ul><li>If any link has aria-current set, removes it.</li><li>Sets aria-current="page" on the focused link.</li><li>Activates the focused link.</li></ul></li></ul> |
   * | _Escape_ | If a dropdown is open, closes it and sets focus on the button that controls that dropdown. |
   * | _Down Arrow_ or _Right Arrow_ (Optional}) | <ul><li>If focus is on a button and its dropdown is collapsed, and it is not the last button, moves focus to the next button.</li><li>if focus is on a button and its dropdown is expanded, moves focus to the first link in the dropdown.</li><li>If focus is on a link, and it is not the last link, moves focus to the next link.</li></ul> |
   * | _Up Arrow_ or _Left Arrow_ (Optional}) | <ul><li>If focus is on a button, and it is not the first button, moves focus to the previous button.</li><li>If focus is on a link, and it is not the first link, moves focus to the previous link.</li></ul> |
   * | _Home_ (Optional}) | <ul><li>If focus is on a button, and it is not the first button, moves focus to the first button.</li><li>If focus is on a link, and it is not the first link, moves focus to the first link.</li></ul> |
   * | _End_ (Optional}) | <ul><li>If focus is on a button, and it is not the last button, moves focus to the last button.</li><li>If focus is on a link, and it is not the last link, moves focus to the last link.</li></ul> |
   *
   * The optional keybindings are controlled by the menu's {@link TopLinkDisclosureMenu#optionalKeySupport|optionalKeySupport} value.
   *
   * @protected
   */
  _handleKeyup() {
    super._handleKeyup(), this.dom.menu.addEventListener("keyup", (e) => {
      this.currentEvent = "keyboard";
      const t = C(e);
      this.focusState === "self" && (t === "Space" || t === "Enter" ? this.currentMenuItem.isSubmenuItem ? (l(e), this.currentMenuItem.elements.toggle.isOpen ? this.currentMenuItem.elements.toggle.close() : this.currentMenuItem.elements.toggle.preview()) : this.currentMenuItem.dom.link.click() : t === "Escape" ? this.elements.submenuToggles.some(
        (i) => i.isOpen
      ) ? (l(e), this.closeChildren()) : this.elements.parentMenu ? (l(e), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.closeChildren(), this.elements.parentMenu.focusCurrentChild()) : this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (this.elements.controller.close(), this.focusController()) : this.optionalKeySupport && (t === "ArrowDown" || t === "ArrowRight" ? (l(e), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.childMenu.focusFirstChild()) : this.focusNextChild()) : t === "ArrowUp" || t === "ArrowLeft" ? (l(e), this.focusPreviousChild()) : t === "Home" ? (l(e), this.focusFirstChild()) : t === "End" && (l(e), this.focusLastChild())));
    });
  }
}
class te extends R {
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
    menuItemElement: s,
    menuLinkElement: e,
    parentMenu: t,
    isSubmenuItem: n = !1,
    childMenu: i = null,
    toggle: r = null,
    initialize: u = !0,
    submenuSibling: c = null
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: r,
      initialize: !1,
      submenuSibling: c
    }), u && this.initialize();
  }
}
class se extends P {
  /**
   * Constructs the menu toggle.
   *
   * @param {object}                               options                     - The options for generating the menu toggle.
   * @param {HTMLElement}                          options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}                          options.parentElement       - The element containing the controlled menu.
   * @param {Bootstrap5TopLinkDisclosureMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {Bootstrap5TopLinkDisclosureMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}                              [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement: e,
    parentElement: t,
    controlledMenu: n,
    parentMenu: i = null,
    initialize: r = !0
  }) {
    super({
      menuToggleElement: e,
      parentElement: t,
      controlledMenu: n,
      parentMenu: i,
      initialize: !1
    });
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
    h(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = e, this._dom.parent = t, this._dom.container = n.isTopLevel ? n.dom.container : n.dom.menu, r && this.initialize();
  }
  /**
   * Initializes the toggle by removing the default bootstrap toggle information
   * and running the parent's initialization.
   */
  initialize() {
    super.initialize(), this.dom.toggle.hasAttribute("data-bs-toggle") && this.dom.toggle.removeAttribute("data-bs-toggle"), this.dom.toggle.hasAttribute("data-bs-target") && this.dom.toggle.removeAttribute("data-bs-target");
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(e = !0) {
    const { openClass: t } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), t !== "" && (typeof t == "string" ? this.dom.container.classList.add(t) : this.dom.container.classList.add(...t)), e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(e = !0) {
    const { closeClass: t, openClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), t !== "" && (typeof t == "string" ? this.dom.container.classList.add(t) : this.dom.container.classList.add(...t)), n !== "" && (typeof n == "string" ? this.dom.container.classList.remove(n) : this.dom.container.classList.remove(...n)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class D extends O {
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
   * @param {boolean}                                [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5TopLinkDisclosureMenu|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                                 [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                                 [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                                [options.optionalKeySupport = false]                  - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                                [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = ".nav-item,li",
    menuLinkSelector: n = ".nav-link,.dropdown-item",
    submenuItemSelector: i = ".dropdown",
    submenuToggleSelector: r = ".dropdown-toggle",
    submenuSelector: u = ".dropdown-menu",
    submenuSubtoggleSelector: c = ".dropdown-toggle",
    controllerElement: m = null,
    containerElement: d = null,
    openClass: a = "show",
    closeClass: f = "collapse",
    isTopLevel: p = !0,
    parentMenu: g = null,
    hoverType: M = "off",
    hoverDelay: b = 250,
    optionalKeySupport: _ = !1,
    initialize: L = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: r,
      submenuSelector: u,
      submenuSubtoggleSelector: c,
      controllerElement: m,
      containerElement: d,
      openClass: a,
      closeClass: f,
      isTopLevel: p,
      parentMenu: g,
      hoverType: M,
      hoverDelay: b,
      optionalKeySupport: _,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5TopLinkDisclosureMenu}
     *
     * @protected
     */
    h(this, "_MenuType", D);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5TopLinkDisclosureMenuItem}
     *
     * @protected
     */
    h(this, "_MenuItemType", te);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5TopLinkDisclosureMenuToggle}
     *
     * @protected
     */
    h(this, "_MenuToggleType", se);
    L && this.initialize();
  }
}
class q extends w {
  /**
   * Constructs the menu item.
   *
   * @param {object}              options                         - The options for generating the menu item.
   * @param {HTMLElement}         options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}         options.menuLinkElement         - The menu item's link in the DOM.
   * @param {Treeview}            options.parentMenu              - The parent menu.
   * @param {boolean}             [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {Treeview|null}       [options.childMenu = null]      - The child menu.
   * @param {TreeviewToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}             [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   */
  constructor({
    menuItemElement: s,
    menuLinkElement: e,
    parentMenu: t,
    isSubmenuItem: n = !1,
    childMenu: i = null,
    toggle: r = null,
    initialize: u = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: r
    }), u && this.initialize();
  }
  /**
   * Initialize the menu item.
   *
   * Initialize will call the {@link BaseMenuItem#initialize|BaseMenuItem's initialize method}
   * as well as set the menu item's `role` to "none",
   * the menu link's `role` to "treeitem", and
   * the menu link's `tabIndex` to -1 in the DOM.
   */
  initialize() {
    super.initialize(), this.dom.item.setAttribute("role", "none"), this.dom.link.setAttribute("role", "treeitem"), this.dom.link.tabIndex = -1;
  }
  /**
   * Focuses the menu item's link if the parent menu's
   * {@link Menubar#shouldFocus|shouldFocus} value is `true`.
   *
   * This will call the {@link BaseMenuItem#focus|BaseMenuItem's focus method}
   * as well as set the menu link's `tabIndex` to 0.
   */
  focus() {
    super.focus(), this.dom.link.tabIndex = 0;
  }
  /**
   * Blurs the menu item's link if the parent menu's
   * {@link Menubar#shouldFocus|shouldFocus} value is `true`.
   *
   * This will call the {@link BaseMenuItem#blur|BaseMenuItem's blur method}
   * as well as set the menu link's `tabIndex` to -1.
   */
  blur() {
    super.blur(), this.dom.link.tabIndex = -1;
  }
}
class U extends T {
  /**
   * Constructs the menu toggle.
   *
   * @param {object}        options                     - The options for generating the menu toggle.
   * @param {HTMLElement}   options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}   options.parentElement       - The element containing the controlled menu.
   * @param {Treeview}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {Treeview|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}       [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement: s,
    parentElement: e,
    controlledMenu: t,
    parentMenu: n = null,
    initialize: i = !0
  }) {
    super({
      menuToggleElement: s,
      parentElement: e,
      controlledMenu: t,
      parentMenu: n
    }), i && this.initialize();
  }
}
class K extends E {
  /**
   * Constructs the menu.
   *
   * @param {object}                 options                             - The options for generating the menu.
   * @param {HTMLElement}            options.menuElement                 - The menu element in the DOM.
   * @param {string}                 [options.menuItemSelector = li]     - The CSS selector string for menu items.
   * @param {string}                 [options.menuLinkSelector = a]      - The CSS selector string for menu links.
   * @param {string}                 [options.submenuItemSelector]       - The CSS selector string for menu items containing submenus.
   * @param {string}                 [options.submenuToggleSelector = a] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                 [options.submenuSelector = ul]      - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}     [options.controllerElement = null]  - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}     [options.containerElement = null]   - The element containing the menu in the DOM.
   * @param {(string|string[]|null)} [options.openClass = show]          - The class to apply when a menu is "open".
   * @param {(string|string[]|null)} [options.closeClass = hide]         - The class to apply when a menu is "closed".
   * @param {boolean}                [options.isTopLevel = true]         - A flag to mark the root menu.
   * @param {(Treeview|null)}        [options.parentMenu = null]         - The parent menu to this menu.
   * @param {string}                 [options.hoverType = off]           - The type of hoverability a menu has.
   * @param {number}                 [options.hoverDelay = 250]          - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                [options.initialize = true]         - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: n = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: r = "a",
    submenuSelector: u = "ul",
    controllerElement: c = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: a = "hide",
    isTopLevel: f = !0,
    parentMenu: p = null,
    hoverType: g = "off",
    hoverDelay: M = 250,
    initialize: b = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: r,
      submenuSelector: u,
      controllerElement: c,
      containerElement: m,
      openClass: d,
      closeClass: a,
      isTopLevel: f,
      parentMenu: p,
      hoverType: g,
      hoverDelay: M
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof Treeview}
     */
    h(this, "_MenuType", K);
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof TreeviewItem}
     */
    h(this, "_MenuItemType", q);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof TreeviewToggle}
     */
    h(this, "_MenuToggleType", U);
    b && this.initialize();
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link BaseMenu#initialize|BaseMenu's initialize method}
   * as well as set up {@link Treeview#_handleFocus|focus},
   * {@link Treeview#_handleClick|click},
   * {@link Treeview#_handleHover|hover},
   * {@link Treeview#_handleKeydown|keydown}, and
   * {@link Treeview#_handleKeyup|keyup} events for the menu.
   *
   * If the menu is a root menu it's `role` will be set to "tree" and the first
   * menu item's `tabIndex` will be set to 0 in the DOM.
   *
   * If the menu is _not_ a root menu it's `role` will be set to "group".
   *
   * If the BaseMenu's initialize method throws an error,
   * this will catch it and log it to the console.
   */
  initialize() {
    try {
      super.initialize(), this.isTopLevel ? (this.dom.menu.setAttribute("role", "tree"), this.elements.menuItems[0].dom.link.tabIndex = 0) : this.dom.menu.setAttribute("role", "group"), this._handleFocus(), this._handleClick(), this._handleHover(), this._handleKeydown(), this._handleKeyup();
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * Handles keydown events throughout the menu for proper menu use.
   *
   * This method exists to assist the {@link Treeview#_handleKeyup|_handleKeyup method}.
   * - Adds all `keydown` listeners from {@link BaseMenu#_handleKeydown|BaseMenu's _handleKeydown method}
   * - Adds a `keydown` listener to the menu/all submenus.
   *   - Blocks propagation on the following keys: "ArrowUp", "ArrowRight",
   *     "ArrowDown", "ArrowLeft", "Home", "End", "Space", "Enter", "Escape",
   *     "*" (asterisk), and "A" through "Z".
   *   - Moves focus out if the "Tab" key is pressed.
   *
   * @protected
   */
  _handleKeydown() {
    super._handleKeydown(), this.dom.menu.addEventListener("keydown", (e) => {
      this.currentEvent = "keyboard";
      const t = C(e);
      if (t === "Tab" && (this.elements.rootMenu.focusState !== "none" ? this.elements.rootMenu.blur() : this.elements.rootMenu.focus()), this.focusState === "self") {
        const n = [
          "Space",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "Asterisk",
          "Home",
          "End"
        ], i = ["Enter", "ArrowRight"], r = ["Escape"];
        (n.includes(t) || this.currentMenuItem.isSubmenuItem && i.includes(t) || this.elements.controller && r.includes(t)) && l(e);
      }
    });
  }
  /**
   * Handles keyup events throughout the menu for proper menu use.
   *
   * Adds all `keyup` listeners from {@link BaseMenu#_handleKeyup|BaseMenu's _handleKeyup method}.
   *
   * Adds the following keybindings (explanations are taken from the
   * {@link https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/treeview/treeview-2/treeview-2a.html#kbd_label|Navigation Treeview Example Using Computed Properties}):
   *
   * | Key | Function |
   * | --- | --- |
   * | _Enter_ or _Space_ | Performs the default action (e.g. onclick event) for the focused node. |
   * | _Down arrow_ | <ul><li>Moves focus to the next node that is focusable without opening or closing a node.</li><li>If focus is on the last node, does nothing.</li></ul> |
   * | _Up arrow_ | <ul><li>Moves focus to the previous node that is focusable without opening or closing a node.</li><li>If focus is on the first node, does nothing.</li></ul> |
   * | _Right arrow_ | <ul><li>When focus is on a closed node, opens the node; focus does not move.</li><li>When focus is on a open node, moves focus to the first child node.</li><li>When focus is on an end node, does nothing.</li></ul> |
   * | _Left arrow_ | <ul><li>When focus is on an open node, closes the node.</li><li>When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.</li><li>When focus is on a root node that is also either an end node or a closed node, does nothing.</li></ul> |
   * | _Home_ | Moves focus to first node without opening or closing a node. |
   * | _End_ | Moves focus to the last node that can be focused without expanding any nodes that are closed. |
   * | _a-z_, _A-Z_ | <ul><li>Focus moves to the next node with a name that starts with the typed character.</li><li>Search wraps to first node if a matching name is not found among the nodes that follow the focused node.</li><li>Search ignores nodes that are descendants of closed nodes.</li></ul> |
   * | _* (asterisk)_ | <ul><li>Expands all closed sibling nodes that are at the same level as the focused node.</li><li>Focus does not move.</li></ul> |
   * | _Escape_ | If the root menu is collapsible, collapses the menu and focuses the menu's controlling element. |
   *
   * @protected
   */
  _handleKeyup() {
    super._handleKeyup(), this.dom.menu.addEventListener("keyup", (e) => {
      this.currentEvent = "keyboard";
      const t = C(e), { altKey: n, crtlKey: i, metaKey: r } = e;
      if (t === "Character" && !(n || i || r))
        l(e), this.elements.rootMenu.currentEvent = "character", this.focusNextNodeWithCharacter(e.key);
      else if (this.focusState === "self")
        if (t === "Enter" || t === "Space")
          l(e), this.currentMenuItem.isSubmenuItem ? this.currentMenuItem.elements.toggle.isOpen ? this.currentMenuItem.elements.toggle.close() : this.currentMenuItem.elements.toggle.preview() : this.currentMenuItem.dom.link.click();
        else if (t === "Escape")
          this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (this.elements.controller.close(), this.focusController());
        else if (t === "ArrowDown")
          l(e), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.currentMenuItem.elements.childMenu.focusFirstChild()) : !this.isTopLevel && this.currentChild === this.elements.menuItems.length - 1 ? this.focusParentsNextChild() : this.focusNextChild();
        else if (t === "ArrowUp") {
          l(e);
          const c = this.elements.menuItems[this.currentChild - 1];
          c && c.isSubmenuItem && c.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentChild = this.currentChild - 1, this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.focusChildsLastNode()) : !this.isTopLevel && this.currentChild === 0 ? (this.blurCurrentChild(), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.focusCurrentChild()) : this.focusPreviousChild();
        } else
          t === "ArrowRight" ? this.currentMenuItem.isSubmenuItem && (l(e), this.currentMenuItem.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.currentMenuItem.elements.childMenu.focusFirstChild()) : this.currentMenuItem.elements.toggle.preview()) : t === "ArrowLeft" ? (l(e), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.currentMenuItem.elements.childMenu.blurCurrentChild(), this.currentMenuItem.elements.toggle.close()) : this.isTopLevel || (this.blurCurrentChild(), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.focusCurrentChild())) : t === "Home" ? (l(e), this.blurCurrentChild(), this.elements.rootMenu.focusFirstChild()) : t === "End" ? (l(e), this.blurCurrentChild(), this.elements.rootMenu.focusLastNode()) : t === "Asterisk" && (l(e), this.openChildren());
    });
  }
  /**
   * Focus the menu's last node of the entire expanded menu.
   *
   * This includes all _open_ child menu items.
   */
  focusLastNode() {
    const e = this.elements.menuItems.length - 1, t = this.elements.menuItems[e];
    t.isSubmenuItem && t.elements.toggle.isOpen ? (this.currentChild = e, t.elements.childMenu.currentEvent = this.currentEvent, t.elements.childMenu.focusLastNode()) : this.focusLastChild();
  }
  /**
   * Open all submenu children.
   */
  openChildren() {
    this.elements.submenuToggles.forEach((e) => e.preview());
  }
  /**
   * Focus the menu's next node starting with a specific letter.
   *
   * This includes all _open_ child menu items.
   *
   * Wraps to the first node if no match is found after the current node.
   *
   * @param {string} char - The character to look for.
   */
  focusNextNodeWithCharacter(e) {
    function t(d) {
      let a = [];
      return d.elements.menuItems.forEach((f) => {
        a.push(f), f.isSubmenuItem && f.elements.toggle.isOpen && (a = [
          ...a,
          ...t(
            f.elements.toggle.elements.controlledMenu
          )
        ]);
      }), a;
    }
    const n = e.toLowerCase(), i = t(this.elements.rootMenu), r = i.indexOf(this.currentMenuItem) + 1, u = [
      ...i.slice(r),
      ...i.slice(0, r)
    ];
    let c = 0, m = !1;
    for (; !m && c < u.length; ) {
      let d = "";
      if (u[c].dom.item.innerText ? d = u[c].dom.item.innerText : d = u[c].dom.item.textContent, d = d.replace(/[\s]/g, "").toLowerCase().charAt(0), d === n) {
        m = !0;
        const a = u[c].elements.parentMenu, f = a.elements.menuItems.indexOf(u[c]);
        this.elements.rootMenu.blurChildren(), a.focusChild(f);
      }
      c++;
    }
  }
  /**
   * Focus the parent menu's next child.
   *
   * This will cascade up through to the root menu.
   */
  focusParentsNextChild() {
    this.elements.parentMenu && (this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.currentChild === this.elements.parentMenu.elements.menuItems.length - 1 ? (this.elements.parentMenu.blurCurrentChild(), this.elements.parentMenu.focusParentsNextChild()) : (this.blurChildren(), this.elements.parentMenu.focusNextChild()));
  }
  /**
   * Focus the last child of the current child's submenu.
   *
   * This will cascade down through to the last open menu.
   */
  focusChildsLastNode() {
    this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.currentMenuItem.elements.childMenu.focusLastChild(), this.currentMenuItem.elements.childMenu.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.childMenu.currentMenuItem.elements.toggle.isOpen && (this.currentMenuItem.elements.childMenu.blurCurrentChild(), this.currentMenuItem.elements.childMenu.focusChildsLastNode());
  }
}
class ne extends q {
  /**
   * Constructs the menu item.
   *
   * @param {object}                        options                         - The options for generating the menu item.
   * @param {HTMLElement}                   options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}                   options.menuLinkElement         - The menu item's link in the DOM.
   * @param {Bootstrap5Treeview}            options.parentMenu              - The parent menu.
   * @param {boolean}                       [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {Bootstrap5Treeview|null}       [options.childMenu = null]      - The child menu.
   * @param {Bootstrap5TreeviewToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}                       [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   */
  constructor({
    menuItemElement: s,
    menuLinkElement: e,
    parentMenu: t,
    isSubmenuItem: n = !1,
    childMenu: i = null,
    toggle: r = null,
    initialize: u = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: r,
      initialize: !1
    }), u && this.initialize();
  }
}
class ie extends U {
  /**
   * Constructs the menu toggle.
   *
   * @param {object}                  options                     - The options for generating the menu toggle.
   * @param {HTMLElement}             options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}             options.parentElement       - The element containing the controlled menu.
   * @param {Bootstrap5Treeview}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {Bootstrap5Treeview|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}                 [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement: e,
    parentElement: t,
    controlledMenu: n,
    parentMenu: i = null,
    initialize: r = !0
  }) {
    super({
      menuToggleElement: e,
      parentElement: t,
      controlledMenu: n,
      parentMenu: i,
      initialize: !1
    });
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
    h(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = e, this._dom.parent = t, this._dom.container = n.isTopLevel ? n.dom.container : n.dom.menu, r && this.initialize();
  }
  /**
   * Initializes the toggle by removing the default bootstrap toggle information
   * and running the parent's initialization.
   */
  initialize() {
    super.initialize(), this.dom.toggle.hasAttribute("data-bs-toggle") && this.dom.toggle.removeAttribute("data-bs-toggle"), this.dom.toggle.hasAttribute("data-bs-target") && this.dom.toggle.removeAttribute("data-bs-target");
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(e = !0) {
    const { openClass: t } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), t !== "" && (typeof t == "string" ? this.dom.container.classList.add(t) : this.dom.container.classList.add(...t)), e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(e = !0) {
    const { closeClass: t, openClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), t !== "" && (typeof t == "string" ? this.dom.container.classList.add(t) : this.dom.container.classList.add(...t)), n !== "" && (typeof n == "string" ? this.dom.container.classList.remove(n) : this.dom.container.classList.remove(...n)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class $ extends K {
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
    menuElement: e,
    menuItemSelector: t = ".nav-item,li",
    menuLinkSelector: n = ".nav-link,.dropdown-item",
    submenuItemSelector: i = ".dropdown",
    submenuToggleSelector: r = ".dropdown-toggle",
    submenuSelector: u = ".dropdown-menu",
    controllerElement: c = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: a = "collapse",
    isTopLevel: f = !0,
    parentMenu: p = null,
    hoverType: g = "off",
    hoverDelay: M = 250,
    initialize: b = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: r,
      submenuSelector: u,
      controllerElement: c,
      containerElement: m,
      openClass: d,
      closeClass: a,
      isTopLevel: f,
      parentMenu: p,
      hoverType: g,
      hoverDelay: M,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5Treeview}
     *
     * @public
     */
    h(this, "_MenuType", $);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5TreeviewItem}
     *
     * @public
     */
    h(this, "_MenuItemType", ne);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5TreeviewToggle}
     *
     * @public
     */
    h(this, "_MenuToggleType", ie);
    b && this.initialize();
  }
}
const oe = {
  Bootstrap5DisclosureMenu: A,
  Bootstrap5Menubar: z,
  Bootstrap5TopLinkDisclosureMenu: D,
  Bootstrap5Treeview: $
};
export {
  oe as default
};
