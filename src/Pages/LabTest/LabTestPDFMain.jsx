// import React from "react";
// import {
//   Box,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   IconButton,
//   Grid,
// } from "@mui/material";
// import { FiArrowUpRight } from "react-icons/fi";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "../../Views/Landing/Cetegory/Category.module.css"; // Import CSS Module
// import CustomButton from "../Landing/components/Button/CustomButton";

// const LabTestPDFMain = () => {
//   const handleViewPDF = (path) => {
//     console.log(path, 'path')
//     window.open(path, "_blank");
//   };

//   const theme = useTheme();
//   const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   const listData = [
//     {
//       imag: "/category11.png",
//       title: "THCA Flowers (17)",
//       icon: <FiArrowUpRight />,
//       path: "Blueberry_OG.pdf",
//     },

//     {
//       imag: "/category22.png",
//       title: "THCA Flowers (17)",
//       icon: <FiArrowUpRight />,
//       path: "Blueberry_OG.pdf",
//     },
//     {
//       imag: "/category33.png",
//       title: "THCA Flowers (17)",
//       icon: <FiArrowUpRight />,
//       path: "Blueberry_OG.pdf",
//     },
//     {
//       imag: "/category44.png",
//       title: "THCA Flowers (17)",
//       icon: <FiArrowUpRight />,
//       path: "Blueberry_OG.pdf",
//     },
//     {
//       imag: "/category11.png",
//       title: "THCA Flowers (17)",
//       icon: <FiArrowUpRight />,
//       path: "Blueberry_OG.pdf",
//     },

//     {
//       imag: "/category22.png",
//       title: "THCA Flowers (17)",
//       icon: <FiArrowUpRight />,
//       path: "Blueberry_OG.pdf",
//     },
//     {
//       imag: "/category33.png",
//       title: "THCA Flowers (17)",
//       icon: <FiArrowUpRight />,
//       path: "Blueberry_OG.pdf",
//     },
//     {
//       imag: "/category44.png",
//       title: "THCA Flowers (17)",
//       icon: <FiArrowUpRight />,
//       path: "Blueberry_OG.pdf",
//     },
//   ];

//   return (
//     <Box sx={{ padding: "4rem 5%" }}>
//       <Box sx={{ padding: "0% 5%" }}>
//         <Box>
//           <div className={styles.sliderContainer}>
//             <Grid container spacing={4}>
//               {listData.map((row, index) => (
//                 <>
//                   <Grid item lg={3} md={3} sm={12} xs={12}>
//                     <Box onClick={handleViewPDF(row.path)}>
//                       <Box
//                         key={index}
//                         // className={styles.slickSlide} // Apply CSS Module class
//                         sx={{
//                           position: "relative",

//                           height: "auto",
//                           borderRadius: "0px",
//                           overflow: "hidden",
//                         }}
//                       >
//                         <img
//                           src={row.imag}
//                           alt=""
//                           className={styles.cardImage} // Apply CSS Module class
//                         />
//                         <Box className={styles.overlay}>
//                           <Box className={styles.textBox}>
//                             <Typography
//                               sx={{
//                                 color: "white",
//                                 fontSize: isSmallScreen
//                                   ? "1rem"
//                                   : isMediumScreen
//                                   ? "1.1rem"
//                                   : "1.1rem",
//                                 fontWeight: 500,
//                                 textTransform: "uppercase",
//                               }}
//                             >
//                               {row.title}
//                             </Typography>

//                             <IconButton
//                               className="icon"
//                               sx={{
//                                 fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
//                                 color: "white",
//                                 backgroundColor: "transparent",
//                               }}
//                             >
//                               <FiArrowUpRight
//                                 style={{ backgroundColor: "transparent" }}
//                               />
//                             </IconButton>
//                           </Box>
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Grid>
//                 </>
//               ))}
//             </Grid>
//           </div>
//         </Box>

//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "3rem",
//           }}
//         >
//           <CustomButton
//             border={"1px solid #17364c"}
//             backgroundColor={"#265630"}
//             color={"white"}
//             hbackgroundColor={"transparent"}
//             hcolor={"#265630"}
//             name="Learn More"
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LabTestPDFMain;




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
import styles from "../../Views/Landing/Cetegory/Category.module.css"; // Import CSS Module
import CustomButton from "../Landing/components/Button/CustomButton";

const LabTestPDFMain = () => {
  const handleViewPDF = (path) => {
    console.log(path, 'path');
    window.open(path, "_blank");
  };

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const listData = [
    {
      imag: "/category11.png",
      title: "THCA Flowers (17)",
      path: "Blueberry_OG.pdf",
    },
    {
      imag: "/category22.png",
      title: "THCA Flowers (17)",
      path: "Blueberry_OG.pdf",
    },
    {
      imag: "/category33.png",
      title: "THCA Flowers (17)",
      path: "Blueberry_OG.pdf",
    },
    {
      imag: "/category44.png",
      title: "THCA Flowers (17)",
      path: "Blueberry_OG.pdf",
    },
    {
      imag: "/category11.png",
      title: "THCA Flowers (17)",
      path: "Blueberry_OG.pdf",
    },
    {
      imag: "/category22.png",
      title: "THCA Flowers (17)",
      path: "Blueberry_OG.pdf",
    },
    {
      imag: "/category33.png",
      title: "THCA Flowers (17)",
      path: "Blueberry_OG.pdf",
    },
    {
      imag: "/category44.png",
      title: "THCA Flowers (17)",
      path: "Blueberry_OG.pdf",
    },
  ];

  return (
    <Box sx={{ padding: "4rem 5%" }}>
      <Box sx={{ padding: "0% 5%" }}>
        <Box>
          <div className={styles.sliderContainer}>
            <Grid container spacing={4}>
              {listData.map((row, index) => (
                <Grid item lg={3} md={3} sm={12} xs={12} key={index}>
                  <Box
                    onClick={() => handleViewPDF(row.path)} // Pass a function reference
                    sx={{
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "auto",
                        borderRadius: "0px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={row.imag}
                        alt=""
                        className={styles.cardImage} // Apply CSS Module class
                      />
                      <Box className={styles.overlay}>
                        <Box className={styles.textBox}>
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
                            }}
                          >
                            {row.title}
                          </Typography>
                          <IconButton
                            className="icon"
                            sx={{
                              fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
                              color: "white",
                              backgroundColor: "transparent",
                            }}
                          >
                            <FiArrowUpRight
                              style={{ backgroundColor: "transparent" }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <CustomButton
            border={"1px solid #17364c"}
            backgroundColor={"#265630"}
            color={"white"}
            hbackgroundColor={"transparent"}
            hcolor={"#265630"}
            name="Learn More"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LabTestPDFMain;
