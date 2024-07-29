import { Box, Input, Avatar, Typography } from "@mui/material";

import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { styled } from "@mui/material/styles";
import SpeedDial, { SpeedDialProps } from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FaShareAlt } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <IoSettingsSharp />, name: "Settings" },
  { icon: <FaShareAlt />, name: "Share" },
  { icon: <RiLogoutCircleRLine />, name: "Logout" },
];

const Home = () => {
  const auth = useAuth();
  const [inputTitles, setInputTitles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user === null) {
      toast.error("Not Logged In", { id: "home access" });
      navigate("/");
    }
  }, []);

  useEffect(() => {
    let temp = [];
    auth?.trending.map((item) => {
      temp.push(item.title);
    });
    auth?.recommend.map((item) => {
      temp.push(item.title);
    });
    setInputTitles(temp);
  }, [auth?.trending]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        marginLeft: "100px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "90vw" }}>
        <div style={{ display: "inline", alignItems: "start" }}>
          <IoSearch />

          {/* <Input
            type="search"
            placeholder="Search for Movies or TV Shows"
            sx={{
              color: "white",
              width: "80%",
              justifySelf: "top",
              padding: "15px",
            }}
          /> */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={inputTitles}
            sx={{ width: 300, color: "white" }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </div>
        <h1 style={{ padding: "10px" }}>Trending</h1>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          centerMode={true}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {auth?.trending?.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  key={item.id}
                  style={{
                    backgroundImage: `url(${item.imageurl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "330px",
                    width: "230px",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "end",
                      padding: "10px",
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <h6>{item.released.toString().substring(0, 4)}</h6>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Box>

      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
          display: "flex",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <Box sx={{ position: "relative", height: 100 }}>
          <StyledSpeedDial
            ariaLabel="SpeedDial playground example"
            icon={<SpeedDialIcon />}
            direction={"left"}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </StyledSpeedDial>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90vw",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Recommended For You</h1>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          centerMode={true}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "50px",
          }}
          rtl={true}
        >
          {auth?.recommend?.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item?.imageurl.length > 0}
                <div
                  key={item.id}
                  style={{
                    backgroundImage:
                      item?.imageurl.length > 0
                        ? `url(${item.imageurl})`
                        : `url('default_image.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "330px",
                    width: "230px",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "end",
                      padding: "10px",
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <h6>{item.released.toString().substring(0, 4)}</h6>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};
export default Home;
