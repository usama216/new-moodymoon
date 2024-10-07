import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import {
  FaHeart,
  FaLeaf,
  FaBrain,
  FaDumbbell,
  FaHandHoldingHeart,
  FaSeedling,
} from "react-icons/fa";

const images = {
  Nutritional: "/blogimage1.png",
  Heart: "/blogimage2.png",
  Digestive: "/blogimage3.png",
  Protein: "/blogimage2.png",
  AntiInflammatory: "/blogimage3.png",
  Mood: "/blogimage1.png",
};

const BenefitsofHempProducts = () => {
  // State to track which image to show
  const [selectedImage, setSelectedImage] = useState(images.Nutritional);
  const theme = useTheme();
  return (
    <Box sx={{ padding: "2rem 13%", backgroundColor: "black" }}>
      {/* Title */}

      <Grid container spacing={4}>
        {/* Left Side: Text Section */}
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{ color: "white" }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: "white",
                fontSize: "2.8rem",
                fontWeight: 600,
                mb: 4,
              }}
            >
              Benefits of Hemp Products
            </Typography>
            <Box
              sx={{ cursor: "pointer", display: "flex" }}
              onClick={() => setSelectedImage(images.Nutritional)}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "1rem",
                  borderRadius: "50%",
                  marginRight: "1rem",
                }}
              >
                <FaLeaf style={{ color: "black", fontSize: "3rem" }} />
              </Box>

              <Box>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  Nutritional Powerhouse
                </Typography>

                <Typography sx={{ fontSize: "0.9rem" }}>
                  Hemp products are packed with essential nutrients like
                  protein, healthy fats, vitamins, and minerals, supporting
                  overall health.
                </Typography>
              </Box>
            </Box>
            <br />
            <Box
              sx={{ cursor: "pointer", display: "flex" }}
              onClick={() => setSelectedImage(images.Heart)}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "1rem",
                  borderRadius: "50%",
                  marginRight: "1rem",
                }}
              >
                <FaLeaf style={{ color: "black", fontSize: "3rem" }} />
              </Box>

              <Box>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  Heart Health
                </Typography>

                <Typography sx={{ fontSize: "0.9rem" }}>
                  Hemp products' omega-3 & omega-6 fatty acids support heart
                  health by reducing inflammation & improving cholesterol.
                </Typography>
              </Box>
            </Box>
            <br />

            <Box
              sx={{ cursor: "pointer", display: "flex" }}
              onClick={() => setSelectedImage(images.Digestive)}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "1rem",
                  borderRadius: "50%",
                  marginRight: "1rem",
                }}
              >
                <FaLeaf style={{ color: "black", fontSize: "3rem" }} />
              </Box>

              <Box>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  Digestive Health
                </Typography>

                <Typography sx={{ fontSize: "0.9rem" }}>
                  Hemp products, abundant in fiber, assist digestion, and
                  enhance gut health through their dietary fiber content.
                </Typography>
              </Box>
            </Box>
            <br />

            <Box
              sx={{ cursor: "pointer", display: "flex" }}
              onClick={() => setSelectedImage(images.Protein)}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "1rem",
                  borderRadius: "50%",
                  marginRight: "1rem",
                }}
              >
                <FaLeaf style={{ color: "black", fontSize: "3rem" }} />
              </Box>

              <Box>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  Balanced Plant-Based Protein
                </Typography>

                <Typography sx={{ fontSize: "0.9rem" }}>
                  Hemp seeds & protein powder supply essential amino acids,
                  fueling muscle growth and energy, perfect for plant-based
                  diets.
                </Typography>
              </Box>
            </Box>
            <br />

            <Box
              sx={{ cursor: "pointer", display: "flex" }}
              onClick={() => setSelectedImage(images.AntiInflammatory)}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "1rem",
                  borderRadius: "50%",
                  marginRight: "1rem",
                }}
              >
                <FaLeaf style={{ color: "black", fontSize: "3rem" }} />
              </Box>

              <Box>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  Anti-inflammatory Properties
                </Typography>

                <Typography sx={{ fontSize: "0.9rem" }}>
                  CBD-infused hemp edibles can help alleviate
                  inflammation-related conditions such as arthritis and muscle
                  soreness.
                </Typography>
              </Box>
            </Box>
            <br />

            <Box
              sx={{ cursor: "pointer", display: "flex" }}
              onClick={() => setSelectedImage(images.Mood)}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "1rem",
                  borderRadius: "50%",
                  marginRight: "1rem",
                }}
              >
                <FaLeaf style={{ color: "black", fontSize: "3rem" }} />
              </Box>

              <Box>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  Mood & Stress Regulation
                </Typography>

                <Typography sx={{ fontSize: "0.9rem" }}>
                  CBD in hemp products may reduce anxiety, promote relaxation,
                  and improve mood without psychoactive effects.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Image Section */}
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box
            component="img"
            src={selectedImage} // The image that changes when an item is clicked
            alt="Selected Hemp Product Benefit"
            sx={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BenefitsofHempProducts;
