import React, { useState } from "react";
import * as userService from "../services/LoginService";
import { useHistory } from "react-router-dom";

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, FormControl, FormControlLabel, Button, Checkbox, InputLabel, Input } from "@material-ui/core"

// Importamos los estilos de color del boton
import theme from "../ThemeConfig"

export const LoginForm = () => {

  // Sección para personalizar componentes UI

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
      <Container maxWidth="xl" component="div" className='backgroundYellow'>
        <form onSubmit={handleSubmit} className='formLogin'>
          Ingrese a ReadIt
          <FormControl>
            <InputLabel htmlFor='username'>Usuario</InputLabel>
            <Input
              type="text"
              id='username'
              name="username"
              onChange={handleInputChange}
              placeholder="Usuario"
            />          
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='password'>Contraseña</InputLabel>
            <Input
              type="text"
              id='password'
              name="password"
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </FormControl>
          <FormControlLabel
            control={
              <ThemeProvider theme={theme}>
                <Checkbox value="Recuerdame" color="primary"/>
              </ThemeProvider>}
            label="Recuerdame"
          />
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" type="submit" className={classes.botonPersonalizado}>
            Iniciar Sesión
            </Button>
          </ThemeProvider>
        </form>
      </Container>
    </>
  );
};
