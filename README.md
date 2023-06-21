# accessible-menu-bootstrap-5

[![Latest release](https://img.shields.io/npm/v/accessible-menu-bootstrap-5?label=RELEASE&style=for-the-badge)](https://www.npmjs.com/package/accessible-menu-bootstrap-5)
[![License](https://img.shields.io/github/license/NickDJM/accessible-menu-bootstrap-5?style=for-the-badge)](/LICENSE)
[![Jest tests](https://img.shields.io/github/actions/workflow/status/nickdjm/accessible-menu-bootstrap-5/test.yml?branch=1.x&label=Tests&style=for-the-badge)](https://github.com/NickDJM/accessible-menu-bootstrap-5/actions/workflows/test.yml)
[![GitHub CodeQL](https://img.shields.io/github/actions/workflow/status/nickdjm/accessible-menu-bootstrap-5/codeql-analysis.yml?branch=1.x&label=CodeQL&style=for-the-badge)](https://github.com/NickDJM/accessible-menu-bootstrap-5/actions/workflows/codeql-analysis.yml)

A JavaScript library to help you generate WAI-ARIA accessible menus with in the DOM using Bootstrap 5.

This project is an extension of [accessible-menu](https://github.com/NickDJM/accessible-menu) to allow out-of-the-box for Bootstrap 5 compatibility.

The supported menu types are:

- [Disclosure Navigation Menus](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/),
- [Disclosure Navigation Menus with Top-Level Links](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/),
- [Navigation Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/), and
- [Navigation Treeview](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)

## Browser Support

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome.svg" role="presentation" width="32px" height="32px" /><br />Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox.svg" role="presentation" width="32px" height="32px" /><br />Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_32x32.png" role="presentation" width="32px" height="32px" /><br />Safari  | <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge.svg" role="presentation" width="32px" height="32px" /><br />Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chromium/chromium.svg" role="presentation" width="32px" height="32px" /><br />Chromium | <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/webkit/webkit.svg" role="presentation" width="32px" height="32px" /><br />Webkit |
| --- | --- | --- | --- | --- | --- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

Found something that doesn't work the way it should in one of the listed browsers above? [Open an issue](https://github.com/NickDJM/accessible-menu-bootstrap-5/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+%5BBrief+Description%5D)!

## Installation

### NPM

NPM is recommended for large-scale development, since it works well with bundlers like [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/guide/en/).

```shell
# latest stable
npm install accessible-menu-bootstrap-5
```

### CDN

For learning/prototyping purposes you can use the latest version with:

```html
<script src="https://cdn.jsdelivr.net/npm/accessible-menu-bootstrap-5/dist/accessible-menu-bs5.js"></script>
```

For production environments, it is recommend to use a specific version to avoid unforseen breaking changes:

```html
<script src="https://cdn.jsdelivr.net/npm/accessible-menu-bootstrap-5@2.0.0-beta.1/dist/accessible-menu-bs5.min.js"></script>
```

## Usage

To use **accessible-menu-bootstrap-5**, you first need to make sure your menu matches the following structure:

```html
<ul id="example-menu" class="navbar-nav">
  <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
  <li class="nav-item dropdown">
    <a href="#" class="nav-link dropdown-toggle">Projects ▼</a>
    <ul class="dropdown-menu">
      <li class="nav-item"><a href="/projects/awesome" class="dropdown-item">Awesome project</a></li>
      <li class="nav-item"><a href="/projects/not-so-awesome" class="dropdown-item">Not-so-awesome project</a></li>
    </ul>
  </li>
  <li class="nav-item"><a href="/contact" class="nav-link">Contact me</a></li>
</ul>
```

Include **accessible-menu-bootstrap-5** through import or bundled library in your project:

```js
import AccessibleMenu from "accessible-menu-bootstrap-5";
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/accessible-menu-bootstrap-5@2.0.0-beta.1/dist/accessible-menu-bs5.min.js"></script>
```

Once you have **accessible-menu-bootstrap-5** loaded, declare a new menu object.

`menuElement` is required for all menus. Unlike accessible-menu, **accessible-menu-bootstrap-5** will automatically find dropdown menus since the classes `.dropdown`, `.dropdown-menu`, and `.dropdown-item` are included in the Bootstrap 5 framework.

```js
const menu = new AccessibleMenu.DisclosureMenu({
  menuElement: document.querySelector("#example-menu"),
});
```

### Only need one type of menu class?

Bundled versions of each menu are provided in the dist and individual exports are provided in the index.

There are also compiled ES Module versions if you don't want to use an iife!

#### Bootstrap5DisclosureMenu usage

```js
import { Bootstrap5DisclosureMenu } from "accessible-menu-bootstrap-5";
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/accessible-menu-bootstrap-5@2.0.0-beta.1/dist/disclosure-menu-bs5.min.js"></script>
```

then

```js
const menu = new Bootstrap5DisclosureMenu({
  menuElement: document.querySelector("#example-menu"),
});
```

#### Bootstrap5Menubar usage

```js
import { Bootstrap5Menubar } from "accessible-menu-bootstrap-5";
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/accessible-menu-bootstrap-5@2.0.0-beta.1/dist/menubar-bs5.min.js"></script>
```

then

```js
const menu = new Bootstrap5Menubar({
  menuElement: document.querySelector("#example-menu"),
});
```

#### Bootstrap5TopLinkDisclosureMenu usage

```js
import { Bootstrap5TopLinkDisclosureMenu } from "accessible-menu";
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/accessible-menu@4.0.0-beta.0/dist/top-link-disclosure-menu-bs5.min.js"></script>
```

then

```js
const menu = new Bootstrap5TopLinkDisclosureMenu({
  menuElement: document.querySelector("#example-menu"),
});
```

#### Bootstrap5Treeview usage

```js
import { Bootstrap5Treeview } from "accessible-menu-bootstrap-5";
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/accessible-menu-bootstrap-5@2.0.0-beta.1/dist/treeview-bs5.min.js"></script>
```

then

```js
const menu = new Bootstrap5Treeview({
  menuElement: document.querySelector("#example-menu"),
});
```

### Documentation

- [accessible-menu API Documentation](https://accessible-menu.netlify.app/)
- Basics
  - [Single-level menu](docs/basics/single-level-menu.md)
  - [Single-level menu with toggle](docs/basics/single-level-menu-with-toggle.md)
  - [Two-level menu with toggle](docs/basics/two-level-menu-with-toggle.md)
- [Live examples](https://mandrasch.github.io/accessible-menu-bootstrap-examples/)

### Conflict with Bootstrap's own navbar toggle

Bootstrap 5 has it's own implementation of expanding/collapsing menus using the `data-bs-toggle` attribute on navbar togglers and dropdown toggles which would cause both **accessible-menu-bootstrap-5** _and_ Bootstrap's own toggler to open/close menus at the same time. To resolve this issue, **accessible-menu-bootstrap-5** removed the `data-bs-toggle` attributes from menu toggles that it controls.

### Other versions of Bootstrap

This project isn't designed to work with other versions of Bootstrap other than v4, however you _could_ probably get it to work with Bootstrap 3 by customizing the selectors and open/close classes when declaring the menu.

You also _might_ be able to get this to work with Bootstrap 5, however v5 changed the `data-bs-toggle` value on dropdowns to `data-bs-toggle` which won't be handled by this project. A Bootstrap 5 specific project may be created if there is enough interest in it.

## Versioning

This project uses Semantic Versioning 2.0.0 to keep track of releases.

For more detailed information about SemVer, please see the [official documentation](https://semver.org/).

## Contributing

If you're interested in contributing to the project, please read the [Contribution Guidelines](.github/CONTRIBUTING.md). Any and all contributions _must_ follow these guidelines or they will not be accepted.

## Sponsors

<p align="center">
  <a href="https://coldfrontlabs.ca">
    <img src="https://coldfrontlabs.ca/themes/custom/frosty/images/coldfrontlabs-flakkon-logo.png" alt="Coldfront Labs Inc." width="300px"/>
  </a>
</p>
