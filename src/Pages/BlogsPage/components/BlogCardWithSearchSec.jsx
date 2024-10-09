import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import BlogRecentPost from "./BlogRecentPost";
import BlogAnyQuestion from "./BlogAnyQuestion";
import BlogCategory from "./BlogCategory";

const BlogCardWithSearchSec = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));




  const listData = [
    {
      img: "/blogs/blog11.png",
      title: "Shyamal Patel",
      date: "May 19, 2024",
      heading: "How to Choose High-Quality CBD Products: What to Look ",
      des: "With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:",
    },
    {
      img: "/blogs/blog11.png",
      title: "Shyamal Patel",
      date: "May 19, 2024",
      heading: "How to Choose High-Quality CBD Products: What to Look For",
      des: "With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:",
    },
    {
      img: "/blogs/blog11.png",
      title: "Shyamal Patel",
      date: "May 19, 2024",
      heading: "How to Choose High-Quality CBD Products: What to Look For",
      des: "With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:",
    },
    {
      img: "/blogs/blog11.png",
      title: "Shyamal Patel",
      date: "May 19, 2024",
      heading: "How to Choose High-Quality CBD Products: What to Look For",
      des: "With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:",
    },
    {
      img: "/blogs/blog11.png",
      title: "Shyamal Patel",
      date: "May 19, 2024",
      heading: "How to Choose High-Quality CBD Products: What to Look For",
      des: "With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:",
    },


  ];



  const rows = [];
  let i = 0;

  while (i < listData.length) {

    const threeItems = listData.slice(i, i + 3);
    if (threeItems.length) {
      rows.push({ items: threeItems, type: 'three' });
    }
    i += 3;


    const twoItems = listData.slice(i, i + 2);
    if (twoItems.length) {
      rows.push({ items: twoItems, type: 'two' });
    }
    i += 2;
  }


  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item lg={8} md={7} sm={9} xs={9}>
            {listData.slice(0, 1).map((row, index) => (
              <Box key={index}> 
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "#469547",
                    padding: "0.5rem 3rem 0.3rem 0.5rem",
                    borderRadius: "8px",
                  }}
                >
                  <Typography sx={{ color: "white", textAlign: "start" }}>
                    #CBDQuality#CBDTips
                  </Typography>
                </Box>
                <Box>
                  {/* <img src={row.img} alt="" width={"100%"} /> */}
                  <img src={row.img} alt="" />
                </Box>{" "}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "end",
                    flexDirection: "column",
                    backgroundColor: "#0000001a",
                    padding: "1.2rem",
                    boxSizing: "border-box",
                  }}
                >
                 
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt:'1.5rem' }}>
                    <Typography
                      sx={{
                        color: " #FAC600",
                        fontSize: isSmallScreen
                          ? "1.1rem"
                          : isMediumScreen
                          ? "1.1rem"
                          : "1.2rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ color: "white" }}>By</span> {row.title}
                    </Typography>

                    <Typography
                      sx={{
                        marginLeft: "1rem",
                        color: "white",
                        fontSize: isSmallScreen
                          ? "1.1rem"
                          : isMediumScreen
                          ? "1.1rem"
                          : "1.2rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        marginBottom: "0.5rem",
                      }}
                    >
                      | {row.date}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "white",
                      fontSize: isSmallScreen
                        ? "1.2rem"
                        : isMediumScreen
                        ? "1.4rem"
                        : "1.6rem",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {row.heading}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: isSmallScreen
                        ? "0.9rem"
                        : isMediumScreen
                        ? "1rem"
                        : "1rem",
                      fontWeight: 400,
                      textTransform: "capitalize",
                    }}
                  >
                    {row.des}
                  </Typography>

                  <Box>
                    <IconButton
                      className="icon"
                      sx={{
                        fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: isSmallScreen
                            ? "0.9rem"
                            : isMediumScreen
                            ? "1rem"
                            : "1rem",
                          fontWeight: 500,

                          marginRight: "1rem",
                        }}
                      >
                        Read More
                      </Typography>
                      <FiArrowUpRight
                        style={{ backgroundColor: "transparent" }}
                      />
                    </IconButton>
                  </Box>
              </Box>
              
            ))}
          </Grid>

          <Grid item lg={4} md={4} sm={3} xs={3}>
           <BlogRecentPost />
           <BlogAnyQuestion/>
           <BlogCategory/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BlogCardWithSearchSec;
