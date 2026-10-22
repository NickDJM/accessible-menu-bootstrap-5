/**
 * Managed menus indexed by their window and menu element.
 *
 * The window listener holds a WeakMap so it does not retain detached menus.
 *
 * @type {WeakMap<Window, WeakMap<HTMLElement, object>>}
 */
const menusByWindow = new WeakMap();

/**
 * Keep Bootstrap's delegated keyboard handler away from managed submenus.
 *
 * Removing data-bs-toggle disables native toggle handling, but Bootstrap also
 * matches keydown events inside .dropdown-menu. Its listener runs during
 * document capture, so these keys must be handled during window capture first.
 * Navigation still runs through Accessible Menu's inherited keyup listeners.
 *
 * @param {object} menu - The Bootstrap menu whose native handling is disabled.
 */
export function disableBootstrapDropdownKeyboardBehaviour(menu) {
  const window = menu.dom.menu.ownerDocument.defaultView;

  if (!menusByWindow.has(window)) {
    const menus = new WeakMap();

    window.addEventListener(
      "keydown",
      (event) => {
        if (!["ArrowUp", "ArrowDown", "Escape"].includes(event.key)) return;

        const path = event.composedPath();
        const menuElement = path.find((element) => menus.has(element));

        if (
          !menuElement ||
          !path.some((element) => element.classList?.contains("dropdown-menu"))
        ) {
          return;
        }

        event.stopPropagation();
        // Match the inherited keydown listeners, including ancestor updates
        // until a menu would normally stop the event.
        for (const element of path) {
          const menu = menus.get(element);

          if (menu && menu._handleBootstrapKeydown(event)) break;
        }
      },
      true
    );

    menusByWindow.set(window, menus);
  }

  menusByWindow.get(window).set(menu.dom.menu, menu);
}
