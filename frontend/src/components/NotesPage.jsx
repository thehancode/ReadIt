import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
} from "@material-ui/core";

import NoteElement  from "./NoteElement";

const NotesPage = () => {

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

  const [items] = React.useState([
    {
      id: "65676",
      url: "https://www.gutenberg.org/ebooks/65676",
      title: "The Thing in the Truck",
      comment: "Este libro esta buenardo"
    },
    {
      id: "65677",
      url: "https://www.gutenberg.org/ebooks/65677",
      title: "Fables of Flowers for the Female Sex. With Zephyrus and Flora, a Vision",
      comment: "Me quede en la página 233"
    },
    {
      id: "65682",
      url: "https://www.gutenberg.org/ebooks/65682",
      title: "Lord Lister No. 1: De Groote Onbekende",
      comment: "Página 110 muere Alone"
    },
    {
      id: "65680",
      url: "https://www.gutenberg.org/ebooks/65680",
      title: "Il castello di Trezzo: Novella storica",
      comment: "Recomendado leer en las tardes"
    },
    {
      id: "65683",
      url: "https://www.gutenberg.org/ebooks/65683",
      title: "A Most Unholy Trade, Being Letters on the Drama",
      comment: "Hasta ahora tiene la mejor historia contada"
    },
    {
      id: "65673",
      url: "https://www.gutenberg.org/ebooks/65673",
      title: "Putnam's Automobile Handbook: The Care and Management of the Modern Motor-Car",
      comment: "Este libro esta buenardo"
    },
    {
      id: "58221",
      url: "https://www.gutenberg.org/ebooks/58221",
      title: "La Odisea",
      comment: "Debían hacerle una pelicula actual, me quede en la página 49"
    },
    {
      id: "57448",
      url: "https://www.gutenberg.org/ebooks/57448",
      title: "Meditaciones del Quijote",
      comment: "Hasta el capitulo 2 esta muy bien escrito"
    },
    {
      id: "54",
      url: "https://www.gutenberg.org/ebooks/54",
      title: "The Marvelous Land of Oz",
      comment: "Muy épico"
    },
    {
      id: "65433",
      url: "https://www.gutenberg.org/ebooks/65433",
      title: "Billy Whiskers at Home",
      comment: "A"
    },
    {
      id: "56682",
      url: "https://www.gutenberg.org/ebooks/56682",
      title: "I Moncalvo",
      comment: "Página 100"
    },
    {
      id: "2701",
      url: "https://www.gutenberg.org/ebooks/2701",
      title: "Moby Dick; Or, The Whale",
      comment: "Este libro esta buenardo"
    },
  ]);
  
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <div className={classes.offset}></div>
        <Typography variant="h2" component="h1" className={classes.title}>
          Mis notas
        </Typography>
        {
          items.map((noteItem, index) =>  <NoteElement key={index} noteInfo={noteItem}/>)
        }
      </Container>
    </div>
  );
};

export default NotesPage;
