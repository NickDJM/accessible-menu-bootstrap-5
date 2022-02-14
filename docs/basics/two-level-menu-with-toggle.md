# Two-level menu with toggle

A two-level menu with a toggle is similar to the single-level, except it adds submenus and toggle links.

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
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle">Projects ▼</a>
        <ul class="dropdown-menu">
          <li class="nav-item">
            <a href="/projects/awesome" class="dropdown-item">Awesome project</a>
          </li>
          <li class="nav-item">
            <a href="/projects/not-so-awesome" class="dropdown-item">Not-so-awesome project</a>
          </li>
        </ul>
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
const menu = new AccessibleMenu.Bootstrap5DisclosureMenu({
  menuElement: document.querySelector("#main-nav .navbar-nav"),
  controllerElement: document.querySelector("#main-nav .navbar-toggler"),
  containerElement: document.querySelector("#main-nav .navbar-collapse"),
});
```
