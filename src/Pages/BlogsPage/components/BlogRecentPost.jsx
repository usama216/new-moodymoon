import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const BlogRecentPost = () => {

    const datalist = [
        {img:'/blogs/blog11.png' , title:'The Science Behind CBD: How It Works in the Body' , date:'May 19 , 2024'},
        {img:'/blogs/blog11.png' , title:'The Science Behind CBD: How It Works in the Body' , date:'May 19 , 2024'},
        {img:'/blogs/blog11.png' , title:'The Science Behind CBD: How It Works in the Body' , date:'May 19 , 2024'},
        {img:'/blogs/blog11.png' , title:'The Science Behind CBD: How It Works in the Body' , date:'May 19 , 2024'},
        {img:'/blogs/blog11.png' , title:'The Science Behind CBD: How It Works in the Body' , date:'May 19 , 2024'},
    ]


  return (
    <>
    <Box sx={{backgroundColor:'#1a1a1a', p:'1rem', borderRadius:'10px'}}>
    <Typography sx={{fontSize:'1.5rem', fontWeight:'600', color:'white', mb:'0.3rem'}}>
    Recent Post
  </Typography>

  {datalist.slice(0,3).map((val, index)=>(
 <Grid key={index} container spacing={2} marginBottom={'1rem'}>
 <Grid item lg={6}>
     <Box sx={{width:'100%', overflow:'hidden', borderRadius:'10px'}}>
         <img src={val.img} alt="" width={'100%'} height={'100%'}/>
     </Box>
 </Grid>
 <Grid item lg={6}>
     <Box>
         <Typography sx={{fontSize:'0.9rem', fontWeight:'700', color:'white', mb:'0.3rem'}}>
         {val.title}
         </Typography>
         <Typography sx={{fontSize:'0.9rem', fontWeight:'300', color:'white'}}>
        {val.date}
         </Typography>
     </Box>
 </Grid>
</Grid>
  ))}
       
    </Box>
    </>
  )
}

export default BlogRecentPost