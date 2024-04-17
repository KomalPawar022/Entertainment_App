import { useContext } from "react";

const authContext = useContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signup = async (email, password) => {
    const data = signupUser(email, password);
    if (data) {
      setUser({ email: data.email });
      isLoggedIn(true);
    }
  };
};
