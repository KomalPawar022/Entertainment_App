import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { MdMovie } from "react-icons/md";
export default function SignUp() {
  const inputRef = useRef();
  function handleSignup(e) {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log(formData);

    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");
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
      <form onSubmit={(e) => handleSignup(e)}>
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
          {" "}
          <h1 style={{ textAlign: "left" }}>SignUp</h1>
          <Input
            placeholder="Email Address"
            sx={{ color: "white" }}
            name="email"
          />
          <Input
            placeholder="Password"
            sx={{ color: "white" }}
            name="password"
          />
          <Input
            placeholder="Repeat Password"
            sx={{ color: "white" }}
            name="repeatPassword"
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: red[400] }}
            type="submit"
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
      </form>
    </Box>
  );
} //#282c34
