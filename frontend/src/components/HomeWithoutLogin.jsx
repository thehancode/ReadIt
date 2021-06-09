import React from "react";

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button, Container, Hidden, List, ListItem, Drawer, Divider, ListItemText, Box, Grid } from "@material-ui/core"
import Fade from 'react-reveal/Fade';

import personBook from "../assets/ILoveBooks.svg"
import lector from "../assets/lectorWhatIs.webp"

// Importamos los principales componentes
import Navbar from "./Navbar";
import Footer from "./Footer"

// Importamos los estilos de color del boton
import theme from "../ThemeConfig"

export const HomeWithoutLogin = () => {

  // Sección para personalizar componentes UI

  const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
      display:'flex',
    },
    botonPersonalizado: {
      margin: theme.spacing(1),      
      textTransform: 'none',
    },
    drawer: {
      [theme.breakpoints.down('sm')]: {
        width: 240,
        flexShrink: 0,      
      },
    },
    drawerPaper: {
      [theme.breakpoints.down('sm')]: {
        width: 240,
        flexShrink: 0,
        color: '#FFF',
        background: "hsl(222, 13%, 15%)"
      },
    },
    content:{
      flexGrow: 1,
    },
  }));
  
  const classes = useStyles();

  // Funciones para abrir y cerrar el menu responsive
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen)
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <div className={classes.root}>
        <Navbar openDrawer={handleDrawerToggle}/>
        {/* Esta parte es del menu responsive */}
        <Hidden smUp>
          <Drawer 
            className={classes.drawer} 
            variant='temporary' 
            classes={{paper: classes.drawerPaper}} 
            open={mobileOpen}
            onClose={handleDrawerToggle}>
            <div className={classes.offset}></div>
            <Divider></Divider>
            <List component='nav'>
              <ListItem button><ListItemText primary='Inicio'></ListItemText></ListItem>
              <ListItem button><ListItemText primary='¿Qué es ReadIt?'></ListItemText></ListItem>
              <ListItem button><ListItemText primary='Servicios'></ListItemText></ListItem>
              <ListItem button><ListItemText primary='Ingresar'></ListItemText></ListItem>
            </List>
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.offset}></div>
          <div className='home-slider' id='home-slider'>
            <div className='home-slider-welcome'>    
              <h1 className='home-slider-welcome--title animate__animated animate__fadeIn animate__slower' anchor='left'>
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
                <h2><Fade cascade>¿Qué es ReadIt?</Fade></h2>
                <p>
                  <Fade cascade>ReadIt es un aplicativo web que tiene la finalidad de mejorar tu experiencia a la hora de realizar 
                lecturas mediantes las diferentes herramientas que disponibles que ofrecemos.</Fade>
                </p>
              </div>
              <div className='home-what-is-readit-image'>
                <Fade cascade>
                  <img className='home-what-is-readit-image__img' src={lector} alt="Tablet"/>
                </Fade>
              </div>
            </div>
          </Container>
          <Container maxWidth='xl' component='section' className='home-services' id='home-services'>
            <div className='home-services-text'>
                <h2><Fade cascade>Servicios</Fade></h2>
                <p>
                  <Fade>
                    ReadIt cuenta con diferentes servicio entre los principales tenemos:
                  </Fade>
                </p>
            </div>
            <Grid container direction='row' justify='space-around'>              
              <Grid item xs={12} sm={6} lg={4}>
                <Fade cascade>
                  <Box bgcolor='#3F3250' borderRadius='30px' width='200px' height='250px' color='#FFF' padding='20px' margin='2em auto' boxShadow='0 0 6px hsl(266, 23%, 12%)'>
                    <h3>Biblioteca Virtual</h3>
                    <p>Presentamos un catalogo de diferentes libros mediante app de Proyecto Gutenberg, los cuales están a libre disposición para su posterior lectura. </p>
                  </Box>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Fade cascade>
                  <Box bgcolor='#3F3250' borderRadius='30px' width='200px' height='250px' color='#FFF' padding='20px' margin='2em auto' boxShadow='0 0 6px hsl(266, 23%, 12%)'>
                    <h3>Visualizador de Libros</h3>
                    <p>Tenemos nuestro propio visualizador, mediante el cual ofrecemos diferentes herramientas para mejorar la experiencia al leer. </p>
                  </Box>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Fade cascade>
                  <Box bgcolor='#3F3250' borderRadius='30px' width='200px' height='250px' color='#FFF' padding='20px' margin='2em auto' boxShadow='0 0 6px hsl(266, 23%, 12%)'>
                    <h3>Almacenamiento</h3>
                    <p>Contamos con un almacenamiento mediante el cual podrás almacenar libros, notas de voz, apuntes, etc y luego organizarlo para el gusto de nuetros usuarios. </p>
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </Container>          
          <Footer/>
        </main>
      </div>  
    </>
  );
};
