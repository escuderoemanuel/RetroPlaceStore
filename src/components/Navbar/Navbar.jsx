import Logo from "./Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";
import Categorias from "./Categorias/Categorias";
import { BtnDarkMode } from "./BtnDarkMode/BtnDarkMode";

/* CSS */
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md nav">
      <div className="container justify-items-center align-items-center">
        <Logo />
        <button
          className="menu navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="navHeader collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navMenu navbar-nav me-auto mb-2 mb-lg-0">
            <Secciones />
            <Categorias />
          </ul>
          <CartWidget />
          <BtnDarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
