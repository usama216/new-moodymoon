import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../components/Image/Image";
// import HeroSectionSearch from "./HeroSectionSearch";
import { Link } from "react-router-dom";

const FaqsHero = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/FAQ/FAQHero.png)",
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
           FAQS
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
           /
            </Typography>

            <Typography
              sx={{ marginLeft: "1rem", fontSize: "1rem", color: "white" }}
            >
              <Link style={{ textDecoration: "none", color: "white" }}>
                Faqs
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FaqsHero;
