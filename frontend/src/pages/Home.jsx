import { Box, Input, Avatar, Typography } from "@mui/material";

import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  // const auth = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (auth?.user === null) {
  //     toast.error("Not Logged In", { id: "home access" });
  //     navigate("/");
  //   }
  // }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 2,
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          backgroundColor: "#191B34",
          borderRadius: 3,
          width: "70px",
          height: "80vh",
          justifyContent: "top",
          alignItems: "center",
          marginLeft: "25px",
          justifySelf: "left",
        }}
      >
        <MdMovie
          style={{
            color: red[400],
            width: "30px",
            height: "30px",
            marginBottom: "12px",
            marginTop: "5px",
          }}
        />
        <PiSquaresFourFill
          style={{ color: "#444657", width: "30px", height: "30px" }}
        />
        <MdLocalMovies
          style={{ color: "#444657", width: "30px", height: "30px" }}
        />
        <PiTelevisionBold
          style={{ color: "#444657", width: "30px", height: "30px" }}
        />
        <FaBookmark
          style={{ color: "#444657", width: "30px", height: "30px" }}
        />
        <Avatar sx={{ justifySelf: "bottom" }} />
      </Box> */}
      <Box sx={{ display: "flex", flexDirection: "column", width: "100vw" }}>
        <div style={{ display: "inline" }}>
          <IoSearch />

          <Input
            type="search"
            placeholder="Search for Movies or TV Shows"
            sx={{ color: "white", width: "80%", justifySelf: "top" }}
          />
        </div>
      </Box>
    </Box>
  );
};
export default Home;
