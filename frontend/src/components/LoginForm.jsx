import React, { useState } from "react";
import GoogleLogin from 'react-google-login';
import * as userService from "../services/LoginService";
import { useHistory } from "react-router-dom";
import { getCurrentUser } from "../services/LoginService";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import {
  Container,
  FormControl,
  Typography,
  FormControlLabel,
  Button,
  Checkbox,
  InputLabel,
  Input,
  Link,
  Divider,
} from "@material-ui/core";

// Importamos los principales componentes
import Footer from "./Footer";
import NavbarLogin from "./NavbarLogin";

// Importamos los estilos de color del boton
import theme from "../ThemeConfig";

export const LoginForm = () => {
  // Sección para personalizar componentes UI

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
        padding: "0",
      },
    },
    botonPersonalizado: {
      margin: "0 2em 1.5em 2em",
      backgroundImage: "none",
      textTransform: "none",
      [theme.breakpoints.down("xs")]: {
        margin: "10px",
      },
    },
    botonPersonalizadoGoogle: {
      margin: "0 2.2em 1.5em 2.2em",
      backgroundImage: "none",
      textTransform: "none",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        margin: "10px",
      },
    },
    tituloForm: {
      fontSize: "36px",
      fontWeight: 400,
      [theme.breakpoints.down("xs")]: {
        fontSize: "28px",
        fontWeight: 400,
      },
    },
    formLogin__element: {
      margin: ".5em 0",
      [theme.breakpoints.down("xs")]: {
        margin: "0.2em",
      },
    },
    labelForm: {
      borderBottom: "2px solid #3f51b5",
    },
    register: {
      "&:hover": {
        color: "#E14658",
      },
    },
    linkRegister: {
      margin: "1em 0 0 0",
      [theme.breakpoints.down("xs")]: {
        margin: "10px",
      },
    }
  }));

  const state = {
    currentUser: getCurrentUser(),
  };

  const { currentUser } = state;

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

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      {!currentUser ? (
        <div>
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
                  Ingrese a ReadIt
                </Typography>
                <FormControl className={classes.formLogin__element}>
                  <InputLabel htmlFor="username">Usuario</InputLabel>
                  <Input
                    type="text"
                    required={true}
                    id="username"
                    name="username"
                    onChange={handleInputChange}
                    placeholder="Usuario"
                  />
                </FormControl>
                <FormControl className={classes.formLogin__element}>
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <Input
                    required={true}
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Contraseña"
                  />
                </FormControl>
                <FormControlLabel
                  className={classes.formLogin__element}
                  control={<Checkbox value="Recuerdame" color="primary" />}
                  label="Recuerdame"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  className={classes.botonPersonalizado}
                >
                  Iniciar Sesión
                </Button>
                <GoogleLogin
                  clientId="134332300009-d6n1b6e4fu7r20gkahroqd426vsebmqi.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  className={classes.botonPersonalizadoGoogle}
                >Ingresar mediante Google</GoogleLogin>
                <Divider></Divider>
                <p className={classes.linkRegister}>
                  ¿Aún no tienes cuenta?{" "}
                  <Link
                    href="/registro"
                    color="inherit"
                    className={classes.register}
                  >
                    Regístrate aquí
                  </Link>
                </p>
              </form>
            </Container>
          </ThemeProvider>
          <Footer />
        </div>
      ) : (
        history.push("/home")
      )}
    </>
  );
};
