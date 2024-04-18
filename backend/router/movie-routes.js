const express = require("express");
const movieRoutes = express.Router();
const { addMovie, getAllMovies } = require("../controllers/movies-controller");
movieRoutes.post("/addMovie", addMovie);

movieRoutes.get("/", getAllMovies);
module.exports = movieRoutes;
