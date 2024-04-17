import { Box, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
export default function Login() {
  const auth = useAuth();
  useEffect(() => {
    if (auth.error) toast.error(auth.error, { id: "login" });
    auth.setError(null);
  }, [auth.error]);
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      toast.loading("Loging In", { id: "login" });
      await auth?.login(email, password);

      toast.success("LoggedIn Successfully", { id: "login" });
    } catch (e) {}
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
      <form onSubmit={(e) => handleLogin(e)}>
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
          <h1 style={{ textAlign: "left" }}>Login</h1>
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
          <Button
            variant="contained"
            sx={{ backgroundColor: red[400] }}
            type="submit"
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}
