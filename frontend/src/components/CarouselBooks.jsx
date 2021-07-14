import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import CBooks from "./CBooks";
import { makeStyles} from "@material-ui/core/styles";
import * as libroService from "../services/LibroService";

import { Link } from "react-router-dom";

const CarouselBooks = () => {
  const [libros, setLibros] = useState([]);

  const loadLibros = async () => {
    const res = await libroService.getLibros();
  
    console.log("back-ibros",res);
    // Pasar al tipo de dato (arreglo inicialmente vacio)
    const sortedLibros = res.data
      .map((libro) => {
        return {
          ...libro,
          createAt: libro.createAt ? new Date(libro.createAt) : new Date(),
          updateAt: libro.updateAt ? new Date(libro.updateAt) : new Date(),
        };
      })
      .sort((a, b) => b.createAt.getTime() - a.createAt.getTime());

    setLibros(sortedLibros);
  };

  useEffect(() => {
    loadLibros();
  }, []);

  const useStyles = makeStyles(() => ({
    link: {
      backgroundImage: "none",
      textTransform: "none",
    },
  }));

  const classes = useStyles();

  const breakPoints = [
    { width: 240, itemsToShow: 1 },
    { width: 480, itemsToShow: 2, itemsToScroll: 2 },
    { width: 720, itemsToShow: 3, itemsToScroll: 3 },
    { width: 960, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1440, itemsToShow: 6, itemsToScroll: 6 },
  ];

  return (
    <div className="carousel">
      <Carousel breakPoints={breakPoints}>
        {libros.map((item) => (
          <Link
            style={{ display: "inherit", "text-decoration": "none" }}
            className={classes.link}
            to={"/books/" + item._id}
          >
            <CBooks
              id={item.libros}
              url={`https://www.gutenberg.org/cache/epub/${item.idLibro}/pg${item.idLibro}.cover.medium.jpg`}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBooks;
