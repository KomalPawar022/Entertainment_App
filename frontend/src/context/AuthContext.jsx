import { useContext, createContext, useState, useEffect } from "react";

import {
  signupUser,
  userLogin,
  getMovies,
  getSeries,
  InsertNameandPicture,
  AddBookmark,
  removeBookmark,
  // InsertMovies,
  // InsertSeries,
} from "../helpers/api-communicator";
//import seriesData from "../seriesData";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [series, setSeries] = useState(null);
  const [trending, setTrending] = useState([]);
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    var temp = [];
    var temp2 = [];
    async function getMoviesfromDB() {
      if (isLoggedIn) {
        try {
          const result = await getMovies();
          let moviesData = result.data.movies;

          moviesData.forEach((movie) => {
            user.bookmarks.map((item) => {
              if (movie._id === item.id) {
                movie.isBookmarked = true;
              }
              if (movie.imdbrating >= 7.5) {
                temp.push(movie);
              }
              if (movie.released.toString().substring(0, 4) >= 2020) {
                temp2.push(movie);
              }
            });
          });

          setMovies(moviesData);
        } catch (e) {
          console.log(e);
        }
      }
    }
    getMoviesfromDB();

    async function getSeriesfromDB() {
      if (isLoggedIn) {
        try {
          const result = await getSeries();

          let seriesData = result.data.series;
          let seriesData1 = [];
          seriesData.forEach((series) => {
            user.bookmarks.map((item) => {
              if (series._id === item.id) {
                series.isBookmarked = true;
              }

              if (series.rating >= 6.5) {
                temp.push(series);
              }
              if (series.released.toString().substring(0, 4) >= 2020) {
                temp2.push(series);
              }
            });
          });

          setSeries(seriesData);
        } catch (e) {
          console.log(e);
        }
      }
    }
    getSeriesfromDB();
    setTrending(temp);
    setRecommend(temp2);
    console.log("temp2 from context", temp2);
    console.log("recommend from context", recommend);
  }, [isLoggedIn]);

  //************** Used To Insert Data in DATABASE *******************
  // useEffect(() => {
  //   for (let i = 0; i < seriesData.length; i++) {
  //     let title = seriesData[i].name;
  //     let rating = seriesData[i].rating?.average;
  //     let runtime = seriesData[i].runtime;
  //     let released = seriesData[i].premiered;
  //     let ended = seriesData[i].ended;
  //     let schedule = seriesData[i].schedule;
  //     let genre = seriesData[i].genres;
  //     let synopsis = seriesData[i].summary;
  //     let imageurl = seriesData[i].image?.original;
  //     let language = seriesData[i].language;
  //     let cast = [];
  //     let type = seriesData[i].type;
  //     let status = seriesData[i].status;
  //     let url = seriesData[i].url;
  //     try {
  //       let res = InsertSeries(
  //         title,
  //         rating,
  //         runtime,
  //         released,
  //         ended,
  //         schedule,
  //         genre,
  //         synopsis,
  //         imageurl,
  //         language,
  //         cast,
  //         type,
  //         status,
  //         url,
  //       );
  //       console.log(res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }, []);

  const signup = async (getEmail, getPassword) => {
    let error = null;
    let user = null;
    try {
      const result = await signupUser(getEmail, getPassword);
      user = result.data.user;
    } catch (e) {
      error = e.response.data;
    }
    setError(error);

    if (user) {
      setUser(user);
      setIsLoggedIn(true);
    }
  };

  const login = async (getEmail, getPassword) => {
    let error = null;
    let user = null;
    try {
      const result = await userLogin(getEmail, getPassword);

      user = result.data.user;
    } catch (e) {
      error = e.response.data;
    }
    setError(error);

    if (user) {
      setUser(user);
      setIsLoggedIn(true);
    }
  };

  const InsertNameAndPictureInDB = async (name, picture) => {
    let result = null;
    try {
      result = await InsertNameandPicture(user.email, name, picture);
      // console.log(result);
    } catch (e) {
      console.log(e);
    }
    return result;
  };

  const AddBookmarkInDB = async (bookmark) => {
    let result = null;
    try {
      result = await AddBookmark(user._id, bookmark);
    } catch (e) {
      console.log(e);
    }
    return result;
  };

  const RemoveBookmarkFromDB = async (bookmarkId) => {
    let result = null;

    try {
      result = await removeBookmark(user._id, bookmarkId);
    } catch (e) {
      console.log(e);
    }
    return result;
  };

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    signup,
    error,
    setError,
    login,
    movies,
    setMovies,
    selectedOption,
    setSelectedOption,
    series,
    setSeries,
    InsertNameAndPictureInDB,
    AddBookmarkInDB,
    RemoveBookmarkFromDB,
    trending,
    recommend,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
