import React from "react";
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



const ContactUsCard = () => {
  const theme = useTheme();
const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const listData = [
    {
      icon: <TiLocation />,
      title: "Our Location",
      des: "102 Smith Sawyer, Cave Junction, OR 97523",
      last: "View On Google Map",
      link: "https://www.google.com/maps/search/?api=1&query=102+Smith+Sawyer,+Cave+Junction,+OR+97523",
    },
    {
      icon: <IoMdMail />,
      title: "Email Us",
      des: "Email us for assistance we work closely with you.",
      last: "moodymoonhemp @gmail.com",
      link: "mailto:moodymoonhemp@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      des: "Call for assistance; we collaborate closely to help you.",
      last: "Give us a call",
      link: "tel:+1234567890", // Replace with the actual phone number
    },
  ];

  return (
    <Box >
          <Grid container spacing={2}>
            {listData.map((row, index) => (
              <Grid key={index} item lg={12} md={12} sm={12} xs={12}>
                <Box
                  sx={{
                    borderRadius:'10px',
                    backgroundColor:'#1a1a1a',
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <IconButton
                    style={{
                      fontSize:isSmall ? "2rem": "3.5rem",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {row.icon}
                  </IconButton>
                  <Box sx={{ml:'0.5rem' }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {row.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                        fontWeight: 400,
                        color: "white",
                      }}
                    >
                      {row.des}
                    </Typography>
                    <br />
                    <Typography
                      component="a"
                      href={row.link}
                      sx={{
                        textDecoration: 'none',
                        fontSize: { xs: "0.8rem", md: "1.2rem" },
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      {row.last}
                    </Typography>
                    
                  </Box>
                  {/* {index < listData.length - 1 && (
                    <Divider
                      orientation="vertical"
                      sx={{
                        display:isSmall ? 'none':'block',
                        height: "100px",
                        borderColor: "black",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                      }}
                    />
                  )} */}
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{mt:'1rem', display:'flex'}}>
                    <a href="" style={{marginRight:'1rem'}}>
                    <FaInstagram style={{color:'white', fontSize:'1.8rem'}}/>
                    </a>
                    <a href="">
                    <FaFacebook style={{color:'white', fontSize:'1.8rem'}}/>
                    </a>
                  </Box>

      {/* <Box sx={{ position: "relative", zIndex: "-3" }}>
        <img
          src="/contactcard.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </Box> */}
    </Box>
  );
};

export default ContactUsCard;
