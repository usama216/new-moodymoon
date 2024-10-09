import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Rating,
  Card,
  Radio,
  Divider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { IoArrowForward, IoCartOutline } from "react-icons/io5";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import Image from "../../components/Image/Image";
import Page from "../../components/page";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& input": {
    color: "white", // Text color
  },
  "& .MuiInputBase-root": {
    color: "white", // Text field background color
  },
  "& .MuiInputAdornment-root": {
    color: "white", // Placeholder color (if any)
  },
  "& .MuiInputBase-input": {
    "&::-webkit-inner-spin-button": {
      color: "white", // Spinner arrows color
    },
    "&::-webkit-outer-spin-button": {
      color: "white", // Spinner arrows color
    },
    "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button": {
      color: "white",
    },
  },
}));

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  padding: "0",
  backgroundColor: "transparent",

  "&:before": { display: "none" },
}));

const OurProductCards = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [firstValue, setFirstValue] = useState(0.0);
  const [secondValue, setSecondValue] = useState(399.99);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [selectedAvailability, setSelectedAvailability] = useState("In Stock");
  const [priceRange, setPriceRange] = useState([0, 349.99]);
  const navigate = useNavigate();
  const listData = [
    {
      id: 1,
      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "12.99",
      star: "5",
      review: "6",
      availability: "In Stock",
    },

    {
      id: 2,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "13.99",
      star: "5",
      review: "6",
      availability: "In Stock",
    },
    {
      id: 3,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "14.99",
      star: "5",
      review: "10",
      availability: "In Stock",
    },
    {
      id: 4,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "15.99",
      star: "4",
      review: "64",
      availability: "Out of Stock",
    },
    {
      id: 5,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "16.99",
      star: "3",
      review: "6",
      availability: "Out of Stock",
    },
    {
      id: 6,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "117.99",
      star: "5",
      review: "65",
      availability: "In Stock",
    },
    {
      id: 7,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "12.99",
      star: "1",
      review: "76",
      availability: "Out of Stock",
    },
    {
      id: 8,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "12.99",
      star: "2",
      review: "6",
      availability: "Out of Stock",
    },
  ];

  const categories = [
    "All Products",
    "Flowers",
    "Vapes",
    "Pre Rolls",
    "Edibles",
    "Novelties",
  ];

  // Filter products based on selected category and availability
  const filteredProducts = listData.filter((product) => {
    const categoryMatches =
      activeCategory === "All Products" || product.category === activeCategory;
    const availabilityMatches = product.availability === selectedAvailability;
    return categoryMatches && availabilityMatches;
  });

  const handleDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
