import AccessibleMenuBootstrap5 from "../index";
import {
  singleLevel,
  twoLevel,
  twoLevelDisclosure,
  twoLevelDisclosureTopLink,
  threeLevel,
  threeLevelDisclosure,
  threeLevelDisclosureTopLink,
} from "./menus";

/**
 * Generates an accessible-menu.
 *
 * @param {string}      type           - The type of menu to use.
 * @param {string}      structure      - The DOM structure to use.
 * @param {string}      hover          - The hover type for the menu.
 * @param {HTMLElement} container      - The container to generate the menu in.
 * @param {object}      [options] - Option overrides.
 */
function generateMenu(type, structure, hover, container, options = {}) {
  menus.pop();
  const MenuClass = AccessibleMenuBootstrap5[type] || null;
  const menuDOM = menuStructures[structure];

  if (type === "Bootstrap5TopLinkDisclosureMenu") {
    container.innerHTML = menuDOM.topLink;
  } else if (type === "Bootstrap5DisclosureMenu") {
    container.innerHTML = menuDOM.disclosure;
  } else {
    container.innerHTML = menuDOM.default;
  }

  const nav = container.querySelector("nav");

  nav.classList.remove("disclosure-menu");
  nav.classList.remove("menubar");
  nav.classList.remove("top-link-disclosure-menu");
  nav.classList.remove("treeview");
  document.body.classList.remove("disclosure-menu");
  document.body.classList.remove("menubar");
  document.body.classList.remove("top-link-disclosure-menu");
  document.body.classList.remove("treeview");

  if (MenuClass !== null) {
    switch (type) {
      case "Bootstrap5TopLinkDisclosureMenu":
        nav.classList.add("top-link-disclosure-menu");
        document.body.classList.add("top-link-disclosure-menu");

        break;

      case "Bootstrap5DisclosureMenu":
        nav.classList.add("disclosure-menu");
        document.body.classList.add("disclosure-menu");

        break;

      case "Bootstrap5Menubar":
        nav.classList.add("menubar");
        document.body.classList.add("menubar");

        break;

      case "Bootstrap5Treeview":
        nav.classList.add("treeview");
        document.body.classList.add("treeview");

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
    disclosure: singleLevel,
    topLink: singleLevel,
  },
  two: {
    default: twoLevel,
    disclosure: twoLevelDisclosure,
    topLink: twoLevelDisclosureTopLink,
  },
  three: {
    default: threeLevel,
    disclosure: threeLevelDisclosure,
    topLink: threeLevelDisclosureTopLink,
  },
};
const menuOptions = {
  Bootstrap5DisclosureMenu: {
    optionalKeySupport: true,
  },
  Bootstrap5Menubar: {},
  Bootstrap5TopLinkDisclosureMenu: {
    optionalKeySupport: true,
  },
  Bootstrap5Treeview: {},
};

// Theme setup.
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const setTheme = window.localStorage.getItem("setTheme") || preferredTheme;
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
themeToggle.addEventListener("click", () => {
  if (document.body.dataset.bsTheme === "dark") {
    document.body.dataset.bsTheme = "light";
    window.localStorage.setItem("setTheme", "light");
    themeToggle.innerHTML = "Dark Mode";
  } else {
    document.body.dataset.bsTheme = "dark";
    window.localStorage.setItem("setTheme", "dark");
    themeToggle.innerHTML = "Light Mode";
  }
});

// Generate an initial menu and set theme.
document.addEventListener("DOMContentLoaded", () => {
  const options = menuOptions[menuType] || {};

  generateMenu(menuType, menuStructure, hoverType, header, options);

  if (setTheme === "dark") {
    document.body.dataset.bsTheme = "dark";
    themeToggle.innerHTML = "Light Mode";
  }
});
