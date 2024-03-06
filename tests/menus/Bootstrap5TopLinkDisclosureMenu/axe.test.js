/**
 * Tests for Bootstrap5TopLinkDisclosureMenu's axe compliance.
 */

import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { twoLevelDisclosureTopLink } from "../../../demo/menus.js";
import Bootstrap5TopLinkDisclosureMenu from "../../../src/bootstrap5TopLinkDisclosureMenu.js";

expect.extend(AxeMatchers);

describe("Bootstrap5TopLinkDisclosureMenu", () => {
  // Create the test menu.
  document.body.innerHTML = twoLevelDisclosureTopLink;

  // Create a new Bootstrap5TopLinkDisclosureMenu instance for testing.
  /* eslint-disable-next-line no-unused-vars */
  const menu = new Bootstrap5TopLinkDisclosureMenu({
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