<>
    <Page title='Our Products '>
    <Box sx={{ padding: "5% 13%" }}>
      <Grid container spacing={6}>
        {/* ==============================LEFT============================================ */}
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card
            sx={{
              backgroundColor: "transparent",
              padding: "0.5rem 0rem 0rem 0rem",
              border: "1px solid #343434",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: isSmallScreen ? "1rem" : "1.5rem",
                fontWeight: 700,
                marginBottom: "1rem",
                padding: "0.5rem",
              }}
            >
              See the Categories
            </Typography>
            {categories.map((category) => (
              <React.Fragment key={category}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    backgroundColor:
                      activeCategory === category ? "#212121" : "transparent",
                    color: activeCategory === category ? "white" : "white",
                    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
                  }}
                  onClick={() => setActiveCategory(category)}
                >
                  <Typography sx={{ fontSize: "1.2rem" }}>
                    {category}
                  </Typography>
                  <IoArrowForward />
                </Box>
                <Divider sx={{ backgroundColor: "#343434" }} />
              </React.Fragment>
            ))}
          </Card>

          <br />

          <Box
            sx={{
              padding: "0rem 0rem 0rem 0rem",
              backgroundColor: "transparent",
              border: "1px solid #343434",
              borderRadius: "10px",
            }}
          >
            <CustomAccordion>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      fontWeight: 700,
                    }}
                  />
                }
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: isSmallScreen ? "1rem" : "1.4rem",
                    fontWeight: 600,
                  }}
                >
                  Availability
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0" }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      backgroundColor:
                        selectedAvailability === "In Stock"
                          ? "#212121"
                          : "transparent",
                    }}
                  >
                    <Radio
                      sx={{
                        color:
                          selectedAvailability === "In Stock"
                            ? theme.palette.primary.main
                            : "white",
                        "&.Mui-checked": {
                          color:
                            selectedAvailability === "In Stock"
                              ? theme.palette.primary.main
                              : "white",
                        },
                      }}
                      checked={selectedAvailability === "In Stock"}
                      onChange={() => setSelectedAvailability("In Stock")}
                    />
                    <Typography
                      sx={{
                        color:
                          selectedAvailability === "In Stock"
                            ? "white"
                            : "white",
                        mb: 1,
                      }}
                    >
                      In stock ({filteredProducts.length})
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      backgroundColor:
                        selectedAvailability === "Out of Stock"
                          ? "#212121"
                          : "transparent",
                    }}
                  >
                    <Radio
                      sx={{
                        color:
                          selectedAvailability === "Out of Stock"
                            ? theme.palette.primary.main
                            : "white",
                        "&.Mui-checked": {
                          color:
                            selectedAvailability === "Out of Stock"
                              ? theme.palette.primary.main
                              : "black",
                        },
                      }}
                      checked={selectedAvailability === "Out of Stock"}
                      onChange={() => setSelectedAvailability("Out of Stock")}
                    />
                    <Typography
                      sx={{
                        color:
                          selectedAvailability === "Out of Stock"
                            ? "white"
                            : "white",
                        mb: 1,
                      }}
                    >
                      Out of stock ({filteredProducts.length})
                    </Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </CustomAccordion>
          </Box>

          <br />

          <Box
            sx={{
              padding: "0rem 0rem 0rem 0rem",
              border: "1px solid #343434",
              borderRadius: "10px",
            }}
          >
            <CustomAccordion>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      fontWeight: 700,
                    }}
                  />
                }
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: isSmallScreen ? "1rem" : "1.4rem",
                    fontWeight: 600,
                  }}
                >
                  Price
                </Typography>
              </AccordionSummary>
              <Divider sx={{ backgroundColor: "#343434" }} />
              <AccordionDetails>
                <Box>
                  <Typography
                    sx={{ fontSize: "0.9rem", fontWeight: 600, color: "white" }}
                  >
                    The highest price is $349.99
                  </Typography>
                  <br />

                  <Box
                    sx={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CustomTextField
                      type="number"
                      size="small"
                      InputProps={{
                        style: { color: "white", border: "1px solid #343434" }, // Set text color for the input
                      }}
                      sx={{ color: "white" }}
                      value={firstValue}
                      onChange={(e) =>
                        setFirstValue(parseFloat(e.target.value) || 0)
                      }
                    />
                    <CustomTextField
                      sx={{ marginLeft: "1rem" }}
                      type="number"
                      size="small"
                      InputProps={{
                        style: { color: "white", border: "1px solid #343434" }, // Set text color for the input
                      }}
                      value={secondValue}
                      onChange={(e) =>
                        setSecondValue(parseFloat(e.target.value) || 0)
                      }
                    />
                  </Box>
                </Box>
              </AccordionDetails>
            </CustomAccordion>
          </Box>
        </Grid>

        {/* ================================================RIGHT========================================== */}
        <Grid item lg={8} md={8} sm={6} xs={12}>
          <Box>
            <Grid container spacing={3}>
              {filteredProducts.map((row, index) => (
                <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
                  <Box onClick={() => handleDetail(row.id)}>
                    <Box key={index} sx={{ padding: "0 0px" }}>
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
        </Grid>
      </Grid>
    </Box>
    </Page>
    </>
  );
};

export default OurProductCards;
