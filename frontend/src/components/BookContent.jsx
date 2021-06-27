import React, { useState } from "react";

import { getCurrentUser } from "../services/LoginService";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import CarouselBooks from "./CarouselBooks";
import SearchBooks from "./SearchBooks";
import CBooks from "./CBooks";

import {
  Hidden,
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemText,
  Link,
  Typography,
  Container,
} from "@material-ui/core";

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
      "align-items": "center" ,
      padding: "20% 0 0 0 "
    },

    buttons: {
      flex: 1,
      margin: "10%",
      height: "100px",
      border: "none",
      backgroundColor: "#E14658",
      "border-radius": "1.2em",
      color: "#fff",
      "font-size": "1.2em",
    },
    descripcion: {
      padding: "5%",
      "font-size": "1.2em",
    },
  }));

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
                "https://www.gutenberg.org/cache/epub/65683/pg65683.cover.medium.jpg"
              }
            />
            <div style={{margin: "5% 0 0 0"}}>

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
          {props.name}
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
              <button className={classes.buttons}>Leer</button>
              <button className={classes.buttons}>No Leer</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookContent;
