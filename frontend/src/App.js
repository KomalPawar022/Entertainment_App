import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { Box } from "@mui/material";
import { useAuth } from "./context/AuthContext";
import Details from "./pages/Details";
import Series from "./pages/Series";
import Settings from "./pages/Settings";
import Bookmarks from "./pages/Bookmarks";

function App() {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",

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
        <Route path="/series" element={<Series />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/bookmark" element={<Bookmarks />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/:type/Details/:id" element={<Details />} />
      </Routes>
    </Box>
  );
}

export default App;
