import React, { useState } from "react";
import * as userService from "../services/LoginService";
import { useHistory } from "react-router-dom";

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, FormControl, Typography, FormControlLabel, Button, Checkbox, InputLabel, Input } from "@material-ui/core"

// Importamos los principales componentes
import Footer from "./Footer"
import NavbarLogin from "./NavbarLogin";

// Importamos los estilos de color del boton
import theme from "../ThemeConfig"

export const LoginForm = () => {

  // Sección para personalizar componentes UI

  const useStyles = makeStyles((theme) => ({
    root:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'hsl(50, 70%, 96%)',
      width: '100vw',
      height: 'calc(100vh - 64px)',
      padding: '1em',
    },
    botonPersonalizado: {
      margin: theme.spacing(1),      
      textTransform: 'none',
    },
    tituloForm: {
      fontSize: '48px',
      fontWeight: 400,
    },
    labelForm: {
      borderBottom: '2px solid #3f51b5',
    }
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
      <NavbarLogin/>      
      <ThemeProvider theme={theme}>
        <div className={classes.offset}></div>
        <Container maxWidth="xl" component="div" className={classes.root}>
          <form onSubmit={handleSubmit} className='formLogin'>
            <Typography variant="h1" color="initial" className={classes.tituloForm}>Ingrese a ReadIt</Typography>
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
                type="password"
                id='password'
                name="password"
                onChange={handleInputChange}
                placeholder="Contraseña"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="Recuerdame" color="primary"/>}
              label="Recuerdame"
            />
            <Button variant="contained" color="primary" type="submit" className={classes.botonPersonalizado}>
              Iniciar Sesión
            </Button>
          </form>
        </Container>
      </ThemeProvider>
      <Footer/>
    </>
  );
};
