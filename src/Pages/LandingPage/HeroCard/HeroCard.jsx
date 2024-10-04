import { Gradient } from '@mui/icons-material';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'


const HeroCard = () => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1200 = useMediaQuery('(max-width:1200px)'); 

  const cardlist = [
    {img:'/herocard1.png', title:'Best Herbs' ,
        des:'Moody Moon only uses the finest organic herbs and extracts in our line of CBD products.'
    },
    {img:'/herocard1.png', title:'Best Herbs' ,
        des:'Moody Moon only uses the finest organic herbs and extracts in our line of CBD products.'
    },
    {img:'/herocard1.png', title:'Best Herbs' ,
        des:'Moody Moon only uses the finest organic herbs and extracts in our line of CBD products.'
    },
    {img:'/herocard1.png', title:'Best Herbs' ,
        des:'Moody Moon only uses the finest organic herbs and extracts in our line of CBD products.'
    },
  ]
  return (
    <>
    <Box sx={{backgroundColor:'black', p:'1rem 13% 5rem 13%', 
        boxShadow: '-5px -20px 100px black, inset 0px 0px 60px black'

        // boxShadow: ''
    }}>
        <Grid container spacing={2} sx={{mt:'-5rem'}}>
            {cardlist.map((val , index)=>(
                 <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                 <Box sx={{backgroundColor:'#212121', p:'1.5rem', borderRadius:'10px',
                //  boxShadow:'10px 10px 30px white',
                    '&:hover':{
                        backgroundImage:'linear-Gradient(to right, #56ade1 25%, #75eafc 90%)'
                    }
                 }}>
                     <Box sx={{display:'flex', mb:'1rem'}}>
                         <img src={val.img} alt="" style={{
                            color:theme.palette.primary.main,

                            width:'2rem'
                         }} />
                         <Typography
               sx={{ color: "white", 
                 fontSize:isSmallScreen ? '1.2rem': isMediumScreen ? '1.4rem': "1.5rem",
                  fontWeight: "500",
                   mb:'-0.5rem' ,
                   ml:'1rem'
                 }}
             >
              {val.title}
             </Typography>
                     </Box>
                     <Typography
               sx={{ color: "white", 
                 fontSize:isSmallScreen ? '0.9rem': isMediumScreen ? '1rem': "1rem",
                  fontWeight: "400",
                   mb:'-0.5rem' ,
                 }}
             >
             {val.des}
             </Typography>
                 </Box>
             </Grid>
            ))}
           
        </Grid>
    </Box>
    </>
  )
}

export default HeroCard