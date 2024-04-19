import { Box, Grid } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import Tile from "./Tile";
const GridItem = ({ type }) => {
  const auth = useAuth();
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
    >
      {auth?.movies?.map((item) => {
        return (
          <Grid>
            <Tile key={item._id} item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GridItem;
