import React from "react";

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button, Container } from "@material-ui/core"
import personBook from "../assets/ILoveBooks.svg"
import lector from "../assets/lectorWhatIs.webp"

import Navbar from "./Navbar";

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
      <Navbar />
      <div className='home-slider' id='home-slider'>
        <div className='home-slider-welcome'>    
          <h1 className='home-slider-welcome--title animate__animated animate__fadeIn animate__slower'>
            ReadIt
          </h1>
          <p className='home-slider-welcome--phrase animate__animated animate__backInLeft animate__slow'>Tu biblioteca al alcance de tus manos</p>
          <div className='home-slider-welcome--button animate__animated animate__fadeInDown animate__slow'>
            <ThemeProvider theme={theme}>
                  <Button variant="contained" color="secondary" type="submit" size="large" className={classes.botonPersonalizado}>
                  REGISTRATE
                  </Button>
            </ThemeProvider>
          </div>
        </div>
        <div className='home-slider-image'>
          <img className='animate__animated animate__fadeIn animate__slower' src={personBook} alt="Persona leyendo un libro"/>
        </div>
      </div>
      <Container maxWidth='xl' component='section' id='home-what-is-readit'>
        <div className='home-what-is-readit'>
          <div className='home-what-is-readit-text'>
            <h2>¿Qué es ReadIt?</h2>
            <p>
            ReadIt es un aplicativo web que tiene la finalidad de mejorar tu experiencia a la hora de realizar 
            lecturas mediantes las diferentes herramientas que disponibles que ofrecemos.  
            </p>
          </div>
          <div className='home-what-is-readit-image'>
            <img className='home-what-is-readit-image__img' src={lector} alt="Tablet"/>
          </div>
        </div>
      </Container>
      <Container maxWidth='xl' component='section' className='home-services' id='home-services'>
        <div className='home-services-text'>
          <h2>¿Qué es ReadIt?</h2>
          <p>
          ReadIt es un aplicativo web que tiene la finalidad de mejorar tu experiencia a la hora de leer
          mediante las diferentes herramientas a su disposición que ofrecemos.  
          </p>
        </div>
        <div className='home-services-image'>

        </div>
      </Container>
    </>
  );
};
