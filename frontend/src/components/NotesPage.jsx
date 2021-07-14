import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/LoginService";
import * as libroService from "../services/LibroService";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

import NoteElement from "./NoteElement";

const NotesPage = () => {
  const [anotaciones, setAnotaciones] = useState([]);

  const loadAnotaciones = async () => {
    const anotacionesRes = await libroService.getAnotaciones(
      getCurrentUser().id
    );
    console.log("back-anotaciones", anotacionesRes.data);
    console.log(getCurrentUser().id);
    setAnotaciones(anotacionesRes.data);
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
      <Container maxWidth="md">
        <div className={classes.offset}></div>
        <Typography variant="h2" component="h1" className={classes.title}>
          Mis notas
        </Typography>
        {anotaciones.map((noteItem, index) =>
          noteItem.anotaciones.map((note, i) => (
            <NoteElement key={i} noteInfo={note} bookInfo={noteItem.idLibro} />
          ))
        )}
      </Container>
    </div>
  );
};

export default NotesPage;
