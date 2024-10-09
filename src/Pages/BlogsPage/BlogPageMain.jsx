import React from 'react'
import BlogHeroSection from './BlogHeroSection'
import { Box } from '@mui/material'
import BlogCardWithSearchSec from './components/BlogCardWithSearchSec'

const BlogPageMain = () => {
  return (
    <>
<BlogHeroSection/>

<Box sx={{padding:'3rem 13%'}}>
<BlogCardWithSearchSec/>

</Box>

    </>
  )
}

export default BlogPageMain