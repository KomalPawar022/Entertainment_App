import { useContext, createContext, useState } from "react";
import { signupUser } from "../helpers/api-communicator";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (getEmail, getPassword) => {
    let error = null;
    let email = null;
    try {
      const result = await signupUser(getEmail, getPassword);
      email = result.email;
    } catch (e) {
      error = e.response.data;
    }
    setError(error);

    if (email) {
      setUser({ email: email });
      setIsLoggedIn(true);
    }
  };

  const login = async (req, res) => {
    let error = null;
    let email = null;
    try {
      const result = await userLogin(getEmail, getPassword);
      email = result.email;
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
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
