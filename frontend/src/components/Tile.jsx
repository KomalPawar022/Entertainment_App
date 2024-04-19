import { Box } from "@mui/material";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
const Tile = ({ item }) => {
  return (
    <Link to={`/Details/:${item._id}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          width: "auto",
          height: "auto",
          minHeight: "400px",
          minWidth: "280px",
          // border: "solid 1px white",
          width: "20vw",
          height: "20vh",
          // margin: "10px",
          paddingLeft: "3px",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ position: "relative", width: "auto", height: "auto" }}>
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "23px",
              height: "23px",
              right: "2px",
              top: "2px",
              justifyContent: "center",
              alignItems: "center",
              border: "solid 1px white",
              borderRadius: 10,
              backgroundColor: "rgba(128, 128, 128, 0.5)",
              cursor: "pointer",
            }}
          >
            <FaRegBookmark style={{ justifySelf: "center" }} />
          </div>
          <LazyLoad key={item.imageurl} placeholder={<span>Loading...</span>}>
            <img src={item.imageurl} alt="Image description" />
          </LazyLoad>
        </div>
        <p styles={{ margin: "0px" }}>{item.released} - Movie</p>

        <p styles={{ margin: "0px" }}>{item.title}</p>
      </Box>
    </Link>
  );
};
export default Tile;
