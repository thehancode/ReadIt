import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: "#C0B3A0",
    backgroundColor: "#22252c",
    maxWidth: 250,
    margin: [40 + "px"],
    "border-radius": "50px",
  },
  media: {
    height: 180,
    minWidth: "230px",
    maxWidth: "250px",
  },
  bodyCard: {
    color: "white",
  },
  link: {
    backgroundImage: "none",
    textTransform: "none",
  },
  title: {
    maxHeight: "100px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            props.bookInfo.imagen === undefined
              ? `https://www.gutenberg.org/cache/epub/${props.bookInfo.idLibro}/pg${props.bookInfo.idLibro}.cover.medium.jpg`
              : props.bookInfo.imagen
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {props.bookInfo.nombreLibro}
          </Typography>
          <Typography
            variant="body2"
            className={classes.bodyCard}
            component="p"
          >
            {props.bookInfo.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <Link
          style={{ display: "inherit", "text-decoration": "none" }}
          className={classes.link}
          to={"/read/" + props.bookInfo.idLibro + "/" + props.bookInfo._id}
        >
          <Button size="small" fullWidth style={{ color: "#ffdda3" }}>
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
