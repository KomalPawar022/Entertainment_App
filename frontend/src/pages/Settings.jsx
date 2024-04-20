import { Box, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function Settings() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  useEffect(() => {
    if (auth.error) toast.error(auth.error, { id: "signup" });
    auth.setError(null);
  }, [auth.error]);

  // async function getUrl(img) {
  //   let url;
  //   const reader = new FileReader();
  //   if (img != null) {
  //     reader.readAsDataURL(img);

  //     reader.addEventListener("load", () => {
  //       url = reader.result;
  //       setImg(url);
  //     });
  //   }
  // }

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    console.log(img);
    // const photo = formData.get("photo");
    try {
      const result = auth?.InsertNameAndPictureInDB(name, img);
      console.log(result);

      toast.success("Data Saved successfully", { id: "save data" });
    } catch (e) {
      toast.error("Data couldn't be saved", { id: "save data" });
      console.log(e);
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
      <form onSubmit={(e) => handleSave(e)}>
        <Box
          sx={{
            display: "flex",

            backgroundColor: "#191B34",
            borderRadius: 3,
            flexDirection: "column",
            padding: 4,
            rowGap: 2,
            width: "400px",
          }}
        >
          {" "}
          <h1 style={{ textAlign: "left" }}>Settings</h1>
          <Input placeholder="Name" sx={{ color: "white" }} name="name" />
          <p style={{ fontWeight: "bold" }}>Photo</p>
          <Input
            placeholder="Photo"
            sx={{ color: "white" }}
            name="photo"
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: red[400] }}
            type="submit"
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
