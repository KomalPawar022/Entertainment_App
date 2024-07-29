import { Box } from "@mui/material";
import GridItem from "../components/GridItem";
const Movies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 2,
        paddingLeft: "50px",
        paddingTop: "20px",
        height: "100vh",
        width: "90vw",
        overflow: "scroll",
        alignItems: "center",
      }}
    >
      <h1 styles={{ margin: "2px" }}>Movies</h1>
      <GridItem type={"movies"} />
    </Box>
  );
};
export default Movies;
