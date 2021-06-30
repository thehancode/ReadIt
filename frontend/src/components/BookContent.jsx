import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as libroService from "../services/LibroService";
import CBooks from "./CBooks";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { useParams } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";
import { Link as LinkRef } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

const BookContent = (props) => {
  let { bookID } = useParams();

  const [libro, setLibro] = useState({});
  const loadLibro = async () => {
    const res = await libroService.getLibro(bookID);
    setLibro(res.data);
  };

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
    containerShare: {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
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
    buttonsShare: {
      border: "none",
      backgroundColor: "#FFFFFF",
    },
    buttons: {
      flex: 1,
      margin: "10%",
      height: "50px",
      border: "none",
      backgroundColor: "#E14658",
      "border-radius": "1.2em",
      color: "#fff",
      "font-size": "1.3em",

      "&:hover": {
        background: "#a3001b",
      },
      "&:active": {
        position: "relative",
        top: "2px",
      },
    },

    descripcion: {
      padding: "5%",
      "font-size": "1.2em",
    },
  }));

  useEffect(() => {
    loadLibro();
  }, []);

  const [openModal, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.offset}></div>
      <div id="container-desc" className={classes.container}>
        <div className={classes.containercard}>
          <CBooks
            id={"book5"}
            className={classes.items1}
            url={`https://www.gutenberg.org/cache/epub/${libro.idLibro}/pg${libro.idLibro}.cover.medium.jpg`}
          />
          <div style={{ margin: "5% 0 0 0" }}>
            <Rating
              name="simple-controlled"
              size="large"
              value={starValue}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>

        <div id="container-desc-wodrs" className={classes.containerv}>
          <Typography variant="h2" component="h1" className={classes.title}>
            {libro.nombreLibro}
          </Typography>

          <div id="descripcion" className={classes.descripcion}>
            {libro.descripcion}
          </div>
          <div id="buttons-div" className={classes.container}>
            <button className={classes.buttons}>
              <LinkRef
                style={{ color: "white", "text-decoration": "none" }}
                to={"/read/" + libro.idLibro}
              >
                Leer
              </LinkRef>
            </button>

            <button className={classes.buttons} onClick={onOpenModal}>
              Compartir
              <Modal open={openModal} onClose={onCloseModal} center>
                <h2> {"Comparte " + libro.nombreLibro}</h2>
                <div className={classes.containerShare}>
                  <button className={classes.buttonsShare}>
                    <TwitterIcon size={64} round={true} />
                  </button>
                  <button className={classes.buttonsShare}>
                    <FacebookIcon size={64} round={true} />
                  </button>
                  <button className={classes.buttonsShare}>
                    <WhatsappIcon size={64} round={true} />
                  </button>
                </div>
              </Modal>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookContent;
