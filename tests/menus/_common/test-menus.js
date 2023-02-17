export const oneLevelMenu = `
<header>
  <nav class="navbar">
    <button id="toggle-0" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navContainer">Menu Toggle</button>
    <div class="collapse navbar-collapse">
      <ul id="menu-0" class="navbar-nav">
        <li id="item-1-0-0" class="nav-item"><a id="link-1-0-0" class="nav-link" href="#">First item</a></li>
        <li id="item-2-0-0" class="nav-item"><a id="link-2-0-0" class="nav-link" href="#">Second item</a></li>
        <li id="item-3-0-0" class="nav-item"><a id="link-3-0-0" class="nav-link" href="#">Third item</a></li>
        <li id="item-4-0-0" class="nav-item"><a id="link-4-0-0" class="nav-link" href="#">Fourth item</a></li>
        <li id="item-5-0-0" class="nav-item"><a id="link-5-0-0" class="nav-link" href="#">Fifth item</a></li>
      </ul>
    </div>
  </nav>
</header>
<main></main>
`;

export const twoLevelMenu = `
<header>
  <nav class="navbar">
    <button id="toggle-0" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navContainer">Menu Toggle</button>
    <div class="collapse navbar-collapse">
      <ul id="menu-0" class="navbar-nav">
        <li id="item-1-0-0" class="nav-item"><a id="link-1-0-0" class="nav-link" href="#">First item</a></li>
        <li id="item-2-0-0" class="nav-item dropdown">
          <a id="link-2-0-0" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Second item</a>
          <ul id="menu-2" class="dropdown-menu">
            <li id="item-2-1-0"><a id="link-2-1-0" class="dropdown-item" href="#">First item</a></li>
            <li id="item-2-2-0"><a id="link-2-2-0" class="dropdown-item" href="#">Second item</a></li>
            <li id="item-2-3-0"><a id="link-2-3-0" class="dropdown-item" href="#">Third item</a></li>
          </ul>
        </li>
        <li id="item-3-0-0" class="nav-item dropdown">
          <a id="link-3-0-0" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Third item</a>
          <ul id="menu-3" class="dropdown-menu">
            <li id="item-3-1-0"><a id="link-3-1-0" class="dropdown-item" href="#">First item</a></li>
            <li id="item-3-2-0"><a id="link-3-2-0" class="dropdown-item" href="#">Second item</a></li>
            <li id="item-3-3-0"><a id="link-3-3-0" class="dropdown-item" href="#">Third item</a></li>
          </ul>
        </li>
        <li id="item-4-0-0" class="nav-item"><a id="link-4-0-0" class="nav-link" href="#">Fourth item</a></li>
        <li id="item-5-0-0" class="nav-item dropdown">
          <a id="link-5-0-0" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Fifth item</a>
          <ul id="menu-5" class="dropdown-menu">
            <li id="item-5-1-0"><a id="link-5-1-0" class="dropdown-item" href="#">First item</a></li>
            <li id="item-5-2-0"><a id="link-5-2-0" class="dropdown-item" href="#">Second item</a></li>
            <li id="item-5-3-0"><a id="link-5-3-0" class="dropdown-item" href="#">Third item</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>
<main></main>
`;

export const fullMenu = `
<header>
  <nav class="navbar">
    <button id="toggle-0" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navContainer">Menu Toggle</button>
    <div class="collapse navbar-collapse" id="navContainer">
      <ul id="menu-0" class="navbar-nav">
        <li id="item-1-0-0" class="nav-item"><a id="link-1-0-0" class="nav-link" href="#">First item</a></li>
        <li id="item-2-0-0" class="nav-item dropdown">
          <a id="link-2-0-0" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Second item</a>
          <ul id="menu-2" class="dropdown-menu" aria-labelledby="link-2-0-0">
            <li id="item-2-1-0"><a id="link-2-1-0" class="dropdown-item" href="#">First item</a></li>
            <li id="item-2-2-0" class="dropdown">
              <a id="link-2-2-0" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Second item</a>
              <ul id="menu-2-2" class="dropdown-menu" aria-labelledby="link-2-2-0">
                <li id="item-2-2-1">
                  <a id="link-2-2-1" class="dropdown-item" href="#">First item</a>
                </li>
                <li id="item-2-2-2">
                  <a id="link-2-2-2" class="dropdown-item" href="#">Second item</a>
                </li>
                <li id="item-2-2-3">
                  <a id="link-2-2-3" class="dropdown-item" href="#">Third item</a>
                </li>
              </ul>
            </li>
            <li id="item-2-3-0" class="dropdown">
              <a id="link-2-3-0" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Third item</a>
              <ul id="menu-2-3" class="dropdown-menu" aria-labelledby="link-2-3-0">
                <li id="item-2-3-1">
                  <a id="link-2-3-1" class="dropdown-item" href="#">First item</a>
                </li>
                <li id="item-2-3-2">
                  <a id="link-2-3-2" class="dropdown-item" href="#">Second item</a>
                </li>
                <li id="item-2-3-3">
                  <a id="link-2-3-3" class="dropdown-item" href="#">Third item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li id="item-3-0-0" class="nav-item dropdown">
          <a id="link-3-0-0" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Third item</a>
          <ul id="menu-3" class="dropdown-menu" aria-labelledby="link-3-0-0">
            <li id="item-3-1-0"><a id="link-3-1-0" class="dropdown-item" href="#">First item</a></li>
            <li id="item-3-2-0"><a id="link-3-2-0" class="dropdown-item" href="#">Second item</a></li>
            <li id="item-3-3-0"><a id="link-3-3-0" class="dropdown-item" href="#">Third item</a></li>
          </ul>
        </li>
        <li id="item-4-0-0" class="nav-item"><a id="link-4-0-0" class="nav-link" href="#">Fourth item</a></li>
        <li id="item-5-0-0" class="nav-item dropdown">
          <a id="link-5-0-0" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Fifth item</a>
          <ul id="menu-5" class="dropdown-menu" aria-labelledby="link-5-0-0">
            <li id="item-5-1-0"><a id="link-5-1-0" class="dropdown-item" href="#">First item</a></li>
            <li id="item-5-2-0"><a id="link-5-2-0" class="dropdown-item" href="#">Second item</a></li>
            <li id="item-5-3-0"><a id="link-5-3-0" class="dropdown-item" href="#">Third item</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>
<main></main>
`;
