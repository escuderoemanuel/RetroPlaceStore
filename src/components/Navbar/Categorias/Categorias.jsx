import { Link } from "react-router-dom";
import React from "react";

const Categorias = React.memo(() => {
  return (
    <li className="nav-item dropdown">
      <button
        className="linkBtn productosItem nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Productos
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link
            className="itemProductos dropdown-item"
            to={"/category/remeras"}
          >
            Remeras
          </Link>
        </li>
        <li>
          <Link className="itemProductos dropdown-item" to={"/category/tazas"}>
            Tazas
          </Link>
        </li>
        <li>
          <Link className="itemProductos dropdown-item" to={"/category/gorras"}>
            Gorras
          </Link>
        </li>
      </ul>
    </li>
  );
});

export default Categorias;
