import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  note: {
    backgroundColor: "#21242b",
    color: "white",
    borderRadius: "15px",
    margin: "12px",
    padding: "20px",
    boxShadow: "0px 2px 2px 2px hsla(266, 23%, 20%, 0.3)",
  },
}));

const NoteElement = (props) => {
  const classes = useStyles();
  const note = props.noteInfo;
  return (
    <div className={classes.note}>
      {"Nota en: " + note.title}
    </div>
  );
};

export default NoteElement;
