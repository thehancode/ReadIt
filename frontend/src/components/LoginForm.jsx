import React, { useState } from "react";
import * as userService from "../services/LoginService";
import { useHistory } from "react-router-dom";

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"

export const LoginForm = () => {

  // Sección para personalizar el boton a usar

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),      
      textTransform: 'none',
      fontSize: '16px',
    },
  }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#e76b79',
        main: '#22252C',
        dark: '#E14658',
        contrastText: '#fff',
      },
    },
  });
  
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
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" type="submit" className={classes.margin}>
          Iniciar Sesión
          </Button>
        </ThemeProvider>
      </form>
    </>
  );
};
