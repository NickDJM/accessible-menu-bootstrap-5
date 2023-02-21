/**
 * Test the Bootstrap5TopLinkDisclosureMenu class to make sure it can initialize under various scenarios.
 */

import { describe, test, expect, vi } from "vitest";
import { Bootstrap5TopLinkDisclosureMenu } from "../../../index";
import { oneLevelMenu } from "../_common/test-menus";
import {
  defaultInitialization,
  controlledMenu,
  customizedMenu,
} from "../_common/initialize";

defaultInitialization(Bootstrap5TopLinkDisclosureMenu);
controlledMenu(Bootstrap5TopLinkDisclosureMenu);
customizedMenu(Bootstrap5TopLinkDisclosureMenu);

describe("Bootstrap5TopLinkDisclosureMenu-specific initialization", () => {
  // Mock console.error.
  console.error = vi.fn((error) => {
    throw new Error(error);
  });

  // Set up the DOM.
  document.body.innerHTML = oneLevelMenu;

  test("will fail if optionalKeySupport is not a boolean", () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: "true",
      });
    }).toThrow('optionalKeySupport must be a boolean. "string" given.');
  });

  test("will fail if submenuSubtoggleSelector is provided and submenuToggleSelector isn't a CSS selector", () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("#menu-0"),
        submenuSubtoggleSelector: 123,
      });
    }).toThrow(
      'submenuSubtoggleSelector must be a valid CSS selector. "123" given.'
    );
  });

  test("will fail if submenuItemSelector is provided and submenuToggleSelector isn't a CSS selector", () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Bootstrap5TopLinkDisclosureMenu({
        menuElement: document.querySelector("#menu-0"),
        submenuToggleSelector: 123,
      });
    }).toThrow(
      'menuLinkSelector must be a valid CSS selector. ".nav-link,.dropdown-item,123" given.'
    );
  });
});
