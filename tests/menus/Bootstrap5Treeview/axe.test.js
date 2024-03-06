/**
 * Tests for Bootstrap5Treeview's axe compliance.
 */

import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { twoLevel } from "../../../demo/menus.js";
import Bootstrap5Treeview from "../../../src/bootstrap5Treeview.js";

expect.extend(AxeMatchers);

describe("Bootstrap5Treeview", () => {
  // Create the test menu.
  document.body.innerHTML = twoLevel;

  // Create a new Bootstrap5Treeview instance for testing.
  /* eslint-disable-next-line no-unused-vars */
  const menu = new Bootstrap5Treeview({
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
