import React, { useState, useEffect } from "react";

import { getCurrentUser } from "../services/LoginService";
import { makeStyles } from "@material-ui/core/styles";

import CBooks from "./CBooks";
import Share from "./Share";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";



import { useParams } from "react-router-dom";


import {
  Hidden,
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemText,
  Typography,
  Container,
} from "@material-ui/core";

import {
  Link as LinkRef
} from "react-router-dom";


import Rating from "@material-ui/lab/Rating";

import { BorderAllRounded, Height } from "@material-ui/icons";
import NoteElement  from "./NoteElement";

const NotesPage = (props) => {
  const [starValue, setValue] = React.useState(3);

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

  const [constructorHasRun, setConstructorHasRun] = useState(false);
  const [bookTitle, setTitle] = useState("NOT FOUND");
  const [bookItem, setItem] = useState({
    id: "65676",
    url: "https://www.gutenberg.org/ebooks/65676",
    title: "The Thing in the Truck",
  });
  let { bookID } = useParams();

  const [items] = React.useState([
    {
      id: "65676",
      url: "https://www.gutenberg.org/ebooks/65676",
      title: "The Thing in the Truck",
    },
    {
      id: "65677",
      url: "https://www.gutenberg.org/ebooks/65677",
      title:
        "Fables of Flowers for the Female Sex. With Zephyrus and Flora, a Vision",
    },
    {
      id: "65682",
      url: "https://www.gutenberg.org/ebooks/65682",
      title: "Lord Lister No. 1: De Groote Onbekende",
    },
    {
      id: "65680",
      url: "https://www.gutenberg.org/ebooks/65680",
      title: "Il castello di Trezzo: Novella storica",
    },
    {
      id: "65683",
      url: "https://www.gutenberg.org/ebooks/65683",
      title: "A Most Unholy Trade, Being Letters on the Drama",
    },
    {
      id: "65673",
      url: "https://www.gutenberg.org/ebooks/65673",
      title:
        "Putnam's Automobile Handbook: The Care and Management of the Modern Motor-Car",
    },
    {
      id: "58221",
      url: "https://www.gutenberg.org/ebooks/58221",
      title: "La Odisea",
    },
    {
      id: "57448",
      url: "https://www.gutenberg.org/ebooks/57448",
      title: "Meditaciones del Quijote",
    },
    {
      id: "54",
      url: "https://www.gutenberg.org/ebooks/54",
      title: "The Marvelous Land of Oz",
    },
    {
      id: "65433",
      url: "https://www.gutenberg.org/ebooks/65433",
      title: "Billy Whiskers at Home",
    },
    {
      id: "56682",
      url: "https://www.gutenberg.org/ebooks/56682",
      title: "I Moncalvo",
    },
    {
      id: "2701",
      url: "https://www.gutenberg.org/ebooks/2701",
      title: "Moby Dick; Or, The Whale",
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
          items.map((noteItem , index) =>  <NoteElement key={index} noteInfo={noteItem}/>)
        }

      </Container>
    </div>
  );
};

export default NotesPage;
