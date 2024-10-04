import {
  Box,
  Button,
  Divider,
  Grid,
  styled,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBox from "../../components/FlexBox/FlexBox";
import Image from "../../components/Image/Image";
import CustomButton from "../Btn/CustomButton";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdRadioButtonOn } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";





const StyledFooter = styled(Box)(({ theme }) => ({
  background: "#265630",
  color: "white",
  padding: "2rem 5%",
  position:'relative',
  overflow:'hidden'
}));

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const currentPath = location.pathname;

  const isHidden =
    currentPath === "/order-confirm" ||
    currentPath === "/login" ||
    currentPath === "/sign-up" ||
    currentPath === "/email-confirmation-otp";

  if (isHidden) {
    return null;
  }

  const textFieldStyle = {
    "& .MuiInputBase-root": {
      border: "none",
      "&:hover": {
        borderColor: "white",
      },
      "&.Mui-focused": {
        boxShadow: "none",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      display: "none",
    },

    borderRadius: "45px",
    backgroundColor: "white",
  };

  const pages = [
    { label: "Shop All", route: "/" },
    { label: "My Account", route: "/find-products" },
  ];

  const services = [
    { label: "Privacy Policy", route: "/contact" },
    { label: "Return/Refund Policy", route: "/faq" },
    { label: "Term of Services", route: "/blog" },
    { label: "Shipping Policy", route: "/terms" },
  ];

  const footerBottomtext =[
    {title: "FDA Disclaimer",
      mb:'0rem',
      des1:'',
      des2:'The statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. Please consult your health care professional about potential interactions or other possible complications before using any product. The Federal Food, Drug, and Cosmetic Act require this notice.'
    },
    {title: "THCA Disclaimer",
      mb:'1rem',
      des1:'We do not ship THCa products to the states where THCa is restricted or illegal.', 
      des2:'We CAN ship THCa products to the following states: Alabama, Arizona, Arkansas, D.C., Florida, Georgia, Illinois, Kentucky, Louisiana, Maine, Missouri, Nebraska, Nevada, New York, North Carolina, Ohio, Pennsylvania, South Carolina, Tennessee, Texas, West Virginia.'
    },
    {title: "Delta-8 Disclaimer",
      mb:'0rem',
      des1:'', 
      des2:'We do not ship Delta 8 products to the following states: Alaska, Colorado, Delaware, Hawaii, Idaho, Massachusetts, Mississippi, Montana, Nevada, New York, North Dakota, Oregon, Rhode Island, Utah, Vermont, Virginia, Washington, and West Virginia.'
    }
  
  ]

  return (
    <StyledFooter>
       <img src="/footerbg.png" alt="" style={{
        position:'absolute',
        right:0, 
        bottom:0
      }}/> 
      <Grid container spacing={5} sx={{paddingTop:isSmallScreen ?  "1rem": '3rem'}}>
        <Grid item lg={3} sm={6} xs={12}>
          <FlexBox sx={{ gap: "1rem" }}>
            <Image src="/footerlogo.svg" width={isSmallScreen ? "40%": '50%'} />
          </FlexBox>
          <Typography sx={{ fontSize: "1rem", mt: 3 }}>
            {/* Lorem ipsum dolor sit amet consectetur */}
          </Typography>
          <FlexBox sx={{ gap: "1rem", mt: 3 }}>
            <FaFacebook style={{ fontSize: "1.4rem" }} />{" "}
            <FaTwitter style={{ fontSize: "1.4rem" }} />{" "}
            <FaLinkedin style={{ fontSize: "1.4rem" }} />
          </FlexBox>
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: isSmallScreen ? "1.2rem": "1.4rem",
             fontWeight: 700 }}>
            Quick Links
          </Typography>

          {pages.map((page, idx) => (
           <Box sx={{display:'flex', alignItems:'center', mt: idx === 0 ? 3 : 2, }}>
            <IoMdRadioButtonOn color={"#51a2dc"}/>
             <Typography
              key={idx}
              sx={{
                // mt: idx === 0 ? 3 : 2,
                cursor: "pointer",
                fontSize: isSmallScreen ? "0.9rem": "1.1rem",
                marginLeft:'1rem'
              }}
              onClick={() => navigate(page.route)}
            >
              {page.label}
            </Typography>
             </Box>
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: isSmallScreen ? "1.2rem": "1.4rem",
             fontWeight: 700 }}>
            Polices
          </Typography>
          {services.map((service, idx) => (
           <Box sx={{display:'flex', alignItems:'center', mt: idx === 0 ? 3 : 2, }}>
            <IoMdRadioButtonOn  color={"#51a2dc"}/>
             <Typography
              key={idx}
              sx={{
                cursor: "pointer",
                fontSize: isSmallScreen ? "0.9rem": "1.1rem",
                marginLeft:'1rem'
              }}
              onClick={() => navigate(service.route)}
            >
              {service.label}
            </Typography>
           </Box>
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: isSmallScreen ? "1.2rem": "1.4rem",
             fontWeight: 700 }}>          
            Contact Info
          </Typography>
          <Typography sx={{ mt: 3,
             fontSize: isSmallScreen ? "0.9rem": "1.1rem",
              mb: 2, }}>
          <TfiHeadphoneAlt style={{marginRight:'0.5rem', 
          fontSize: isSmallScreen ? "1.2rem": "1.5rem",
           color:'#51a2dc',
            marginBottom:'0rem'          }}/>
            +92-300-0000000
          </Typography>
          <Typography sx={{ fontSize: isSmallScreen ? "0.9rem": "1.1rem", mb: 2 }}>
          <MdEmail style={{marginRight:'0.5rem', 
            fontSize: isSmallScreen ? "1.4rem": "1.8rem",
             color:'#51a2dc',   marginBottom:'-3px'}}/>
            moodymoonhemp@gmail.com
          </Typography>
          <Box sx={{
            display:'flex', alignItems:'start'
          }}>
          <FaMapLocationDot style={{marginRight:'0.5rem',
            fontSize: isSmallScreen ? "1.4rem": "2.2rem",
              color:'#51a2dc',   marginBottom:'-3px'}}/>
          <Typography sx={{ fontSize: isSmallScreen ? "0.9rem": "1.1rem", mb: 2 }}>
            102 Smith Sawyer, Cave Junction - OR 97523
          </Typography>
          </Box>
         
        </Grid>
      </Grid>

      
      <Divider sx={{ backgroundColor: "gray", height:'0.01px' ,
      margin:isSmallScreen ? "2rem 0rem": '4rem 0rem'
      }} />

      <FlexBox
        sx={{
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
          
        }}
      >
        <Typography
          sx={{
            fontSize: isSmallScreen
              ? "2rem"
              : isMediumScreen
              ? "2.5rem"
              : "3rem",
            fontWeight: 600,
          }}
        >
          Subscribe to NewsLetter
        </Typography>

        <Typography sx={{ fontSize: isSmallScreen ? "0.9rem" : "1rem", textAlign:'center' }}>
          Join our newsletter to stay in the know about Moody Moon’s new
          products, special offers and CBD education!
        </Typography>
        <br />
        <br />
        <Box
          sx={{ display: "flex", alignItems: "center", width: "70%" }}
          gap={2}
        >
          <TextField
            // size="small"
            sx={textFieldStyle}
            fullWidth
            placeholder="Input your email address here"
          />
          <CustomButton
            name="View All"
            border={"1px solid #51a2dc"}
            backgroundColor={"#51a2dc"}
            color={"white"}
            hbackgroundColor={"transparent"}
            hcolor={"#51a2dc"}
            width={"14rem"}
          />
        </Box>
      </FlexBox>
      
      <Divider sx={{ backgroundColor: "gray", height:'0.01px',
         margin:isSmallScreen ? "2rem 0rem": '3rem 0rem'
       }} />

      <Box sx={{
        marginTop:'1rem'
      }}>
        {footerBottomtext.map((row, index)=>(
          <Box key={index}>
          <Typography sx={{ fontSize:isSmallScreen ? '1.2rem': isMediumScreen ? '1.5rem' : "2rem",
                   fontWeight: 700, marginBottom:'0.5rem'
                    }}>
                  {row.title}
                </Typography>
                <Typography sx={{ fontSize:isSmallScreen ? '0.9rem': isMediumScreen ? '1rem' : "1rem",
                   fontWeight: 400,
                    marginBottom:`${row.mb}`
                    }}>
                  {row.des1}
                </Typography>
                <Typography sx={{ fontSize:isSmallScreen ? '0.9rem': isMediumScreen ? '1rem' : "1rem",
                   fontWeight: 400,
                   marginTop:'0.5rem',
                    marginBottom:'1.5rem'
                    }}>
                      {row.des2}
                </Typography>
          </Box>
        ))}
        
      </Box>

      <Divider sx={{ backgroundColor: "gray", height:'0.01px',
         margin:isSmallScreen ? "1rem 0rem": '2rem 0rem'
       }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.9rem", color: "white" }}>
          Copyright © 2024 Cali Origins. All Rights Reserved.
        </Typography>

        <Box
          sx={{ dispaly: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Image
            src="/footercard1.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image
            src="/footercard2.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image
            src="/footercard3.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image src="/footercard4.svg" width="13%" />
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
