import { Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import Tile from "./Tile";
const Grid = ({ type }) => {
  const auth = useAuth();
  return (
    <Grid
      sx={{
        display: "grid",
        grid: "150px / auto auto auto",
        overflow: "scroll",
        gap: 2,
      }}
    >
      {auth?.movies?.map((item) => {
        return <Tile key={item._id} item={item} />;
      })}
    </Grid>
  );
};

export default Grid;
