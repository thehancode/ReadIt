import React, { useState, useEffect } from "react";
import * as getUserInfo from "../services/InfoUserService";
import * as update from "../services/UserUpdateService";
//import { useHistory } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Clock from "./Clock";
import Notification from "./Notification";

import {
  Container,
  FormControl,
  Typography,
  Button,
  InputLabel,
  Input,
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
      //width: "100vw",
      padding: "1em",
      [theme.breakpoints.down("md")]: {
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
      "border-radius": "5%",
      'padding':"5%",
      'marginLeft':"10%",
      "display" : "flex",
      "flex-direction": "column",
      " width": "30%",
      "background-color": "#fff",
      "box-shadow": "0px 2px 5px 1px rgba(0, 0, 0, 0.2)",
      [theme.breakpoints.down("md")]: {
        'flex-direction':'column',
        " width": "70%",
        'marginRight':"10%",
      },
    }
  }));

  const classes = useStyles();

  //const history = useHistory();

  const initialState = {
    username: "",
    email: "",
    newPassword: "",
  };

  const [user, setUser] = useState(initialState);
  const [userTimer, setUserTimer] = useState(0);
  const handleInputChange = (e) => {
    //console.log("handle Input")
    //console.log(userTimer)
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle update");
    console.log(user);
    update.updateUser({...user,timer:userTimer}).then(
      (response) => {
        //history.push("/home");
        //console.log(response)
        //alert("usuario actualizado");
        setMensaje("Usuario actualizado");
        setTipo("success");
      },
      (error) => {
        console.log("error al actualizar",error)
        //alert("Usuario incorrecto");
        setMensaje("Usuario incorrecto");
        setTipo("error")
      }
    );
    setOpen(true);
  };

  useEffect(()=>{
    let userID = JSON.parse(localStorage.getItem('user')).id;
    getUserInfo.getUserInfo(userID).then(
      (response) => {
        console.log("user ",response)
        setUser({...response});
        setUserTimer(response.timer)
      },
      (error) => {
        console.log(error)
        //alert("Usuario ID incorrecto");
        setMensaje("Usuario ID incorrecto");
        setTipo("error");
        setOpen(true);
      }
      
    );
  },[])
  return (
    <ThemeProvider theme={theme}>
      <Notification setOpen = {setOpen} mensaje= {mensaje} open={open} tipo = {tipo}></Notification>
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
          <Divider></Divider>
          <FormControl className={classes.formLogin__element}>
            <InputLabel htmlFor="nombre" shrink>Nombre</InputLabel>
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
        <Clock className={classes.clock} function={setUserTimer} timer={userTimer} submit={handleSubmit}></Clock>
      </Container>
    </ThemeProvider>
  );
};

export default Account;