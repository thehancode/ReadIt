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

const BookContent = (props) => {
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
    containerShare: {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },

    containerv: {
      "flex-grow": 1,
      display: "flex",
      "flex-direction": "column",
      margin: "1%",
    },
    containercard: {
      "flex-grow": 2,
      margin: "1%",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "flex-start",
      "align-items": "center",
      padding: "20% 0 0 0 ",
    },
    buttonsShare: {
      border: "none",
      backgroundColor: "#FFFFFF",

    },
    buttons: {
      flex: 1,
      margin: "10%",
      height: "50px",
      border: "none",
      backgroundColor: "#E14658",
      "border-radius": "1.2em",
      color: "#fff",
      "font-size": "1.3em",

      "&:hover": {
        background: "#a3001b"
      },
      "&:active": {
        "position": "relative",
        "top": "2px",
      },
    },
    
    descripcion: {
      padding: "5%",
      "font-size": "1.2em",
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
  

  useEffect(() => {
    for (let index = 0; index < items.length; index++) {
      if (items[index] === bookID){
        setItem(items[index])
        console.log("asginado" ,items[index].title  , "::::::::::::::::");
      }
    }
  }, []);

  const [openModal, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <div className={classes.offset}></div>

        <div id="container-desc" className={classes.container}>
          <div className={classes.containercard}>
            <CBooks
              id={"book5"}
              className={classes.items1}
              url={
                "https://www.gutenberg.org/cache/epub/" +
                bookID +
                "/pg" +
                bookID +
                ".cover.medium.jpg"
              }
            />
            <div style={{ margin: "5% 0 0 0" }}>
              <Rating
                name="simple-controlled"
                size="large"
                value={starValue}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>

          <div id="container-desc-wodrs" className={classes.containerv}>
            <Typography variant="h2" component="h1" className={classes.title}>
              {bookItem.title}
            </Typography>

            <div id="descripcio" className={classes.descripcion}>
              La Odisea (en griego: Ὀδύσσεια, Odýsseia) es un poema épico griego
              compuesto por 24 cantos, atribuido al poeta griego Homero. Se cree
              que fue compuesta en el siglo VIII a. C. en los asentamientos que
              tenía Grecia en la costa oeste del Asia Menor (actual Turquía
              asiática). Según otros autores, la Odisea se completa en el siglo
              VII a. C. a partir de poemas que solo describían partes de la obra
              actual. Fue originalmente escrita en lo que se ha llamado dialecto
              homérico. Narra la vuelta a casa, tras la guerra de Troya, del
              héroe griego Odiseo (al modo latino, Ulises: Ὀδυσσεὺς en griego;
              Vlixes en latín). Además de haber estado diez años fuera luchando,
              Odiseo tarda otros diez años en regresar a la isla de Ítaca, de la
              que era rey, período durante el cual su hijo Telémaco y su esposa
              Penélope han de tolerar en su palacio a los pretendientes que
              buscan desposarla (pues ya creían muerto a Odiseo), al mismo
              tiempo que consumen los bienes de la familia.
            </div>
            <div id="buttons-div" className={classes.container}>
              <button className={classes.buttons}>
              <LinkRef style={{ "color" : "white","text-decoration": "none"}} to={"/read/" +bookID }>
                Leer
              </LinkRef>
                </button>

              <button className={classes.buttons}  onClick={onOpenModal}>
                Compartir
                <Modal open={openModal} onClose={onCloseModal} center>
                  <h2> { "Comptarte "+ bookItem.title}</h2>
                  <div className={classes.containerShare}>
                  <button className={classes.buttonsShare}> <TwitterIcon size={64} round={true} /></button>
                  <button className={classes.buttonsShare}> <FacebookIcon size={64} round={true} /></button>
                  <button className={classes.buttonsShare}> <WhatsappIcon size={64} round={true} /></button>
                  </div>
                </Modal>
                </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookContent;
