import { Gradient, Scale } from '@mui/icons-material';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Btn from '../../../components/Btn/Btn';
import { GoArrowRight } from "react-icons/go";

const ShopCard = () => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1200 = useMediaQuery('(max-width:1200px)'); 

  const [isHovered, setIsHovered] = useState(-1);
  console.log(isHovered)

  

useEffect(() => {
  AOS.init({
    offset: 300,
    duration: 700 });
}, []);

  const cardlist = [
    {img:'/shopcard1.png',
         title:'THCA Flowers (17)' ,
    },
    {img:'/shopcard2.png',
        title:'THCA Flowers (17)' ,
   }, {img:'/shopcard1.png',
    title:'THCA Flowers (17)' ,
},
 {img:'/shopcard1.png',
    title:'THCA Flowers (17)' ,
},
{img:'/shopcard1.png',
    title:'THCA Flowers (17)' ,
},
   
  ]
  return (
    <>
    <Box sx={{backgroundColor:'black',
    backgroundImage:'url(/shopcardbg1.png)',
    backgroundPosition:'center', backgroundSize:'contain',
    backgroundRepeat:'no-repeat', 
    p:'0rem 13% 0rem 13%', 
    boxShadow: 'inset -10px -10px 100px black',
    }}>
        <Grid container spacing={2} sx={{mt:'-5rem'}} >
            {cardlist.map((val , index)=>(
                 <Grid key={index} item lg={2.4} md={4} sm={6} xs={12}>
                 <Box
                 data-aos="fade-up">
                    <Box sx={{mb:'0.5rem', position:'relative', overflow:'hidden'}}>
                    <img 
        src={val.img} 
        alt="" 
        onMouseEnter={() => setIsHovered(index)} 
        onMouseLeave={() => setIsHovered(-1)} 
        style={{
            width: '100%', 
            height:isSmallScreen? '24rem': isMediumScreen ? '26rem':'28rem',
            filter: 'brightness(1)', // Original brightness
            boxShadow: 'inset 10px 0px 60px red',   
            transform: isHovered === index ? 'scale(1.1)' : 'scale(1)', // Scale effect
                transition: 'transform 0.5s ease' // Smooth transition
        }} 
    />
    <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(14, 14, 14, 0.226)', // Semi-transparent white overlay
        pointerEvents: 'none' ,
        boxShadow:'inset  0px -30px 40px black'

    }} />
                    </Box>
                    <Box sx={{display:'flex', justifyContent:"center", flexDirection:'column',alignItems:'center',
                        backgroundColor:'#212121', p:'2rem'
                    }}>
                    <Typography
               sx={{ color: "white", 
                 fontSize:isSmallScreen ? '1.2rem': isMediumScreen ? '1.3rem': "1.4rem",
                  fontWeight: "500",
                  textAlign:'center', mb:'2rem'
                 }}
             >
            {val.title}
             </Typography>
             <Btn sx={{fontSize:isSmallScreen ? '0.8rem': isMediumScreen ? '0.9rem':'0.9rem', 
               fontWeight:'400', p:'0.8rem 1rem', borderRadius:'10px', width:'10rem'}}>
            <span style={{color:'white', textTransform:'uppercase'}}>Shop Now</span> 
            <GoArrowRight style={{fontSize: isSmallScreen ?  '1.1rem':'1.2rem', color:'white', marginLeft:'0.5rem'}}/>
            </Btn>
                    </Box>
                 </Box>
             </Grid>
            ))}
           
        </Grid>
    </Box>
    </>
  )
}

export default ShopCard