import { Box } from "@mui/material";
import GridItem from "../components/GridItem";
const Movies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        gap: 2,
        paddingLeft: "30px",
        height: "100vh",
        width: "90vw",
        overflow: "scroll",
      }}
    >
      <h1 styles={{ margin: "2px" }}>Movies</h1>
      <GridItem type={"movies"} />
    </Box>
  );
};
export default Movies;
