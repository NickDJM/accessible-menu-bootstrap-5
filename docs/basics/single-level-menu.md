# Single-level menu

A single-level menu is the most basic type of menu that can be used with **accessible-menu-bootstrap-5**.

An example of this kind of menu is as follows:

```html
<nav id="main-nav" aria-label="Main" class="navbar">
  <ul id="main-menu" class="navbar-nav">
    <li class="nav-item">
      <a href="/about" class="nav-link">About</a>
    </li>
    <li class="nav-item">
      <a href="/projects" class="nav-link">Projects</a>
    </li>
    <li class="nav-item">
      <a href="/contact" class="nav-link">Contact me</a>
    </li>
  </ul>
</nav>
```

Given the above structure, the parameters needed for an accessible menu are:

- `menuElement`

Depending on what kind of menu you'd like to create you can use [Bootstrap5DisclosureMenu](https://accessible-menu.netlify.app/disclosuremenu), [Bootstrap5Menubar](https://accessible-menu.netlify.app/menubar), or [Bootstrap5Treeview](https://accessible-menu.netlify.app/treeview).

```js
const menu = new AccessibleMenuBootstrap5.Bootstrap5DisclosureMenu({
  menuElement: document.querySelector("#main-menu .navbar-nav"),
});
```
