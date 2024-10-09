import { Box, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import ContactUsCard from './ContactUsCard'
import ContactForm from './ContactForm'

const ContactFormCard = () => {
    const isMedium = useMediaQuery('(max-width:900px)');
  return (
    <>
   <Box sx={{padding:'5% 13%', boxSizing:'border-box', 
    boxShadow:'10px 10px 10px black'
   }}>
   <Grid container spacing={isMedium ? 5 : 10}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
            <ContactUsCard/>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
            <ContactForm/>
        </Grid>
    </Grid>
   </Box>
    </>
  )
}

export default ContactFormCard