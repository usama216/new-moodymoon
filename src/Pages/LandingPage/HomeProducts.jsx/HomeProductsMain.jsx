import React from "react";
import Slider from "react-slick";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Divider,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "../../../components/Image/Image";
import CustomButton from "../../../components/Btn/CustomButton";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { IoCartOutline } from "react-icons/io5";

const HomeProductsMain = () => {
  const blogsdata = [
    {
      image: "/blogimage1.png",
      name: "Shyamal Patel",
      date: "May 19",

      title: "How to Choose High-Quality CBD Products: What to Look For",
      des: "With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:",
    },
    {
      image: "/blogimage2.png",
      date: "May 19",
      name: "Shyamal Patel",
      title: "Is CBD Legal? Navigating the Legal Landscape of CBD Products",
      des: "With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:",
    },
    {
      image: "/blogimage3.png",
      name: "Shyamal Patel",
      date: "May 19",
      title: "Understanding the Different Types of CBD Products: Oils, Edibles",
      des: "With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:",
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery( theme.breakpoints.up("sm") && theme.breakpoints.down("md"));
  const is1200 = useMediaQuery("(max-width:1200px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const sliderRef = React.useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      style={{
        overflowX: "hidden",
        position: "relative",
        padding: "10rem 13%",
        backgroundColor: "black",
      }}
    >

      <img src="/homePSmoke.png" alt=""  style={{position:'absolute', 
        top:isSmallScreen ? '6rem': isMediumScreen ? '3rem': is1200 ? '-2rem':'-8rem', width:'85%'
      }}/>
       <img src="/homePRight2.png" alt=""  style={{position:'absolute', 
        top:0, right:0, width:'14%'
      }}/>
      <img src="/homePLeft.png" alt=""  style={{position:'absolute', 
        top:0, left:0, width:'14%'
      }}/>
      

      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: "white", fontWeight: 600 }}
          >
            Featured Products
          </Typography>
          <Box sx={{ display: "flex" }} gap={2}>
            <IconButton
              onClick={handlePrev}
              style={{
                transform: "translateY(-50%)",
                zIndex: 1,
                backgroundColor: "#1f1f1f",
                color: "#fff",
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              style={{
                transform: "translateY(-50%)",
                zIndex: 1,
                backgroundColor: "#1f1f1f",
                color: "#fff",
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box>
        <Slider {...settings} ref={sliderRef}>
          {blogsdata.map((row, index) => (
            <Box key={index} sx={{ padding: "0 20px" }}>
              <Box
                sx={{
                  backgroundColor: "#212121",
                  padding: "0rem 2rem",
                  borderRadius: "20px",
                  paddingBottom: "1rem",
                }}
              >
                <Image
                  src="/product.png"
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
                      style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
                    />{" "}
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <br />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CustomButton
          name="View All"
          br="15px"
          border={"1px solid #51a2dc"}
          backgroundColor={"#51a2dc"}
          color={"white"}
          hbackgroundColor={"transparent"}
          hcolor={"#51a2dc"}
          width={"14rem"}
        />
      </Box>
    </Box>
  );
};

export default HomeProductsMain;
