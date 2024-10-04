import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from "./Category.module.css";
// import CustomButton from "../components/Button/CustomButton";

const Category = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const listData = [
    {
      imag: "/category11.png",
      title: "THCA Flowers (17)",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/category22.png",
      title: "THCA Flowers (17)",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/category33.png",
      title: "THCA Flowers (17)",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/category44.png",
      title: "THCA Flowers (17)",
      icon: <FiArrowUpRight />,
    },
  ];

  return (
    <Box sx={{ padding: "0% 5%", marginTop: "4rem" }}>
      <Box>
        <Typography
          sx={{
            color: "black",
            fontSize: isSmallScreen
              ? "1.5rem"
              : isMediumScreen
              ? "2.5rem"
              : "3rem",
            fontWeight: 600,
            textTransform: "capitalize",
            marginBottom: "2rem",
          }}
        >
          See the Categories
        </Typography>
      </Box>

             <Box sx={{}}>
              <Grid container spacing={2}>
            {listData.map((row, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box
                key={index}
                
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={row.imag}
                  alt=""
                  style={{width:'100%'}}
                />
                <Box sx={{
                  position:'absolute', top:0 ,left:0, bgcolor:'#00000050', width:'100%', height:'100%', p:'1rem',
                  display:'flex', alignItems:'end'             }}>
                  <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmallScreen
                          ? "1rem"
                          : isMediumScreen
                          ? "1.1rem"
                          : "1.1rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                      }}
                    >
                      {row.title}
                    </Typography>
                    <IconButton
                      className="icon"
                      sx={{
                        fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                      <FiArrowUpRight
                        style={{ backgroundColor: "transparent" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
                </Grid>
            ))}
              </Grid>
             </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        {/* <CustomButton
          border={"1px solid #17364c"}
          backgroundColor={"#265630"}
          color={"white"}
          hbackgroundColor={"transparent"}
          hcolor={"#265630"}
          name="Learn More"
        /> */}
      </Box>
    </Box>
  );
};

export default Category;
