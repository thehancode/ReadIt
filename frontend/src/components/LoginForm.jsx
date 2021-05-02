import React, { useState } from "react";
import * as userService from "../services/LoginService";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const history = useHistory();

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
        history.push("/home");
      },
      (error) => {
        alert("Usuario incorrecto");
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
