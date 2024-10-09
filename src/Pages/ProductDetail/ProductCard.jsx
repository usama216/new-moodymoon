import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Grid,
  Rating,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCartItem } from "../../store/reducers/cartReducer";

const ProductCard = () => {
  const { id } = useParams();
  const productId = id;
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [orderQuantiy, setOrderQuantity] = useState(1);
  

  const addtocartdata = {
    cardinfo: [
      {
        img: "/OPcard1.png",
        title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
        ratingstar: "5",
        reviews: "100",
        price: "12.99",
        category: "Pre Rolls, Shop All",
      },
    ],

    listData: [
      { icon: "IoMdRadioButtonOn", title: " Strain:", des: "titan11111111111" },
      {
        icon: "IoMdRadioButtonOn",
        title: " Strain:",
        des: "titan11111111111111111111111111111",
      },
      {
        icon: "IoMdRadioButtonOn",
        title: " Strain:",
        des: "titan22222222222222222222222222",
      },
      {
        icon: "IoMdRadioButtonOn",
        title: " Strain:",
        des: "titan11111111111111111111111111",
      },
    ],

    buttonData: [
      { name: "1 Count" },
      { name: "3 Count" },
      { name: "5 Count" },
      { name: "10 Count" },
      { name: "20 Count" },
      { name: "30 Count" },
    ],
  };
  const [selectedImage, setSelectedImage] = useState("/OPcard1.png");
  const [imgData, setImgData] = useState([
    { img: "/OPcard2.png" },
    { img: "/OPcard3.png" },
    { img: "/OPcard4.png" },
    { img: "/OPcard4.png" },

  ]);

  const handleImageClick = (clickedImg, index) => {
    const newImgData = [...imgData];
    const previousLargeImage = selectedImage;

    setSelectedImage(clickedImg);

    newImgData[index].img = previousLargeImage;

    setImgData(newImgData);
  };
  return (
    <>
      {/* ===================================ADD TO CART PART ============================================ */}
      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          padding: "3rem 13%",
        }}
      >
        <Grid container spacing={isMediumScreen ? 6 : 5}>
          {/* ================LEFT */}
          <Grid item lg={7} md={7} sm={12} xs={12}>
            {/* <Grid container spacing={2}>
              <Grid item lg={2.5} md={2.5} sm={12} xs={12} order={isMediumScreen ? 2:1}>
                <Box sx={{ gap: "1rem", width: "100%", height: "auto",
                  display:'flex',
                  flexDirection:isMediumScreen ? 'row' : "column"
                 }}>
                  {imgData.map((row, index)=>(
                    <Box key={index} sx={{ width: "100%", height: "10rem",border:'1px solid lightgray', borderRadius:'5px'
                      ,cursor:'pointer'
                       }}>
                        <img
                          src={row.img}
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Box>
                  ))}

                </Box>
              </Grid>
              <Grid item lg={9.5} md={9.5} sm={12} xs={12} order={isMediumScreen ? 1:2}>
                <Box sx={{ width: "100%", height: '35rem' ,
                  border:'1px solid lightgray', borderRadius:'5px'
                }}>
                  <img
                    src="/OPcard1.png"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Grid>
            </Grid> */}

            <Grid container spacing={2}>
              {/* Left-side image list */}
              <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
                <Box
                  sx={{
                    gap: "1rem",
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {imgData.map((row, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "100%",
                        height: "8rem",
                        border: "1px solid lightgray",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleImageClick(row.img, index)} // Call the swap function when clicked
                    >
                      <img
                        src={row.img}
                        alt={`Thumbnail ${index}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Right-side large image (9.5-column grid) */}
              <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    height: "35rem",
                    border: "1px solid lightgray",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={selectedImage} // Use the selected image for the large box
                    alt="Selected"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* =====================RIGHT */}
          <Grid item lg={5} md={5} sm={12} xs={12}>
            {addtocartdata.cardinfo.map((cardinfodata, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    fontSize: isSmallScreen
                      ? "1.5rem"
                      : isMediumScreen
                      ? "2rem"
                      : "2.5rem",
                    fontWeight: "600",
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  {cardinfodata.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Rating
                      size={isSmallScreen ? "small" : "medium"}
                      readOnly
                      defaultValue={cardinfodata.ratingstar}
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
                      ({cardinfodata.reviews}) Reviews
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
                    ${cardinfodata.price}
                  </Typography>
                </Box>

                <Divider
                  sx={{
                    background: "lightgray",
                    width: "100%",
                    height: "0.1px",
                  }}
                />

                <Box
                  sx={{
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "3rem",
                    }}
                  >
                    <Divider
                      orientation="vertical"
                      sx={{
                        background: theme.palette.primary.main,
                        width: "2px",
                        height: "50px",
                      }}
                    />
                    <Box sx={{ marginLeft: "1rem" }}>
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: isSmallScreen ? "1rem" : "1.3rem",
                          fontWeight: 600,
                          marginTop: "0.5rem",
                        }}
                      >
                        Vendor:
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                          fontWeight: 400,
                          marginTop: "0.5rem",
                        }}
                      >
                        Moody Moon Hemp
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Divider
                      orientation="vertical"
                      sx={{
                        background: theme.palette.primary.main,
                        width: "2px",
                        height: "50px",
                      }}
                    />
                    <Box sx={{ marginLeft: "1rem" }}>
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: isSmallScreen ? "1rem" : "1.3rem",
                          fontWeight: 600,
                          marginTop: "0.5rem",
                        }}
                      >
                        Categories:
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                          fontWeight: 400,
                          marginTop: "0.5rem",
                        }}
                      >
                        {cardinfodata.category}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "2rem",
                    border: "1px solid #343434",
                    borderRadius: "10px",
                    // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  {addtocartdata.buttonData.map((row, index) => (
                    <Box
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      sx={{
                        cursor: "pointer",
                        bgcolor:
                          selectedIndex === index
                            ? theme.palette.primary.main
                            : "transparent",

                        p: "0.5rem",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: selectedIndex === index ? "white" : "white",
                          fontSize: isSmallScreen ? "0.6rem" : "1rem",
                          marginTop: "0.5rem",
                        }}
                      >
                        {row.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                    marginTop: "2rem",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#343434",
                      display: "flex",
                      alignItems: "center",
                      py: 0.2,
                      px: 1,
                      borderRadius: "10px",
                      width: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <Box>
                      <IconButton
                        sx={{ fontSize: "2rem", color: "white" }}
                        onClick={() =>
                          setOrderQuantity((pre) => Math.max(pre - 1, 1))
                          // dispatch(addCartItem(orderQuantiy))
                        }
                      >
                        -
                      </IconButton>
                    </Box>
                    <Typography
                      sx={{
                        color: "white",
                        mx: 3,
                      }}
                    >
                      {orderQuantiy}
                    </Typography>
                    <Box>
                      <IconButton
                        sx={{ fontSize: "1.5rem", color: "white" }}
                        onClick={() => setOrderQuantity((pre) => pre + 1)}
                      >
                        +
                      </IconButton>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: theme.palette.primary.main,
                      py: 0.2,
                      px: 1,
                      borderRadius: "10px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    <Button
                      onClick={() =>
                        dispatch(
                          addCartItem({
                            productId,
                            quantity: orderQuantiy,
                            title: cardinfodata.title,
                            ratingstar: cardinfodata.ratingstar,
                            reviews: cardinfodata.reviews,
                            price: cardinfodata.price,
                            image: cardinfodata.img,
                          })
                          // setOrderQuantity(1)
                        )
                      }
                      sx={{ width: "100%", textTransform: "none" }}
                    >
                      <IconButton sx={{ fontSize: "1.5rem", color: "white" }}>
                        <IoCartOutline />
                      </IconButton>
                      <Typography
                        sx={{
                          color: "black",
                          mx: 2,
                          color: "white",
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        Add to cart
                      </Typography>
                    </Button>
                  </Box>
                </Box>

                <Divider
                  sx={{
                    background: "#343434",
                    width: "100%",
                    height: "0.1px",
                    my: "1rem",
                  }}
                />

                <Box
                  sx={{
                    marginTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "3rem",
                    }}
                  >
                    <img
                      src="/ourProducts/OPvan.png"
                      alt=""
                      style={{ width: "2.5rem" }}
                    />
                    <Box sx={{ marginLeft: "1rem" }}>
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: isSmallScreen ? "0.9rem" : "1rem",
                          fontWeight: 600,
                          marginTop: "0.5rem",
                        }}
                      >
                        Estimated Delivery
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: isSmallScreen ? "0.9rem" : "1rem",
                          fontWeight: 400,
                          // marginTop: "0.5rem",
                        }}
                      >
                        Ships within 24 hours.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/ourProducts/OPfree.png"
                      alt=""
                      style={{ width: "2.5rem" }}
                    />
                    <Box sx={{ marginLeft: "1rem" }}>
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: isSmallScreen ? "0.9rem" : "1rem",
                          fontWeight: 600,
                          marginTop: "0.5rem",
                        }}
                      >
                        Free Shiping & Returns
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: isSmallScreen ? "0.9rem" : "1rem",
                          fontWeight: 400,
                          // marginTop: "0.5rem",
                        }}
                      >
                        Order over $50 is free shipping
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>

      {/* ==================================DESCRIPTION PART========================================= */}
      <Box
        sx={{
          padding: "3% 13%",
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: isSmallScreen
              ? "1.2rem"
              : isMediumScreen
              ? "1.5rem"
              : "1.8rem",
            fontWeight: "600",
            color:'white',
            marginBottom: "0.5rem",
          }}
        >
          Description
        </Typography>
        <Divider
          sx={{
            width: "100%",
            backgroundColor:'#343434'
          }}
        />
        {addtocartdata.listData.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <IoMdRadioButtonOn color={"#51a2dc"} />
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                marginLeft: "1rem",
                color:'white'
              }}
            >
              <strong>{row.title}</strong> {row.des}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ProductCard;
