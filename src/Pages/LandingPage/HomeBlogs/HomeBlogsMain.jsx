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

const HomeBlogsMain = () => {
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
  const isMediumScreen = useMediaQuery(
    theme.breakpoints.up("sm") && theme.breakpoints.down("md")
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 3,
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
        padding: "5rem 13%",
      }}
    >
        <img src="/founderright.png" alt="" style={{position:'absolute',top:'4rem', right:0, width:'20%'}} />
        <img src="/founderleft.png" alt="" style={{position:'absolute',top:'-4rem', left:0, width:'18%'}} />

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
            Latest News & Blogs
          </Typography>
          <Box sx={{ display: "flex" }} gap={2}>
            <IconButton
              onClick={handlePrev}
              style={{
                transform: "translateY(-50%)",
                zIndex: 1,
                // backgroundColor: "#1f1f1f",
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
                // backgroundColor: "#1f1f1f",
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
            <Box key={index} sx={{ padding: "0 10px" }}>
              <Card
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderRadius: "10px",
                  width: "100%",
                  //   borderColor: "white",
                  //   border: "1px solid #343434",
                  padding: "0rem",
                }}
              >
                <Box>
                  <Image src={row.image} width="100%" />

                  <Box>
                    <br />

                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmallScreen
                          ? "1.2rem"
                          : isMediumScreen
                          ? "1.4rem"
                          : "1.6rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        marginBottom: "0.5rem",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 2, // Limit to 2 lines
                        textOverflow: "ellipsis",
                      }}
                    >
                      {row.title}
                    </Typography>

                    <Box sx={{ display: "flex" }} gap={3}>
                      <Box sx={{ display: "flex" }} gap={1}>
                        <PersonIcon sx={{ color: "#b2b2b2" }} />
                        <Typography
                          sx={{
                            color: "#b2b2b2",
                            fontSize: isSmallScreen
                              ? "1rem"
                              : isMediumScreen
                              ? "1.1rem"
                              : "1.1rem",

                            textTransform: "capitalize",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {row.name}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }} gap={1}>
                        <CalendarMonthIcon sx={{ color: "#b2b2b2" }} />
                        <Typography
                          sx={{
                            color: "#b2b2b2",
                            fontSize: isSmallScreen
                              ? "1rem"
                              : isMediumScreen
                              ? "1.1rem"
                              : "1.1rem",

                            textTransform: "capitalize",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {row.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 400,
                        textTransform: "capitalize",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {row.des}
                    </Typography>
                  </Box>

                  <Button
                    sx={{
                      textTransform: "none",
                      marginTop: "0.5rem",
                      marginLeft: "-0.5rem",
                    }}
                  >
                    Read More <ArrowOutwardIcon />
                  </Button>
                </Box>
              </Card>
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

export default HomeBlogsMain;
