import React, { useState } from "react";
import * as userService from "../services/RegistroService";
import { getCurrentUser } from "../services/LoginService";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import {
  Container,
  FormControl,
  Typography,
  Button,
  InputLabel,
  Input,
} from "@material-ui/core";

// Importamos los principales componentes
import Footer from "./Footer";
import NavbarLogin from "./NavbarLogin";

// Importamos los estilos de color del boton
import theme from "../ThemeConfig";

export const RegistroForm = () => {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "hsl(50, 70%, 96%)",
      width: "100vw",
      height: "calc(100vh - 64px)",
      padding: "1em",
      [theme.breakpoints.down("xs")]: {
        padding: "0.8em",        
        height: "auto",
      },
    },
    botonPersonalizado: {
      margin: "2em 2em 1em 2em",
      backgroundImage: "none",
      textTransform: "none",
      [theme.breakpoints.down("xs")]: {
        margin: "1em 1em 0 1em",
      },
    },
    tituloForm: {
      fontSize: "36px",
      fontWeight: 400,
      [theme.breakpoints.down("xs")]: {
        fontSize: "26px",
        fontWeight: 400,
      },
    },
    formLogin__element: {
      margin: ".5em 0",
    },
    labelForm: {
      borderBottom: "2px solid #3f51b5",
    },
    register: {
      "&:hover": {
        color: "#E14658",
      },
    },
  }));

  const state = {
    currentUser: getCurrentUser(),
  };

  const { currentUser } = state;

  const classes = useStyles();

  const initialState = {
    nombre: "",
    apellido: "",
    correo: "",
    username: "",
    password: "",
    passwordValidate: "",
  };

  const [user, setUser] = useState(initialState);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordValidate) {
      userService.createUser({...user,timer:1500}).then(
        (value) => {
          setUser(initialState);
          alert("Usuario registrado");
        },
        (error) => {
          alert("El usuario ya existe");
        }
      );
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <>
      {!currentUser ? (
        <>
          <NavbarLogin />
          <ThemeProvider theme={theme}>
            <div className={classes.offset}></div>
            <Container maxWidth="xl" component="div" className={classes.root}>
              <form onSubmit={handleSubmit} className="formLogin">
                <Typography
                  variant="h1"
                  color="initial"
                  className={classes.tituloForm}
                >
                  Registro de Usuario
                </Typography>
                <FormControl className={classes.formLogin__element}>
                  <InputLabel htmlFor="nombre">Nombre</InputLabel>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required={true}
                    onChange={handleInputChange}
                    value={user.nombre}
                  />
                </FormControl>

                <FormControl className={classes.formLogin__element}>
                  <InputLabel htmlFor="username">Apellidos</InputLabel>
                  <Input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required={true}
                    onChange={handleInputChange}
                    value={user.apellido}
                  />
                </FormControl>

                <FormControl className={classes.formLogin__element}>
                  <InputLabel htmlFor="username">Correo Electrónico</InputLabel>
                  <Input
                    type="email"
                    id="correo"
                    name="correo"
                    required={true}
                    onChange={handleInputChange}
                    value={user.correo}
                  />
                </FormControl>
                <FormControl className={classes.formLogin__element}>
                  <InputLabel htmlFor="username">Usuario</InputLabel>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    required={true}
                    onChange={handleInputChange}
                    value={user.username}
                  />
                </FormControl>
                <FormControl className={classes.formLogin__element}>
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    required={true}
                    onChange={handleInputChange}
                    value={user.password}
                  />
                </FormControl>
                <FormControl className={classes.formLogin__element}>
                  <InputLabel htmlFor="passwordValidate">
                    Confirmar Contraseña
                  </InputLabel>
                  <Input
                    type="password"
                    id="passwordValidate"
                    name="passwordValidate"
                    required={true}
                    onChange={handleInputChange}
                    value={user.passwordValidate}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.botonPersonalizado}
                >
                  Registrarte
                </Button>
              </form>
            </Container>
          </ThemeProvider>
          <Footer />
        </>
      ) : (
        history.push("/home")
      )}
    </>
  );
};
