import Quote from "./Quote";

import React, { useEffect, useState } from "react";
import { FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import MediaCard from "./CardsForBooks.jsx";

import * as BookService from "../services/SearchBookService";

import Microphone from "./Microphone";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width:"80vw",
    height:"80px",
    borderRadius:"20px"
  },
  input: {
    marginLeft: theme.spacing(1),
    paddingLeft: "20px",
    fontSize: "1.5em",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  containerResults: {
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",

    flexDirection:"row",
    marginLeft:  "120px",
    marginRight:  "120px",
  },
}));

const SearchBooks = () => {
  const classes = useStyles();
  const [result, setResult]=useState("");
  const [Books, setBooks] = useState([]);

  const handleSubmit = (event)=>{
    event.preventDefault();
    BookService.searchBook(result).then(
      response => {
        setBooks(response.slice(0,10));
      },
      error => {
        console.error("no se encontro el libro ",error);
      } 
    );
  }

  function BookList(){

    const booksItems = Books.map((book,i)=>
      <MediaCard
      bookInfo = {{
        nombreLibro: book.title,
        author: book.author,
        idLibro: book.id,
        imagen: book.formats["image/jpeg"]!==undefined?book.formats["image/jpeg"]:"https://compellingreads.co.uk/wp-content/uploads/unknown-book-263x300.jpg",
      }}
      key = {i} 
      //image={book.formats["image/jpeg"]!==undefined?book.formats["image/jpeg"]:"https://compellingreads.co.uk/wp-content/uploads/unknown-book-263x300.jpg"} 
      //title={book.title} 
      //author={ book.authors[0]!==undefined?book.authors[0].name:"Anonymous"}
      //url={book["text/html"]}
      //type={"text/html"}
      //category={book.bookshelves[0]}
      //id={book.id}
      >
      </MediaCard>
      );
    return(
      <ul className={classes.containerResults}>
      {booksItems}
      </ul>
    )
  }

  return (
    <div>
      {/* <FormControl style={{ width: 100 + "%" }}> */}
      {/*<Notification mensaje="tiempo de descanso" open={open} setOpen = {setOpen} tipo = "success"></Notification>*/}
      <FormControl onSubmit={handleSubmit}>
        <Paper
          component="form"
          className={classes.root}
          //   style={{ width: 80 + "%", margin: "auto" }}
        >
          < InputBase
            className={classes.input}
            placeholder="Ingrese libro o presione en el microfono"
            inputProps={{ "aria-label": "search google maps" }}
            value = {result}
            onChange = {(event)=>{setResult(event.target.value)
                        console.log("ONCHANGE", result)}}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <Microphone setResult={setResult}></Microphone>
          {/* <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <MicIcon />
          </IconButton> */}
        </Paper>
      </FormControl>  
      <div>
        <BookList></BookList>
      </div>
      <Quote></Quote>
    </div>
  );
};

export default SearchBooks;
