import { Box } from "@mui/material";

const Tile = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "320px",
        border: "solid 1px white",
        width: "20vw",
        height: "20vh",
      }}
    >
      <img src={item.imageurl} styles={{ width: "20vw", height: "20vh" }} />
      <h2>{item.title}</h2>
    </Box>
  );
};
export default Tile;
