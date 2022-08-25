const { Router } = require("express");
const movie = Router();

movie.use((req, res,next) => {
  const movie = req.body;
  const { id, Name, Rating, Description, Genre, cast } = movie;

  if (movie) {
    if (id) {
      if (typeof id != "number") {
        res.status(404).send("enter correct type of id");
      }
    } else {
      res.status(404).send("id is required");
    }

    if (Name) {
      if (typeof Name != "string") {
        return res.status(404).send("enter correct type of movie Name");
      }
    } else {
      return res.status(404).send("Movie Name is required");
    }

    if (Rating) {
      if (typeof Rating != "number") {
        return res.status(404).send("enter correct type of Rating");
      }
    } else {
      return res.status(404).send("Rating is required");
    }

    if (Description) {
      if (typeof Description != "string") {
        return res.status(404).send("enter correct type of Discription");
      }
    } else {
      return res.status(404).send("Discription is required");
    }

    if (Genre) {
      if (typeof Genre != "string") {
        return res.status(404).send("enter correct type of Genre");
      }
    } else {
      return res.status(404).send("Genre is required");
    }

    if (cast.length != 0) {
      cast.forEach((ele) => {
        if (typeof ele != "string") {
          return res.status(404).send("enter correct type of cast");
        }
      });
    } else {
      return res.status(404).send("cast is required");
    }
  } else {
    return res.status(404).send("movie Data is required");
  }
  next();
});

movie.post("/", (req, res) => {
  return res.send("data successfully posted");
});

module.exports = movie;
