const MainNavigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container justify-content-between">
          <div class="d-flex">
            <a class="navbar-brand" href="#">
             <h4>Hassan</h4>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
  
          <ul class="navbar-nav flex-row d-none d-md-flex">
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link" href="#">
                How it Works
              </a>
            </li>
          </ul>
          <ul class="navbar-nav flex-row">
            <li class="nav-item me-3 me-lg-1">
              <a
                class="nav-link btn btn-danger btn-rounded  text-white px-4"
                href="#"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>
    
    )
}

export default MainNavigation
