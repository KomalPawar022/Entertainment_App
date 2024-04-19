import axios from "axios";
export const signupUser = async (email, password) => {
  const res = await axios.post(
    "https://8wzvg3-8080.csb.app/api/v1/user/signup",
    { email, password },
  );
  return res;
};

export const userLogin = async (email, password) => {
  const res = await axios.post(
    "https://8wzvg3-8080.csb.app/api/v1/user/login",
    { email, password },
  );
  return res;
};

export const getMovies = async () => {
  const res = await axios.get("https://kdq7lq-8080.csb.app/api/v1/movie/");
  return res;
};

export const InsertMovies = async (
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
) => {
  const res = await axios.post(
    "https://8wzvg3-8080.csb.app/api/v1/movie/addMovie",
    {
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
    },
  );
  return res;
};
export const getMovieById = async (id) => {
  const res = await axios.post(
    "https://kdq7lq-8080.csb.app/api/v1/movie/getMovieById",
    { id },
  );
  return res;
};

export const InsertSeries = async (
  title,
  rating,
  runtime,
  released,
  ended,
  schedule,
  genre,
  synopsis,
  imageurl,
  language,
  cast,
  type,
  status,
  url,
) => {
  const res = await axios.post(
    "https://kdq7lq-8080.csb.app/api/v1/series/addSeries",
    {
      title,
      rating,
      runtime,
      released,
      ended,
      schedule,
      genre,
      synopsis,
      imageurl,
      language,
      cast,
      type,
      status,
      url,
    },
  );
  return res;
};

export const getSeries = async () => {
  const res = await axios.get("https://kdq7lq-8080.csb.app/api/v1/series/");
  return res;
};

export const getSeriesById = async (id) => {
  const res = await axios.post(
    "https://kdq7lq-8080.csb.app/api/v1/series/getSeriesById",
    { id },
  );
  return res;
};
