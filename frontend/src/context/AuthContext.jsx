import { useContext, createContext, useState, useEffect } from "react";

import {
  signupUser,
  userLogin,
  getMovies,
  getSeries,
  InsertNameandPicture,
  // InsertMovies,
  // InsertSeries,
} from "../helpers/api-communicator";
//import seriesData from "../seriesData";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    async function getMoviesfromDB() {
      if (isLoggedIn) {
        try {
          const result = await getMovies();

          setMovies(result.data.movies);
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

          setSeries(result.data.series);
        } catch (e) {
          console.log(e);
        }
      }
    }
    getSeriesfromDB();
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
    let email = null;
    try {
      const result = await signupUser(getEmail, getPassword);
      email = result.data.email;
    } catch (e) {
      error = e.response.data;
    }
    setError(error);

    if (email) {
      setUser({ email: email });
      setIsLoggedIn(true);
    }
  };

  const login = async (getEmail, getPassword) => {
    let error = null;
    let email = null;
    try {
      const result = await userLogin(getEmail, getPassword);

      email = result.data.email;
    } catch (e) {
      error = e.response.data;
    }
    setError(error);

    if (email) {
      setUser({ email: email });
      setIsLoggedIn(true);
    }
  };

  const InsertNameAndPictureInDB = async (name, picture) => {
    let msg = null;
    try {
      const result = await InsertNameandPicture(user.email, name, picture);
      // console.log(result);
      msg = result.data.message;
    } catch (e) {
      console.log(e);
    }
    return msg;
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
