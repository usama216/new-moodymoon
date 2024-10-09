import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import HeroSectionSearch from "./HeroSectionSearch";
import { Link } from "react-router-dom";

const BlogHeroSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(contactusbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          minHeight: "60vh",
          padding: "0rem 5%",
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
            Our Blogs
          </Typography>
          <br />
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontSize: "1rem", color: "white" }}>
              <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
                Home /
              </Link>
            </Typography>

            <Typography
              sx={{ marginLeft: "1rem", fontSize: "1rem", color: "white" }}
            >
              <Link style={{ textDecoration: "none", color: "white" }}>
                Blogs
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogHeroSection;
