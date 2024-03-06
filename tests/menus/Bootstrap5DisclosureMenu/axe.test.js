/**
 * Tests for Bootstrap5DisclosureMenu's axe compliance.
 */

import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { twoLevelDisclosure } from "../../../demo/menus.js";
import Bootstrap5DisclosureMenu from "../../../src/bootstrap5DisclosureMenu.js";

expect.extend(AxeMatchers);

describe("Bootstrap5DisclosureMenu", () => {
  // Create the test menu.
  document.body.innerHTML = twoLevelDisclosure;

  // Create a new Bootstrap5DisclosureMenu instance for testing.
  /* eslint-disable-next-line no-unused-vars */
  const menu = new Bootstrap5DisclosureMenu({
    menuElement: document.querySelector("ul"),
    submenuItemSelector: "li.dropdown",
    containerElement: document.querySelector("nav"),
    controllerElement: document.querySelector("button"),
  });

  // Test the root menu for axe compliance.
  it("should be axe compliant", async () => {
    expect(await axe(document.body)).toHaveNoViolations();
  });
});
