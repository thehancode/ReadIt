import Quote from "./Quote";

import React, { useState } from "react";
import { FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import MediaCard from "./CardsForBooks.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBooks = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <FormControl style={{ width: 100 + "%" }}> */}
      <FormControl>
        <Paper
          component="form"
          className={classes.root}
          //   style={{ width: 80 + "%", margin: "auto" }}
        >
          <InputBase
            className={classes.input}
            placeholder="Ingrese libro o presione en el microfono y diga buscar"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <MicIcon />
          </IconButton>
        </Paper>
      </FormControl>
      <div style={{ marginLeft: 120 + "px", marginRight: 120 + "px"}}>
      <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
      <Quote></Quote>
    </div>
  );
};

export default SearchBooks;
