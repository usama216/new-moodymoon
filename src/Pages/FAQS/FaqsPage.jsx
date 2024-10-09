import { Grid, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Faqs from './Faqs'


const FaqsPage = () => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
   <>
   <Box sx={{
    boxSizing:'border-box',
    padding:'3rem 5%'
   }}>
    <Grid container spacing={10}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{width:'100%', height:'100%'}}>
            <Typography
              sx={{
                color: "black",
                fontSize: isSmallScreen
                  ? "1.5rem"
                  : isMediumScreen
                  ? "2rem"
                  : "2rem",
                fontWeight: 600,
                textTransform: "uppercase",
                mb:1
              }}
            >
             Frequently Asking Questions
            </Typography>
            <Faqs/>
            </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{width:'100%', height:'100%'}}>
                <img src="/faqsimg1.png" alt="" width={'100%'} height={'650rem'}/>
            </Box>
        </Grid>
    </Grid>
   </Box>
   </>
  )
}

export default FaqsPage