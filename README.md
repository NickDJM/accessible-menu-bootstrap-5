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

## Getting Started

Please follow the main project's [documentation](https://accessible-menu.dev/).

### Installation

You can install Accessible Menu Bootstrap 5 into your project using NPM.

```bash
# latest stable
npm install accessible-menu-bootstrap-5
```

### Using Accessible Menu from a CDN

You can use Accessible Menu Bootstrap 5 directly from a CDN via a script tag.

```html
<script src="https://cdn.jsdelivr.net/npm/accessible-menu-bootstrap-5/dist/accessible-menu-bs5.iife.js"></script>
```

We use [jsdelivr](https://www.jsdelivr.com/package/npm/accessible-menu-bootstrap-5) as the example, but you can use any cdn you prefer, such as [unpkg](https://unpkg.com). You can also download the files listed in the CDN and host them yourself if preferred.

## Examples

The following codepens are available as examples of how to use `accessible-menu`:

- [Disclosure Navigation Menu](https://codepen.io/nickdjm/pen/MWRaEoV)
- [Disclosure Navigation Menu with Top-Level Links](https://codepen.io/nickdjm/pen/XWQmezx)
- [Navigation Menubar](https://codepen.io/nickdjm/pen/YzMyraX)
- [Navigation Treeview](https://codepen.io/nickdjm/pen/zYXvEWy)

## Sponsors

<p align="center">
  <a href="https://coldfrontlabs.ca">
    <img src="https://coldfrontlabs.ca/themes/custom/frosty/images/coldfrontlabs-flakkon-logo.png" alt="Coldfront Labs Inc." width="300px"/>
  </a>
</p>

## Versioning

This project uses Semantic Versioning 2.0.0 to keep track of releases.

For more detailed information about SemVer, please see the [official documentation](https://semver.org/).

## Contributing

If you're interested in contributing to the project, please read the [Contribution Guidelines](.github/CONTRIBUTING.md). Any and all contributions _must_ follow these guidelines or they will not be accepted.
