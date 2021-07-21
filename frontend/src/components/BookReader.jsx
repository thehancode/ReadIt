import React, { useState, useEffect } from "react";

import { getCurrentUser } from "../services/LoginService";
import { makeStyles } from "@material-ui/core/styles";
import * as libroService from "../services/LibroService";

import Notification from "./Notification";

import { useParams } from "react-router-dom";
import Microphone from "./Microphone";
import { Input } from "@material-ui/core";
const BookContent = (props) => {
  let { bookID, bookIDMongo } = useParams();
  const [libro, setMarcado] = useState({});
  const marcarLibro = async () => {
    console.log(bookID, bookIDMongo);
    const res = await libroService.marcarLibroLeido(
      bookIDMongo,
      getCurrentUser().id
    );
    setMarcado(res.data);
  };

  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");

  useEffect(() => {
    //localStorage.setItem('timerState',1);
    let user = JSON.parse(localStorage.getItem("user"));
    let timerState = JSON.parse(localStorage.getItem("timerState"));
    //console.log("timer",timerState);
    if (timerState === null) {
      localStorage.setItem("timerState", user.timer);
      setTimeout(function () {
        localStorage.removeItem("timerState");
        //alert("Recuerda tomar un descanso");
        //console.log("Time finish");
        setMensaje("Recuerda tomar un descanso");
        setTipo("info");
        setOpen(true);
      }, user.timer * 100);
    }
    marcarLibro();
  }, []);
  const [starValue, setValue] = React.useState(3);

  const [note, setNote] = useState("");

  // guardar la anotacion

  const handleSubmit = (e) => {
    e.preventDefault();
    libroService.crearAnotacion(
      bookIDMongo,
      getCurrentUser().id,
      26,
      new Date(),
      note
    );
    setMensaje("Anotación guardada");
    setTipo("success");
    setOpen(true);
  };
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
      "justify-content": "center",
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
    transciption: {
      backgroundColor: "#22252C",
      fontFamily: "Prata,serif",
      color: "rgb(255, 221, 163)",

      fontSize: "1.3rem",
      fontWeight: "600",
      fontFamily: "sans-serif",
      lineHeight: "1.48",
      quotes: "inherit",
      margin: "20px",
      "&:before": {
        content: "open-quote",
      },
      "&:after": {
        content: "close-quote",
      },
    },
    containerNotes: {
      display: "flex",
      "flex-direction": "row",
    },
    recive: {
      display: "flex",
      "flex-direction": "row",
      width: "40%",
      margin: "0px auto",
      padding: "10px",
      "background-color": "#21242B",
    },

    buttons: {
      margin: "10px",
      padding: "5px 10px",
      border: "none",
      backgroundColor: "#E14658",
      "border-radius": "1.2em",
      color: "#fff",
      "font-size": "1.3em",
      "&:hover": {
        background: "#a3001b",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.readerB}>
      <Notification
        setOpen={setOpen}
        mensaje={mensaje}
        open={open}
        tipo={tipo}
      ></Notification>
      <div className={classes.offset}></div>
      <div style={{ height: "90vh", margin: "none" }}>
        <iframe
          id="myIFrame"
          src={
            "https://www.gutenberg.org/files/" +
            bookID +
            "/" +
            bookID +
            "-h/" +
            bookID +
            "-h.htm"
          }
          width="100%"
          height="90%"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>

        <div style={{ backgroundColor: "#22252C" }}>
          <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.recive}>
              <Microphone setResult={setNote} />
              <div className={classes.transciption}>{note}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookContent;
