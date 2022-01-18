import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/LoginService";
import * as libroService from "../services/LibroService";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import Notification from "./Notification";

import NoteElement from "./NoteElement";

const NotesPage = () => {
  const [anotaciones, setAnotaciones] = useState([]);
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");

  const loadAnotaciones = async () => {

    setAnotaciones([{"anotaciones":[{"idAnotacion":"60f6879e57c418affa09b465","pagina":44,"fecha":"2012/12/12","descripcion":"Este libro esta buenisimo"},{"idAnotacion":"60f687a990efd345d4354fbf","pagina":44,"fecha":"2012/12/12","descripcion":"Este libro esta buenisimo"},{"idAnotacion":"60f687b33e4d515a28249267","pagina":44,"fecha":"2012/12/12","descripcion":"Este libro esta buenisimo"},{"idAnotacion":"60f889580572fadec04d6cef","pagina":26,"fecha":"2021-07-21T20:53:44.523Z","descripcion":""}],"_id":"60ef3a105d7f1a1c1cda55fd","idUsuario":"60c96e20d58cca1298b4d656","idLibro":{"_id":"60dbb1278b62f60f880bd518","nombreLibro":"The Thing in the Truck","descripcion":"Joe Loftus and I were driving the big semi-trailer back from Montauk that night after delivering a load of fishing gear to one of the big resorts out there and wondering if we'd be able to pick up a truckload of anything on the way back to increase the take when Joe spotted this sign.\nIt was one of those standard hand-painted Return Load signs, so we pulled in and I climbed down from the cab while Joe remained behind the wheel, ready to roll if they had nothing for us.","autor":"Marlowe, Stephen","idLibro":65676,"valoracion":4,"createdAt":"2021-06-29T23:47:51.417Z","updatedAt":"2021-06-29T23:47:51.417Z"},"ultimaPagina":1,"updatedAt":"2021-07-21T20:53:44.539Z"},{"anotaciones":[{"idAnotacion":"60f6c9ff410cc459960d63d0","pagina":26,"fecha":"2021-07-20T13:05:03.079Z","descripcion":"of the seven out of seven"},{"idAnotacion":"60f6ca7040256e4eeabdfd4e","pagina":26,"fecha":"2021-07-20T13:06:56.114Z","descripcion":""},{"idAnotacion":"60f6caace3177092a303534c","pagina":26,"fecha":"2021-07-20T13:07:56.242Z","descripcion":"all of this other single sized"},{"idAnotacion":"60f6cb2bd731d10e5e414553","pagina":26,"fecha":"2021-07-20T13:10:03.427Z","descripcion":""},{"idAnotacion":"60f6cb7494cf77de65c3f564","pagina":26,"fecha":"2021-07-20T13:11:16.339Z","descripcion":""},{"idAnotacion":"60f6cb758b7d62845149de19","pagina":26,"fecha":"2021-07-20T13:11:17.665Z","descripcion":"and"}],"_id":"60ef3b18e63119d5363483d7","idLibro":{"_id":"60dbb12f8b62f60f880bd51b","nombreLibro":"Los Hombres","descripcion":"Nunca he acertado a leer los libros de Pereda con la impasibilidad crítica con que leo otros libros. Para mí (y pienso que lo mismo sucede a todos los que hemos nacido de peñas al mar), esos libros, antes que juzgados, son sentidos. Son algo tan de nuestra tierra y de nuestra vida, como la brisa de nuestras costas o el maíz de nuestras mieses. Pocas veces un modo de ser provincial ha llegado a traducirse con tanta energía en forma de arte. Porque Pereda, el más montañés de todos los montañeses, identificado con la tierra natal, de la cual no se aparta un punto y de cuyo contacto recibe fuerzas, como el Anteo de la fábula, apacentando sin cesar sus ojos con el espectáculo de esta naturaleza dulcemente melancólica, y descubriendo sagazmente cuanto queda de poético en nuestras costumbres rústicas, ha traído a sus libros la{viii} Montaña entera, no ya con su aspecto exterior, sino con algo más profundo e íntimo, que no se ve, y, sin embargo, penetra el alma; con eso que el autor y sus paisanos llamamos el sabor de la tierruca, encanto misterioso, producidor de eterna saudade en los numerosos hijos de este pueblo cosmopolita, separados de su patria por largo camino de montes y de mares.","autor":"José María de Pereda","idLibro":14995,"valoracion":4.35,"createdAt":"2021-06-29T23:47:59.372Z","updatedAt":"2021-06-29T23:47:59.372Z"},"idUsuario":"60c96e20d58cca1298b4d656","createdAt":"2021-07-14T19:29:27.774Z","updatedAt":"2021-07-21T19:46:15.780Z","ultimaPagina":1},{"anotaciones":[],"_id":"60ef3b1fe63119d53634857a","idLibro":{"_id":"60dbb1308b62f60f880bd51c","nombreLibro":"Escenas Montañesas","descripcion":"Ha llegado el momento de realizar el propósito anunciado en la que se estampa en el tomo I de esta colección de mis OBRAS; y le realizo incluyendo en el presente volumen los cuadros Un marino, Los bailes campestres y El fin de una raza, desglosados, con este objeto, del libro rotulado ESBOZOS Y RASGUÑOS, en el cual aparecerán, en cambio y en su día, Las visitas y ¡Cómo se miente!, que hasta ahora han formado parte de las ESCENAS MONTAÑESAS. Por lo que toca á La primera declaración y Los pastorcillos, si algún lector tiene el mal gusto de echar de menos estos capítulos en cualquiera de los dos libros, entienda que he resuelto darles eterna sepultura en el fondo de mis cartapacios, y ¡ojalá pudiera también borrarlos de la memoria de cuantos los han conocido en las anteriores ediciones de las ESCENAS.","autor":"José María de Pereda","idLibro":12627,"valoracion":2.35,"createdAt":"2021-06-29T23:48:00.556Z","updatedAt":"2021-06-29T23:48:00.556Z"},"idUsuario":"60c96e20d58cca1298b4d656","createdAt":"2021-07-14T19:29:35.019Z","updatedAt":"2021-07-14T19:29:51.953Z"},{"anotaciones":[],"_id":"60ef3b3ee63119d536348ce2","idLibro":{"_id":"60dbb1368b62f60f880bd521","nombreLibro":"La Odisea","descripcion":"Así como la Ilíada presenta la Grecia heroica en su lucha con los habitantes de la Tróade, la Odisea describe la época de paz, de tranquilidad y de bienandanza que siguió á la terminación de la guerra, relatando un drama doméstico y una serie de aventuras fantásticas y maravillosas; y ambas epopeyas reunidas forman el panorama más acabado, el eco más fiel de los primeros tiempos históricos de la raza griega y contienen tales ejemplos de heroísmo, de amor patrio, de fidelidad conyugal, de respeto á los ancianos, de buen acogimiento al peregrino, de amistad, etc., que con razón ha podido decirse que toda la poesía de Homero es un elogio de la virtud, salvo lo puramente accesorio.","autor":"Homer","idLibro":58221,"valoracion":4.88,"createdAt":"2021-06-29T23:48:06.728Z","updatedAt":"2021-06-29T23:48:06.728Z"},"idUsuario":"60c96e20d58cca1298b4d656","createdAt":"2021-07-14T19:30:06.256Z","updatedAt":"2021-07-20T12:56:15.323Z","ultimaPagina":1},{"anotaciones":[],"_id":"60ef440ce63119d53636fc3e","idLibro":{"_id":"60dbb1338b62f60f880bd51e","nombreLibro":"Los Puritanos, y otros cuentos.","descripcion":"El padre se murió sin ver carta de su hijo mayor, entre un sacerdote que le exhortaba y el pobre ciego que le apretaba convulso la mano, como si tratase de retenerle a la fuerza en este mundo. Cuando quisieron sacar el cadáver de casa sostuvo una lucha frenética, espantosa, con los empleados fúnebres. Al fin se quedó solo; pero ¡qué soledad la suya! Ni padre, ni madre, ni parientes, ni amigos; hasta el sol le faltaba, el amigo de todos los seres creados. Pasó dos días metido en su cuarto, recorriéndolo de una esquina a otra como un lobo enjaulado, sin probar alimento.","autor":"Armando Palacio Valdés","idLibro":30053,"valoracion":4.35,"createdAt":"2021-06-29T23:48:03.245Z","updatedAt":"2021-06-29T23:48:03.245Z"},"idUsuario":"60c96e20d58cca1298b4d656","createdAt":"2021-07-14T20:07:40.844Z","updatedAt":"2021-07-14T20:07:40.844Z"},{"anotaciones":[{"idAnotacion":"60f6c3f5eeb5b9010591b0aa","pagina":26,"fecha":"2021-07-20T12:39:17.992Z","descripcion":"well in those days one of us"}],"_id":"60ef4754e63119d53637e3b0","idLibro":{"_id":"60dbb12e8b62f60f880bd51a","nombreLibro":"La Montálvez","descripcion":"Pulcro y rollizo; suave y risueño, y, al mismo tiempo, solemne y espetado; vulgar obscuro de meollo; rico, huérfano y libre; sin nervios ni hieles en el cuerpo, ni señal de polvo de las aulas en la ropa; vicioso a la chita callando; enamorado de su estampa, de su talento, de su elocuencia, y especialmente de los timbres de su linaje, y dejándose correr, con todas estas ventajas, a lo largo de la vida en lo más substancioso de ella, sin otros fines que el regalo de la querida persona, con la satisfacción de todos los apetitos, pero sin prefacios de grandes desvelos, ni epílogos de incómodas harturas... eso era el caballero marqués de Montálvez (título con polillas, de puro rancio); eso era en los tiempos de su mocedad; y así fue tirando el pobre, sin visible quebranto en la salud, aunque con muchos y muy gordos en el caudal, hasta que le apuntaron la calvicie en el cogote y la pata de gallo en los ojos.","autor":"Wynne, John Huddlestone","idLibro":25812,"valoracion":4.4,"createdAt":"2021-06-29T23:47:58.102Z","updatedAt":"2021-06-29T23:47:58.102Z"},"idUsuario":"60c96e20d58cca1298b4d656","createdAt":"2021-07-14T20:21:40.214Z","updatedAt":"2021-07-20T13:44:25.931Z","ultimaPagina":1},{"anotaciones":[],"_id":"60f6cd81be0053b5e1ee50ee","idLibro":{"_id":"60dbb12c8b62f60f880bd519","nombreLibro":"Fables of Flowers for the Female Sex","descripcion":"When I survey the divine simplicity and blooming attractions, that are displayed amongst the variegated tribes of the vegetable creation, I cease to wonder, that Queens forego, for a while, the compliments of a nation, or withdraw from the glitter of a court, to be attended with the more splendid equipage of a bed of flowers; where nothing seems wanting but the power of speech, to make them become the most pleasing Monitors.","autor":"Wynne, John Huddlestone","idLibro":65677,"valoracion":4.5,"createdAt":"2021-06-29T23:47:56.682Z","updatedAt":"2021-06-29T23:47:56.682Z"},"idUsuario":"60c96e20d58cca1298b4d656","createdAt":"2021-07-20T13:20:01.172Z","ultimaPagina":1,"updatedAt":"2021-07-21T06:03:19.584Z"},{"anotaciones":[],"_id":"60f7d6c3be0053b5e1357799","idLibro":{"_id":"60dbb1318b62f60f880bd51d","nombreLibro":"Riverita ","descripcion":"La primera noticia que Miguel tuvo del matrimonio de su padre se la dio el tío Bernardo, persona de extremada respetabilidad y carácter. Tomole de la mano gravemente momentos antes de comer, y le llevó a su escritorio, una pieza de aspecto sombrío, llena de cachivaches antiguos, grandes armarios de libros y cuadros al óleo que el tiempo había oscurecido hasta no percibirse siquiera las figuras. Las sillas eran de roble viejo, las cortinas de terciopelo viejo también, la alfombra más vieja todavía, la mesa de escribir un verdadero prodigio de vejez. Miguel sólo dos veces en su vida había visto este aposento sagrado y augusto para la familia. Una vez se lo había enseñado su primo Enrique desde la puerta alzando discretamente la cortina y mirando con temor hacia atrás para no ser sorprendido en flagrante profanación.","autor":"Armando Palacio Valdés","idLibro":29831,"valoracion":2.35,"createdAt":"2021-06-29T23:48:01.889Z","updatedAt":"2021-06-29T23:48:01.889Z"},"idUsuario":"60c96e20d58cca1298b4d656","createdAt":"2021-07-21T08:11:47.752Z","ultimaPagina":1,"updatedAt":"2021-07-21T08:11:47.752Z"}]);
  };

  const handleDelete = async (idAnotacion, idBook) => {
    libroService.deleteAnotacion(idAnotacion, idBook, getCurrentUser().id);
    loadAnotaciones();
    setMensaje("Anotación eliminada");
    setTipo("success");
    setOpen(true);
  };

  useEffect(() => {
    loadAnotaciones();
  }, []);

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
    title: {
      color: "#3F3250",
      fontWeight: "400",
      margin: "20px",
    },
    container: {
      display: "flex",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Notification
        setOpen={setOpen}
        mensaje={mensaje}
        open={open}
        tipo={tipo}
      ></Notification>

      <Container maxWidth="md">
        <div className={classes.offset}></div>
        <Typography variant="h2" component="h1" className={classes.title}>
          Mis notas
        </Typography>
        {anotaciones.map((noteItem, index) =>
          noteItem.anotaciones.map((note, i) => (
            <NoteElement
              delete={handleDelete}
              key={i}
              noteInfo={note}
              bookInfo={noteItem.idLibro}
            />
          ))
        )}
      </Container>
    </div>
  );
};

export default NotesPage;
