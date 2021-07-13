import React from "react";
import Speech from 'react-speech';

import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RoomIcon from '@material-ui/icons/Room';

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
    width: "calc(40% - 100px)",
  },
  noteTitle__p:{
    margin: "2px",
  },
  noteMessage: {
    width: "calc(60% - 100px)",
  },
  noteButtons: {
    width: "200px",
  },
  noteButtons__speech: {
    backgroundColor: 'blue',
  },
  noteButtons__icon: {
    backgroundColor: "#C0B3A0",
    color: "#21242b",
    margin: "0 8px",
    "&:hover": {
      backgroundColor: "hsl(36, 20%, 59%)",
    },
  }
}));

const NoteElement = (props) => {

  const classes = useStyles();
  const note = props.noteInfo;

  return (
    <div className={classes.note}>
      <div className={classes.noteTitle}>
        <p className={classes.noteTitle__p}>Titulo</p>
        <p className={classes.noteTitle__p}>{note.title}</p>
      </div>
      <div className={classes.noteMessage}>
        <p className={classes.noteTitle__p}>Mensaje</p>
        <p className={classes.noteTitle__p}>{note.comment}</p>
      </div>
      <div className={classes.noteButtons}>
        <IconButton className={classes.noteButtons__icon} size="small" aria-label="here in the book">
          <RoomIcon fontSize="large"/>
        </IconButton>
        <Speech 
          className={classes.noteButtons__speech}
          textAsButton={true}    
          displayText={
          <IconButton className={classes.noteButtons__icon} size="small" aria-label="listen to message">
            <PlayCircleOutlineIcon fontSize="large"/>
          </IconButton >
          }
          text={note.comment}
        />
        <IconButton className={classes.noteButtons__icon} size="small" aria-label="delete note">
          <DeleteOutlineIcon fontSize="large"/>
        </IconButton>
      </div>      
    </div>
  );
};

export default NoteElement;
