/**
 * Various help functions for testing.
 */

import { expect } from "vitest";

/**
 * Extends jsdom MouseEvent class as PointerEvent class
 *
 * @todo: deprecate if/when JSDOM fully supports PointerEvents.
 */
class PointerEvent extends window.MouseEvent {
  constructor(type, props) {
    super(type, props);
    if (props.button != null) {
      this.button = props.button;
    }
  }
}

window.PointerEvent = PointerEvent;

/**
 * Simulates a pointer event on a DOM element.
 *
 * @param {string}      eventType - The type of event to trigger.
 * @param {HTMLElement} element   - The element to trigger the event on.
 * @param {object}      options   - Custom options for the event.
 */
export function simulatePointerEvent(eventType, element, options = {}) {
  try {
    const event = new PointerEvent(eventType, {
      bubbles: true,
      cancelable: true,
      ...options,
    });
    element.dispatchEvent(event);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Simulates a keyboard event on a DOM element.
 *
 * @param {string}      eventType - The type of event to trigger.
 * @param {HTMLElement} element   - The element to trigger the event on.
 * @param {object}      options   - Custom options for the event.
 */
export function simulateKeyboardEvent(eventType, element, options = {}) {
  try {
    const event = new KeyboardEvent(eventType, {
      bubbles: true,
      cancelable: true,
      ...options,
    });
    element.dispatchEvent(event);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Simulates a pointerdown and pointerup event on a DOM element.
 *
 * @param {HTMLElement} element - The element to trigger the events on.
 * @param {object}      options - Custom options for the events.
 */
export function simulatePointer(element, options = {}) {
  simulatePointerEvent("pointerdown", element, options);
  simulatePointerEvent("pointerup", element, options);
}

/**
 * Simulates a keydown and keyup event on a DOM element.
 *
 * @param {string}      key     - The key to press.
 * @param {HTMLElement} element - The element to trigger the events on.
 * @param {object}      options - Custom options for the events.
 */
export function simulateKeypress(key, element, options = {}) {
  const eventOptions = {
    key,
    ...options,
  };

  simulateKeyboardEvent("keydown", element, eventOptions);
  simulateKeyboardEvent("keyup", element, eventOptions);
}

/**
 * Checks if a toggle is open.
 *
 * @param {Bootstrap5DisclosureMenuToggle|Bootstrap5MenubarToggle|Bootstrap5TreeviewToggle|Bootstrap5TopLinkDisclosureMenuToggle} toggle - The toggle to check.
 */
export function toggleIsOpen(toggle) {
  const { parentMenu, controlledMenu } = toggle.elements;

  // Toggle expectations.
  expect(toggle.isOpen).toBeTruthy();
  expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("true");

  // Container expectations.
  expect(toggle.dom.container.classList.contains("show")).toBeTruthy();
  expect(toggle.dom.container.classList.contains("collapse")).toBeTruthy();

  // Parent menu expectations.
  if (parentMenu) {
    expect(parentMenu.focusState).toBe("child");
  }

  // Controlled menu expectations.
  expect(controlledMenu.focusState).toBe("self");
}

/**
 * Checks if a toggle is previewed.
 *
 * @param {Bootstrap5DisclosureMenuToggle|Bootstrap5MenubarToggle|Bootstrap5TreeviewToggle|Bootstrap5TopLinkDisclosureMenuToggle} toggle - The toggle to check.
 */
export function toggleIsPreviewed(toggle) {
  const { parentMenu, controlledMenu } = toggle.elements;

  // Toggle expectations.
  expect(toggle.isOpen).toBeTruthy();
  expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("true");

  // Container expectations.
  expect(toggle.dom.container.classList.contains("show")).toBeTruthy();
  expect(toggle.dom.container.classList.contains("collapse")).toBeTruthy();

  // Parent menu expectations.
  if (parentMenu) {
    expect(parentMenu.focusState).toBe("self");
  }

  // Controlled menu expectations.
  expect(controlledMenu.focusState).toBe("none");
}

/**
 * Checks if a toggle is closed.
 *
 * @param {Bootstrap5DisclosureMenuToggle|Bootstrap5MenubarToggle|Bootstrap5TreeviewToggle|Bootstrap5TopLinkDisclosureMenuToggle} toggle - The toggle to check.
 */
export function toggleIsClosed(toggle) {
  const { parentMenu, controlledMenu } = toggle.elements;

  // Toggle expectations.
  expect(toggle.isOpen).toBeFalsy();
  expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("false");

  // Container expectations.
  expect(toggle.dom.container.classList.contains("show")).toBeFalsy();
  expect(toggle.dom.container.classList.contains("collapse")).toBeTruthy();

  // Parent menu expectations.
  if (parentMenu) {
    expect(parentMenu.focusState).toBe("self");
  }

  // Controlled menu expectations.
  expect(controlledMenu.focusState).toBe("none");
}
