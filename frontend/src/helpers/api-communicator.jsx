import axios from "axios";
export const signupUser = async (email, password) => {
  const res = await axios.post("/user/signup", { email, password });
  return res;
};

export const userLogin = async (email, password) => {
  const res = await axios.post("/user/login", { email, password });
  return res;
};

export const getMovies = async () => {
  const res = await axios.get("/movie/");
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
  const res = await axios.post("/movie/addMovie", {
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
  return res;
};
export const getMovieById = async (id) => {
  const res = await axios.post("/movie/getMovieById", { id });
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
  const res = await axios.post("/series/addSeries", {
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
  });
  return res;
};

export const getSeries = async () => {
  const res = await axios.get("/series/");
  return res;
};

export const getSeriesById = async (id) => {
  const res = await axios.post("/series/getSeriesById", { id });
  return res;
};

export const InsertNameandPicture = async (email, name, image) => {
  const res1 = await axios.put("/user/addName", {
    email,
    name,
  });

  const res2 = await axios.post(
    "/user/upload-image",
    {
      image,
      email,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data", // Specify content type
      },
    },
  );

  return { res1, res2 };
};

export const AddBookmark = async (id, bookmark) => {
  const res = await axios.put("/user/addBookmark", {
    id,
    bookmark,
  });
  return res;
};
