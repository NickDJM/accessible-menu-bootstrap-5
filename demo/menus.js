export const singleLevel =
  /* html */
  `
<nav id="example-menu" aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item"><a href="#" class="nav-link">Mammals</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Reptiles</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Amphibians</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Birds</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Fish</a></li>
    </ul>
  </div>
</nav>
`;

export const twoLevel =
  /* html */
  `
<nav id="example-menu" aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Mammals</a>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Reptiles</a>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Amphibians</a>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Birds</a>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Fish</a>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;

export const twoLevelTopLink =
  /* html */
  `
<nav id="example-menu"  aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Mammals</a>
        <button aria-label="Mammals submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Reptiles</a>
        <button aria-label="Reptiles submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Amphibians</a>
        <button aria-label="Amphibians submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Birds</a>
        <button aria-label="Birds submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Fish</a>
        <button aria-label="Fish submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">Wild</a></li>
          <li><a href="#" class="dropdown-item">Domesticated</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;

export const threeLevel =
  /* html */
  `
<nav id="example-menu"  aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Mammals</a>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Bears</a></li>
              <li><a href="#" class="dropdown-item">Lions</a></li>
              <li><a href="#" class="dropdown-item">Wolves</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Cats</a></li>
              <li><a href="#" class="dropdown-item">Dogs</a></li>
              <li><a href="#" class="dropdown-item">Horses</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Reptiles</a>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Snakes</a></li>
              <li><a href="#" class="dropdown-item">Lizards</a></li>
              <li><a href="#" class="dropdown-item">Turtles</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Geckos</a></li>
              <li><a href="#" class="dropdown-item">Tortoises</a></li>
              <li><a href="#" class="dropdown-item">Iguanas</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Amphibians</a>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Frogs</a></li>
              <li><a href="#" class="dropdown-item">Toads</a></li>
              <li><a href="#" class="dropdown-item">Salamanders</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Axolotls</a></li>
              <li><a href="#" class="dropdown-item">Newts</a></li>
              <li><a href="#" class="dropdown-item">Frogs</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Birds</a>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Eagles</a></li>
              <li><a href="#" class="dropdown-item">Hawks</a></li>
              <li><a href="#" class="dropdown-item">Owls</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Parakeets</a></li>
              <li><a href="#" class="dropdown-item">Pigeons</a></li>
              <li><a href="#" class="dropdown-item">Chickens</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Fish</a>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Trout</a></li>
              <li><a href="#" class="dropdown-item">Carp</a></li>
              <li><a href="#" class="dropdown-item">Perch</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Goldfish</a></li>
              <li><a href="#" class="dropdown-item">Koi</a></li>
              <li><a href="#" class="dropdown-item">Betta</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;

export const threeLevelTopLink =
  /* html */
  `
<nav id="example-menu"  aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Mammals</a>
        <button aria-label="Mammals submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Bears</a></li>
              <li><a href="#" class="dropdown-item">Lions</a></li>
              <li><a href="#" class="dropdown-item">Wolves</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Cats</a></li>
              <li><a href="#" class="dropdown-item">Dogs</a></li>
              <li><a href="#" class="dropdown-item">Horses</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Reptiles</a>
        <button aria-label="Reptiles submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Snakes</a></li>
              <li><a href="#" class="dropdown-item">Lizards</a></li>
              <li><a href="#" class="dropdown-item">Turtles</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Geckos</a></li>
              <li><a href="#" class="dropdown-item">Tortoises</a></li>
              <li><a href="#" class="dropdown-item">Iguanas</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Amphibians</a>
        <button aria-label="Amphibians submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Frogs</a></li>
              <li><a href="#" class="dropdown-item">Toads</a></li>
              <li><a href="#" class="dropdown-item">Salamanders</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Axolotls</a></li>
              <li><a href="#" class="dropdown-item">Newts</a></li>
              <li><a href="#" class="dropdown-item">Frogs</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Birds</a>
        <button aria-label="Birds submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Eagles</a></li>
              <li><a href="#" class="dropdown-item">Hawks</a></li>
              <li><a href="#" class="dropdown-item">Owls</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Parakeets</a></li>
              <li><a href="#" class="dropdown-item">Pigeons</a></li>
              <li><a href="#" class="dropdown-item">Chickens</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="nav-link">Fish</a>
        <button aria-label="Fish submenu" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Trout</a></li>
              <li><a href="#" class="dropdown-item">Carp</a></li>
              <li><a href="#" class="dropdown-item">Perch</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Goldfish</a></li>
              <li><a href="#" class="dropdown-item">Koi</a></li>
              <li><a href="#" class="dropdown-item">Betta</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;
