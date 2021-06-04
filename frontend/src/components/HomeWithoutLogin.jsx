import React from "react";

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"
import personBook from "../assets/ILoveBooks.svg"

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
    <div className='slider'>
      <div className='slider-welcome'>    
        <h1 className='slider-welcome--title'>
          ReadIt
        </h1>
        <spam className='slider-welcome--phrase'>Tu biblioteca al alcanze de tus manos</spam>
        <div className='slider-welcome--button'>
          <ThemeProvider theme={theme}>
                <Button variant="contained" color="secondary" type="submit" size="large" className={classes.botonPersonalizado}>
                Registrate
                </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className='slider-image'>
        <img src={personBook} alt="Persona leyendo un libro"/>
      </div>
    </div>
  );
};
