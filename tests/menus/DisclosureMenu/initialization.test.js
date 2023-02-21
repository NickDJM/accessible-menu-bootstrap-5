/**
 * Test the Bootstrap5DisclosureMenu class to make sure it can initialize under various scenarios.
 */

import { describe, test, expect } from "vitest";
import { Bootstrap5DisclosureMenu } from "../../../index";
import { oneLevelMenu } from "../_common/test-menus";
import {
  defaultInitialization,
  controlledMenu,
  customizedMenu,
} from "../_common/initialize";

defaultInitialization(Bootstrap5DisclosureMenu);
controlledMenu(Bootstrap5DisclosureMenu);
customizedMenu(Bootstrap5DisclosureMenu);

describe("Bootstrap5DisclosureMenu-specific initialization", () => {
  // Set up the DOM.
  document.body.innerHTML = oneLevelMenu;

  test("will fail if optionalKeySupport is not a boolean", () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: "true",
      });
    }).toThrow('optionalKeySupport must be a boolean. "string" given.');
  });
});
