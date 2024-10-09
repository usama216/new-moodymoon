import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { GoArrowRight } from "react-icons/go";


const BlogCategory = () => {

    const datalist  = [
        {name:'flower' },
        {name:'Pre Rolls' },
        {name:'Edibles' },
        {name:'Vapes' },
        {name:'flower' },
    ]
  return (
   <>
   <Box sx={{backgroundColor:'#1a1a1a', p:'2rem' , mt:'2rem', borderRadius:'10px'}}>
   <Typography sx={{fontSize:'1.5rem', fontWeight:'600', color:'white', mb:'0.3rem'}}>
         Category
         </Typography>

         {datalist.map((val, index)=>(
            <Box key={index} sx={{display:'flex', justifyContent:'space-between', alignItems:'center',mb:'0.5rem'}}>
            <Typography sx={{fontSize:'1rem', fontWeight:'400', color:'white', mb:'0.3rem', cursor:'pointer'}}>
            {val.name}
            </Typography>
            <IconButton sx={{color:'white'
            }}>
               <GoArrowRight/>
            </IconButton>
            </Box>
         ))}
         
   </Box>
   </>
  )
}

export default BlogCategory