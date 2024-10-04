import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineLocalShipping } from "react-icons/md";

const TopHeader = () => {
  const location = useLocation();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const currentPath = location.pathname;

  const isHidden =
    currentPath === "/order-confirm" ||
    currentPath === "/login" ||
    currentPath === "/sign-up" ||
    currentPath === "/email-confirmation-otp";
  if (isHidden) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          display: isSmall ? "none" : "block",
          backgroundColor: "#195630",
          padding: "0.5rem 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
          "& .scrolling-content": {
            display: "flex",
            alignItems: "center",
            justifyContent:'space-between',
            animation: "marquee 20s linear infinite",
          },
          "@keyframes marquee": {
            from: { transform: "translateX(100%)" },
            to: { transform: "translateX(-100%)" },
          },
        }}
      >
        <Box className="scrolling-content">
          <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
            <MdOutlineLocalShipping
              style={{ fontSize: "1.3rem", color: "white",  }}
            />
            <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
              FREE SHIPPING ON ALL ORDERS OVER $50
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
            <MdOutlineLocalShipping
              style={{ fontSize: "1.3rem", color: "white",  }}
            />
            <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
              FREE SHIPPING ON ALL ORDERS OVER $50
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
            <MdOutlineLocalShipping
              style={{ fontSize: "1.3rem", color: "white",  }}
            />
            <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
              FREE SHIPPING ON ALL ORDERS OVER $50
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default TopHeader;
