import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    Grid,
    Rating,
    IconButton,
    Button,
  } from "@mui/material";
import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = () => {
    const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const listData = [
    {
      id: 1,
      img: "/category11.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "12.99",
      star: "5",
      review: "6",
      availability: "In Stock",
    },

    {
      id: 2,

      img: "/category11.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "13.99",
      star: "5",
      review: "6",
      availability: "In Stock",
    },
    {
      id: 3,

      img: "/category11.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "14.99",
      star: "5",
      review: "10",
      availability: "In Stock",
    },
    {
      id: 4,

      img: "/category11.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "15.99",
      star: "4",
      review: "64",
      availability: "Out of Stock",
    },
  ];

  return (
    <>
    <Box sx={{ p:'0% 5%', mb:'2rem'}} >
            <Grid container spacing={3} >
              {listData.map((row, index) => (
                <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                  <Box onClick={() => handleDetail(row.id)}
                    sx={{
                        bgcolor:'white',
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                    }}>
                    <Box sx={{ width: "100%", cursor:'pointer' }}>
                      <img
                        src={row.img}
                        alt=""
                        style={{ height: "25rem", width: "100%" }}
                      />
                    </Box>
                    <Box sx={{p:'1rem' }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
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
                              color: "orange",
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#6d6d6d",
                            fontSize: isSmallScreen ? "0.9rem" : "1rem",
                            fontWeight: 500,
                          }}
                        >
                          ({row.review}) Reviews
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "red",
                          fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                          fontWeight: 600,
                          marginTop: "0.5rem",
                        }}
                      >
                        ${row.price}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
    </>
  )
}

export default ProductCard