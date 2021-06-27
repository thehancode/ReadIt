import React from "react";

import { getCurrentUser } from "../services/LoginService";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {
  Hidden,
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemText,
  Link,
  Typography,
  Container
} from "@material-ui/core";

import { Link as LinkS } from "react-scroll";
import  HomeContent from "./HomeContent";
import  BookContent from "./BookContent";

//import Fade from "react-reveal/Fade";

// Importamos los principales componentes
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";

// Importamos los estilos de color del boton
// import theme from "../ThemeConfig";

export const HomePage = () => {
  const history = useHistory();

  // El usuario que se logea que da guardado aqui
  const state = {
    currentUser: getCurrentUser(),
  };

  const { currentUser } = state;

  // Sección para personalizar componentes UI

  const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
      display: "flex",
    },
    botonPersonalizado: {
      margin: theme.spacing(1),
      backgroundImage: "none",
      textTransform: "none",
    },
    drawer: {
      [theme.breakpoints.down("sm")]: {
        width: 240,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      [theme.breakpoints.down("sm")]: {
        width: 240,
        flexShrink: 0,
        color: "#FFF",
        background: "hsl(222, 13%, 15%)",
      },
    },
    content: {
      flexGrow: 1,
    },
    submenu: {
      margin: "0 1.5em",
      "&:active": {
        color: "#C0B3A0",
      },
    },
    title: {
      color: '#3F3250',
      fontWeight: '400',
      margin: '20px',
    },    
    subtitle: {
      textAlign: 'left',
      color: '#3F3250',
      paddingLeft: '1em',
      fontWeight: '300',
      margin: '10px',
    }
  }));

  const classes = useStyles();

  // Funciones para abrir y cerrar el menu responsive
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  // En caso currentUser sea nulo quiere decir que no hay usuario logaedo por lo tanto no debe mostrar home sino redireccionar a login
  return (
    <>
      {currentUser ? (
        <div className={classes.root}>
          <NavbarHome openDrawer={handleDrawerToggle} />
          {/* Esta parte es del menu responsive */}
          <Hidden smUp>
            <Drawer
              className={classes.drawer}
              variant="temporary"
              classes={{ paper: classes.drawerPaper }}
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              <div className={classes.offset}></div>
              <Divider></Divider>
              <List component="nav">
                <ListItem button>
                  <ListItemText>
                    <LinkS
                      className={classes.submenu}
                      to="home-slider"
                      spy={true}
                      smooth={true}
                      offset={-56}
                      duration={1000}
                    >
                      Inicio
                    </LinkS>
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <LinkS
                      className={classes.submenu}
                      to="home-what-is-readit"
                      spy={true}
                      smooth={true}
                      offset={-56}
                      duration={1000}
                    >
                      ¿Qué es readIt?
                    </LinkS>
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <LinkS
                      className={classes.submenu}
                      to="home-services"
                      spy={true}
                      smooth={true}
                      offset={-56}
                      duration={1000}
                    >
                      Servicios
                    </LinkS>
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <Link
                      href="/login"
                      color="inherit"
                      underline="none"
                      className={classes.submenu}
                    >
                      Ingresar
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          {/* Cuerpo de la página */}
          <main className={classes.content}>
            {
              (true)?
              <HomeContent/>
              :<BookContent/>
            }
            <Footer />
          </main>
        </div>
      ) : (
        history.push("/login")
      )}
    </>
  );
};
