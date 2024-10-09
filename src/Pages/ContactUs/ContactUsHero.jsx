import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ContactUsHero = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1200 = useMediaQuery('(max-width:1200px)'); 

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(contactusbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "none",
          minHeight: "80vh",
          mt:isSmallScreen ? '-5rem': isMediumScreen ? '-6rem':'-8.4rem',
          padding: "0rem 5%",
          boxShadow:'0px 20px 90px black, inset 0px -100px 60px black',
          position:'relative',
        }}
      >
        <Box sx={{backgroundColor:'#00000084', position:'absolute', 
          width:'100%', height:'80vh', top:0, left:0, zIndex:1

        }}>
          kkkkkkkkkkkkkkkkkk
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "70vh",
            width:'100%',
            flexDirection: "column",
            position:'relative',
             zIndex:1
          }}
        >
          <Typography
            sx={{ fontWeight: "700", fontSize: "3.5rem", color: "white", textTransform:'uppercase' }}
          >
            Contact US
          </Typography>
          <br />
          <Box sx={{ display: "flex", }}>
            <Typography sx={{ fontSize: "1rem", color: "white" }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home /
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "1rem",  color: "white" }}
            >

            </Typography>

            <Typography
              sx={{ marginLeft: "1rem", fontSize: "1rem", color: "white" }}
            >
              <Link style={{ textDecoration: "none", color: "white" }}>
                Contact Us
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactUsHero;
