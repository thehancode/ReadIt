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
} from "@material-ui/core";

import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import  HomeContent from "./HomeContent";
import  BookContent from "./BookContent";
import  Account from "./Account";
//import Fade from "react-reveal/Fade";

// Importamos los principales componentes
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";
import BookReader from "./BookReader";

// Importamos los estilos de color del boton
// import theme from "../ThemeConfig";

export const HomePage = (props) => {
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
      padding: "8px 40px",
      "&:active": {
        color: "#C0B3A0",
      },
    },
    submenu_text: {
      position: 'relative',
      bottom: '6px',
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

  // Acciones para los botones del menú responsive
  const handleClose = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  const handleMenu = (event)=> {
    if (event.target.textContent === " Biblioteca") {
      history.push("/home");
    } else if (event.target.textContent === " Mis libros") {
      history.push("/books");
    } else if (event.target.textContent === " Mis Notas") {
      history.push("/notes");
    } else if (event.target.textContent === " Configuración") {
      history.push("/account");
    }
  }

  const [mobileOpen, setMobileOpen] = React.useState(false);

  // En caso currentUser sea nulo quiere decir que no hay usuario logeado por lo tanto no debe mostrar home sino redireccionar a login
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
                <ListItem button onClick={handleMenu} className={classes.submenu}>
                  <ListItemText>
                    <CollectionsBookmarkIcon/><span  className={classes.submenu_text}> Biblioteca</span>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={handleMenu} className={classes.submenu}>
                  <ListItemText>
                    <MenuBookIcon/><span  className={classes.submenu_text}> Mis libros</span>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={handleMenu} className={classes.submenu}>
                  <ListItemText>
                    <CreateIcon/><span  className={classes.submenu_text}> Mis Notas</span>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={handleMenu} className={classes.submenu}>
                  <ListItemText>
                    <SettingsIcon/><span  className={classes.submenu_text}> Configuración</span>
                  </ListItemText>
                </ListItem>
                <ListItem button onClick={handleClose} className={classes.submenu}>
                  <ListItemText>
                    <ExitToAppIcon/><span  className={classes.submenu_text}> Salir</span>
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          {/* Cuerpo de la página */}
          <main className={classes.content}>
            {(props.component==="HOME")?<HomeContent/> : <div></div>}
            {(props.component==="BOOK")? <BookContent/> : <div></div>}
            {(props.component==="ACCOUNT")? <Account/>  : <div></div>}
            {(props.component==="READ")? <BookReader/> : <div></div>}
            <Footer />
          </main>
        </div>
      ) : (
        history.push("/login")
      )}
    </>
  );
};
