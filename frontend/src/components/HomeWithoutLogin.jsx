import React from "react";

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"

// Importamos los estilos de color del boton
import theme from "../ThemeConfig"

export const HomeWithoutLogin = () => {

  // Sección para personalizar componentes UI

  const useStyles = makeStyles((theme) => ({
    botonPersonalizado: {
      margin: theme.spacing(1),      
      textTransform: 'none',
    },
  }));
  
  const classes = useStyles();


  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="secondary" type="submit" className={classes.botonPersonalizado}>
          Iniciar Sesión
        </Button>
      </ThemeProvider>
    </>
  );
};
