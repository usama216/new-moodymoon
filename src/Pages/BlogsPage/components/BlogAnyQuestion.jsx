import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";

const BlogAnyQuestion = () => {
    const theme = useTheme();
  return (
    <>
    <Box sx={{ mt:'2rem', p:'2rem', borderRadius:'10px', overflow:'hidden',
        backgroundImage:'url(/blogs/anyquestion.png)', backgroundSize:'cover', backgroundPosition:'center',
        objectFit:'cover'
        
    }}>
    <Typography sx={{fontSize:'1.5rem', fontWeight:'600', color:'white', mb:'0.3rem'}}>
         Any Question
         </Typography>
         <Box sx={{display:'flex', alignItems:'start', mb:'1rem'}}>
            <IconButton sx={{p:0 , mr:'0.5rem'}}>
                <TfiHeadphoneAlt style={{fontSize:'2rem', 
                    color:theme.palette.primary.main
                }}/>
            </IconButton>
            <Box>
            <Typography sx={{fontSize:'0.9rem', fontWeight:'300', color:'white', mb:'0.3rem'}}>
         call Us
         </Typography>
         <Typography sx={{fontSize:'0.9rem', fontWeight:'600', color:'white', mb:'0.3rem'}}>
         (704) 437-6029
         </Typography>
            </Box>
         </Box>
         <Box sx={{display:'flex', alignItems:'start'}}>
            <IconButton sx={{p:0 , mr:'0.5rem'}}>
                <MdEmail style={{fontSize:'2rem', 
                    color:theme.palette.primary.main
                }}/>
            </IconButton>
            <Box>
            <Typography sx={{fontSize:'0.9rem', fontWeight:'300', color:'white', mb:'0.3rem'}}>
         Email Us
         </Typography>
         <Typography sx={{fontSize:'0.9rem', fontWeight:'600', color:'white', mb:'0.3rem'}}>
         moodymoonhemp@gmail.com
         </Typography>
            </Box>
         </Box>
    </Box>
    </>
  )
}

export default BlogAnyQuestion