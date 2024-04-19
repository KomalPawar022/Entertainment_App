import { Box } from "@mui/material";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
const Tile = ({ type, item }) => {
  return (
    <Link to={`/:${type}/Details/:${item._id}`}>
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
          <LazyLoad
            key={item.imageurl ? item.imageurl : "default_image.png"}
            placeholder={<span>Loading...</span>}
          >
            <img
              src={
                item.imageurl.length > 0 ? item.imageurl : "default_image.png"
              }
              alt="Image description"
              style={{ height: "300px", width: "180px" }}
              onerror="this.src='default_image.png'"
            />
          </LazyLoad>
        </div>
        <p styles={{ margin: "0px" }}>{item.released} - Movie</p>

        <p styles={{ margin: "0px" }}>{item.title}</p>
      </Box>
    </Link>
  );
};
export default Tile;
