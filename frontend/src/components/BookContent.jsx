import React from 'react'
import { getCurrentUser } from "../services/LoginService";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import CarouselBooks from "./CarouselBooks";
import SearchBooks from "./SearchBooks";
import {
    Hidden,
    List,
    ListItem,
    Drawer,
    Divider,
    ListItemText,
    Link,
    Typography,
    Container
  } from "@material-ui/core";
  
const BookContent = () => {
    const useStyles =   makeStyles((theme) => ({
        offset: theme.mixins.toolbar,
        root: {
          display: "flex",
        },
        botonPersonalizado: {
          margin: theme.spacing(1),
          backgroundImage: "none",
          textTransform: "none",
        },
      }));
    
      const classes = useStyles();
    
    return (
        <div>
            <div className={classes.offset}></div>
              <CarouselBooks/>
            </div>
    )
}

export default BookContent
