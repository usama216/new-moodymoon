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

const ClientTestimonials = () => {
  const reviews = [
    {
      name: "Sara T.",
      image: "/username.png",
      review:
        "Absolutely love the gummies! They help me unwind after a long day without any of the grogginess. Plus, they taste amazing!",
      stars: 5,
    },
    {
      name: "Vicky P.",
      image: "/username.png",
      review:
        "The flower selection here is unmatched. Always fresh and potent. It's become a staple in my daily routine for relaxation.",
      stars: 5,
    },
    {
      name: "John D.",
      image: "/username.png",
      review:
        "Fantastic service and quality products. I highly recommend it to everyone!",
      stars: 5,
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
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 2,
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
      sx={{
        position:'relative',
        overflow:'hidden',
        // pt:'10rem'
      }}
    >
      <Box sx={{width:'100%', height:'20vh',position:'absolute', left:0, top:'-15rem'}}>
      <img src="/clientsmoke.png" alt="" style={{
        // top:isSmallScreen ? '0rem': isMediumScreen ?  '-8rem':'-20rem', left:0,
         width:'70%',  }} />
      </Box>
       <img src="/clientleaf.png" alt="" style={{position:'absolute',bottom:0, right:-10, width:'11%'}} />
 <Box
        justifyContent="center"
        alignItems="center"
        style={{
          overflowX: "hidden",
          position: "relative",
          padding: "5rem 13%",
        }}
      >
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
              What Our Clients Say
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
            {reviews.map((review, index) => (
              <Box key={index} sx={{ padding: isSmallScreen ?  '0px': "0 10px" }}>
                <Card
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                    width: "100%",
                    borderColor: "white",
                    border: "1px solid #343434",
                    padding: "1rem",
                  }}
                >
                  <Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        gap={2}
                      >
                        <Avatar
                          alt={review.name}
                          src={review.image}
                          style={{ width: "80px", height: "80px" }}
                        />
                        <Box>
                          <Typography variant="h6">{review.name}</Typography>
                          <Typography variant="body2">
                            {"⭐".repeat(review.stars)}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Image src="/testimonialsYellow.png" width="80%" />
                      </Box>
                    </Box>
                    <br />
                    <Divider sx={{ backgroundColor: "#343434" }} />
                    <br />
                    <Box>
                      <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
                        {review.review}
                      </Typography>
                    </Box>
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
    </Box>
  );
};

export default ClientTestimonials;
