const MainNavigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container justify-content-between">
          <div class="d-flex">
            <a class="navbar-brand" href="#">
             <img alt="" src=""/>
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
                Why Edu
              </a>
            </li>
          </ul>
          <ul class="navbar-nav flex-row">
            <li class="nav-item me-3 me-lg-1">
              <a class="nav-link btn btn-outline btn-rounded px-4" href="/log-in">
                Login
              </a>
            </li>
            <li class="nav-item me-3 me-lg-1">
              <a
                class="nav-link btn btn-warning btn-rounded px-4"
                href="#"
                style={{ backgroundColor: "#0072A1", color: "white" }}
              >
                Enroll
              </a>
            </li>
          </ul>
        </div>
      </nav>
    
    )
}

export default MainNavigation
