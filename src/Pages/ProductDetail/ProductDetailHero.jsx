import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
// import HeroSectionSearch from "./HeroSectionSearch";
import { Link } from "react-router-dom";

const ProductDetailHero = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));



  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/ourProducts/HeroSectionBG.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          minHeight: "60vh",
          padding: "0rem 5%",
          mt:isSmallScreen ? '-5rem': isMediumScreen ? '-6rem':'-8.4rem',

        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", fontSize: "2rem", color: "white" }}
          >
            Our Products
          </Typography>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontSize: "1rem", color: "white" }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", marginLeft: "1rem", color: "white" }}
            >

            </Typography>

            <Typography
              sx={{ marginLeft: "1rem", fontSize: "1rem", color: "white" }}
            >
              <Link style={{ textDecoration: "none", color: "white" }}>
                Our Products / details
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetailHero;
