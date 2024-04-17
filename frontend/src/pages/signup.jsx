import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { MdMovie } from "react-icons/md";
export default function SignUp() {
  const inputRef = useRef();
  function handleSignup() {
    console.log(inputRef);
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        rowGap: 5,
      }}
    >
      <MdMovie style={{ color: red[400], width: "30px", height: "30px" }} />
      <Box
        sx={{
          display: "flex",

          backgroundColor: "#191B34",
          borderRadius: 3,
          flexDirection: "column",
          padding: 2,
          rowGap: 2,
          width: "400px",
        }}
        ref={inputRef}
      >
        <h1 style={{ textAlign: "left" }}>SignUp</h1>

        <Input placeholder="Email Address" sx={{ color: "white" }} />
        <Input placeholder="Password" sx={{ color: "white" }} />
        <Input placeholder="Repeat Password" sx={{ color: "white" }} />
        <Button
          variant="contained"
          sx={{ backgroundColor: red[400] }}
          onClick={() => handleSignup()}
        >
          Create an Account
        </Button>

        <Typography sx={{ textAlign: "center", padding: 1 }}>
          Already have an Account?
          <Link to="/login" style={{ color: red[400] }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
} //#282c34
