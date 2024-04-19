const express = require("express");
const movieRoutes = express.Router();
const {
  addMovie,
  getAllMovies,
  getMovieById,
} = require("../controllers/movies-controller");
movieRoutes.post("/addMovie", addMovie);
movieRoutes.post("/getMovieById", getMovieById);
movieRoutes.get("/", getAllMovies);

module.exports = movieRoutes;
