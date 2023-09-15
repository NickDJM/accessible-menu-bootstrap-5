var V = Object.defineProperty;
var q = (n, e, t) => e in n ? V(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var o = (n, e, t) => (q(n, typeof e != "symbol" ? e + "" : e, t), t);
function p(n, e) {
  typeof n == "string" ? e.classList.add(n) : e.classList.add(...n);
}
function _(n, e) {
  typeof n == "string" ? e.classList.remove(n) : e.classList.remove(...n);
}
function T(n, e) {
  try {
    if (typeof e != "object") {
      const t = typeof e;
      throw new TypeError(
        `Elements given to isValidInstance() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in e)
      if (!(e[t] instanceof n)) {
        const s = typeof e[t];
        throw new TypeError(
          `${t} must be an instance of ${n.name}. "${s}" given.`
        );
      }
    return {
      status: !0,
      error: null
    };
  } catch (t) {
    return {
      status: !1,
      error: t
    };
  }
}
function g(n, e) {
  try {
    if (typeof e != "object") {
      const t = typeof e;
      throw new TypeError(
        `Values given to isValidType() must be inside of an object. "${t}" given.`
      );
    }
    for (const t in e) {
      const s = typeof e[t];
      if (s !== n)
        throw new TypeError(`${t} must be a ${n}. "${s}" given.`);
    }
    return {
      status: !0,
      error: null
    };
  } catch (t) {
    return {
      status: !1,
      error: t
    };
  }
}
function k(n) {
  try {
    if (typeof n != "object") {
      const e = typeof n;
      throw new TypeError(
        `Values given to isCSSSelector() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in n)
      try {
        if (n[e] === null)
          throw new Error();
        document.querySelector(n[e]);
      } catch {
        throw new TypeError(
          `${e} must be a valid CSS selector. "${n[e]}" given.`
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
function b(n) {
  try {
    if (typeof n != "object" || Array.isArray(n)) {
      const e = typeof n;
      throw new TypeError(
        `Values given to isValidClassList() must be inside of an object. "${e}" given.`
      );
    }
    for (const e in n) {
      const t = typeof n[e];
      if (t !== "string")
        if (Array.isArray(n[e]))
          n[e].forEach((s) => {
            if (typeof s != "string")
              throw new TypeError(
                `${e} must be a string or an array of strings. An array containing non-strings given.`
              );
          });
        else
          throw new TypeError(
            `${e} must be a string or an array of strings. "${t}" given.`
          );
      else {
        const s = {};
        s[e] = n[e], k(s);
      }
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
function N(n) {
  try {
    if (typeof n != "object") {
      const t = typeof n;
      throw new TypeError(
        `Values given to isValidState() must be inside of an object. "${t}" given.`
      );
    }
    const e = ["none", "self", "child"];
    for (const t in n)
      if (!e.includes(n[t]))
        throw new TypeError(
          `${t} must be one of the following values: ${e.join(
            ", "
          )}. "${n[t]}" given.`
        );
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
function K(n) {
  try {
    if (typeof n != "object") {
      const t = typeof n;
      throw new TypeError(
        `Values given to isValidEvent() must be inside of an object. "${t}" given.`
      );
    }
    const e = ["none", "mouse", "keyboard", "character"];
    for (const t in n)
      if (!e.includes(n[t]))
        throw new TypeError(
          `${t} must be one of the following values: ${e.join(
            ", "
          )}. "${n[t]}" given.`
        );
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
function A(n) {
  try {
    if (typeof n != "object") {
      const t = typeof n;
      throw new TypeError(
        `Values given to isValidHoverType() must be inside of an object. "${t}" given.`
      );
    }
    const e = ["off", "on", "dynamic"];
    for (const t in n)
      if (!e.includes(n[t]))
        throw new TypeError(
          `${t} must be one of the following values: ${e.join(
            ", "
          )}. "${n[t]}" given.`
        );
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
function B(n, e) {
  if (g("string", { tagName: n }).status && T(HTMLElement, e).status) {
    const t = n.toLowerCase();
    let s = !0;
    for (const i in e)
      e[i].tagName.toLowerCase() !== t && (s = !1);
    return s;
  } else
    return !1;
}
class x {
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
    menuToggleElement: e,
    parentElement: t,
    controlledMenu: s,
    parentMenu: i = null
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
    o(this, "_dom", {
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
    o(this, "_elements", {
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
    o(this, "_open", !1);
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
    o(this, "_expandEvent", new CustomEvent("accessibleMenuExpand", {
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
    o(this, "_collapseEvent", new CustomEvent("accessibleMenuCollapse", {
      bubbles: !0,
      detail: { toggle: this }
    }));
    this._dom.toggle = e, this._dom.parent = t, this._elements.controlledMenu = s, this._elements.parentMenu = i;
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
    var e;
    if (this.dom.toggle.setAttribute("aria-haspopup", "true"), this.dom.toggle.setAttribute("aria-expanded", "false"), B("button", { toggle: this.dom.toggle }) || this.dom.toggle.setAttribute("role", "button"), this.dom.toggle.id === "" || this.elements.controlledMenu.dom.menu.id === "") {
      const t = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
      let s = ((e = this.dom.toggle.innerText) == null ? void 0 : e.replace(/[^a-zA-Z0-9\s]/g, "")) || "", i = t;
      !s.replace(/\s/g, "").length && this.dom.toggle.getAttribute("aria-label") && (s = this.dom.toggle.getAttribute("aria-label").replace(/[^a-zA-Z0-9\s]/g, "")), s.replace(/\s/g, "").length > 0 && (s = s.toLowerCase().replace(/\s+/g, "-"), s.startsWith("-") && (s = s.substring(1)), s.endsWith("-") && (s = s.slice(0, -1)), i = `${s}-${i}`), this.dom.toggle.id = this.dom.toggle.id || `${i}-menu-button`, this.elements.controlledMenu.dom.menu.id = this.elements.controlledMenu.dom.menu.id || `${i}-menu`;
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
  set isOpen(e) {
    g("boolean", { value: e }), this._open = e;
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
  _expand(e = !0) {
    const { closeClass: t, openClass: s, transitionClass: i } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), i !== "" ? (p(i, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
      t !== "" && _(t, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
        s !== "" && p(s, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
          _(i, this.elements.controlledMenu.dom.menu);
        });
      });
    })) : (s !== "" && p(s, this.elements.controlledMenu.dom.menu), t !== "" && _(t, this.elements.controlledMenu.dom.menu)), e && this.dom.toggle.dispatchEvent(this._expandEvent);
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
  _collapse(e = !0) {
    const { closeClass: t, openClass: s, transitionClass: i } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), i !== "" ? (p(i, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
      s !== "" && _(s, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
        t !== "" && p(t, this.elements.controlledMenu.dom.menu), requestAnimationFrame(() => {
          _(i, this.elements.controlledMenu.dom.menu);
        });
      });
    })) : (t !== "" && p(t, this.elements.controlledMenu.dom.menu), s !== "" && _(s, this.elements.controlledMenu.dom.menu)), e && this.dom.toggle.dispatchEvent(this._collapseEvent);
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
    this.elements.parentMenu && this.elements.parentMenu.elements.submenuToggles.forEach((e) => {
      e !== this && e.close();
    });
  }
  /**
   * Closes all child menus.
   */
  closeChildren() {
    this.elements.controlledMenu.elements.submenuToggles.forEach(
      (e) => e.close()
    );
  }
}
class O {
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
    menuItemElement: e,
    menuLinkElement: t,
    parentMenu: s,
    isSubmenuItem: i = !1,
    childMenu: r = null,
    toggle: l = null
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
    o(this, "_dom", {
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
    o(this, "_elements", {
      parentMenu: null,
      childMenu: null,
      toggle: null
    });
    /**
     * A flag marking a submenu item.
     *
     * @type {boolean}
     */
    o(this, "_submenu", !1);
    this._dom.item = e, this._dom.link = t, this._elements.parentMenu = s, this._elements.childMenu = r, this._elements.toggle = l, this._submenu = i;
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
function w(n) {
  try {
    const e = n.key || n.keyCode, t = {
      Enter: e === "Enter" || e === 13,
      Space: e === " " || e === "Spacebar" || e === 32,
      Escape: e === "Escape" || e === "Esc" || e === 27,
      ArrowUp: e === "ArrowUp" || e === "Up" || e === 38,
      ArrowRight: e === "ArrowRight" || e === "Right" || e === 39,
      ArrowDown: e === "ArrowDown" || e === "Down" || e === 40,
      ArrowLeft: e === "ArrowLeft" || e === "Left" || e === 37,
      Home: e === "Home" || e === 36,
      End: e === "End" || e === 35,
      Character: isNaN(e) && !!e.match(/^[a-zA-Z]{1}$/),
      Tab: e === "Tab" || e === 9,
      Asterisk: e === "*" || e === 56
    };
    return Object.keys(t).find((s) => t[s] === !0) || "";
  } catch {
    return "";
  }
}
function c(n) {
  n.preventDefault(), n.stopPropagation();
}
class I {
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
    menuElement: e,
    menuItemSelector: t = "li",
    menuLinkSelector: s = "a",
    submenuItemSelector: i = "",
    submenuToggleSelector: r = "a",
    submenuSelector: l = "ul",
    controllerElement: u = null,
    containerElement: h = null,
    openClass: m = "show",
    closeClass: a = "hide",
    transitionClass: d = "transitioning",
    isTopLevel: f = !0,
    parentMenu: y = null,
    hoverType: C = "off",
    hoverDelay: M = 250,
    enterDelay: E = -1,
    leaveDelay: v = -1
  }) {
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof BaseMenu}
     */
    o(this, "_MenuType", I);
    // eslint-disable-line no-use-before-define
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof BaseMenuItem}
     */
    o(this, "_MenuItemType", O);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof BaseMenuToggle}
     */
    o(this, "_MenuToggleType", x);
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
    o(this, "_dom", {
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
    o(this, "_selectors", {
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
    o(this, "_elements", {
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
    o(this, "_openClass", "show");
    /**
     * The class(es) to apply when the menu is closed.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_closeClass", "hide");
    /**
     * The class(es) to apply when the menu is transitioning between states.
     *
     * @protected
     *
     * @type {string|string[]}
     */
    o(this, "_transitionClass", "transitioning");
    /**
     * A flag marking the root menu.
     *
     * @protected
     *
     * @type {boolean}
     */
    o(this, "_root", !0);
    /**
     * The index of the currently selected {@link BaseMenuItem|menu item} in the menu.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_currentChild", 0);
    /**
     * The current state of the menu's focus.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_focusState", "none");
    /**
     * This last event triggered on the menu.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_currentEvent", "none");
    /**
     * The type of hoverability for the menu.
     *
     * @protected
     *
     * @type {string}
     */
    o(this, "_hoverType", "off");
    /**
     * The delay time (in miliseconds) used for pointerenter/pointerleave events to take place.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_hoverDelay", 250);
    /**
     * The delay time (in miliseconds) used for pointerenter events to take place.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_enterDelay", -1);
    /**
     * The delay time (in miliseconds) used for pointerleave events to take place.
     *
     * @protected
     *
     * @type {number}
     */
    o(this, "_leaveDelay", -1);
    /**
     * An variable to hold the hover timeout function.
     *
     * @protected
     *
     * @type {?Function}
     */
    o(this, "_hoverTimeout", null);
    /**
     * An array of error messages generated by the menu.
     *
     * @protected
     *
     * @type {string[]}
     */
    o(this, "_errors", []);
    this._dom.menu = e, this._dom.controller = u, this._dom.container = h, this._selectors.menuItems = t, this._selectors.menuLinks = s, this._selectors.submenuItems = i, this._selectors.submenuToggles = r, this._selectors.submenus = l, this._elements.menuItems = [], this._elements.submenuToggles = [], this._elements.controller = null, this._elements.parentMenu = y, this._elements.rootMenu = f ? this : null, this._openClass = m || "", this._closeClass = a || "", this._transitionClass = d || "", this._root = f, this._hoverType = C, this._hoverDelay = M, this._enterDelay = E, this._leaveDelay = v;
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
      const e = new this._MenuToggleType({
        menuToggleElement: this.dom.controller,
        parentElement: this.dom.container,
        controlledMenu: this
      });
      this._elements.controller = e;
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
    let e = !1;
    return (this.currentEvent === "keyboard" || this.currentEvent === "character") && (e = !0), this.currentEvent === "mouse" && this.hoverType === "dynamic" && (e = !0), e;
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
  set openClass(e) {
    b({ openClass: e }), this._openClass !== e && (this._openClass = e);
  }
  set closeClass(e) {
    b({ closeClass: e }), this._closeClass !== e && (this._closeClass = e);
  }
  set transitionClass(e) {
    b({ transitionClass: e }), this._transitionClass !== e && (this._transitionClass = e);
  }
  set currentChild(e) {
    g("number", { value: e });
    function t(s) {
      if (["mouse", "character"].includes(s.currentEvent) && s.elements.parentMenu) {
        let r = 0, l = !1;
        for (; !l && r < s.elements.parentMenu.elements.menuItems.length; ) {
          const u = s.elements.parentMenu.elements.menuItems[r];
          u.isSubmenuItem && u.elements.toggle.elements.controlledMenu === s && (l = !0, s.elements.parentMenu.currentEvent = s.currentEvent, s.elements.parentMenu.currentChild = r), r++;
        }
      }
    }
    e < -1 ? (this._currentChild = -1, t(this)) : e >= this.elements.menuItems.length ? (this._currentChild = this.elements.menuItems.length - 1, t(this)) : this.focusChild !== e && (this._currentChild = e, t(this));
  }
  set focusState(e) {
    N({ value: e }), this._focusState !== e && (this._focusState = e), this.elements.submenuToggles.length > 0 && (e === "self" || e === "none") && this.elements.submenuToggles.forEach((t) => {
      t.elements.controlledMenu.focusState = "none";
    }), this.elements.parentMenu && (e === "self" || e === "child") && (this.elements.parentMenu.focusState = "child");
  }
  set currentEvent(e) {
    K({ value: e }), this._currentEvent !== e && (this._currentEvent = e, this.elements.submenuToggles.length > 0 && this.elements.submenuToggles.forEach((t) => {
      t.elements.controlledMenu.currentEvent = e;
    }));
  }
  set hoverType(e) {
    A({ value: e }), this._hoverType !== e && (this._hoverType = e);
  }
  set hoverDelay(e) {
    g("number", { value: e }), this._hoverDelay !== e && (this._hoverDelay = e);
  }
  set enterDelay(e) {
    g("number", { value: e }), this._enterDelay !== e && (this._enterDelay = e);
  }
  set leaveDelay(e) {
    g("number", { value: e }), this._leaveDelay !== e && (this._leaveDelay = e);
  }
  /**
   * Validates all aspects of the menu to ensure proper functionality.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let e = !0, t;
    this._dom.container !== null || this._dom.controller !== null ? t = T(HTMLElement, {
      menuElement: this._dom.menu,
      controllerElement: this._dom.controller,
      containerElement: this._dom.container
    }) : t = T(HTMLElement, {
      menuElement: this._dom.menu
    }), t.status || (this._errors.push(t.error.message), e = !1);
    let s;
    if (this._selectors.submenuItems !== "" ? s = k({
      menuItemSelector: this._selectors.menuItems,
      menuLinkSelector: this._selectors.menuLinks,
      submenuItemSelector: this._selectors.submenuItems,
      submenuToggleSelector: this._selectors.submenuToggles,
      submenuSelector: this._selectors.submenus
    }) : s = k({
      menuItemSelector: this._selectors.menuItems,
      menuLinkSelector: this._selectors.menuLinks
    }), s.status || (this._errors.push(s.error.message), e = !1), this._openClass !== "") {
      const m = b({ openClass: this._openClass });
      m.status || (this._errors.push(m.error.message), e = !1);
    }
    if (this._closeClass !== "") {
      const m = b({
        closeClass: this._closeClass
      });
      m.status || (this._errors.push(m.error.message), e = !1);
    }
    if (this._transitionClass !== "") {
      const m = b({
        transitionClass: this._transitionClass
      });
      m.status || (this._errors.push(m.error.message), e = !1);
    }
    const i = g("boolean", { isTopLevel: this._root });
    if (i.status || (this._errors.push(i.error.message), e = !1), this._elements.parentMenu !== null) {
      const m = T(I, {
        parentMenu: this._elements.parentMenu
      });
      m.status || (this._errors.push(m.error.message), e = !1);
    }
    const r = A({ hoverType: this._hoverType });
    r.status || (this._errors.push(r.error.message), e = !1);
    const l = g("number", {
      hoverDelay: this._hoverDelay
    });
    l.status || (this._errors.push(l.error.message), e = !1);
    const u = g("number", {
      enterDelay: this._enterDelay
    });
    u.status || (this._errors.push(u.error.message), e = !1);
    const h = g("number", {
      leaveDelay: this._leaveDelay
    });
    return h.status || (this._errors.push(h.error.message), e = !1), e;
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
  _setDOMElementType(e, t = this.dom.menu, s = !0) {
    if (typeof this.selectors[e] == "string") {
      if (!Array.isArray(this.dom[e]))
        throw new Error(
          `AccessibleMenu: The "${e}" element cannot be set through _setDOMElementType.`
        );
      t !== this.dom.menu && T(HTMLElement, { base: t });
      const r = Array.from(
        t.querySelectorAll(this.selectors[e])
      ).filter(
        (l) => l.parentElement === t
      );
      s ? this._dom[e] = r : this._dom[e] = [
        ...this._dom[e],
        ...r
      ];
    } else
      throw new Error(
        `AccessibleMenu: "${e}" is not a valid element type within the menu.`
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
  _resetDOMElementType(e) {
    if (typeof this.dom[e] < "u") {
      if (!Array.isArray(this.dom[e]))
        throw new Error(
          `AccessibleMenu: The "${e}" element cannot be reset through _resetDOMElementType.`
        );
      this._dom[e] = [];
    } else
      throw new Error(
        `AccessibleMenu: "${e}" is not a valid element type within the menu.`
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
    this._setDOMElementType("menuItems"), this.selectors.submenuItems !== "" && (this._setDOMElementType("submenuItems"), this._resetDOMElementType("submenuToggles"), this._resetDOMElementType("submenus"), this.dom.submenuItems.forEach((e) => {
      this._setDOMElementType("submenuToggles", e, !1), this._setDOMElementType("submenus", e, !1);
    }));
  }
  /**
   * Finds the root menu element.
   *
   * @protected
   *
   * @param {BaseMenu} menu - The menu to check.
   */
  _findRootMenu(e) {
    if (e.isTopLevel)
      this._elements.rootMenu = e;
    else if (e.elements.parentMenu !== null)
      this._findRootMenu(e.elements.parentMenu);
    else
      throw new Error("Cannot find root menu.");
  }
  /**
   * Creates and initializes all menu items and submenus.
   *
   * @protected
   */
  _createChildElements() {
    this.dom.menuItems.forEach((e) => {
      let t;
      if (this.dom.submenuItems.includes(e)) {
        const s = e.querySelector(this.selectors.submenuToggles), i = e.querySelector(this.selectors.submenus), r = new this._MenuType({
          menuElement: i,
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
        }), l = new this._MenuToggleType({
          menuToggleElement: s,
          parentElement: e,
          controlledMenu: r,
          parentMenu: this
        });
        this._elements.submenuToggles.push(l), t = new this._MenuItemType({
          menuItemElement: e,
          menuLinkElement: s,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: r,
          toggle: l
        });
      } else {
        const s = e.querySelector(this.selectors.menuLinks);
        t = new this._MenuItemType({
          menuItemElement: e,
          menuLinkElement: s,
          parentMenu: this
        });
      }
      this._elements.menuItems.push(t);
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
    this.elements.menuItems.forEach((e, t) => {
      e.dom.link.addEventListener("focus", () => {
        this.focusState = "self", this.currentChild = t;
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
    function e(t, s, i) {
      c(i), s.toggle(), s.isOpen && (t.focusState = "self", s.elements.controlledMenu.focusState = "none");
    }
    this.elements.menuItems.forEach((t, s) => {
      t.dom.link.addEventListener(
        "pointerdown",
        () => {
          this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusChild(s);
        },
        { passive: !0 }
      ), t.isSubmenuItem && t.elements.toggle.dom.toggle.addEventListener(
        "pointerup",
        (i) => {
          this.currentEvent = "mouse", e(this, t.elements.toggle, i);
        }
      );
    }), this.isTopLevel && this.elements.controller && this.elements.controller.dom.toggle.addEventListener(
      "pointerup",
      (t) => {
        this.currentEvent = "mouse", e(this, this.elements.controller, t);
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
    this.elements.menuItems.forEach((e, t) => {
      e.dom.link.addEventListener("pointerenter", (s) => {
        if (!(s.pointerType === "pen" || s.pointerType === "touch")) {
          if (this.hoverType === "on")
            this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusChild(t), e.isSubmenuItem && (this.enterDelay > 0 ? this._hoverTimeout = setTimeout(() => {
              e.elements.toggle.preview();
            }, this.enterDelay) : e.elements.toggle.preview());
          else if (this.hoverType === "dynamic") {
            const i = this.elements.submenuToggles.some(
              (r) => r.isOpen
            );
            this.currentChild = t, (!this.isTopLevel || this.focusState !== "none") && (this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusCurrentChild()), e.isSubmenuItem && (!this.isTopLevel || i) && (this.currentEvent = "mouse", this.elements.rootMenu.blurChildren(), this.focusCurrentChild(), this.enterDelay > 0 ? this._hoverTimeout = setTimeout(() => {
              e.elements.toggle.preview();
            }, this.enterDelay) : e.elements.toggle.preview());
          }
        }
      }), e.isSubmenuItem && e.dom.item.addEventListener("pointerleave", (s) => {
        s.pointerType === "pen" || s.pointerType === "touch" || (this.hoverType === "on" ? this.leaveDelay > 0 ? (clearTimeout(this._hoverTimeout), setTimeout(() => {
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
      (e) => {
        this.currentEvent = "keyboard";
        const t = w(e);
        (t === "Space" || t === "Enter") && c(e);
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
    this.isTopLevel && this.elements.controller && this.elements.controller.dom.toggle.addEventListener("keyup", (e) => {
      this.currentEvent = "keyboard";
      const t = w(e);
      (t === "Space" || t === "Enter") && (c(e), this.elements.controller.toggle(), this.elements.controller.isOpen && this.focusFirstChild());
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
  focusChild(e) {
    this.blurCurrentChild(), this.currentChild = e, this.focusCurrentChild();
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
    this.elements.submenuToggles.forEach((e) => e.close());
  }
  /**
   * Blurs all children and submenu's children.
   */
  blurChildren() {
    this.elements.menuItems.forEach((e) => {
      e.blur(), e.isSubmenuItem && e.elements.childMenu.blurChildren();
    });
  }
}
class $ extends O {
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
    menuItemElement: e,
    menuLinkElement: t,
    parentMenu: s,
    isSubmenuItem: i = !1,
    childMenu: r = null,
    toggle: l = null,
    initialize: u = !0
  }) {
    super({
      menuItemElement: e,
      menuLinkElement: t,
      parentMenu: s,
      isSubmenuItem: i,
      childMenu: r,
      toggle: l
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
class F extends x {
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
    menuToggleElement: e,
    parentElement: t,
    controlledMenu: s,
    parentMenu: i = null,
    initialize: r = !0
  }) {
    super({
      menuToggleElement: e,
      parentElement: t,
      controlledMenu: s,
      parentMenu: i
    }), r && this.initialize();
  }
}
class L extends I {
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
    menuElement: t,
    menuItemSelector: s = "li",
    menuLinkSelector: i = "a",
    submenuItemSelector: r = "",
    submenuToggleSelector: l = "a",
    submenuSelector: u = "ul",
    controllerElement: h = null,
    containerElement: m = null,
    openClass: a = "show",
    closeClass: d = "hide",
    transitionClass: f = "transitioning",
    isTopLevel: y = !0,
    parentMenu: C = null,
    hoverType: M = "off",
    hoverDelay: E = 250,
    enterDelay: v = -1,
    leaveDelay: D = -1,
    initialize: S = !0
  }) {
    super({
      menuElement: t,
      menuItemSelector: s,
      menuLinkSelector: i,
      submenuItemSelector: r,
      submenuToggleSelector: l,
      submenuSelector: u,
      controllerElement: h,
      containerElement: m,
      openClass: a,
      closeClass: d,
      transitionClass: f,
      isTopLevel: y,
      parentMenu: C,
      hoverType: M,
      hoverDelay: E,
      enterDelay: v,
      leaveDelay: D
    });
    /**
     * The class to use when generating submenus.
     *
     * @protected
     *
     * @type {typeof Treeview}
     */
    o(this, "_MenuType", L);
    // eslint-disable-line no-use-before-define
    /**
     * The class to use when generating menu items.
     *
     * @protected
     *
     * @type {typeof TreeviewItem}
     */
    o(this, "_MenuItemType", $);
    /**
     * The class to use when generating submenu toggles.
     *
     * @protected
     *
     * @type {typeof TreeviewToggle}
     */
    o(this, "_MenuToggleType", F);
    S && this.initialize();
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
    } catch (t) {
      console.error(t);
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
    super._handleKeydown(), this.dom.menu.addEventListener("keydown", (t) => {
      this.currentEvent = "keyboard";
      const s = w(t);
      if (s === "Tab" && (this.elements.rootMenu.focusState !== "none" ? this.elements.rootMenu.blur() : this.elements.rootMenu.focus()), this.focusState === "self") {
        const i = [
          "Space",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "Asterisk",
          "Home",
          "End"
        ], r = ["Enter", "ArrowRight"], l = ["Escape"];
        (i.includes(s) || this.currentMenuItem.isSubmenuItem && r.includes(s) || this.elements.controller && l.includes(s)) && c(t);
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
    super._handleKeyup(), this.dom.menu.addEventListener("keyup", (t) => {
      this.currentEvent = "keyboard";
      const s = w(t), { altKey: i, crtlKey: r, metaKey: l } = t;
      if (s === "Character" && !(i || r || l))
        c(t), this.elements.rootMenu.currentEvent = "character", this.focusNextNodeWithCharacter(t.key);
      else if (this.focusState === "self")
        if (s === "Enter" || s === "Space")
          c(t), this.currentMenuItem.isSubmenuItem ? this.currentMenuItem.elements.toggle.isOpen ? this.currentMenuItem.elements.toggle.close() : this.currentMenuItem.elements.toggle.preview() : this.currentMenuItem.dom.link.click();
        else if (s === "Escape")
          this.isTopLevel && this.elements.controller && this.elements.controller.isOpen && (this.elements.controller.close(), this.focusController());
        else if (s === "ArrowDown")
          c(t), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.currentMenuItem.elements.childMenu.focusFirstChild()) : !this.isTopLevel && this.currentChild === this.elements.menuItems.length - 1 ? this.focusParentsNextChild() : this.focusNextChild();
        else if (s === "ArrowUp") {
          c(t);
          const h = this.elements.menuItems[this.currentChild - 1];
          h && h.isSubmenuItem && h.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentChild = this.currentChild - 1, this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.focusChildsLastNode()) : !this.isTopLevel && this.currentChild === 0 ? (this.blurCurrentChild(), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.focusCurrentChild()) : this.focusPreviousChild();
        } else
          s === "ArrowRight" ? this.currentMenuItem.isSubmenuItem && (c(t), this.currentMenuItem.elements.toggle.isOpen ? (this.blurCurrentChild(), this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent, this.currentMenuItem.elements.childMenu.focusFirstChild()) : this.currentMenuItem.elements.toggle.preview()) : s === "ArrowLeft" ? (c(t), this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen ? (this.currentMenuItem.elements.childMenu.blurCurrentChild(), this.currentMenuItem.elements.toggle.close()) : this.isTopLevel || (this.blurCurrentChild(), this.elements.parentMenu.currentEvent = this.currentEvent, this.elements.parentMenu.focusCurrentChild())) : s === "Home" ? (c(t), this.blurCurrentChild(), this.elements.rootMenu.focusFirstChild()) : s === "End" ? (c(t), this.blurCurrentChild(), this.elements.rootMenu.focusLastNode()) : s === "Asterisk" && (c(t), this.openChildren());
    });
  }
  /**
   * Focus the menu's last node of the entire expanded menu.
   *
   * This includes all _open_ child menu items.
   */
  focusLastNode() {
    const t = this.elements.menuItems.length - 1, s = this.elements.menuItems[t];
    s.isSubmenuItem && s.elements.toggle.isOpen ? (this.currentChild = t, s.elements.childMenu.currentEvent = this.currentEvent, s.elements.childMenu.focusLastNode()) : this.focusLastChild();
  }
  /**
   * Open all submenu children.
   */
  openChildren() {
    this.elements.submenuToggles.forEach((t) => t.preview());
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
  focusNextNodeWithCharacter(t) {
    function s(a) {
      let d = [];
      return a.elements.menuItems.forEach((f) => {
        d.push(f), f.isSubmenuItem && f.elements.toggle.isOpen && (d = [
          ...d,
          ...s(
            f.elements.toggle.elements.controlledMenu
          )
        ]);
      }), d;
    }
    const i = t.toLowerCase(), r = s(this.elements.rootMenu), l = r.indexOf(this.currentMenuItem) + 1, u = [
      ...r.slice(l),
      ...r.slice(0, l)
    ];
    let h = 0, m = !1;
    for (; !m && h < u.length; ) {
      let a = "";
      if (u[h].dom.item.innerText ? a = u[h].dom.item.innerText : a = u[h].dom.item.textContent, a = a.replace(/[\s]/g, "").toLowerCase().charAt(0), a === i) {
        m = !0;
        const d = u[h].elements.parentMenu, f = d.elements.menuItems.indexOf(u[h]);
        this.elements.rootMenu.blurChildren(), d.focusChild(f);
      }
      h++;
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
class H extends $ {
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
    menuItemElement: e,
    menuLinkElement: t,
    parentMenu: s,
    isSubmenuItem: i = !1,
    childMenu: r = null,
    toggle: l = null,
    initialize: u = !0
  }) {
    super({
      menuItemElement: e,
      menuLinkElement: t,
      parentMenu: s,
      isSubmenuItem: i,
      childMenu: r,
      toggle: l,
      initialize: !1
    }), u && this.initialize();
  }
}
class P extends F {
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
    menuToggleElement: t,
    parentElement: s,
    controlledMenu: i,
    parentMenu: r = null,
    initialize: l = !0
  }) {
    super({
      menuToggleElement: t,
      parentElement: s,
      controlledMenu: i,
      parentMenu: r,
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
    o(this, "_dom", {
      toggle: null,
      parent: null,
      container: null
    });
    this._dom.toggle = t, this._dom.parent = s, this._dom.container = i.isTopLevel ? i.dom.container : i.dom.menu, l && this.initialize();
  }
  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  _expand(t = !0) {
    const { openClass: s, transitionClass: i } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"), i !== "" ? (p(i, this.dom.container), requestAnimationFrame(() => {
      p(s, this.dom.container), requestAnimationFrame(() => {
        _(i, this.dom.container);
      });
    })) : s !== "" && p(s, this.dom.container), t && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  _collapse(t = !0) {
    const { closeClass: s, openClass: i, transitionClass: r } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"), r !== "" ? (p(r, this.dom.container), requestAnimationFrame(() => {
      i !== "" && _(i, this.dom.container), requestAnimationFrame(() => {
        s !== "" && p(s, this.dom.container), requestAnimationFrame(() => {
          _(r, this.dom.container);
        });
      });
    })) : (s !== "" && p(s, this.dom.container), i !== "" && _(i, this.dom.container)), t && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
}
class z extends L {
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
    menuElement: t,
    menuItemSelector: s = ".nav-item,li",
    menuLinkSelector: i = ".nav-link,.dropdown-item",
    submenuItemSelector: r = ".dropdown",
    submenuToggleSelector: l = ".dropdown-toggle",
    submenuSelector: u = ".dropdown-menu",
    controllerElement: h = null,
    containerElement: m = null,
    openClass: a = "show",
    closeClass: d = "collapse",
    transitionClass: f = "transitioning",
    isTopLevel: y = !0,
    parentMenu: C = null,
    hoverType: M = "off",
    hoverDelay: E = 250,
    enterDelay: v = -1,
    leaveDelay: D = -1,
    disableBootstrap: S = !0,
    initialize: j = !0
  }) {
    super({
      menuElement: t,
      menuItemSelector: s,
      menuLinkSelector: i,
      submenuItemSelector: r,
      submenuToggleSelector: l,
      submenuSelector: u,
      controllerElement: h,
      containerElement: m,
      openClass: a,
      closeClass: d,
      transitionClass: f,
      isTopLevel: y,
      parentMenu: C,
      hoverType: M,
      hoverDelay: E,
      enterDelay: v,
      leaveDelay: D,
      initialize: !1
    });
    /**
     * The class to use when generating submenus.
     *
     * @type {typeof Bootstrap5Treeview}
     *
     * @public
     */
    o(this, "_MenuType", z);
    /**
     * The class to use when generating menu items.
     *
     * @type {typeof Bootstrap5TreeviewItem}
     *
     * @public
     */
    o(this, "_MenuItemType", H);
    /**
     * The class to use when generating submenu toggles.
     *
     * @type {typeof Bootstrap5TreeviewToggle}
     *
     * @public
     */
    o(this, "_MenuToggleType", P);
    /**
     * A flag to disable bootstrap's dropdown behaviour.
     *
     * @type {boolean}
     *
     * @protected
     */
    o(this, "_disableBootstrap", !0);
    /**
     * The DOM element to use as a fake target for bootstrap's dropdown events.
     *
     * @type {HTMLElement}
     *
     * @protected
     */
    o(this, "_pseudoDropdownElement", document.createElement("div"));
    /**
     * Bootstrap events that need to be intercepted to disbaled dropdowns.
     *
     * @type {string[]}
     *
     * @protected
     */
    o(this, "_bootstrapEvents", [
      "show.bs.dropdown",
      "shown.bs.dropdown",
      "hide.bs.dropdown",
      "hidden.bs.dropdown"
    ]);
    this._disableBootstrap = S, j && this.initialize();
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
    let t = super._validate();
    const s = g("boolean", {
      disableBootstrap: this._disableBootstrap
    });
    return s.status || (this._errors.push(s.error.message), t = !1), t;
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
    this.elements.submenuToggles.forEach((t) => {
      this.bootstrapEvents.forEach((s) => {
        t.dom.toggle.addEventListener(
          s,
          (i) => {
            c(i);
            const r = bootstrap.Dropdown.getInstance(
              i.target
            );
            r && r._menu !== this.bootstrapPseudoDropdownElement && (r._menu = this.bootstrapPseudoDropdownElement);
          },
          {
            once: !0
          }
        );
      });
    });
  }
}
export {
  z as default
};
