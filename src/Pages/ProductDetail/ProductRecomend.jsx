import { Typography, useTheme, useMediaQuery, Box, Grid, Rating, Button, } from '@mui/material'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import Image from '../../components/Image/Image';

const ProductRecomend = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
                    {/* <Box>
                      <Box
                        sx={{
                          width: "100%",
                          border:'1px solid gray'
                        }}
                      >
                        <img
                          src="/OPcard1.png"
                          alt=""
                          style={{ height: "25rem", width:'100%' }}
                        />
                      </Box>
                      <Box
                        sx={{
                          marginTop: "1rem",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: isSmallScreen
                              ? "1.1rem"
                              : isMediumScreen
                              ? "1.3rem"
                              : "1.4rem",
                            fontWeight: 500,
                            textTransform: "uppercase",
                          }}
                        >
                         {row.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "0.5rem",
                          }}
                        >
                          <Rating
                            size="small"
                            readOnly
                            defaultValue={row.star}
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: "orange", // Filled stars color
                              },
                            }}
                          />
                          <Typography
                            sx={{
                              color: "#6d6d6d",
                              fontSize: isSmallScreen
                                ? "0.9rem"
                                : isMediumScreen
                                ? "1rem"
                                : "1rem",
                              fontWeight: 500,

                              // textTransform: "uppercase",
                            }}
                          >
                            ({row.review})Reviews
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            color: "red",
                            fontSize: isSmallScreen
                              ? "0.9rem"
                              : isMediumScreen
                              ? "1rem"
                              : "1.1rem",
                            fontWeight: 600,
                            marginTop: "0.5rem",
                            // textTransform: "uppercase",
                          }}
                        >
                          ${row.price}
                        </Typography>
                      </Box>
                    </Box> */}

                    <Box>
                    <Box sx={{ padding: "0 0px" }}>
                      <Box
                        sx={{
                          backgroundColor: "#212121",
                          padding: "0rem 2rem",
                          borderRadius: "20px",
                          paddingBottom: "1rem",
                        }}
                      >
                        <Image
                          src="product.png"
                          style={{ width: "100%", height: "15rem" }}
                        />

                        <Typography
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
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "0.5rem",
                          }}
                        >
                          <Button
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
                              style={{
                                fontSize: "1.5rem",
                                marginRight: "0.5rem",
                              }}
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