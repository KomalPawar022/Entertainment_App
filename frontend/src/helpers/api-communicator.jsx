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
  const res = await axios.get("https://8wzvg3-8080.csb.app/api/v1/movie/");
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
