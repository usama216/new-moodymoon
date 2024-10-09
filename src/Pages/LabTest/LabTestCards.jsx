import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Grid,
} from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LabTestCards = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleViewPDF = (path) => {
    window.open(path, '_blank');
  };
  const listData = [
    {
      imag: "/labtests/test1.png",
      title: "Delta 9 (25-1) Lemonade",
      path: "Cherry_Cake.pdf",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test2.png",

      title: "Delta 9 (25-1) Melon Ice",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test3.png",

      title: "Delta 9 (25-1) Rainbow Candy",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test4.png",

      title: "Delta 9 (25-1) Sour Apple",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test5.png",

      title: "1 UP Shroom Lemon",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test6.png",

      title: "1 UP Shroom Strawberry",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test7.png",

      title: "THC A Disposable Vape",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test8.png",

      title: "Amanita Mushroom Gummies",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test9.png",

      title: "Gushers - Exotic THCA Flower",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test10.png",
      title: "Ice Cream Cake - Exotic THCA Flower",
      path: "Cherry_Cake.pdf",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test11.png",
      path: "Cherry_Cake.pdf",

      title: "Pie Face - Exotic THCA Flower",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test12.png",
      path: "Cherry_Cake.pdf",

      title: "Rainbow Runtz - Exotic THCA Flower",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test13.png",
      path: "Cherry_Cake.pdf",

      title: "Tropicana Cherries - Exotic THCA Flower",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test14.png",
      title: "Amanita Extract Mushroom Gummy",
      path: "Cherry_Cake.pdf",

      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test15.png",
      path: "Cherry_Cake.pdf",

      title: "Gary Payton - Exotic THCA Flower",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test16.png",
      path: "Cherry_Cake.pdf",

      title: "Gelato 41- Exotic THCA Flower",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test17.png",
      path: "Cherry_Cake.pdf",

      title: "30 Count Sour Apple (25-1)",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test18end.png",
      path: "Cherry_Cake.pdf",

      title: "Gelato 41 Exotic THCA Preroll",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test19end.png",
      path: "Cherry_Cake.pdf",

      title: "Gush Mintz Exotic THCA Preroll",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test20end.png",
      path: "Cherry_Cake.pdf",

      title: "Jack Herrer Exotic THCA Preroll",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test21end.png",
      path: "Cherry_Cake.pdf",

      title: "Jungle Juice Exotic THCA Preroll",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test18.png",
      path: "Cherry_Cake.pdf",

      title: "Oreoz Exotic THCA Preroll",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test19.png",
      path: "Cherry_Cake.pdf",

      title: "Sluricane Exotic THCA Flower",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test20.png",
      path: "Cherry_Cake.pdf",

      title: "Tropical Runtz Exotic THCA Preroll",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test21.png",
      path: "Cherry_Cake.pdf",

      title: "30 Count Lemonade (25-1)",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test22.png",
      path: "Cherry_Cake.pdf",

      title: "D9 Pink Lemonade Tincture",
      icon: <FiArrowUpRight />,
    },

    {
      imag: "/labtests/test23.png",
      path: "Cherry_Cake.pdf",

      title: "Topical Salve",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test24.png",
      path: "Cherry_Cake.pdf",

      title: "THCA Disposable - OG Kush",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test25.png",
      path: "Cherry_Cake.pdf",

      title: "THCA Disposable- Tropical Storm",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test26.png",
      path: "Cherry_Cake.pdf",

      title: "THCA Disposable - Dream Cake",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test27.png",
      path: "Cherry_Cake.pdf",

      title: "THCA Disposable - Lemon Cake",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/labtests/test28.png",
      path: "Cherry_Cake.pdf",

      title: "THCA Disposable - London Pound Cake",
      icon: <FiArrowUpRight />,
    },
  ];

  return (
    <Box sx={{ padding: "4rem 15%", boxSizing: "border-box" }}>
      <Grid container spacing={2}>
        {listData.map((row, index) => (
          <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
            <Box sx={{ marginRight: "0rem" }}>
              <Box
              onClick={() => handleViewPDF(row.path)}
                sx={{
                  position: "relative",
                  cursor:'pointer',
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={row.imag}
                  alt="okkk"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <Box
                  sx={{
                    width: " 100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    padding: "16px",

                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "end",
                      alignItems: "start",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmallScreen
                          ? "1rem"
                          : isMediumScreen
                          ? "1.1rem"
                          : "1.1rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        // marginBottom: "1rem",
                      }}
                    >
                      {row.title}
                    </Typography>
                    <IconButton

onClick={() => handleViewPDF(row.path)}
                      className="icon"
                      sx={{
                        fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: isSmallScreen
                            ? "0.9rem"
                            : isMediumScreen
                            ? "1rem"
                            : "1rem",
                          fontWeight: 500,

                          marginRight: "1rem",
                        }}
                      >
                        View
                      </Typography>
                      <FiArrowUpRight
                        style={{ backgroundColor: "transparent", color:theme.palette.primary.main  }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LabTestCards;
