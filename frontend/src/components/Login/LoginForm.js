import React, { useEffect, useState } from "react";
import * as userService from "./LoginService";

export const LoginForm = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [user, setLogin] = useState(initialState);
  const handleInputChange = (e) => {
    setLogin({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userService.login(user).then(
      () => {
        console.log("HELLO OK");
      },
      (error) => {
        console.log("WORLD ERROR");
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        Usuario
        <br />
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          placeholder="Usuario"
        />
        <br />
        Contraseña
        <br />
        <input
          type="text"
          name="password"
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
        <br />
        <input type="submit" value="Ingresar" />
      </form>
    </>
  );
};
