import { useContext, createContext, useState, useEffect } from "react";

import {
  signupUser,
  userLogin,
  getMovies,
  InsertMovies,
} from "../helpers/api-communicator";
import data from "../data";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);

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
  }, [isLoggedIn]);

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
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
