# Single-level menu with toggle

A single-level menu with a toggle is the most common type of menu that can be used with **accessible-menu-bootstrap-5**.

An example of this kind of menu is as follows:

```html
<nav id="main-nav" aria-label="Main" class="navbar navbar-expand-lg">
  <button id="main-menu-toggle" aria-label="Toggle main menu" class="navbar-toggler">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse">
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
  </div>
</nav>
```

Given the above structure, the parameters needed for an accessible menu are:

- `menuElement`
- `controllerElement`
- `containerElement`

Depending on what kind of menu you'd like to create you can use [Bootstrap5DisclosureMenu](https://accessible-menu.netlify.app/disclosuremenu), [Bootstrap5Menubar](https://accessible-menu.netlify.app/menubar), or [Bootstrap5Treeview](https://accessible-menu.netlify.app/treeview).

```js
const menu = new AccessibleMenuBootstrap5.Bootstrap5DisclosureMenu({
  menuElement: document.querySelector("#main-nav .navbar-nav"),
  controllerElement: document.querySelector("#main-nav .navbar-toggler"),
  containerElement: document.querySelector("#main-nav .navbar-collapse"),
});
```
