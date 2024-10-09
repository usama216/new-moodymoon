import { Box, Grid, Typography, useTheme, useMediaQuery, } from "@mui/material";
import React from "react";

const FounderMessage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ padding: "3rem 13%", color:'white', position:'relative' }}>

        <img src="/foundersmoke.png" alt="" style={{position:'absolute',
          top:isMediumScreen ? '0rem':'-10rem', right:0, width:'65%', zIndex:99}} />

        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid item lg={5} md={5} sm={12} xs={12} sx={{display:'flex'}}>
            {/* <Box sx={{
              width:'100%', display:'flex',
              justifyContent:'start'
            }}> */}
              <img src="/shaymal2.svg" width="100%" height={"300rem"} text-align={'start'} />
            {/* </Box> */}
          </Grid>

          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Typography sx={{ fontSize:isSmallScreen ? '1.3rem': isMediumScreen ? '1.8rem' : "2rem",
              fontWeight: 700 }}>
              Founder Message
            </Typography>
            <br />
            <Typography sx={{ fontSize:isSmallScreen ? '0.8rem': "1rem", }}>
            Moody Moon Wellness is the brainchild of our founder, Shyamal Patel, a pharmacist in an independent pharmacy in the state of Virginia, USA. Through his daily interactions with patients and clients in his community, he identified the need for natural alternatives that would support and promote key areas of health.
            </Typography>
            <br />

            <Typography sx={{ fontSize:isSmallScreen ? '0.8rem': "1rem", }}>

This was the motivation to develop natural products that would strengthen and renew people’s overall well being, thereby, impacting their lives in a meaningful way. Shyamal’s training as a pharmacist gave him the distinct advantage of understanding the human body and how both biochemical and organic compounds affect basic biological functions. This expertise included both a scientific understanding of organic compounds, as well as an understanding of the benefits of the compounds found in botanicals that have been used in traditional Indian subcontinent medicine for centuries.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FounderMessage;
