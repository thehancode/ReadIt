import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  note: {
    backgroundColor: "#21242b",
    color: "white",
    borderRadius: "25px",
    margin: "10px",
    padding: "20px",
  },
}));

const NoteElement = (props) => {
  const classes = useStyles();

  const note = props.noteInfo;
  return <div className={classes.note}>{"Nota en: " + note.title}</div>;
};

export default NoteElement;
