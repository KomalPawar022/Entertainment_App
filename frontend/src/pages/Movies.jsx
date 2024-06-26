import { Box } from "@mui/material";
import Grid from "../components/Grid";
const Movies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        gap: 2,

        height: "100vh",
        width: "90vw",
      }}
    >
      <h1 styles={{ margin: "2px" }}>Movies</h1>
      <Grid type={"movies"} />
    </Box>
  );
};
export default Movies;
