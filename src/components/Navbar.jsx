import '../styles/Navbar.css'
import logo from '../assets/logo-motortronics-blanco.png'


export function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="navbar-container">
          <a class="navbar-brand" href="#"><img src={logo} alt="Logo Motortronics" className='logo' /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-list" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">INICIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">PRESUPUESTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">CONTACTO</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
  
