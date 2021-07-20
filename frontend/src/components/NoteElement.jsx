import React, { useState } from "react";
import Speech from "react-speech";
import ReactTooltip from "react-tooltip";
import { getCurrentUser } from "../services/LoginService";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  note: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#21242b",
    alignItems: "center",
    color: "#C0B3A0",
    borderRadius: "15px",
    margin: "12px",
    padding: "8px",
    boxShadow: "0px 2px 2px 2px hsla(266, 23%, 20%, 0.3)",
  },
  noteTitle: {
    width: "calc(40% - 110px)",
  },
  noteTitle__p: {
    margin: "2px",
  },
  noteMessage: {
    width: "calc(60% - 110px)",
  },
  noteButtons: {
    width: "220px",
    backgroundImage: "none",
  },
  noteButtons__icon: {
    backgroundColor: "#C0B3A0",
    color: "#21242b",
    margin: "0 8px",
    backgroundImage: "none",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "hsl(36, 20%, 59%)",
    },
  },
}));

const NoteElement = (props) => {
  const classes = useStyles();
  const note = props.noteInfo;
  const book = props.bookInfo;

  return (
    <div className={classes.note}>
      <div className={classes.noteTitle}>
        <p className={classes.noteTitle__p}>Titulo</p>
        <p className={classes.noteTitle__p}>{book.nombreLibro}</p>
      </div>
      <div className={classes.noteMessage}>
        <p className={classes.noteTitle__p}>Mensaje</p>
        <p className={classes.noteTitle__p}>{note.descripcion}</p>
      </div>
      <div className={classes.noteButtons}>
        <IconButton
          className={classes.noteButtons__icon}
          size="small"
          aria-label="here in the book"
          data-tip=""
          data-for="location"
          delay-show="500"
          href={"/read/" + book.idLibro + "/" + book._id}
        >
          <RoomIcon fontSize="large" />
        </IconButton>
        <ReactTooltip
          id="location"
          delayShow={500}
          backgroundColor="#C0B3A0"
          className="tooltip"
        >
          Redirigirte al libro
        </ReactTooltip>
        <IconButton
          className={classes.noteButtons__icon + " noteButtons__icon--size"}
          size="small"
          aria-label="listen to message"
          data-tip=""
          data-for="play"
          delay-show="500"
        >
          <Speech
            textAsButton={true}
            lang="en-US"
            voice="Google UK English Male"
            displayText={
              <PlayCircleOutlineIcon
                className="noteButtons__icon--positicon"
                fontSize="large"
              />
            }
            text={note.descripcion}
          />
        </IconButton>
        <ReactTooltip
          id="play"
          delayShow={500}
          backgroundColor="#C0B3A0"
          className="tooltip"
        >
          Reproducir Mensaje
        </ReactTooltip>
        <IconButton
          className={classes.noteButtons__icon}
          size="small"
          aria-label="delete note"
          data-tip=""
          data-for="delete"
          delay-show="500"
          onClick={() => props.delete(note.idAnotacion, book._id)}
        >
          <DeleteOutlineIcon fontSize="large" />
        </IconButton>
        <ReactTooltip
          id="delete"
          delayShow={500}
          backgroundColor="#C0B3A0"
          className="tooltip"
        >
          Eliminar Nota
        </ReactTooltip>
      </div>
    </div>
  );
};

export default NoteElement;
