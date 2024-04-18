import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { Box } from "@mui/material";
import { useAuth } from "./context/AuthContext";

function App() {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        gap: 2,
        alignItems: "center",
        height: "100vh",
      }}
    >
      {auth?.isLoggedIn ? <Header /> : null}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Box>
  );
}

export default App;
