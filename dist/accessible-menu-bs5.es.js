var X = Object.defineProperty;
var Y = (r, s, e) => s in r ? X(r, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[s] = e;
var l = (r, s, e) => (Y(r, typeof s != "symbol" ? s + "" : s, e), e);
function c(r, s) {
  typeof r == "string" ? s.classList.add(r) : s.classList.add(...r);
}
function g(r, s) {
  typeof r == "string" ? s.classList.remove(r) : s.classList.remove(...r);
}
function L(r, s) {
  try {
    if (typeof s != "object") {
      const e = typeof s;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in s)
      if (!(s[e] instanceof r)) {
        const t = typeof s[e];
        throw new TypeError(
          `${e} must be an instance of ${r.name}. "${t}" given.`
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
function b(r, s) {
  try {
    if (typeof s != "object") {
      const e = typeof s;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in s) {
      const t = typeof s[e];
      if (t !== r)
        throw new TypeError(`${e} must be a ${r}. "${t}" given.`);
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
function z(r) {
  try {
    if (typeof r != "object") {
      const s = typeof r;
      throw new TypeError(
        `Values given to isCSSSelector() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in r)
      try {
        if (r[s] === null)
          throw new Error();
        document.querySelector(r[s]);
      } catch {
        throw new TypeError(
          `${s} must be a valid CSS selector. "${r[s]}" given.`
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
function k(r) {
  try {
    if (typeof r != "object" || Array.isArray(r)) {
      const s = typeof r;
      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${s}" given.`
      );
    }
    for (const s in r) {
      const e = typeof r[s];
      if (e !== "string")
        if (Array.isArray(r[s]))
          r[s].forEach((t) => {
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
        t[s] = r[s], z(t);
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
function ee(r) {
  try {
    if (typeof r != "object") {
      const e = typeof r;
      throw new TypeError(
        `Values given to isValidState() must be inside of an object. "${e}" given.`
      );
    }
    const s = ["none", "self", "child"];
    for (const e in r)
      if (!s.includes(r[e]))
        throw new TypeError(
          `${e} must be one of the following values: ${s.join(
            ", "
          )}. "${r[e]}" given.`
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
function te(r) {
  try {
    if (typeof r != "object") {
      const e = typeof r;
      throw new TypeError(
        `Values given to isValidEvent() must be inside of an object. "${e}" given.`
      );
    }
    const s = ["none", "mouse", "keyboard", "character"];
    for (const e in r)
      if (!s.includes(r[e]))
        throw new TypeError(
          `${e} must be one of the following values: ${s.join(
            ", "
          )}. "${r[e]}" given.`
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
function N(r) {
  try {
    if (typeof r != "object") {
      const e = typeof r;
      throw new TypeError(
        `Values given to isValidHoverType() must be inside of an object. "${e}" given.`
      );
    }
    const s = ["off", "on", "dynamic"];
    for (const e in r)
      if (!s.includes(r[e]))
        throw new TypeError(
          `${e} must be one of the following values: ${s.join(
            ", "
          )}. "${r[e]}" given.`
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
function se(r, s) {
  if (b("string", { tagName: r }).status && L(HTMLElement, s).status) {
    const e = r.toLowerCase();
    let t = !0;
    for (const n in s)
      s[n].tagName.toLowerCase() !== e && (t = !1);
    return t;
  } else
    return !1;
}
class A {
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
    l(this, "_dom", {
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
    l(this, "_elements", {
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
    l(this, "_open", !1);
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
    l(this, "_expandEvent", new CustomEvent("accessibleMenuExpand", {
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
    l(this, "_collapseEvent", new CustomEvent("accessibleMenuCollapse", {
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
    var s;
    if (this.dom.toggle.setAttribute("aria-haspopup", "true"), this.dom.toggle.setAttribute("aria-expanded", "false"), se("button", { toggle: this.dom.toggle }) || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.id === "" || this.elements.controlledMenu.dom.menu.id === "") {
      const e = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
      let t = ((s = this.dom.toggle.innerText) == null ? void 0 : s.replace(/[^a-zA-Z0-9\s]/g, "")) || "", n = e;
      !t.replace(/\s/g, "").length && this.dom.toggle.getAttribute("aria-label") && (t = this.dom.toggle.getAttribute("aria-label").replace(/[^a-zA-Z0-9\s]/g, "")), t.replace(/\s/g, "").length > 0 && (t = t.toLowerCase().replace(/\s+/g, "-"), t.startsWith("-") && (t = t.substring(1)), t.endsWith("-") && (t = t.slice(0, -1)), n = `${t}-${n}`), this.dom.toggle.id = this.dom.toggle.id || `${n}-menu-button`, this.elements.controlledMenu.dom.menu.id = this.elements.controlledMenu.dom.menu.id || `${n}-menu`;
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
    b("boolean", { value: s }), this._open = s;
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
    const { closeClass: e, openClass: t, transitionClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), n !== "" ? (c(n, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
      e !== "" && g(e, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
        t !== "" && c(t, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
          g(n, this.elements.controlledMenu.dom.menu);
        });
      });
    })) : (t !== "" && c(t, this.elements.controlledMenu.dom.menu), e !== "" && g(e, this.elements.controlledMenu.dom.menu)), s && this.dom.toggle.dispatchEvent(this._expandEvent);
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
    const { closeClass: e, openClass: t, transitionClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), n !== "" ? (c(n, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
      t !== "" && g(t, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
        e !== "" && c(e, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
          g(n, this.elements.controlledMenu.dom.menu);
        });
      });
    })) : (e !== "" && c(e, this.elements.controlledMenu.dom.menu), t !== "" && g(t, this.elements.controlledMenu.dom.menu)), s && this.dom.toggle.dispatchEvent(this._collapseEvent);
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
    this.isOpen && (this.elements.controlledMenu.blur(), this.elements.parentMenu && (this.elements.parentMenu.focusState = "self"), this._collapse(), this.isOpen = !1);
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
class x {
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
    toggle: o = null
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
    l(this, "_dom", {
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
    l(this, "_elements", {
      parentMenu: null,
      childMenu: null,
      toggle: null
    });
    /**
     * A flag marking a submenu item.
     *
     * @type {boolean}
     */
    l(this, "_submenu", !1);
    this._dom.item = s, this._dom.link = e, this._elements.parentMenu = t, this._elements.childMenu = i, this._elements.toggle = o, this._submenu = n;
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
function I(r) {
  try {
    const s = r.key || r.keyCode, e = {
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
function u(r) {
  r.preventDefault(), r.stopPropagation();
}
class S {
  /**
   * Constructs the menu.
   *
   * @param {object}             options                                   - The options for generating the menu.
   * @param {HTMLElement}        options.menuElement                       - The menu element in the DOM.
   * @param {string}             [options.menuItemSelector = li]           - The CSS selector string for menu items.
   * @param {string}             [options.menuLinkSelector = a]            - The CSS selector string for menu links.
   * @param {string}             [options.submenuItemSelector]             - The CSS selector string for menu items containing submenus.
   * @param {string}             [options.submenuToggleSelector = a]       - The CSS selector string for submenu toggle buttons/links.
   * @param {string}             [options.submenuSelector = ul]            - The CSS selector string for submenus.
   * @param {?HTMLElement}       [options.controllerElement = null]        - The element controlling the menu in the DOM.
   * @param {?HTMLElement}       [options.containerElement = null]         - The element containing the menu in the DOM.
   * @param {?(string|string[])} [options.openClass = show]                - The class to apply when a menu is "open".
   * @param {?(string|string[])} [options.closeClass = hide]               - The class to apply when a menu is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning] - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}            [options.isTopLevel = false]              - A flag to mark the root menu.
   * @param {?BaseMenu}          [options.parentMenu = null]               - The parent menu to this menu.
   * @param {string}             [options.hoverType = off]                 - The type of hoverability a menu has.
   * @param {number}             [options.hoverDelay = 250]                - The delay for opening and closing menus if the menu is hoverable (in miliseconds).
   * @param {number}             [options.enterDelay = -1]                 - The delay for opening menus if the menu is hoverable (in miliseconds).
   * @param {number}             [options.leaveDelay = -1]                 - The delay for closing menus if the menu is hoverable (in miliseconds).
   */
  constructor({
    menuElement: s,
    menuItemSelector: e = "li",
    menuLinkSelector: t = "a",
    submenuItemSelector: n = "",
    submenuToggleSelector: i = "a",
    submenuSelector: o = "ul",
    controllerElement: h = null,
    containerElement: a = null,
    openClass: m = "show",
    closeClass: d = "hide",
    transitionClass: p = "transitioning",
    isTopLevel: f = !0,
    parentMenu: _ = null,
    hoverType: M = "off",
    hoverDelay: y = 250,
    enterDelay: C = -1,
    leaveDelay: E = -1
  }) {
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof BaseMenu}
     */
    l(this, "_MenuType", S);
    // eslint-disable-line no-use-before-define
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof BaseMenuItem}
     */
    l(this, "_MenuItemType", x);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof BaseMenuToggle}
     */
    l(this, "_MenuToggleType", A);
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
    l(this, "_dom", {
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
    l(this, "_selectors", {
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
    l(this, "_elements", {
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
    l(this, "_openClass", "show");
    /**
     * The class(es) to apply when the menu is closed.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    l(this, "_closeClass", "hide");
    /**
     * The class(es) to apply when the menu is transitioning between states.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    l(this, "_transitionClass", "transitioning");
    /**
     * A flag marking the root menu.
     *
     * @protected
     *
     * @type {boolean}
     */
    l(this, "_root", !0);
    /**
     * The index of the currently selected {@link BaseMenuItem|menu item} in the menu.
     *
     * @protected
     *
     * @type {number}
     */
    l(this, "_currentChild", 0);
    /**
     * The current state of the menu's focus.
     *
     * @protected
     *
     * @type {string}
     */
    l(this, "_focusState", "none");
    /**
     * This last event triggered on the menu.
     *
     * @protected
     *
     * @type {string}
     */
    l(this, "_currentEvent", "none");
    /**
     * The type of hoverability for the menu.
     *
     * @protected
     *
     * @type {string}
     */
    l(this, "_hoverType", "off");
    /**
     * The delay time (in miliseconds) used for pointerenter/pointerleave events to take place.
     *
     * @protected
     *
     * @type {number}
     */
    l(this, "_hoverDelay", 250);
    /**
     * The delay time (in miliseconds) used for pointerenter events to take place.
     *
     * @protected
     *
     * @type {number}
     */
    l(this, "_enterDelay", -1);
    /**
     * The delay time (in miliseconds) used for pointerleave events to take place.
     *
     * @protected
     *
     * @type {number}
     */
    l(this, "_leaveDelay", -1);
    /**
     * An variable to hold the hover timeout function.
     *
     * @protected
     *
     * @type {?Function}
     */
    l(this, "_hoverTimeout", null);
    /**
     * An array of error messages generated by the menu.
     *
     * @protected
     *
     * @type {string[]}
     */
    l(this, "_errors", []);
    this._dom.menu = s, this._dom.controller = h, this._dom.container = a, this._selectors.menuItems = e, this._selectors.menuLinks = t, this._selectors.submenuItems = n, this._selectors.submenuToggles = i, this._selectors.submenus = o, this._elements.menuItems = [], this._elements.submenuToggles = [], this._elements.controller = null, this._elements.parentMenu = _, this._elements.rootMenu = f ? this : null, this._openClass = m || "", this._closeClass = d || "", this._transitionClass = p || "", this._root = f, this._hoverType = M, this._hoverDelay = y, this._enterDelay = C, this._leaveDelay = E;
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
   * The class(es) to apply when the menu is transitioning between open and closed.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's transition class(es).
   *
   * @type {string|string[]}
   *
   * @see _transitionClass
   */
  get transitionClass() {
    return this.isTopLevel ? this._transitionClass : this.elements.rootMenu.transitionClass;
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
   * The delay time (in miliseconds) used for pointerenter/pointerleave events to take place.
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
   * The delay time (in miliseconds) used for pointerenter events to take place.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's enter delay.
   *
   * If enterDelay is set to -1, the hoverDelay value will be used instead.
   *
   * @type {number}
   *
   * @see _enterDelay
   */
  get enterDelay() {
    return this._enterDelay === -1 ? this.hoverDelay : this._root ? this._enterDelay : this.elements.rootMenu.enterDelay;
  }
  /**
   * The delay time (in miliseconds) used for pointerleave events to take place.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's leave delay.
   *
   * If leaveDelay is set to -1, the hoverDelay value will be used instead.
   *
   * @type {number}
   *
   * @see _leaveDelay
   */
  get leaveDelay() {
    return this._leaveDelay === -1 ? this.hoverDelay : this._root ? this._leaveDelay : this.elements.rootMenu.leaveDelay;
  }
  /**
   * A flag to check if the menu's focus methods should _actually_ move the focus in the DOM.
   *
   * This will be `false` unless any of the following criteria are met:
   * - The menu's {@link BaseMenu#currentEvent|current event} is "keyboard".
   * - The menu's current event is "character".
   * - The menu's current event is "mouse" _and_ the menu's
   *   {@link BaseMenu#_hoverType|hover type} is "dynamic".
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
    k({ openClass: s }), this._openClass !== s && (this._openClass = s);
  }
  set closeClass(s) {
    k({ closeClass: s }), this._closeClass !== s && (this._closeClass = s);
  }
  set transitionClass(s) {
    k({ transitionClass: s }), this._transitionClass !== s && (this._transitionClass = s);
  }
  set currentChild(s) {
    b("number", { value: s });
    function e(t) {
      if (["mouse", "character"].includes(t.currentEvent) && t.elements.parentMenu) {
        let i = 0, o = !1;
        for (; !o && i < t.elements.parentMenu.elements.menuItems.length; ) {
          const h = t.elements.parentMenu.elements.menuItems[i];
          h.isSubmenuItem && h.elements.toggle.elements.controlledMenu === t && (o = !0, t.elements.parentMenu.currentEvent = t.currentEvent, t.elements.parentMenu.currentChild = i), i++;
        }
      }
    }
    s < -1 ? (this._currentChild = -1, e(this)) : s >= this.elements.menuItems.length ? (this._currentChild = this.elements.menuItems.length - 1, e(this)) : this.focusChild !== s && (this._currentChild = s, e(this));
  }
  set focusState(s) {
    ee({ value: s }), this._focusState !== s && (this._focusState = s), this.elements.submenuToggles.length > 0 && (s === "self" || s === "none") && this.elements.submenuToggles.forEach((e) => {
      e.elements.controlledMenu.focusState = "none";
    }), this.elements.parentMenu && (s === "self" || s === "child") && (this.elements.parentMenu.focusState = "child");
  }
  set currentEvent(s) {
    te({ value: s }), this._currentEvent !== s && (this._currentEvent = s, this.elements.submenuToggles.length > 0 && this.elements.submenuToggles.forEach((e) => {
      e.elements.controlledMenu.currentEvent = s;
    }));
  }
  set hoverType(s) {
    N({ value: s }), this._hoverType !== s && (this._hoverType = s);
  }
  set hoverDelay(s) {
    b("number", { value: s }), this._hoverDelay !== s && (this._hoverDelay = s);
  }
  set enterDelay(s) {
    b("number", { value: s }), this._enterDelay !== s && (this._enterDelay = s);
  }
  set leaveDelay(s) {
    b("number", { value: s }), this._leaveDelay !== s && (this._leaveDelay = s);
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
    this._dom.container !== null || this._dom.controller !== null ? e = L(HTMLElement, {
      menuElement: this._dom.menu,
      controllerElement: this._dom.controller,
      containerElement: this._dom.container
    }) : e = L(HTMLElement, {
      menuElement: this._dom.menu
    }), e.status || (this._errors.push(e.error.message), s = !1);
    let t;
    if (this._selectors.submenuItems !== "" ? t = z({
      menuItemSelector: this._selectors.menuItems,
      menuLinkSelector: this._selectors.menuLinks,
      submenuItemSelector: this._selectors.submenuItems,
      submenuToggleSelector: this._selectors.submenuToggles,
      submenuSelector: this._selectors.submenus
    }) : t = z({
      menuItemSelector: this._selectors.menuItems,
      menuLinkSelector: this._selectors.menuLinks
    }), t.status || (this._errors.push(t.error.message), s = !1), this._openClass !== "") {
      const m = k({ openClass: this._openClass });
      m.status || (this._errors.push(m.error.message), s = !1);
    }
    if (this._closeClass !== "") {
      const m = k({
        closeClass: this._closeClass
      });
      m.status || (this._errors.push(m.error.message), s = !1);
    }
    if (this._transitionClass !== "") {
      const m = k({
        transitionClass: this._transitionClass
      });
      m.status || (this._errors.push(m.error.message), s = !1);
    }
    const n = b("boolean", { isTopLevel: this._root });
    if (n.status || (this._errors.push(n.error.message), s = !1), this._elements.parentMenu !== null) {
      const m = L(S, {
        parentMenu: this._elements.parentMenu
      });
      m.status || (this._errors.push(m.error.message), s = !1);
    }
    const i = N({ hoverType: this._hoverType });
    i.status || (this._errors.push(i.error.message), s = !1);
    const o = b("number", {
      hoverDelay: this._hoverDelay
    });
    o.status || (this._errors.push(o.error.message), s = !1);
    const h = b("number", {
      enterDelay: this._enterDelay
    });
    h.status || (this._errors.push(h.error.message), s = !1);
    const a = b("number", {
      leaveDelay: this._leaveDelay
    });
    return a.status || (this._errors.push(a.error.message), s = !1), s;
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
      e !== this.dom.menu && L(HTMLElement, { base: e });
      const i = Array.from(
        e.querySelectorAll(this.selectors[s])
      ).filter(
        (o) => o.parentElement === e
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
          transitionClass: this.transitionClass,
          isTopLevel: !1,
          parentMenu: this,
          hoverType: this.hoverType,
          hoverDelay: this.hoverDelay,
          enterDelay: this.enterDelay,
          leaveDelay: this.leaveDelay
        }), o = new this._MenuToggleType({
          menuToggleElement: t,
          parentElement: s,
          controlledMenu: i,
          parentMenu: this
        });
        this._elements.submenuToggles.push(o), e = new this._MenuItemType({
          menuItemElement: s,
          menuLinkElement: t,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: i,
          toggle: o
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
      u(n), t.toggle(), t.isOpen && (e.focusState = "self", t.elements.controlledMenu.focusState = "none");
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
   * the menu's {@link BaseMenu#_hoverType|hover type}.
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
   *   will be called after a delay set by the menu's {@link BaseMenu#_hoverDelay|hover delay}.
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
            this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusChild(e), s.isSubmenuItem && (this.enterDelay > 0 ? this._hoverTimeout = setTimeout(() => {
              s.elements.toggle.preview();
            }, this.enterDelay) : s.elements.toggle.preview());
          else if (this.hoverType === "dynamic") {
            const n = this.elements.submenuToggles.some(
              (i) => i.isOpen
            );
            this.currentChild = e, (!this.isTopLevel || this.focusState !== "none") && (this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusCurrentChild()), s.isSubmenuItem && (!this.isTopLevel || n) && (this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusCurrentChild(), this.enterDelay > 0 ? this._hoverTimeout = setTimeout(() => {
              s.elements.toggle.preview();
            }, this.enterDelay) : s.elements.toggle.preview());
          }
        }
      }), s.isSubmenuItem && s.dom.item.addEventListener("pointerleave", (t) => {
        t.pointerType === "pen" || t.pointerType === "touch" || (this.hoverType === "on" ? this.leaveDelay > 0 ? (clearTimeout(this._hoverTimeout), setTimeout(() => {
          this.currentEvent = "mouse", s.elements.toggle.close();
        }, this.leaveDelay)) : (this.currentEvent = "mouse", s.elements.toggle.close()) : this.hoverType === "dynamic" && (this.isTopLevel || (this.leaveDelay > 0 ? (clearTimeout(this._hoverTimeout), setTimeout(() => {
          this.currentEvent = "mouse", s.elements.toggle.close(), this.focusCurrentChild();
        }, this.leaveDelay)) : (this.currentEvent = "mouse", s.elements.toggle.close(), this.focusCurrentChild()))));
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
        const e = I(s);
        (e === "Space" || e === "Enter") && u(s);
      }
    );
  }
  /**
   * Handles keyup events throughout the menu for proper menu use.
   *
   * - Adds a `keyup` listener to the menu's controller (if the menu is the root menu).
   *   - Toggles the menu when the user hits "Space" or "Enter".
   *
   * @protected
   */
  _handleKeyup() {
    this.isTopLevel && this.elements.controller && this.elements.controller.dom.toggle.addEventListener("keyup", (s) => {
      this.currentEvent = "keyboard";
      const e = I(s);
      (e === "Space" || e === "Enter") && (u(s), this.elements.controller.toggle(), this.elements.controller.isOpen && this.focusFirstChild());
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
class j extends x {
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
    toggle: o = null,
    initialize: h = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: o
    }), h && this.initialize();
  }
}
class V extends A {
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
class O extends S {
  /**
   * Constructs the menu.
   *
   * @param {object}             options                                   - The options for generating the menu.
   * @param {HTMLElement}        options.menuElement                       - The menu element in the DOM.
   * @param {string}             [options.menuItemSelector = li]           - The CSS selector string for menu items.
   * @param {string}             [options.menuLinkSelector = a]            - The CSS selector string for menu links.
   * @param {string}             [options.submenuItemSelector]             - The CSS selector string for menu items containing submenus.
   * @param {string}             [options.submenuToggleSelector = a]       - The CSS selector string for submenu toggle buttons/links.
   * @param {string}             [options.submenuSelector = ul]            - The CSS selector string for submenus.
   * @param {?HTMLElement}       [options.controllerElement = null]        - The element controlling the menu in the DOM.
   * @param {?HTMLElement}       [options.containerElement = null]         - The element containing the menu in the DOM.
   * @param {?(string|string[])} [options.openClass = show]                - The class to apply when a menu is "open".
   * @param {?(string|string[])} [options.closeClass = hide]               - The class to apply when a menu is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning] - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}            [options.isTopLevel = true]               - A flag to mark the root menu.
   * @param {?DisclosureMenu}    [options.parentMenu = null]               - The parent menu to this menu.
   * @param {string}             [options.hoverType = off]                 - The type of hoverability a menu has.
   * @param {number}             [options.hoverDelay = 250]                - The delay for opening and closing menus if the menu is hoverable (in miliseconds).
   * @param {number}             [options.enterDelay = -1]                 - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}             [options.leaveDelay = -1]                 - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}            [options.optionalKeySupport = false]      - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}            [options.initialize = true]               - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: n = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: o = "a",
    submenuSelector: h = "ul",
    controllerElement: a = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: p = "hide",
    transitionClass: f = "transitioning",
    isTopLevel: _ = !0,
    parentMenu: M = null,
    hoverType: y = "off",
    hoverDelay: C = 250,
    enterDelay: E = -1,
    leaveDelay: w = -1,
    optionalKeySupport: v = !1,
    initialize: T = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: o,
      submenuSelector: h,
      controllerElement: a,
      containerElement: m,
      openClass: d,
      closeClass: p,
      transitionClass: f,
      isTopLevel: _,
      parentMenu: M,
      hoverType: y,
      hoverDelay: C,
      enterDelay: E,
      leaveDelay: w
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof DisclosureMenu}
     */
    l(this, "_MenuType", O);
    // eslint-disable-line no-use-before-define
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof DisclosureMenuItem}
     */
    l(this, "_MenuItemType", j);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof DisclosureMenuToggle}
     */
    l(this, "_MenuToggleType", V);
    /**
     * The index of the currently selected {@link DisclosureMenu|menu item} in the menu.
     *
     * @protected
     *
     * @type {number}
     */
    l(this, "_currentChild", -1);
    /**
     * A flag to add optional keyboard support (Arrow keys, "Home", and "End") to the menu.
     *
     * @protected
     *
     * @type {boolean}
     */
    l(this, "_optionalSupport", !1);
    this._optionalSupport = v, T && this.initialize();
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
    b("boolean", { optionalKeySupport: e }), this._optionalSupport = e;
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
    const t = b("boolean", {
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
      const t = I(e);
      if (this.focusState === "self") {
        const n = ["Space", "Enter"], i = ["Escape"], o = ["Escape"];
        this.optionalKeySupport ? [
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
          "ArrowLeft",
          "Home",
          "End"
        ].includes(t) && u(e) : (this.currentMenuItem.isSubmenuItem && n.includes(t) || this.elements.controller && i.includes(t) || this.elements.parentMenu && o.includes(t)) && u(e);
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
      const t = I(e);
      this.focusState === "self" && (t === "Space" || t === "Enter" ? this.currentMenuItem.isSubmenuItem ? (u(e), this.currentMenuItem.elements.toggle.isOpen ? this.currentMenuItem.elements.toggle.close() : this.currentMenuItem.elements.toggle.preview()) : this.currentMenuItem.dom.link.click() : t === "Escape" ? this.elements.submenuToggles.some(
        (i) => i.isOpen
      ) ? (u(e), this.closeChildren()) : this.elements.parentMenu ? (u(e), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.closeChildren(), this.elements.parentMenu.focusCurrentChild()) : this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (this.elements.controller.close(), this.focusController()) : this.optionalKeySupport && (t === "ArrowDown" || t === "ArrowRight" ? (u(e), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.childMenu.focusFirstChild()) : this.focusNextChild()) : t === "ArrowUp" || t === "ArrowLeft" ? (u(e), this.focusPreviousChild()) : t === "Home" ? (u(e), this.focusFirstChild()) : t === "End" && (u(e), this.focusLastChild())));
    });
  }
}
class ne extends j {
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
    toggle: o = null,
    initialize: h = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: o,
      initialize: !1
    }), h && this.initialize();
  }
}
class ie extends V {
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
    initialize: o = !0
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
    l(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = e, this._dom.parent = t, this._dom.container = n.isTopLevel ? n.dom.container : n.dom.menu, o && this.initialize();
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(e = !0) {
    const { openClass: t, transitionClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), n !== "" ? (c(n, this.dom.container), requestAnimationFrame(() => {
      c(t, this.dom.container), requestAnimationFrame(() => {
        g(n, this.dom.container);
      });
    })) : t !== "" && c(t, this.dom.container), e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(e = !0) {
    const { closeClass: t, openClass: n, transitionClass: i } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), i !== "" ? (c(i, this.dom.container), requestAnimationFrame(() => {
      n !== "" && g(n, this.dom.container), requestAnimationFrame(() => {
        t !== "" && c(t, this.dom.container), requestAnimationFrame(() => {
          g(i, this.dom.container);
        });
      });
    })) : (t !== "" && c(t, this.dom.container), n !== "" && g(n, this.dom.container)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class F extends O {
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
   * @param {?(string|string[])}              [options.transitionClass = transitioning]             - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}                         [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5DisclosureMenu|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                          [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                          [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {number}                          [options.enterDelay = -1]                             - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}                          [options.leaveDelay = -1]                             - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}                         [options.optionalKeySupport = false]                  - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                         [options.disableBootstrap = true]                     - A flag to disable bootstrap's dropdown behaviour by making their events target a pseudo element.
   * @param {boolean}                         [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = ".nav-item,li",
    menuLinkSelector: n = ".nav-link,.dropdown-item",
    submenuItemSelector: i = ".dropdown",
    submenuToggleSelector: o = ".dropdown-toggle",
    submenuSelector: h = ".dropdown-menu",
    controllerElement: a = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: p = "collapse",
    transitionClass: f = "transitioning",
    isTopLevel: _ = !0,
    parentMenu: M = null,
    hoverType: y = "off",
    hoverDelay: C = 250,
    enterDelay: E = -1,
    leaveDelay: w = -1,
    optionalKeySupport: v = !1,
    disableBootstrap: T = !0,
    initialize: D = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: o,
      submenuSelector: h,
      controllerElement: a,
      containerElement: m,
      openClass: d,
      closeClass: p,
      transitionClass: f,
      isTopLevel: _,
      parentMenu: M,
      hoverType: y,
      hoverDelay: C,
      enterDelay: E,
      leaveDelay: w,
      optionalKeySupport: v,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5DisclosureMenu}
     *
     * @protected
     */
    l(this, "_MenuType", F);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5DisclosureMenuItem}
     *
     * @protected
     */
    l(this, "_MenuItemType", ne);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5DisclosureMenuToggle}
     *
     * @protected
     */
    l(this, "_MenuToggleType", ie);
    /**
     * A flag to disable bootstrap's dropdown behaviour.
     *
     * @type {boolean}
     *
     * @protected
     */
    l(this, "_disableBootstrap", !0);
    /**
     * The DOM element to use as a fake target for bootstrap's dropdown events.
     *
     * @type {HTMLElement}
     *
     * @protected
     */
    l(this, "_pseudoDropdownElement", document.createElement("div"));
    /**
     * Bootstrap events that need to be intercepted to disbaled dropdowns.
     *
     * @type {string[]}
     *
     * @protected
     */
    l(this, "_bootstrapEvents", [
      "show.bs.dropdown",
      "shown.bs.dropdown",
      "hide.bs.dropdown",
      "hidden.bs.dropdown"
    ]);
    this._disableBootstrap = T, D && this.initialize();
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link DisclosureMenu#initialize|DisclosureMenu's initialize method}
   * as well as the {@link Bootstrap5DisclosureMenu#_disableBootstrapDropdownBehaviour|disableBootstrapDropdown} event
   * for the menu.
   */
  initialize() {
    super.initialize(), this.bootstrapDisabled && this._disableBootstrapDropdownBehaviour();
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
    let e = super._validate();
    const t = b("boolean", {
      disableBootstrap: this._disableBootstrap
    });
    return t.status || (this._errors.push(t.error.message), e = !1), e;
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
    this.elements.submenuToggles.forEach((e) => {
      this.bootstrapEvents.forEach((t) => {
        e.dom.toggle.addEventListener(
          t,
          (n) => {
            u(n);
            const i = bootstrap.Dropdown.getInstance(
              n.target
            );
            i && i._menu !== this.bootstrapPseudoDropdownElement && (i._menu = this.bootstrapPseudoDropdownElement);
          },
          {
            once: !0
          }
        );
      });
    });
  }
}
class R extends x {
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
    toggle: o = null,
    initialize: h = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: o
    }), h && this.initialize();
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
class U extends A {
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
    this.isOpen && (this.closeChildren(), this.elements.parentMenu && this.elements.parentMenu.focusCurrentChild()), super.close();
  }
}
class K extends S {
  /**
   * Constructs the menu.
   *
   * @param {object}             options                                   - The options for generating the menu.
   * @param {HTMLElement}        options.menuElement                       - The menu element in the DOM.
   * @param {string}             [options.menuItemSelector = li]           - The CSS selector string for menu items.
   * @param {string}             [options.menuLinkSelector = a]            - The CSS selector string for menu links.
   * @param {string}             [options.submenuItemSelector]             - The CSS selector string for menu items containing submenus.
   * @param {string}             [options.submenuToggleSelector = a]       - The CSS selector string for submenu toggle buttons/links.
   * @param {string}             [options.submenuSelector = ul]            - The CSS selector string for submenus.
   * @param {?HTMLElement}       [options.controllerElement = null]        - The element controlling the menu in the DOM.
   * @param {?HTMLElement}       [options.containerElement = null]         - The element containing the menu in the DOM.
   * @param {?(string|string[])} [options.openClass = show]                - The class to apply when a menu is "open".
   * @param {?(string|string[])} [options.closeClass = hide]               - The class to apply when a menu is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning] - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}            [options.isTopLevel = true]               - A flag to mark the root menu.
   * @param {?Menubar}           [options.parentMenu = null]               - The parent menu to this menu.
   * @param {string}             [options.hoverType = off]                 - The type of hoverability a menu has.
   * @param {number}             [options.hoverDelay = 250]                - The delay for opening and closing menus if the menu is hoverable (in miliseconds).
   * @param {number}             [options.enterDelay = -1]                 - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}             [options.leaveDelay = -1]                 - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}            [options.initialize = true]               - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: n = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: o = "a",
    submenuSelector: h = "ul",
    controllerElement: a = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: p = "hide",
    transitionClass: f = "transitioning",
    isTopLevel: _ = !0,
    parentMenu: M = null,
    hoverType: y = "off",
    hoverDelay: C = 250,
    enterDelay: E = -1,
    leaveDelay: w = -1,
    initialize: v = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: o,
      submenuSelector: h,
      controllerElement: a,
      containerElement: m,
      openClass: d,
      closeClass: p,
      transitionClass: f,
      isTopLevel: _,
      parentMenu: M,
      hoverType: y,
      hoverDelay: C,
      enterDelay: E,
      leaveDelay: w
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof Menubar}
     */
    l(this, "_MenuType", K);
    // eslint-disable-line no-use-before-define
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof MenubarItem}
     */
    l(this, "_MenuItemType", R);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof MenubarToggle}
     */
    l(this, "_MenuToggleType", U);
    v && this.initialize();
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
      super.initialize(), this.isTopLevel ? this.dom.menu.setAttribute("role", "menubar") : this.dom.menu.setAttribute("role", "menu"), this._handleFocus(), this._handleClick(), this._handleHover(), this._handleKeydown(), this._handleKeyup(), this.isTopLevel && (this.elements.menuItems[0].dom.link.tabIndex = 0);
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
      const t = I(e);
      if (t === "Tab" && (this.elements.rootMenu.focusState !== "none" ? (this.elements.rootMenu.blur(), this.elements.rootMenu.closeChildren()) : this.elements.rootMenu.focus()), t === "Character")
        u(e);
      else if (this.isTopLevel) {
        if (this.focusState === "self") {
          const n = ["ArrowRight", "ArrowLeft", "Home", "End"], i = ["Space", "Enter", "ArrowDown", "ArrowUp"], o = ["Escape"];
          (n.includes(t) || this.currentMenuItem.isSubmenuItem && i.includes(t) || this.elements.controller && o.includes(t)) && u(e);
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
        (n.includes(t) || this.currentMenuItem.isSubmenuItem && i.includes(t)) && u(e);
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
      const t = I(e), { altKey: n, crtlKey: i, metaKey: o } = e;
      if (t === "Character" && !(n || i || o))
        u(e), this.elements.rootMenu.currentEvent = "character", this.focusNextChildWithCharacter(e.key);
      else if (this.isTopLevel) {
        if (this.focusState === "self")
          if (t === "Space" || t === "Enter")
            this.currentMenuItem.isSubmenuItem ? (u(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
              this.currentMenuItem.elements.childMenu.focusFirstChild();
            })) : this.currentMenuItem.dom.link.click();
          else if (t === "ArrowRight") {
            u(e);
            const a = this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen;
            this.focusNextChild(), a && (this.currentMenuItem.isSubmenuItem ? (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.preview()) : this.closeChildren());
          } else if (t === "ArrowLeft") {
            u(e);
            const a = this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen;
            this.focusPreviousChild(), a && (this.currentMenuItem.isSubmenuItem ? (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.preview()) : this.closeChildren());
          } else
            t === "ArrowDown" ? this.currentMenuItem.isSubmenuItem && (u(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
              this.currentMenuItem.elements.childMenu.focusFirstChild();
            })) : t === "ArrowUp" ? this.currentMenuItem.isSubmenuItem && (u(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
              this.currentMenuItem.elements.childMenu.focusLastChild();
            })) : t === "Home" ? (u(e), this.focusFirstChild()) : t === "End" ? (u(e), this.focusLastChild()) : t === "Escape" && (this.elements.submenuToggles.some(
              (m) => m.isOpen
            ) ? (u(e), this.closeChildren()) : this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (u(e), this.elements.controller.close(), this.focusController()));
      } else
        t === "Space" || t === "Enter" ? this.currentMenuItem.isSubmenuItem ? (u(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
          this.currentMenuItem.elements.childMenu.focusFirstChild();
        })) : this.currentMenuItem.dom.link.click() : t === "Escape" ? (u(e), this.elements.rootMenu.closeChildren(), this.elements.rootMenu.focusCurrentChild()) : t === "ArrowRight" ? this.currentMenuItem.isSubmenuItem ? (u(e), this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.toggle.open(), requestAnimationFrame(() => {
          this.currentMenuItem.elements.childMenu.focusFirstChild();
        })) : (u(e), this.elements.rootMenu.closeChildren(), this.elements.rootMenu.focusNextChild(), this.elements.rootMenu.currentMenuItem.isSubmenuItem && this.elements.rootMenu.currentMenuItem.elements.toggle.preview()) : t === "ArrowLeft" ? this.elements.parentMenu.currentMenuItem.isSubmenuItem && (u(e), this.elements.parentMenu.currentMenuItem.elements.toggle.close(), this.elements.parentMenu.focusCurrentChild(), this.elements.parentMenu === this.elements.rootMenu && (this.elements.rootMenu.closeChildren(), this.elements.rootMenu.focusPreviousChild(), this.elements.rootMenu.currentMenuItem.isSubmenuItem && (this.elements.rootMenu.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.elements.rootMenu.currentMenuItem.elements.toggle.preview()))) : t === "ArrowDown" ? (u(e), this.focusNextChild()) : t === "ArrowUp" ? (u(e), this.focusPreviousChild()) : t === "Home" ? (u(e), this.focusFirstChild()) : t === "End" && (u(e), this.focusLastChild());
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
      let o = "";
      this.elements.menuItems[n].dom.item.innerText ? o = this.elements.menuItems[n].dom.item.innerText : o = this.elements.menuItems[n].dom.item.textContent, o = o.replace(/[\s]/g, "").toLowerCase().charAt(0), o === t && (i = !0, this.focusChild(n)), n++;
    }
  }
}
class oe extends R {
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
    toggle: o = null,
    initialize: h = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: o,
      initialize: !1
    }), h && this.initialize();
  }
}
class re extends U {
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
    initialize: o = !0
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
    l(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = e, this._dom.parent = t, this._dom.container = n.isTopLevel ? n.dom.container : n.dom.menu, o && this.initialize();
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(e = !0) {
    const { openClass: t, transitionClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), n !== "" ? (c(n, this.dom.container), requestAnimationFrame(() => {
      c(t, this.dom.container), requestAnimationFrame(() => {
        g(n, this.dom.container);
      });
    })) : t !== "" && c(t, this.dom.container), e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(e = !0) {
    const { closeClass: t, openClass: n, transitionClass: i } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), i !== "" ? (c(i, this.dom.container), requestAnimationFrame(() => {
      n !== "" && g(n, this.dom.container), requestAnimationFrame(() => {
        t !== "" && c(t, this.dom.container), requestAnimationFrame(() => {
          g(i, this.dom.container);
        });
      });
    })) : (t !== "" && c(t, this.dom.container), n !== "" && g(n, this.dom.container)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class B extends K {
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
   * @param {?(string|string[])}       [options.transitionClass = transitioning]             - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}                  [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5Menubar|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                   [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                   [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {number}                   [options.enterDelay = -1]                             - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}                   [options.leaveDelay = -1]                             - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}                         [options.disableBootstrap = true]                     - A flag to disable bootstrap's dropdown behaviour by making their events target a pseudo element.
   * @param {boolean}                  [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = ".nav-item,li",
    menuLinkSelector: n = ".nav-link,.dropdown-item",
    submenuItemSelector: i = ".dropdown",
    submenuToggleSelector: o = ".dropdown-toggle",
    submenuSelector: h = ".dropdown-menu",
    controllerElement: a = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: p = "collapse",
    transitionClass: f = "transitioning",
    isTopLevel: _ = !0,
    parentMenu: M = null,
    hoverType: y = "off",
    hoverDelay: C = 250,
    enterDelay: E = -1,
    leaveDelay: w = -1,
    disableBootstrap: v = !0,
    initialize: T = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: o,
      submenuSelector: h,
      controllerElement: a,
      containerElement: m,
      openClass: d,
      closeClass: p,
      transitionClass: f,
      isTopLevel: _,
      parentMenu: M,
      hoverType: y,
      hoverDelay: C,
      enterDelay: E,
      leaveDelay: w,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5Menubar}
     *
     * @public
     */
    l(this, "_MenuType", B);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5MenubarItem}
     *
     * @public
     */
    l(this, "_MenuItemType", oe);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5MenubarToggle}
     *
     * @public
     */
    l(this, "_MenuToggleType", re);
    /**
     * A flag to disable bootstrap's dropdown behaviour.
     *
     * @type {boolean}
     *
     * @protected
     */
    l(this, "_disableBootstrap", !0);
    /**
     * The DOM element to use as a fake target for bootstrap's dropdown events.
     *
     * @type {HTMLElement}
     *
     * @protected
     */
    l(this, "_pseudoDropdownElement", document.createElement("div"));
    /**
     * Bootstrap events that need to be intercepted to disbaled dropdowns.
     *
     * @type {string[]}
     *
     * @protected
     */
    l(this, "_bootstrapEvents", [
      "show.bs.dropdown",
      "shown.bs.dropdown",
      "hide.bs.dropdown",
      "hidden.bs.dropdown"
    ]);
    this._disableBootstrap = v, T && this.initialize();
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link Menubar#initialize|Menubar's initialize method}
   * as well as the {@link Bootstrap5Menubar#_disableBootstrapDropdownBehaviour|disableBootstrapDropdown} event
   * for the menu.
   */
  initialize() {
    super.initialize(), this.bootstrapDisabled && this._disableBootstrapDropdownBehaviour();
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
    let e = super._validate();
    const t = b("boolean", {
      disableBootstrap: this._disableBootstrap
    });
    return t.status || (this._errors.push(t.error.message), e = !1), e;
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
    this.elements.submenuToggles.forEach((e) => {
      this.bootstrapEvents.forEach((t) => {
        e.dom.toggle.addEventListener(
          t,
          (n) => {
            u(n);
            const i = bootstrap.Dropdown.getInstance(
              n.target
            );
            i && i._menu !== this.bootstrapPseudoDropdownElement && (i._menu = this.bootstrapPseudoDropdownElement);
          },
          {
            once: !0
          }
        );
      });
    });
  }
}
class W extends x {
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
    childMenu: o = null,
    toggle: h = null,
    initialize: a = !0,
    submenuSibling: m = null
  }) {
    super({
      menuItemElement: e,
      menuLinkElement: t,
      parentMenu: n,
      isSubmenuItem: i,
      childMenu: o,
      toggle: h
    });
    /**
     * The declared accessible-menu elements within the menu item.
     *
     * @type {Object<TopLinkDisclosureMenu, TopLinkDisclosureMenuToggle>}
     *
     * @protected
     *
     * @property {TopLinkDisclosureMenu}                   parentMenu - The menu containing this menu item.
     * @property {?TopLinkDisclosureMenu}                  childMenu  - The menu contained within this menu item.
     * @property {?TopLinkDisclosureMenuToggle}            toggle     - The menu toggle within this menu item that controls the `childMenu`.
     * @property {?TopLinkDisclosureMenuItem} sibling    - The sibling menu item that is a submenu item.
     */
    l(this, "_elements", {
      parentMenu: null,
      childMenu: null,
      toggle: null,
      sibling: null
    });
    this._elements.parentMenu = n, this._elements.childMenu = o, this._elements.toggle = h, this._elements.sibling = m, a && this.initialize();
  }
}
class Z extends A {
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
class q extends S {
  /**
   * Constructs the menu.
   *
   * @param {object}                 options                                   - The options for generating the menu.
   * @param {HTMLElement}            options.menuElement                       - The menu element in the DOM.
   * @param {string}                 [options.menuItemSelector = li]           - The CSS selector string for menu items.
   * @param {string}                 [options.menuLinkSelector = a]            - The CSS selector string for menu links.
   * @param {string}                 [options.submenuItemSelector]             - The CSS selector string for menu items containing submenus.
   * @param {string}                 [options.submenuToggleSelector = button]  - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                 [options.submenuSelector = ul]            - The CSS selector string for submenus.
   * @param {string}                 [options.submenuSubtoggleSelector = a]    - The CSS selector string for submenu toggle buttons/links below the top level.
   * @param {?HTMLElement}           [options.controllerElement = null]        - The element controlling the menu in the DOM.
   * @param {?HTMLElement}           [options.containerElement = null]         - The element containing the menu in the DOM.
   * @param {?(string|string[])}     [options.openClass = show]                - The class to apply when a menu is "open".
   * @param {?(string|string[])}     [options.closeClass = hide]               - The class to apply when a menu is "closed".
   * @param {?(string|string[])}     [options.transitionClass = transitioning] - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}                [options.isTopLevel = true]               - A flag to mark the root menu.
   * @param {?TopLinkDisclosureMenu} [options.parentMenu = null]               - The parent menu to this menu.
   * @param {string}                 [options.hoverType = off]                 - The type of hoverability a menu has.
   * @param {number}                 [options.hoverDelay = 250]                - The delay for opening and closing menus if the menu is hoverable (in miliseconds).
   * @param {number}                 [options.enterDelay = -1]                 - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}                 [options.leaveDelay = -1]                 - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}                [options.optionalKeySupport = false]      - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                [options.initialize = true]               - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: n = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: o = "button",
    submenuSelector: h = "ul",
    submenuSubtoggleSelector: a = "a",
    controllerElement: m = null,
    containerElement: d = null,
    openClass: p = "show",
    closeClass: f = "hide",
    transitionClass: _ = "transitioning",
    isTopLevel: M = !0,
    parentMenu: y = null,
    hoverType: C = "off",
    hoverDelay: E = 250,
    enterDelay: w = -1,
    leaveDelay: v = -1,
    optionalKeySupport: T = !1,
    initialize: D = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuSelector: h,
      submenuToggleSelector: o,
      controllerElement: m,
      containerElement: d,
      openClass: p,
      closeClass: f,
      transitionClass: _,
      isTopLevel: M,
      parentMenu: y,
      hoverType: C,
      hoverDelay: E,
      enterDelay: w,
      leaveDelay: v
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof TopLinkDisclosureMenu}
     */
    l(this, "_MenuType", q);
    // eslint-disable-line no-use-before-define
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof TopLinkDisclosureMenuItem}
     */
    l(this, "_MenuItemType", W);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof TopLinkDisclosureMenuToggle}
     */
    l(this, "_MenuToggleType", Z);
    /**
     * The index of the currently selected {@link TopLinkDisclosureMenuItem|menu item} in the menu.
     *
     * @protected
     *
     * @type {number}
     */
    l(this, "_currentChild", -1);
    /**
     * The CSS selectors used by the menu to populate the {@link TopLinkDisclosureMenu#dom|dom}.
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
    l(this, "_selectors", {
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
    l(this, "_optionalSupport", !1);
    this._optionalSupport = T, this._selectors.menuItems = t, this._selectors.submenuItems = i, this._selectors.submenuToggles = o, this._selectors.submenus = h, this._selectors.submenuSubtoggles = a, this._selectors.menuLinks = [
      .../* @__PURE__ */ new Set([n, o])
    ].join(","), D && this.initialize();
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
    b("boolean", { optionalKeySupport: e }), this._optionalSupport = e;
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
        const o = e.querySelector(this.selectors.submenuToggles), h = e.querySelector(this.selectors.submenus), a = new this._MenuType({
          menuElement: h,
          menuItemSelector: this.selectors.menuItems,
          menuLinkSelector: this.selectors.menuLinks,
          submenuItemSelector: this.selectors.submenuItems,
          submenuToggleSelector: this.selectors.submenuSubtoggles,
          submenuSelector: this.selectors.submenus,
          submenuSubtoggleSelector: this.selectors.submenuSubtoggles,
          openClass: this.openClass,
          closeClass: this.closeClass,
          transitionClass: this.transitionClass,
          isTopLevel: !1,
          parentMenu: this,
          hoverType: this.hoverType,
          hoverDelay: this.hoverDelay,
          enterDelay: this.enterDelay,
          leaveDelay: this.leaveDelay
        }), m = new this._MenuToggleType({
          menuToggleElement: o,
          parentElement: e,
          controlledMenu: a,
          parentMenu: this
        });
        this._elements.submenuToggles.push(m), o !== i ? (n = new this._MenuItemType({
          menuItemElement: e,
          menuLinkElement: o,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: a,
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
          childMenu: a,
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
    const t = z({
      submenuSubtoggleSelector: this._selectors.submenuSubtoggles
    });
    t.status || (this._errors.push(t.error.message), e = !1);
    const n = b("boolean", {
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
   * the menu's {@link BaseMenu#_hoverType|hover type}.
   *
   * Before executing anything, the event is checked to make sure the event wasn't
   * triggered by a pen or touch.
   *
   * <strong>Hover Type "on"</strong>
   * - When a `pointerenter` event triggers on any menu item the menu's
   *   {@link TopLinkDisclosureMenu#currentChild| current child} value will change to that
   *   menu item.
   * - When a `pointerenter` event triggers on a submenu item the
   *   {@link TopLinkDisclosureMenuToggle#preview|preview method} for the submenu item's
   *   toggle will be called.
   * - When a `pointerleave` event triggers on an open submenu item the
   *   {@link TopLinkDisclosureMenuToggle#close|close method} for the submenu item's toggle
   *   will be called after a delay set by the menu's {@link TopLinkDisclosureMenu#_hoverDelay|hover delay}.
   *
   * <strong>Hover Type "dynamic"</strong>
   * - When a `pointerenter` event triggers on any menu item the menu's
   *   current child value will change to that menu item.
   * - When a `pointerenter` event triggers on any menu item, and the menu's
   *   {@link TopLinkDisclosureMenu#focusState|focus state} is not "none", the menu item
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
          if (this.hoverType === "on") {
            this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusChild(t);
            let i = e.isSubmenuItem ? e.elements.toggle : null;
            if (e.elements.sibling !== null && (i = e.elements.sibling.elements.toggle), i === null)
              return;
            this.enterDelay > 0 ? (clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
              i.preview();
            }, this.enterDelay)) : i.preview();
          } else if (this.hoverType === "dynamic") {
            const i = this.elements.submenuToggles.some(
              (o) => o.isOpen
            );
            if (this.currentChild = t, (!this.isTopLevel || this.focusState !== "none") && (this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusCurrentChild()), !this.isTopLevel || i) {
              this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusCurrentChild();
              let o = e.isSubmenuItem ? e.elements.toggle : null;
              if (e.elements.sibling !== null && (o = e.elements.sibling.elements.toggle), o === null)
                return;
              this.enterDelay > 0 ? (clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
                o.preview();
              }, this.enterDelay)) : o.preview();
            }
          }
        }
      }), e.isSubmenuItem && e.dom.item.addEventListener("pointerleave", (n) => {
        n.pointerType === "pen" || n.pointerType === "touch" || (this.hoverType === "on" ? this.leaveDelay > 0 ? (clearTimeout(this._hoverTimeout), setTimeout(() => {
          this.currentEvent = "mouse", e.elements.toggle.close();
        }, this.leaveDelay)) : (this.currentEvent = "mouse", e.elements.toggle.close()) : this.hoverType === "dynamic" && (this.isTopLevel || (this.leaveDelay > 0 ? (clearTimeout(this._hoverTimeout), setTimeout(() => {
          this.currentEvent = "mouse", e.elements.toggle.close(), this.focusCurrentChild();
        }, this.leaveDelay)) : (this.currentEvent = "mouse", e.elements.toggle.close(), this.focusCurrentChild()))));
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
      const t = I(e);
      if (this.focusState === "self") {
        const n = ["Space", "Enter"], i = ["Escape"], o = ["Escape"];
        this.optionalKeySupport ? [
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
          "ArrowLeft",
          "Home",
          "End"
        ].includes(t) && u(e) : (this.currentMenuItem.isSubmenuItem && n.includes(t) || this.elements.controller && i.includes(t) || this.elements.parentMenu && o.includes(t)) && u(e);
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
      const t = I(e);
      this.focusState === "self" && (t === "Space" || t === "Enter" ? this.currentMenuItem.isSubmenuItem ? (u(e), this.currentMenuItem.elements.toggle.isOpen ? this.currentMenuItem.elements.toggle.close() : this.currentMenuItem.elements.toggle.preview()) : this.currentMenuItem.dom.link.click() : t === "Escape" ? this.elements.submenuToggles.some(
        (i) => i.isOpen
      ) ? (u(e), this.closeChildren()) : this.elements.parentMenu ? (u(e), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.closeChildren(), this.elements.parentMenu.focusCurrentChild()) : this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (this.elements.controller.close(), this.focusController()) : this.optionalKeySupport && (t === "ArrowDown" || t === "ArrowRight" ? (u(e), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard", this.currentMenuItem.elements.childMenu.focusFirstChild()) : this.focusNextChild()) : t === "ArrowUp" || t === "ArrowLeft" ? (u(e), this.focusPreviousChild()) : t === "Home" ? (u(e), this.focusFirstChild()) : t === "End" && (u(e), this.focusLastChild())));
    });
  }
}
class le extends W {
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
    toggle: o = null,
    initialize: h = !0,
    submenuSibling: a = null
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: o,
      initialize: !1,
      submenuSibling: a
    }), h && this.initialize();
  }
}
class ue extends Z {
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
    initialize: o = !0
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
    l(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = e, this._dom.parent = t, this._dom.container = n.isTopLevel ? n.dom.container : n.dom.menu, o && this.initialize();
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(e = !0) {
    const { openClass: t, transitionClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), n !== "" ? (c(n, this.dom.container), requestAnimationFrame(() => {
      c(t, this.dom.container), requestAnimationFrame(() => {
        g(n, this.dom.container);
      });
    })) : t !== "" && c(t, this.dom.container), e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(e = !0) {
    const { closeClass: t, openClass: n, transitionClass: i } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), i !== "" ? (c(i, this.dom.container), requestAnimationFrame(() => {
      n !== "" && g(n, this.dom.container), requestAnimationFrame(() => {
        t !== "" && c(t, this.dom.container), requestAnimationFrame(() => {
          g(i, this.dom.container);
        });
      });
    })) : (t !== "" && c(t, this.dom.container), n !== "" && g(n, this.dom.container)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class $ extends q {
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
    menuElement: e,
    menuItemSelector: t = ".nav-item,li",
    menuLinkSelector: n = ".nav-link,.dropdown-item",
    submenuItemSelector: i = ".dropdown",
    submenuToggleSelector: o = ".dropdown-toggle",
    submenuSelector: h = ".dropdown-menu",
    submenuSubtoggleSelector: a = ".dropdown-toggle",
    controllerElement: m = null,
    containerElement: d = null,
    openClass: p = "show",
    closeClass: f = "collapse",
    transitionClass: _ = "transitioning",
    isTopLevel: M = !0,
    parentMenu: y = null,
    hoverType: C = "off",
    hoverDelay: E = 250,
    enterDelay: w = -1,
    leaveDelay: v = -1,
    optionalKeySupport: T = !1,
    disableBootstrap: D = !0,
    initialize: Q = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: o,
      submenuSelector: h,
      submenuSubtoggleSelector: a,
      controllerElement: m,
      containerElement: d,
      openClass: p,
      closeClass: f,
      transitionClass: _,
      isTopLevel: M,
      parentMenu: y,
      hoverType: C,
      hoverDelay: E,
      enterDelay: w,
      leaveDelay: v,
      optionalKeySupport: T,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5TopLinkDisclosureMenu}
     *
     * @protected
     */
    l(this, "_MenuType", $);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5TopLinkDisclosureMenuItem}
     *
     * @protected
     */
    l(this, "_MenuItemType", le);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5TopLinkDisclosureMenuToggle}
     *
     * @protected
     */
    l(this, "_MenuToggleType", ue);
    /**
     * A flag to disable bootstrap's dropdown behaviour.
     *
     * @type {boolean}
     *
     * @protected
     */
    l(this, "_disableBootstrap", !0);
    /**
     * The DOM element to use as a fake target for bootstrap's dropdown events.
     *
     * @type {HTMLElement}
     *
     * @protected
     */
    l(this, "_pseudoDropdownElement", document.createElement("div"));
    /**
     * Bootstrap events that need to be intercepted to disbaled dropdowns.
     *
     * @type {string[]}
     *
     * @protected
     */
    l(this, "_bootstrapEvents", [
      "show.bs.dropdown",
      "shown.bs.dropdown",
      "hide.bs.dropdown",
      "hidden.bs.dropdown"
    ]);
    this._disableBootstrap = D, Q && this.initialize();
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link TopLinkDisclosureMenu#initialize|TopLinkDisclosureMenu's initialize method}
   * as well as the {@link Bootstrap5TopLinkDisclosureMenu#_disableBootstrapDropdownBehaviour|disableBootstrapDropdown} event
   * for the menu.
   */
  initialize() {
    super.initialize(), this.bootstrapDisabled && this._disableBootstrapDropdownBehaviour();
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
    let e = super._validate();
    const t = b("boolean", {
      disableBootstrap: this._disableBootstrap
    });
    return t.status || (this._errors.push(t.error.message), e = !1), e;
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
    this.elements.submenuToggles.forEach((e) => {
      this.bootstrapEvents.forEach((t) => {
        e.dom.toggle.addEventListener(
          t,
          (n) => {
            u(n);
            const i = bootstrap.Dropdown.getInstance(
              n.target
            );
            i && i._menu !== this.bootstrapPseudoDropdownElement && (i._menu = this.bootstrapPseudoDropdownElement);
          },
          {
            once: !0
          }
        );
      });
    });
  }
}
class G extends x {
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
    toggle: o = null,
    initialize: h = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: o
    }), h && this.initialize();
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
   * {@link Treeview#shouldFocus|shouldFocus} value is `true`.
   *
   * This will call the {@link BaseMenuItem#focus|BaseMenuItem's focus method}
   * as well as set the menu link's `tabIndex` to 0.
   */
  focus() {
    super.focus(), this.dom.link.tabIndex = 0;
  }
  /**
   * Blurs the menu item's link if the parent menu's
   * {@link Treeview#shouldFocus|shouldFocus} value is `true`.
   *
   * This will call the {@link BaseMenuItem#blur|BaseMenuItem's blur method}
   * as well as set the menu link's `tabIndex` to -1.
   */
  blur() {
    super.blur(), this.dom.link.tabIndex = -1;
  }
}
class J extends A {
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
class P extends S {
  /**
   * Constructs the menu.
   *
   * @param {object}             options                                   - The options for generating the menu.
   * @param {HTMLElement}        options.menuElement                       - The menu element in the DOM.
   * @param {string}             [options.menuItemSelector = li]           - The CSS selector string for menu items.
   * @param {string}             [options.menuLinkSelector = a]            - The CSS selector string for menu links.
   * @param {string}             [options.submenuItemSelector]             - The CSS selector string for menu items containing submenus.
   * @param {string}             [options.submenuToggleSelector = a]       - The CSS selector string for submenu toggle buttons/links.
   * @param {string}             [options.submenuSelector = ul]            - The CSS selector string for submenus.
   * @param {?HTMLElement}       [options.controllerElement = null]        - The element controlling the menu in the DOM.
   * @param {?HTMLElement}       [options.containerElement = null]         - The element containing the menu in the DOM.
   * @param {?(string|string[])} [options.openClass = show]                - The class to apply when a menu is "open".
   * @param {?(string|string[])} [options.closeClass = hide]               - The class to apply when a menu is "closed".
   * @param {?(string|string[])} [options.transitionClass = transitioning] - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}            [options.isTopLevel = true]               - A flag to mark the root menu.
   * @param {?Treeview}          [options.parentMenu = null]               - The parent menu to this menu.
   * @param {string}             [options.hoverType = off]                 - The type of hoverability a menu has.
   * @param {number}             [options.hoverDelay = 250]                - The delay for opening and closing menus if the menu is hoverable (in miliseconds).
   * @param {number}             [options.enterDelay = -1]                 - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}             [options.leaveDelay = -1]                 - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}            [options.initialize = true]               - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: n = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: o = "a",
    submenuSelector: h = "ul",
    controllerElement: a = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: p = "hide",
    transitionClass: f = "transitioning",
    isTopLevel: _ = !0,
    parentMenu: M = null,
    hoverType: y = "off",
    hoverDelay: C = 250,
    enterDelay: E = -1,
    leaveDelay: w = -1,
    initialize: v = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: o,
      submenuSelector: h,
      controllerElement: a,
      containerElement: m,
      openClass: d,
      closeClass: p,
      transitionClass: f,
      isTopLevel: _,
      parentMenu: M,
      hoverType: y,
      hoverDelay: C,
      enterDelay: E,
      leaveDelay: w
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof Treeview}
     */
    l(this, "_MenuType", P);
    // eslint-disable-line no-use-before-define
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof TreeviewItem}
     */
    l(this, "_MenuItemType", G);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof TreeviewToggle}
     */
    l(this, "_MenuToggleType", J);
    v && this.initialize();
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
      const t = I(e);
      if (t === "Tab" && (this.elements.rootMenu.focusState !== "none" ? this.elements.rootMenu.blur() : this.elements.rootMenu.focus()), this.focusState === "self") {
        const n = [
          "Space",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "Asterisk",
          "Home",
          "End"
        ], i = ["Enter", "ArrowRight"], o = ["Escape"];
        (n.includes(t) || this.currentMenuItem.isSubmenuItem && i.includes(t) || this.elements.controller && o.includes(t)) && u(e);
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
      const t = I(e), { altKey: n, crtlKey: i, metaKey: o } = e;
      if (t === "Character" && !(n || i || o))
        u(e), this.elements.rootMenu.currentEvent = "character", this.focusNextNodeWithCharacter(e.key);
      else if (this.focusState === "self")
        if (t === "Enter" || t === "Space")
          u(e), this.currentMenuItem.isSubmenuItem ? this.currentMenuItem.elements.toggle.isOpen ? this.currentMenuItem.elements.toggle.close() : this.currentMenuItem.elements.toggle.preview() : this.currentMenuItem.dom.link.click();
        else if (t === "Escape")
          this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (this.elements.controller.close(), this.focusController());
        else if (t === "ArrowDown")
          u(e), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.currentMenuItem.elements.childMenu.focusFirstChild()) : !this.isTopLevel && this.currentChild === this.elements.menuItems.length - 1 ? this.focusParentsNextChild() : this.focusNextChild();
        else if (t === "ArrowUp") {
          u(e);
          const a = this.elements.menuItems[this.currentChild - 1];
          a && a.isSubmenuItem && a.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentChild = this.currentChild - 1, this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.focusChildsLastNode()) : !this.isTopLevel && this.currentChild === 0 ? (this.blurCurrentChild(), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.focusCurrentChild()) : this.focusPreviousChild();
        } else
          t === "ArrowRight" ? this.currentMenuItem.isSubmenuItem && (u(e), this.currentMenuItem.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.currentMenuItem.elements.childMenu.focusFirstChild()) : this.currentMenuItem.elements.toggle.preview()) : t === "ArrowLeft" ? (u(e), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.currentMenuItem.elements.childMenu.blurCurrentChild(), this.currentMenuItem.elements.toggle.close()) : this.isTopLevel || (this.blurCurrentChild(), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.focusCurrentChild())) : t === "Home" ? (u(e), this.blurCurrentChild(), this.elements.rootMenu.focusFirstChild()) : t === "End" ? (u(e), this.blurCurrentChild(), this.elements.rootMenu.focusLastNode()) : t === "Asterisk" && (u(e), this.openChildren());
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
      let p = [];
      return d.elements.menuItems.forEach((f) => {
        p.push(f), f.isSubmenuItem && f.elements.toggle.isOpen && (p = [
          ...p,
          ...t(
            f.elements.toggle.elements.controlledMenu
          )
        ]);
      }), p;
    }
    const n = e.toLowerCase(), i = t(this.elements.rootMenu), o = i.indexOf(this.currentMenuItem) + 1, h = [
      ...i.slice(o),
      ...i.slice(0, o)
    ];
    let a = 0, m = !1;
    for (; !m && a < h.length; ) {
      let d = "";
      if (h[a].dom.item.innerText ? d = h[a].dom.item.innerText : d = h[a].dom.item.textContent, d = d.replace(/[\s]/g, "").toLowerCase().charAt(0), d === n) {
        m = !0;
        const p = h[a].elements.parentMenu, f = p.elements.menuItems.indexOf(h[a]);
        this.elements.rootMenu.blurChildren(), p.focusChild(f);
      }
      a++;
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
class he extends G {
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
    toggle: o = null,
    initialize: h = !0
  }) {
    super({
      menuItemElement: s,
      menuLinkElement: e,
      parentMenu: t,
      isSubmenuItem: n,
      childMenu: i,
      toggle: o,
      initialize: !1
    }), h && this.initialize();
  }
}
class ae extends J {
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
    initialize: o = !0
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
    l(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = e, this._dom.parent = t, this._dom.container = n.isTopLevel ? n.dom.container : n.dom.menu, o && this.initialize();
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(e = !0) {
    const { openClass: t, transitionClass: n } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), n !== "" ? (c(n, this.dom.container), requestAnimationFrame(() => {
      c(t, this.dom.container), requestAnimationFrame(() => {
        g(n, this.dom.container);
      });
    })) : t !== "" && c(t, this.dom.container), e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(e = !0) {
    const { closeClass: t, openClass: n, transitionClass: i } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), i !== "" ? (c(i, this.dom.container), requestAnimationFrame(() => {
      n !== "" && g(n, this.dom.container), requestAnimationFrame(() => {
        t !== "" && c(t, this.dom.container), requestAnimationFrame(() => {
          g(i, this.dom.container);
        });
      });
    })) : (t !== "" && c(t, this.dom.container), n !== "" && g(n, this.dom.container)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class H extends P {
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
   * @param {?(string|string[])}        [options.transitionClass = transitioning]             - The class to apply when a menu is transitioning between "open" and "closed" states.
   * @param {boolean}                   [options.isTopLevel = false]                          - A flag to mark the root menu.
   * @param {(Bootstrap5Treeview|null)} [options.parentMenu = null]                           - The parent menu to this menu.
   * @param {string}                    [options.hoverType = off]                             - The type of hoverability a menu has.
   * @param {number}                    [options.hoverDelay = 250]                            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {number}                    [options.enterDelay = -1]                             - The delay for opening a menu if the menu is focusable (in miliseconds).
   * @param {number}                    [options.leaveDelay = -1]                             - The delay for closing a menu if the menu is focusable (in miliseconds).
   * @param {boolean}                         [options.disableBootstrap = true]                     - A flag to disable bootstrap's dropdown behaviour by making their events target a pseudo element.
   * @param {boolean}                   [options.initialize = true]                           - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement: e,
    menuItemSelector: t = ".nav-item,li",
    menuLinkSelector: n = ".nav-link,.dropdown-item",
    submenuItemSelector: i = ".dropdown",
    submenuToggleSelector: o = ".dropdown-toggle",
    submenuSelector: h = ".dropdown-menu",
    controllerElement: a = null,
    containerElement: m = null,
    openClass: d = "show",
    closeClass: p = "collapse",
    transitionClass: f = "transitioning",
    isTopLevel: _ = !0,
    parentMenu: M = null,
    hoverType: y = "off",
    hoverDelay: C = 250,
    enterDelay: E = -1,
    leaveDelay: w = -1,
    disableBootstrap: v = !0,
    initialize: T = !0
  }) {
    super({
      menuElement: e,
      menuItemSelector: t,
      menuLinkSelector: n,
      submenuItemSelector: i,
      submenuToggleSelector: o,
      submenuSelector: h,
      controllerElement: a,
      containerElement: m,
      openClass: d,
      closeClass: p,
      transitionClass: f,
      isTopLevel: _,
      parentMenu: M,
      hoverType: y,
      hoverDelay: C,
      enterDelay: E,
      leaveDelay: w,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5Treeview}
     *
     * @public
     */
    l(this, "_MenuType", H);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5TreeviewItem}
     *
     * @public
     */
    l(this, "_MenuItemType", he);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5TreeviewToggle}
     *
     * @public
     */
    l(this, "_MenuToggleType", ae);
    /**
     * A flag to disable bootstrap's dropdown behaviour.
     *
     * @type {boolean}
     *
     * @protected
     */
    l(this, "_disableBootstrap", !0);
    /**
     * The DOM element to use as a fake target for bootstrap's dropdown events.
     *
     * @type {HTMLElement}
     *
     * @protected
     */
    l(this, "_pseudoDropdownElement", document.createElement("div"));
    /**
     * Bootstrap events that need to be intercepted to disbaled dropdowns.
     *
     * @type {string[]}
     *
     * @protected
     */
    l(this, "_bootstrapEvents", [
      "show.bs.dropdown",
      "shown.bs.dropdown",
      "hide.bs.dropdown",
      "hidden.bs.dropdown"
    ]);
    this._disableBootstrap = v, T && this.initialize();
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link Treeview#initialize|Treeview's initialize method}
   * as well as the {@link Bootstrap5Treeview#_disableBootstrapDropdownBehaviour|disableBootstrapDropdown} event
   * for the menu.
   */
  initialize() {
    super.initialize(), this.bootstrapDisabled && this._disableBootstrapDropdownBehaviour();
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
    let e = super._validate();
    const t = b("boolean", {
      disableBootstrap: this._disableBootstrap
    });
    return t.status || (this._errors.push(t.error.message), e = !1), e;
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
    this.elements.submenuToggles.forEach((e) => {
      this.bootstrapEvents.forEach((t) => {
        e.dom.toggle.addEventListener(
          t,
          (n) => {
            u(n);
            const i = bootstrap.Dropdown.getInstance(
              n.target
            );
            i && i._menu !== this.bootstrapPseudoDropdownElement && (i._menu = this.bootstrapPseudoDropdownElement);
          },
          {
            once: !0
          }
        );
      });
    });
  }
}
const ce = {
  Bootstrap5DisclosureMenu: F,
  Bootstrap5Menubar: B,
  Bootstrap5TopLinkDisclosureMenu: $,
  Bootstrap5Treeview: H
};
export {
  ce as default
};
