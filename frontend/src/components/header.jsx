import { Box, Avatar } from "@mui/material";
import { MdMovie } from "react-icons/md";
import { red } from "@mui/material/colors";
import { PiSquaresFourFill } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "#191B34",
        borderRadius: 3,
        width: "60px",
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
      <Link to="/movies">
        <MdLocalMovies
          style={{ color: "#444657", width: "30px", height: "30px" }}
        />
      </Link>
      <PiTelevisionBold
        style={{ color: "#444657", width: "30px", height: "30px" }}
      />
      <FaBookmark style={{ color: "#444657", width: "30px", height: "30px" }} />
      <Avatar sx={{ justifySelf: "bottom" }} />
    </Box>
  );
}
