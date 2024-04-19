import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getMovieById } from "../helpers/api-communicator";
const Details = () => {
  const [item, setItem] = useState(null);
  const auth = useAuth();
  let { id } = useParams();

  const getMovieFromDB = async (getId) => {
    let error = null;
    let result = null;
    try {
      result = await getMovieById(getId);
    } catch (e) {
      error = e.response.data;
    }
    auth?.setError(error);

    setItem(result.data.movie);
  };

  useEffect(() => {
    getMovieFromDB(id);
  }, []);
  id = id.substring(1, id.length);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "top",
        gap: 4,
        paddingLeft: "30px",
        height: "100vh",
        width: "90vw",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{ marginTop: "30px", boxShadow: 3, width: "auto", height: "auto" }}
      >
        {" "}
        <img
          src={item?.imageurl}
          alt="Image description"
          style={{ width: "400px", height: "500px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginTop: "30px",
        }}
      >
        <h1>{item?.title}</h1>
        <h2>{item?.imdbrating}</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            marginTop: "30px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <h3 style={{ color: "#444657" }}>Length</h3>
              <h3>{item?.runtime}</h3>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <h3 style={{ color: "#444657" }}>Language</h3>
              <h3>{item?.language}</h3>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <h3 style={{ color: "#444657" }}>Year</h3>
              <h3>{item?.released}</h3>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <h3>Genres</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {item?.genre.map((genreItem) => (
                <p
                  style={{
                    backgroundColor: "white",
                    color: "#11121b",
                    width: "auto",
                    display: "inline-grid",
                    fontWeight: "bold",
                    borderRadius: 4,
                    padding: "2px 10px",
                  }}
                >
                  {genreItem}
                </p>
              ))}
            </div>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3>Synopsis</h3>
            <p>{item?.synopsis}</p>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3>Casts</h3>
            <p style={{ display: "flex", gap: 2 }}>
              {item?.cast.map((castItem) => (
                <p
                  style={{
                    width: "auto",

                    fontWeight: "bold",
                    border: "solid 1px white",
                    borderRadius: 4,
                    padding: "2px 10px",
                  }}
                >
                  {castItem}
                </p>
              ))}
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Details;
