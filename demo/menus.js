export const singleLevel =
  /* html */
  `
<nav id="example-menu" aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Mammals</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Reptiles</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Amphibians</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Birds</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Fish</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Map</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
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
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Mammals</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Reptiles</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Amphibians</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Birds</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Fish</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item"><a class="nav-link" href="#">Map</a></li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Contact</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Email</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Socials</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;

export const twoLevelDisclosure =
  /* html */
  `
<nav id="example-menu" aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Mammals</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Reptiles</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Amphibians</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Birds</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Fish</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item"><a class="nav-link" href="#">Map</a></li>
      <li class="nav-item dropdown dropdown-left">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Contact</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Email</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Socials</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;

export const twoLevelDisclosureTopLink =
  /* html */
  `
<nav id="example-menu"  aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link d-inline-block" href="#">Mammals</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Mammals submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link d-inline-block" href="#">Reptiles</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Reptiles submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link d-inline-block" href="#">Amphibians</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Amphibians submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link d-inline-block" href="#">Birds</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Birds submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link d-inline-block" href="#">Fish</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Fish submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wild</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Domesticated</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Food</a></li>
        </ul>
      </li>
      <li class="nav-item"><a class="nav-link" href="#">Map</a></li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link d-inline-block" href="#">Contact</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Contact submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Email</a></li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Socials</a></li>
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
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Mammals</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Bears</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Lions</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wolves</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Cats</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Dogs</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Horses</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Reptiles</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Snakes</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Lizards</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Turtles</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Geckos</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Tortoises</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Iguanas</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Amphibians</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Frogs</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Toads</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Salamanders</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Axolotls</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Newts</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Frogs</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Birds</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Eagles</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Hawks</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Owls</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Parakeets</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Pigeons</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Chickens</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Fish</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Trout</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Carp</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Perch</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Goldfish</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Koi</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Betta</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item"><a class="nav-link" href="#">Map</a></li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Contact</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Email</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Socials</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Twitter</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Facebook</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Instagram</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;

export const threeLevelDisclosure =
  /* html */
  `
<nav id="example-menu"  aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Mammals</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Wild</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Bears</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Lions</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wolves</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Domesticated</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Cats</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Dogs</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Horses</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Food</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Reptiles</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Wild</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Snakes</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Lizards</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Turtles</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Domesticated</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Geckos</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Tortoises</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Iguanas</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Food</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Amphibians</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Wild</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Frogs</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Toads</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Salamanders</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Domesticated</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Axolotls</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Newts</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Frogs</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Food</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Birds</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Wild</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Eagles</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Hawks</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Owls</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Domesticated</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Parakeets</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Pigeons</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Chickens</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Food</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Fish</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Wild</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Trout</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Carp</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Perch</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Domesticated</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Goldfish</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Koi</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Betta</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Food</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item"><a class="nav-link" href="#">Map</a></li>
      <li class="nav-item dropdown dropdown-left">
        <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Contact</button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Email</a></li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle btn btn-link" href="#" data-bs-toggle="dropdown">Socials</button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Twitter</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Facebook</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Instagram</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;

export const threeLevelDisclosureTopLink =
  /* html */
  `
<nav id="example-menu"  aria-label="example" aria-describedby="disclaimer" class="navbar navbar-expand-lg bg-body-tertiary">
  <button id="example-toggle" aria-label="Toggle example menu" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="exampleCollapse">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link d-inline-block" href="#">Mammals</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Mammals submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Bears</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Lions</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Wolves</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Cats</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Dogs</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Horses</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link d-inline-block" href="#">Reptiles</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Reptiles submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Snakes</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Lizards</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Turtles</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Geckos</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Tortoises</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Iguanas</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link d-inline-block" href="#">Amphibians</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Amphibians submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Frogs</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Toads</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Salamanders</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Axolotls</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Newts</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Frogs</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link d-inline-block" href="#">Birds</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Birds submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Eagles</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Hawks</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Owls</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Parakeets</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Pigeons</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Chickens</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link d-inline-block" href="#">Fish</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Fish submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wild</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Trout</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Carp</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Perch</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Domesticated</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Goldfish</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Koi</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Betta</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Habitats</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Food</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can Eat</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Can't Eat</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item"><a class="nav-link" href="#">Map</a></li>
      <li class="nav-item dropdown dropdown-left">
        <a class="nav-link d-inline-block" href="#">Contact</a>
        <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Contact submenu"></button>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="nav-link dropdown-item" href="#">Email</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-item" href="#">Socials</a>
            <button class="nav-link dropdown-toggle btn btn-link d-inline-block" aria-label="Socials submenu"></button>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Twitter</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Facebook</a></li>
              <li class="nav-item"><a class="nav-link dropdown-item" href="#">Instagram</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
`;
