import { useContext, createContext, useState } from "react";
import { signupUser } from "../helpers/api-communicator";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password) => {
    const result = signupUser(email, password);
    const data = result
      .then((data) => {
        setUser({ email: data.email });
        isLoggedIn(true);
        return data;
      })
      .catch((e) => {
        console.log(e.response.data);
        setError(e.response.data);
        console.log(error);
        return e.response.data;
      });
    console.log(data);
    // if (data) {
    //   setUser({ email: data.email });
    //   isLoggedIn(true);
    // }
  };
  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    signup,
    error,
    setError,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
