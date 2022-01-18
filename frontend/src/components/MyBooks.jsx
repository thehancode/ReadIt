import React, { useEffect, useState } from "react";

import { getCurrentUser } from "../services/LoginService";
import * as libroService from "../services/LibroService";
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
} from "@material-ui/core";
import { Typography } from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import CreateIcon from "@material-ui/icons/Create";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MediaCard from "./CardsForBooks.jsx";

//import Fade from "react-reveal/Fade";

// Importamos los principales componentes
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";

// Importamos los estilos de color del boton
// import theme from "../ThemeConfig";

export const MyBooks = (props) => {
  const [libros, setAnotaciones] = useState([]);
  const libs =              [
    {
      "_id": "60dbb1278b62f60f880bd518",
      "nombreLibro": "The Thing in the Truck",
      "descripcion": "Joe Loftus and I were driving the big semi-trailer back from Montauk that night after delivering a load of fishing gear to one of the big resorts out there and wondering if we'd be able to pick up a truckload of anything on the way back to increase the take when Joe spotted this sign.\nIt was one of those standard hand-painted Return Load signs, so we pulled in and I climbed down from the cab while Joe remained behind the wheel, ready to roll if they had nothing for us.",
      "autor": "Marlowe, Stephen",
      "idLibro": 65676,
      "valoracion": 4,
      "createdAt": "2021-06-29T23:47:51.417Z",
      "updatedAt": "2021-06-29T23:47:51.417Z"
    },
    {
      "_id": "60dbb12c8b62f60f880bd519",
      "nombreLibro": "Fables of Flowers for the Female Sex",
      "descripcion": "When I survey the divine simplicity and blooming attractions, that are displayed amongst the variegated tribes of the vegetable creation, I cease to wonder, that Queens forego, for a while, the compliments of a nation, or withdraw from the glitter of a court, to be attended with the more splendid equipage of a bed of flowers; where nothing seems wanting but the power of speech, to make them become the most pleasing Monitors.",
      "autor": "Wynne, John Huddlestone",
      "idLibro": 65677,
      "valoracion": 4.5,
      "createdAt": "2021-06-29T23:47:56.682Z",
      "updatedAt": "2021-06-29T23:47:56.682Z"
    },
    {
      "_id": "60dbb12e8b62f60f880bd51a",
      "nombreLibro": "La Montálvez",
      "descripcion": "Pulcro y rollizo; suave y risueño, y, al mismo tiempo, solemne y espetado; vulgar obscuro de meollo; rico, huérfano y libre; sin nervios ni hieles en el cuerpo, ni señal de polvo de las aulas en la ropa; vicioso a la chita callando; enamorado de su estampa, de su talento, de su elocuencia, y especialmente de los timbres de su linaje, y dejándose correr, con todas estas ventajas, a lo largo de la vida en lo más substancioso de ella, sin otros fines que el regalo de la querida persona, con la satisfacción de todos los apetitos, pero sin prefacios de grandes desvelos, ni epílogos de incómodas harturas... eso era el caballero marqués de Montálvez (título con polillas, de puro rancio); eso era en los tiempos de su mocedad; y así fue tirando el pobre, sin visible quebranto en la salud, aunque con muchos y muy gordos en el caudal, hasta que le apuntaron la calvicie en el cogote y la pata de gallo en los ojos.",
      "autor": "Wynne, John Huddlestone",
      "idLibro": 25812,
      "valoracion": 4.4,
      "createdAt": "2021-06-29T23:47:58.102Z",
      "updatedAt": "2021-06-29T23:47:58.102Z"
    },
    {
      "_id": "60dbb12f8b62f60f880bd51b",
      "nombreLibro": "Los Hombres",
      "descripcion": "Nunca he acertado a leer los libros de Pereda con la impasibilidad crítica con que leo otros libros. Para mí (y pienso que lo mismo sucede a todos los que hemos nacido de peñas al mar), esos libros, antes que juzgados, son sentidos. Son algo tan de nuestra tierra y de nuestra vida, como la brisa de nuestras costas o el maíz de nuestras mieses. Pocas veces un modo de ser provincial ha llegado a traducirse con tanta energía en forma de arte. Porque Pereda, el más montañés de todos los montañeses, identificado con la tierra natal, de la cual no se aparta un punto y de cuyo contacto recibe fuerzas, como el Anteo de la fábula, apacentando sin cesar sus ojos con el espectáculo de esta naturaleza dulcemente melancólica, y descubriendo sagazmente cuanto queda de poético en nuestras costumbres rústicas, ha traído a sus libros la{viii} Montaña entera, no ya con su aspecto exterior, sino con algo más profundo e íntimo, que no se ve, y, sin embargo, penetra el alma; con eso que el autor y sus paisanos llamamos el sabor de la tierruca, encanto misterioso, producidor de eterna saudade en los numerosos hijos de este pueblo cosmopolita, separados de su patria por largo camino de montes y de mares.",
      "autor": "José María de Pereda",
      "idLibro": 14995,
      "valoracion": 4.35,
      "createdAt": "2021-06-29T23:47:59.372Z",
      "updatedAt": "2021-06-29T23:47:59.372Z"
    },
    {
      "_id": "60dbb1308b62f60f880bd51c",
      "nombreLibro": "Escenas Montañesas",
      "descripcion": "Ha llegado el momento de realizar el propósito anunciado en la que se estampa en el tomo I de esta colección de mis OBRAS; y le realizo incluyendo en el presente volumen los cuadros Un marino, Los bailes campestres y El fin de una raza, desglosados, con este objeto, del libro rotulado ESBOZOS Y RASGUÑOS, en el cual aparecerán, en cambio y en su día, Las visitas y ¡Cómo se miente!, que hasta ahora han formado parte de las ESCENAS MONTAÑESAS. Por lo que toca á La primera declaración y Los pastorcillos, si algún lector tiene el mal gusto de echar de menos estos capítulos en cualquiera de los dos libros, entienda que he resuelto darles eterna sepultura en el fondo de mis cartapacios, y ¡ojalá pudiera también borrarlos de la memoria de cuantos los han conocido en las anteriores ediciones de las ESCENAS.",
      "autor": "José María de Pereda",
      "idLibro": 12627,
      "valoracion": 2.35,
      "createdAt": "2021-06-29T23:48:00.556Z",
      "updatedAt": "2021-06-29T23:48:00.556Z"
    },
    {
      "_id": "60dbb1318b62f60f880bd51d",
      "nombreLibro": "Riverita ",
      "descripcion": "La primera noticia que Miguel tuvo del matrimonio de su padre se la dio el tío Bernardo, persona de extremada respetabilidad y carácter. Tomole de la mano gravemente momentos antes de comer, y le llevó a su escritorio, una pieza de aspecto sombrío, llena de cachivaches antiguos, grandes armarios de libros y cuadros al óleo que el tiempo había oscurecido hasta no percibirse siquiera las figuras. Las sillas eran de roble viejo, las cortinas de terciopelo viejo también, la alfombra más vieja todavía, la mesa de escribir un verdadero prodigio de vejez. Miguel sólo dos veces en su vida había visto este aposento sagrado y augusto para la familia. Una vez se lo había enseñado su primo Enrique desde la puerta alzando discretamente la cortina y mirando con temor hacia atrás para no ser sorprendido en flagrante profanación.",
      "autor": "Armando Palacio Valdés",
      "idLibro": 29831,
      "valoracion": 2.35,
      "createdAt": "2021-06-29T23:48:01.889Z",
      "updatedAt": "2021-06-29T23:48:01.889Z"
    },
    {
      "_id": "60dbb1338b62f60f880bd51e",
      "nombreLibro": "Los Puritanos, y otros cuentos.",
      "descripcion": "El padre se murió sin ver carta de su hijo mayor, entre un sacerdote que le exhortaba y el pobre ciego que le apretaba convulso la mano, como si tratase de retenerle a la fuerza en este mundo. Cuando quisieron sacar el cadáver de casa sostuvo una lucha frenética, espantosa, con los empleados fúnebres. Al fin se quedó solo; pero ¡qué soledad la suya! Ni padre, ni madre, ni parientes, ni amigos; hasta el sol le faltaba, el amigo de todos los seres creados. Pasó dos días metido en su cuarto, recorriéndolo de una esquina a otra como un lobo enjaulado, sin probar alimento.",
      "autor": "Armando Palacio Valdés",
      "idLibro": 30053,
      "valoracion": 4.35,
      "createdAt": "2021-06-29T23:48:03.245Z",
      "updatedAt": "2021-06-29T23:48:03.245Z"
    },
    {
      "_id": "60dbb1348b62f60f880bd51f",
      "nombreLibro": "El señorito Otto Octavio",
      "descripcion": "Hé aquí los objetos que se veían ó se vislumbraban en la estancia. Apoyado en la pared de la derecha y cercano al hueco de la ventana, un armario antiguo, que debió ser barnizado recientemente, á juzgar por la prisa con que devolvía en vivos reflejos los tenues rayos de luz que sobre él caían. Enfrente, y cerca de la otra ventana, un tocador de madera sin barnizar, al gusto modernísimo, de esos que se compran en los bazares de Madrid por poco dinero. No muy lejos del tocador, una silla forrada de reps, sobre la cual descansaban hacinadas varias prendas de vestir, masculinas. Hasta el instante de dar comienzo esta verídica historia, nada más se veía. Esperemos.",
      "autor": "Armando Palacio Valdés",
      "idLibro": 36940,
      "valoracion": 4.88,
      "createdAt": "2021-06-29T23:48:04.349Z",
      "updatedAt": "2021-06-29T23:48:04.349Z"
    },
    {
      "_id": "60dbb1358b62f60f880bd520",
      "nombreLibro": "Dulce Dueño",
      "descripcion": "La claridad da de lleno en un objeto maravilloso. Es una placa cuadrilonga de unos diez centímetros de altura. En relieve, campea destacándose una figurita de mujer, ataviada con elegancia fastuosa, á la moda del siglo XV. Cara y manos son de esmalte; el ropaje, de oros cincelados y también esmaltados, se incrusta de minúsculas gemas, de pedrería refulgente y diminuta como puntas de alfiler. En la túnica, traslucen con vítreo reflejo los carmesíes;{6} en el manto, los verdes de esmaragdita. Tendido el cabello color de miel por los hombros, rodea la cabeza diadema de diamantillos, sólo visibles por la chispa de luz que lanzan.",
      "autor": "Emilia Pardo Bazán",
      "idLibro": 56044,
      "valoracion": 4.88,
      "createdAt": "2021-06-29T23:48:05.438Z",
      "updatedAt": "2021-06-29T23:48:05.438Z"
    },
    {
      "_id": "60dbb1368b62f60f880bd521",
      "nombreLibro": "La Odisea",
      "descripcion": "Así como la Ilíada presenta la Grecia heroica en su lucha con los habitantes de la Tróade, la Odisea describe la época de paz, de tranquilidad y de bienandanza que siguió á la terminación de la guerra, relatando un drama doméstico y una serie de aventuras fantásticas y maravillosas; y ambas epopeyas reunidas forman el panorama más acabado, el eco más fiel de los primeros tiempos históricos de la raza griega y contienen tales ejemplos de heroísmo, de amor patrio, de fidelidad conyugal, de respeto á los ancianos, de buen acogimiento al peregrino, de amistad, etc., que con razón ha podido decirse que toda la poesía de Homero es un elogio de la virtud, salvo lo puramente accesorio.",
      "autor": "Homer",
      "idLibro": 58221,
      "valoracion": 4.88,
      "createdAt": "2021-06-29T23:48:06.728Z",
      "updatedAt": "2021-06-29T23:48:06.728Z"
    }
  ]

  useEffect(() => {
    setAnotaciones();

  }, []);

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
      position: "relative",
      bottom: "6px",
    },
    title: {
      color: "#3F3250",
      fontWeight: "400",
      margin: "20px",
    },
    subtitle: {
      textAlign: "left",
      color: "#3F3250",
      paddingLeft: "1em",
      fontWeight: "300",
      margin: "10px",
    },
    containerResults: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      flexDirection: "row",
      marginLeft: "120px",
      marginRight: "120px",
    },
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

  // En caso currentUser sea nulo quiere decir que no hay usuario logaedo por lo tanto no debe mostrar home sino redireccionar a login
  return (
    <>
      
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
            <br />
            <br />
            <br />
            <Typography variant="h2" component="h1" className={classes.title}>
              Mis Libros
            </Typography>

            <div className={classes.containerResults}>
              {
              libs.reverse().map((libro, index) => (
                <MediaCard key={index} bookInfo={libro}/>
              ))}
            </div>
            <Footer />
          </main>
        </div>

    </>
  );
};
