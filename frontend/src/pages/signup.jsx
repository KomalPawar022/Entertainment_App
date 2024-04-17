import { Box, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
export default function SignUp() {
  const auth = useAuth();
  useEffect(() => {
    if (auth.error) toast.error(auth.error, { id: "signup" });
    auth.setError(null);
  }, [auth.error]);
  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");
    if (password === repeatPassword) {
      try {
        toast.loading("Signing Up", { id: "signup" });
        await auth?.signup(email, password);

        toast.success("Signed Up Successfully", { id: "signup" });
      } catch (e) {}
    } else {
      console.log("in else");
      toast.error("Both the Passwords should match", { id: "signup" });
    }
  };
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
