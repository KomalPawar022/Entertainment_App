import { Box } from "@mui/material";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";

const Tile = ({ type, item, bookmark = false }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const auth = useAuth();
  const handleAddBookmark = async () => {
    let bookmark = {
      type: type,
      id: item._id,
    };
    auth?.user.bookmarks.push(bookmark);
    let result = null;
    try {
      result = auth?.AddBookmarkInDB(bookmark);
      let movies = auth?.movies;
      for (let movie of movies) {
        if (item._id === movie._id) {
          movie.isBookmarked = true;
          setIsBookmarked(true);

          break;
        }
      }
      auth?.setMovies(movies);

      let series = auth?.series;
      for (let serie of series) {
        if (item._id === serie._id) {
          serie.isBookmarked = true;
          setIsBookmarked(true);
          break;
        }
      }
      auth?.setSeries(series);
      item.isBookmarked = true;
      toast.success("Bookmark Saved", { id: "bookmark" });
    } catch (e) {
      toast.error("Couldn't save Bookmark", { id: "bookmark" });
    }
    console.log(result);
  };

  const handleRemoveBookmark = async () => {
    let result = null;
    try {
      result = auth?.RemoveBookmarkFromDB(item._id);
      auth.user.bookmarks = auth?.user?.bookmarks.filter((temp) => {
        if (item._id !== temp.id) {
          return temp;
        } else {
        }
      });
      let movies = auth?.movies;
      for (let movie of movies) {
        if (item._id === movie._id) {
          movie.isBookmarked = false;
          setIsBookmarked(false);
          break;
        }
      }
      auth?.setMovies(movies);

      let series = auth?.series;
      for (let serie of series) {
        if (item._id === serie._id) {
          serie.isBookmarked = false;
          setIsBookmarked(false);
          break;
        }
      }
      auth?.setSeries(series);

      item.isBookmarked = false;

      toast.success("Bookmark Removed", { id: "bookmark" });
    } catch (e) {
      toast.error("Couldn't save Bookmark", { id: "bookmark" });
    }
    console.log(result);
  };
  useEffect(() => {
    if (item.isBookmarked) setIsBookmarked(true);
    else setIsBookmarked(false);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        width: "auto",
        height: "auto",
        minHeight: "400px",
        minWidth: "280px",
        paddingLeft: "3px",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ position: "relative", width: "auto", height: "auto" }}>
        {bookmark ? null : ( // </div> //   /> //     style={{ justifySelf: "center", color: "white" }} //   <RiDeleteBin6Line // > //   onClick={handleRemoveBookmark} //   }} //     cursor: "pointer", //     backgroundColor: "rgba(128, 128, 128, 0.5)", //     borderRadius: 15, //     border: "solid 1px white", //     alignItems: "center", //     justifyContent: "center", //     top: "2px", //     right: "2px", //     height: "30px", //     width: "30px", //     position: "absolute", //     display: "flex", //   style={{ // <div
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
            onClick={
              item.isBookmarked ? handleRemoveBookmark : handleAddBookmark
            }
          >
            {isBookmarked ? (
              <FaHeart style={{ justifySelf: "center", color: "red" }} />
            ) : (
              <FaRegHeart style={{ justifySelf: "center", color: "white" }} />
            )}
          </div>
        )}
        {/* <LazyLoad
          key={item.imageurl ? item.imageurl : "default_image.png"}
          placeholder={<span>Loading...</span>}
        > */}
        <img
          src={item?.imageurl.length > 0 ? item?.imageurl : "default_image.png"}
          alt="Image description"
          style={{ height: "300px", width: "180px" }}
          onError="this.src='default_image.png'"
        />
        {/* </LazyLoad> */}
      </div>
      <Link to={`/:${type}/Details/:${item._id}`}>
        <p styles={{ margin: "0px" }}>{item.released} - Movie</p>

        <p styles={{ margin: "0px" }}>{item.title}</p>
      </Link>
    </Box>
  );
};
export default Tile;
