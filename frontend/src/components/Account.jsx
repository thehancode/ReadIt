import React, { useState, useEffect } from "react";
import * as getUserInfo from "../services/InfoUserService";
import { useHistory } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Clock from "./Clock";

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

// Importamos los estilos de color del boton
import theme from "../ThemeConfig";

const Account = () => {
  // Sección para personalizar componentes UI

  const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "hsl(50, 70%, 96%)",
      width: "100vw",
      padding: "1em",
      [theme.breakpoints.down("xs")]: {
        'flex-direction':'column',
      },
    },
    botonPersonalizado: {
      //margin: "0 2em 1.5em 2em",
      "&:hover":{
        backgroundColor:"#E14658",
      },
      backgroundColor:"#22252C",
      margin:"2em",
      backgroundImage: "none",
      textTransform: "none",
    },
    tituloForm: {
      fontSize: "36px",
      fontWeight: 400,
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
    clock: {
      'flexGrow':"2",
    },
    formLogin: {
      'padding':"5%",
      'marginLeft':"10%",
      "display" : "flex",
      "flex-direction": "column",
      " width": "30%",
      "background-color": "#fff",
      "box-shadow": "0px 2px 5px 1px rgba(0, 0, 0, 0.2)",
    }
  }));

  const classes = useStyles();

  const history = useHistory();

  const initialState = {
    username: "",
    email: "",
    newPassword: "",
  };

  const [user, setUser] = useState(initialState);
  const handleInputChange = (e) => {
    console.log("handle Input")
    console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit")
    console.log(user);
    getUserInfo.getUserInfo(user).then(
      () => {
        history.push("/home");
      },
      (error) => {
        alert("Usuario incorrecto");
      }
    );
  };

  useEffect(()=>{
    let userID = JSON.parse(localStorage.getItem('user')).id;
    console.log("userID",userID);
    getUserInfo.getUserInfo(userID).then(
      (response) => {
        setUser({...response});
      },
      (error) => {
        console.log(error)
        alert("Usuario ID incorrecto");
      }
    );
  },[])
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.offset}></div>
      <Container maxWidth="xl" component="div" className={classes.root}>
        <form onSubmit={handleSubmit} className={classes.formLogin}>
          <Typography
            variant="h1"
            color="initial"
            className={classes.tituloForm}
          >
            Editar Cuenta
          </Typography>
          <FormControl className={classes.formLogin__element}>
            <InputLabel htmlFor="nombre" shrink>Nombre</InputLabel>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              required={true}
              onChange={handleInputChange}
              value={user.username}
            />
          </FormControl>

          <FormControl className={classes.formLogin__element}>
            <InputLabel htmlFor="apellido" shrink>Apellidos</InputLabel>
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
            <InputLabel htmlFor="correo" shrink>Correo Electrónico</InputLabel>
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
            <InputLabel htmlFor="username" shrink>Usuario</InputLabel>
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
            <InputLabel htmlFor="password" shrink>Contraseña</InputLabel>
            <Input
              type="password"
              id="password"
              name="password"
              required={true}
              onChange={handleInputChange}
              value={user.newPassword}
            />
          </FormControl>
          <FormControl className={classes.formLogin__element}>
            <InputLabel htmlFor="passwordValidate" shrink>
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
            Guardar Cambios
          </Button>
        </form>
        <Clock className={classes.clock}></Clock>
      </Container>
    </ThemeProvider>
  );
};

export default Account;