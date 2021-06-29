import React from 'react'

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    note: {
      backgroundColor: "#21242b",
      color: "white",
      borderRadius:"30px",
      margin:"10px"
    },
  }));

  const NoteElement = (props) => {
const classes = useStyles();


    const  note = props.noteInfo
    return (
        <div className={classes.note} >            
            {" Hola como estas" +note.title}
        </div>
    )
}

export default NoteElement
