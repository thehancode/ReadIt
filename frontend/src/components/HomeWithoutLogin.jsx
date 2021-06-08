import React from "react";

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button, Container, Hidden, List, ListItem, Drawer, Divider, ListItemText, Box } from "@material-ui/core"
import personBook from "../assets/ILoveBooks.svg"
import lector from "../assets/lectorWhatIs.webp"

import Navbar from "./Navbar";

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
            <h2>Servicios</h2>
            <Box bgcolor='#3F3250' border='30px'>Holi</Box>
          </Container>            
        </main>
      </div>  
    </>
  );
};
