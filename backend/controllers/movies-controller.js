const Movies = require("../models/Movies");
const addMovie = async (req, res, next) => {
  try {
    const {
      title,
      imdbrating,
      runtime,
      released,
      imdbid,
      genre,
      synopsis,
      imageurl,
      language,
      streamingAvailability,
      cast,
    } = req.body;

    const existingMovie = await Movies.findOne({ title: title });

    if (existingMovie) return res.status(401).send("Movie Already Exists");

    const movie = new Movies({
      title,
      imdbrating,
      runtime,
      released,
      imdbid,
      genre,
      synopsis,
      imageurl,
      language,
      streamingAvailability,
      cast,
    });
    movie.save();
    return res.status(201).json({ message: "OK", id: movie._id.string });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "ERROR", cause: e.message });
  }
};

const getAllMovies = async (req, res, next) => {
  try {
    movies = await Movies.find();
    return res.status(200).json({ message: "OK", movies: movies });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "ERROR", cause: e.message });
  }
};

const getMovieById = async (req, res, next) => {
  let movie;

  let { id } = req.body;
  id = id.toString();

  try {
    movie = await Movies.findById(id);
    return res.status(200).json({ message: "OK", movie: movie });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "ERROR", cause: e.message });
  }
};
module.exports = { addMovie, getAllMovies, getMovieById };
