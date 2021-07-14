import React, { useState, useEffect } from "react";

import { getCurrentUser } from "../services/LoginService";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import CarouselBooks from "./CarouselBooks";
import SearchBooks from "./SearchBooks";
import CBooks from "./CBooks";

import Notification from "./Notification";

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
import { useParams } from "react-router-dom";
import Microphone from "./Microphone"; 
import Rating from "@material-ui/lab/Rating";

import { BorderAllRounded, Height } from "@material-ui/icons";

const BookContent = (props) => {
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");
  useEffect(()=>{
    //localStorage.setItem('timerState',1);
    let user = JSON.parse(localStorage.getItem("user"));
    let timerState = JSON.parse(localStorage.getItem("timerState"));
    //console.log("timer",timerState);
    if(timerState===null){
      localStorage.setItem('timerState',user.timer);
      setTimeout(function(){
        localStorage.removeItem('timerState'); 
        //alert("Recuerda tomar un descanso"); 
        //console.log("Time finish");
        setMensaje("Recuerda tomar un descanso");
        setTipo("info");
        setOpen(true);
      }, 
        user.timer*1000);
    }
    
  },[]);
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
  let { bookID } = useParams();

  useEffect(()=>{
    console.log("Searching for",bookID);
  },[bookID])
  return (
    <div>
      <Notification setOpen = {setOpen} mensaje= {mensaje} open={open} tipo = {tipo}></Notification>
        <div className={classes.offset}></div>
        <div style={{height:"100vh"}} >
        <iframe  src={"https://www.gutenberg.org/files/"+ bookID+ "/" + bookID+ "-h/" +bookID+"-h.htm"} width="100%" height="80%">
            <p>Your browser does not support iframes.</p>
        </iframe>
      | <Microphone show/>
        </div>
    </div>
  );
};

export default BookContent;
