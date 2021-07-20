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
    const misAnotaciones = await libroService.getAnotaciones(
      getCurrentUser().id
    );
    setAnotaciones(misAnotaciones.data);
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
