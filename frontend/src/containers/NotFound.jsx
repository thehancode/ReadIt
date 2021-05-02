import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>NotFound</h1>
      <Link to="/home">Volver a la página principal</Link>
    </>
  );
};

export default NotFound;
