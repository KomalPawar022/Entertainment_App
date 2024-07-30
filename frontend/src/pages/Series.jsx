import { Box, Button } from "@mui/material";
import GridItem from "../components/GridItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Series = () => {
  const auth = useAuth();
  const [searchInput, setSearchInput] = useState(null);
  function handleSearch(e) {
    e.preventDefault();
    setSearchInput(document.getElementById("combo-box-demo").defaultValue);
    console.log(searchInput);
  }
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
        width: "100vw",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        <h1 styles={{ margin: "2px" }}>Series</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={auth?.seriesTitles}
            sx={{ width: 300, backgroundColor: "white", height: "50px" }}
            renderInput={(params) => <TextField {...params} label="Series" />}
          />
          <Button
            variant="contained"
            sx={{ height: "50px" }}
            onClick={(e) => handleSearch(e)}
          >
            <IoSearch />
          </Button>
        </div>
      </div>
      {searchInput ? (
        <GridItem type={"series"} input={searchInput} />
      ) : (
        <GridItem type={"series"} />
      )}
    </Box>
  );
};
export default Series;
