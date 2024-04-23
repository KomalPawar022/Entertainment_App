import { Box, Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import { useState, useEffect } from "react";
import { getMovieById, getSeriesById } from "../helpers/api-communicator";
import { useAuth } from "../context/AuthContext";
import Tile from "../components/Tile";

const Bookmarks = () => {
  const auth = useAuth();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getBookmarkedMovies = async (getId) => {
    let error = null;
    let result = null;
    try {
      result = await getMovieById(getId);
    } catch (e) {
      error = e;
      console.log(e);
    }
    auth?.setError(error);
    const temp = movies;

    temp.push(result.data.movie);
    console.log("temp", temp);
    setMovies(temp);
  };
  console.log("movies", movies);
  const getBookmarkedSeries = async (getId) => {
    let error = null;
    let result = null;
    try {
      result = await getSeriesById(getId);
    } catch (e) {
      error = e;
      console.log(e);
    }
    auth?.setError(error);
    const temp = series;

    temp.push(result.data.series);

    setSeries(temp);
  };

  useEffect(() => {
    if (isLoaded) {
      auth?.user?.bookmarks.map((item) => {
        if (item?.type === "movies") getBookmarkedMovies(item.id);
      });
      // auth?.user?.bookmarks.map((item) => {
      //   if (item?.type === "series") getBookmarkedMovies(item.id);
      //   console.log(item);
      // });
      setIsLoaded(true);
    }
  }, []);

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          paddingLeft: "30px",
          height: "auto",
          width: "100vw",
          marginTop: "10px",
        }}
      >
        <h1 styles={{ margin: "2px" }}>Bookmarked Movies</h1>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        >
          {movies.length > 0
            ? movies.map((item) => {
                return (
                  <Grid>
                    <Tile type={"movies"} item={item} />
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          paddingLeft: "30px",
          height: "auto",
          width: "90vw",
        }}
      >
        <h1 styles={{ margin: "2px" }}>Bookmarked Series</h1>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        >
          {series.length > 0
            ? series.map((item) => {
                return (
                  <Grid>
                    <Tile type={"series"} item={item} />
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Box> */}
    </Box>
  );
};
export default Bookmarks;
