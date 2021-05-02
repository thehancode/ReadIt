import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/read">Leer libro</Link>
      <Link to="/">Iniciar sesion</Link>
    </div>
  );
};

export default Navbar;
