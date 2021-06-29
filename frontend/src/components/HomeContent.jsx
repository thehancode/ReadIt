import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import CarouselBooks from "./CarouselBooks";
import SearchBooks from "./SearchBooks";
import {
    Typography,
    Container
  } from "@material-ui/core";
  
const HomeContent = () => {
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
        submenu: {
            margin: "0 1.5em",
            "&:active": {
              color: "#C0B3A0",
            },
          },
          title: {
            color: '#3F3250',
            fontWeight: '400',
            margin: '20px',
          },    
          subtitle: {
            textAlign: 'left',
            color: '#3F3250',
            paddingLeft: '1em',
            fontWeight: '300',
            margin: '10px',
          }
      
      }));
    
      const classes = useStyles();
    
    return (
        <div>
            <div className={classes.offset}></div>
            <Typography variant="h2" component="h1" className={classes.title}>Biblioteca</Typography>
            <Typography variant="h3" component="h2" className={classes.subtitle}>Catálogo</Typography>
            <Container maxWidth='xl' component="section">
              <CarouselBooks/>
            </Container>
            <Typography variant="h3" component="h2" className={classes.subtitle}>Buscador</Typography>
            <SearchBooks/>
        </div>
    )
}

export default HomeContent
