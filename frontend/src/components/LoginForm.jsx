import React, { useState } from "react";
import * as userService from "../services/LoginService";
import { useHistory } from "react-router-dom";

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"

// Importamos los estilos de color del boton
import theme from "../ThemeConfig"

export const LoginForm = () => {

  // Sección para personalizar el boton a usar

  const useStyles = makeStyles((theme) => ({
    botonPersonalizado: {
      margin: theme.spacing(1),      
      textTransform: 'none',
    },
  }));
  
  const classes = useStyles();

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
        <h2>Ingrese a ReadIt</h2>
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
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" type="submit" className={classes.botonPersonalizado}>
          Iniciar Sesión
          </Button>
        </ThemeProvider>
      </form>
    </>
  );
};
