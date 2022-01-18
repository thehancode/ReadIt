import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import CBooks from "./CBooks";
import { makeStyles} from "@material-ui/core/styles";
import * as libroService from "../services/LibroService";

import * as BookService from "../services/SearchBookService";

import { Link } from "react-router-dom";

const CarouselBooks = () => {
  const [libros, setLibros] = useState([]);

  const loadLibros = async () => {
 
    const res = {
      "data": [
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
      ],
      "status": 200,
      "statusText": "OK",
      "headers": {
        "content-length": "9623",
        "content-type": "application/json; charset=utf-8"
      },
      "config": {
        "url": "http://localhost:5000/libros",
        "method": "get",
        "headers": {
          "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [
          null
        ],
        "transformResponse": [
          null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1
      },
      "request": {}
    }



    
  
    console.log("back-ibros",res);
    // Pasar al tipo de dato (arreglo inicialmente vacio)
    const sortedLibros = res.data
      .map((libro) => {
        return {
          ...libro,
          createAt: libro.createAt ? new Date(libro.createAt) : new Date(),
          updateAt: libro.updateAt ? new Date(libro.updateAt) : new Date(),
        };
      })
      .sort((a, b) => b.createAt.getTime() - a.createAt.getTime());

    setLibros(sortedLibros);
  };

  useEffect(() => {
    loadLibros();
  }, []);

  const useStyles = makeStyles(() => ({
    link: {
      backgroundImage: "none",
      textTransform: "none",
    },
  }));

  const classes = useStyles();

  const breakPoints = [
    { width: 240, itemsToShow: 1 },
    { width: 480, itemsToShow: 2, itemsToScroll: 2 },
    { width: 720, itemsToShow: 3, itemsToScroll: 3 },
    { width: 960, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1440, itemsToShow: 6, itemsToScroll: 6 },
  ];

  return (
    <div className="carousel">
      <Carousel breakPoints={breakPoints}>
        {libros.map((item) => (
          <Link
            style={{ display: "inherit", "text-decoration": "none" }}
            className={classes.link}
            to={"/books/" + item._id}
          >
            <CBooks
              id={item.libros}
              url={`https://www.gutenberg.org/cache/epub/${item.idLibro}/pg${item.idLibro}.cover.medium.jpg`}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBooks;
