import AccessibleMenuBootstrap5 from "../index";
import { singleLevel, twoLevel, threeLevel } from "./menus";

/**
 * Generates an accessible-menu.
 *
 * @param {string}      type           - The type of menu to use.
 * @param {string}      structure      - The DOM structure to use.
 * @param {string}      hover          - The hover type for the menu.
 * @param {HTMLElement} container      - The container to generate the menu in.
 * @param {object}      [options = {}] - Option overrides.
 */
function generateMenu(type, structure, hover, container, options = {}) {
  menus.pop();
  const MenuClass = AccessibleMenuBootstrap5[type] || null;
  const menuDOM = menuStructures[structure];

  container.innerHTML = menuDOM.default;

  const nav = container.querySelector("nav");

  nav.classList.remove("disclosure-menu");
  nav.classList.remove("menubar");
  nav.classList.remove("treeview");

  if (MenuClass !== null) {
    switch (type) {
      case "Bootstrap5DisclosureMenu":
        nav.classList.add("disclosure-menu");

        break;

      case "Bootstrap5Menubar":
        nav.classList.add("menubar");

        break;

      case "Bootstrap5Treeview":
        nav.classList.add("treeview");

        break;
    }

    const menu = new MenuClass({
      menuElement: nav.querySelector(".navbar-nav"),
      containerElement: nav.querySelector(".navbar-collapse"),
      controllerElement: nav.querySelector(".navbar-toggler"),
      hoverType: hover,
      ...options,
    });

    menus.push(menu);
  }
}

// Menu setup.
const menus = [];
const header = document.querySelector("header");
const menuButtons = document.querySelectorAll("#menuButtons button");
const domButtons = document.querySelectorAll("#domButtons button");
const hoverButtons = document.querySelectorAll("#hoverButtons button");
const menuStructures = {
  one: {
    default: singleLevel,
  },
  two: {
    default: twoLevel,
  },
  three: {
    default: threeLevel,
  },
};
const menuOptions = {
  Bootstrap5DisclosureMenu: {
    optionalKeySupport: true,
  },
  Bootstrap5Menubar: {},
  Bootstrap5Treeview: {},
};

// Theme setup.
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const setTheme = window.localStorage.getItem("setTheme") || preferredTheme;
const body = document.querySelector("body");
const themeToggle = document.querySelector("#themeToggle");

// Menu options.
let menuType = "";
let menuStructure = "one";
let hoverType = "off";

// Set up menu type switching.
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    menuType = button.dataset.menuType;
    const options = menuOptions[menuType] || {};

    generateMenu(menuType, menuStructure, hoverType, header, options);
    document
      .querySelector("#menuButtons button.active")
      .classList.remove("active");
    button.classList.add("active");
  });
});

// Set up menu structure switching.
domButtons.forEach((button) => {
  button.addEventListener("click", () => {
    menuStructure = button.dataset.menuStructure;
    const options = menuOptions[menuType] || {};

    generateMenu(menuType, menuStructure, hoverType, header, options);
    document
      .querySelector("#domButtons button.active")
      .classList.remove("active");
    button.classList.add("active");
  });
});

// Set up hover type switching.
hoverButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hoverType = button.dataset.hoverType;
    const options = menuOptions[menuType] || {};

    generateMenu(menuType, menuStructure, hoverType, header, options);
    document
      .querySelector("#hoverButtons button.active")
      .classList.remove("active");
    button.classList.add("active");
  });
});

// Set up theme switching.
document.querySelector("#themeToggle").addEventListener("click", () => {
  if (body.dataset.bsTheme === "dark") {
    body.dataset.bsTheme = "light";
    window.localStorage.setItem("setTheme", "light");
    themeToggle.innerHTML = "Dark Mode";
  } else {
    body.dataset.bsTheme = "dark";
    window.localStorage.setItem("setTheme", "dark");
    themeToggle.innerHTML = "Light Mode";
  }
});

// Generate an initial menu and set theme.
document.addEventListener("DOMContentLoaded", () => {
  const options = menuOptions[menuType] || {};

  generateMenu(menuType, menuStructure, hoverType, header, options);

  if (setTheme === "dark") {
    body.dataset.bsTheme = "dark";
    themeToggle.innerHTML = "Light Mode";
  }
});
