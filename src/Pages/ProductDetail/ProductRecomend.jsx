import { Typography, useTheme, useMediaQuery, Box, Grid, Rating, Button, } from '@mui/material'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import Image from '../../components/Image/Image';
import AOS from 'aos';

const ProductRecomend = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    AOS.init({
      offset: 80,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 20,
    });

    const listData =[
        {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'5' , review:'6'},
        {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'5' , review:'10'},
        {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'4' , review:'64'},
        {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'3' , review:'6'},
        {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'5' , review:'65'},
        {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'1' , review:'76'},
        {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'2' , review:'6'},
      ]
  return (
    <>
    <style>
    {`
      .image {
        width: 12rem;
        height: 20rem;
        position: absolute;
        top: -6rem;
        transition: transform 0.5s ease-in-out; /* Smooth transition */
      }

      .image:hover {
        animation: shake infinite 2s ease-in-out; /* Trigger shake animation on hover */
      }

      @keyframes shake {
        0% { transform: translateY(0); }
        25% { transform: translateY(-5px); }
        50% { transform: translateY(5px); }
        75% { transform: translateY(-5px); }
        100% { transform: translateY(0); }
      }
    `}
  </style>


   <Box sx={{
    padding:'5rem 13%'
   }}>
   <Typography
              sx={{
                color:'white',
                cursor: "pointer",
                fontSize: isSmallScreen ? "2rem": isMediumScreen ? "2rem": "2rem",
                fontWeight:'600',
                marginBottom:'0.5rem'
              }}
            >
           Recommended Products
            </Typography>
            <Box >
              <Grid container spacing={3}>
                {listData.slice(0,4).map((row, index)=>(
                    <Grid key={index} item lg={3} md={4} sm={12} xs={12}>
                    <Box>
                    <Box sx={{pt:'8rem'}}>
             <Box
                sx={{
                  // backgroundImage:"linear-Gradient(to bottom, transparent 2% , #212121 28%, #212121 70%)",
                  backgroundColor:'#212121',
                  padding: "1rem 2rem",
                  borderRadius: "20px",
                  paddingBottom: "1rem",
                  position:'relative',
                   display:'flex',
                  flexDirection:'column',
                  //  alignItems:'center',
                  //  justifyContent:'center',


                }}>
               <Box sx={{position:'relative', height: "15rem", display:'flex', justifyContent:'center'}}>
               <Image
               data-aos="fade-up"
                  src="/product.png"
                  // style={{ width: "12rem", height: "20rem", position:'absolute', top:'-5rem',}}
                  className="image"
                />
               </Box>

                <Typography
                data-aos="fade-up"
                  sx={{
                    marginTop: "1.3rem",

                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Super Boof - THC A Exotic Indoor PreRoll
                </Typography>

                <Typography
                data-aos="fade-up"
                  sx={{
                    marginTop: "0.5rem",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#469547",
                    textAlign: "center",
                  }}
                >
                  $13.99
                </Typography>

                <Box
                data-aos="fade-up"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "0.5rem",
                  }}
                >
                  <Button
                  data-aos="fade-up"
                    variant="contained"
                    sx={{
                      alignItems: "center",
                      textAlign: "center",
                      color: "white",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IoCartOutline
                      style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
                    />{" "}
                    Add to Cart
                  </Button>
                </Box>
              </Box>

             </Box>
                  </Box>

                  </Grid>
                ))}
              </Grid>
            </Box>
   </Box>
    </>
  )
}

export default ProductRecomend