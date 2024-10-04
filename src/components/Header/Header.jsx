import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,

  IconButton,

  Typography,
  useTheme,
  TextField,
  InputAdornment,
  useMediaQuery,
  Badge
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "../../components/Image/Image";

import FlexBox from "../../components/FlexBox/FlexBox";
import Btn from "../../components/Btn/Btn";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import ENavLinks from "./ENavLinks";




const Header = () => {
  const cartitem = useSelector((state)=>state.cartItem)
  const is1200 = useMediaQuery('(max-width:1200px)'); 

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedValue, setSelectedValue] = useState("");

  const auth = true;

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleLogin = () => {
    // setDrawerOpen(false);
    navigate('/shopping-cart-details')
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const currentPath = location.pathname;

  const isHidden =
  currentPath === "/order-confirm" ||
  currentPath === "/login" ||
  currentPath === "/sign-up" ||
  currentPath === "/email-confirmation-otp";
  if (isHidden) {
    return null;
  }

  const handleMenuItemClick = (value) => {
    if (value === "Logout") {
      // dispatch(logout());
    } else if (value === "My orders") {
      navigate("/my-orders");
    } else if (value === "assembly workshop") {
      navigate("/assemblt-workshop");
    } else if (value === "customer data") {
      navigate("/customer-data");
    }
    setSelectedValue("");
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const menuItems = [
    // { label: "Home", route: "/" },
    // { label: "Services", route: "/our-products" },
    { label: "Labe Test", route: "/lab-tests" },
    { label: "FAQS", route: "/faqs" },
    { label: "Blogs", route: "/blogs" },
    { label: "Contact Us", route: "/contactus" },
  ];
const handleHome = ()=>{
  navigate('/')
}
const [isCartOpen , setIsCartOpen] = useState(false);

const handleCartOpen = ()=>{
  setIsCartOpen(prev => !prev);
}
  return (
   <>
   <Box sx={{
     width:'100%',
    boxSizing:'border-box',
     overflow:'hidden',
  }}>
    {/* white page for shipping cart  */}
    {/* <Box
  sx={{
    transition: 'opacity 1s ease-in-out, visibility 0s linear 0.5s',
     // Smooth opacity transition
    opacity: isCartOpen ? 1 : 0, // Fully visible when open, fully invisible when closed
    visibility: isCartOpen ? 'visible' : 'hidden', // Hides the element when not visible
    background: '#ffffff86',
    width: '100%',
    height: '100%',
    position: 'fixed',
    overflow:'hidden',
    top: 0,
    left: 0,
    zIndex: '98',
  }}
></Box> */}

      <Box
        sx={{
          padding: "0.5rem 5%",
          color: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FlexBox sx={{ gap: "1rem" }}>
          <Box onClick={handleHome} sx={{cursor:'pointer'}}>

          <Image src="/loginlogo.svg" sx={{
            width:'4rem'
          }} />
          </Box>

        </FlexBox>

        <Box
          sx={{
            display: { xs: 'none',sm: "none", md: "flex" },
            gap: is1200 ? 2 : 6,
            alignItems: "center",
          }}
        >
        <Typography onClick={()=>(
          navigate('/')
        )}
        sx={{
          fontSize:  "0.9rem",
          cursor: "pointer",
          fontWeight:550,
          color: "black",
          ":hover": {
            color: theme.palette.primary.main,
          },
        }}> 
          Home
        </Typography>
        <Box sx={{display:'flex'  }}>
          <ENavLinks/>
        </Box>
          {menuItems.map((item, index) => (
            <Typography
              key={index}
              onClick={() => {
                navigate(item.route);
                setDrawerOpen(false);
              }}
              sx={{
                fontSize:  "0.9rem",
                cursor: "pointer",
                fontWeight:550,
                color: "black",
                ":hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        <FlexBox sx={{ display: { xs: 'none',sm: "none", md: "flex", gap: "0.5rem" } }}>
        <TextField
        // size="small"
        sx={{
          borderRadius: '50px',
          width:is1200 ? '100px': '200px', // Adjust width as needed
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
          },
          '& .MuiInputBase-input': {
            height: '7px', // Adjust height as needed
            fontWeight: 500, // Font weight for the input text
          },
          '& .MuiInputLabel-root': {
            color: 'black', // Placeholder color
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black', // Border color to match placeholder color if needed
          },
          '& .MuiInputBase-input::placeholder': {
            color: 'black', // Placeholder text color
          },
        }}
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
         <Button
         onClick={handleCartOpen}
          sx={{ fontWeight:500,
                color: "black",
           border:'1px solid darkgray',
           borderRadius:'50px',
           padding:'0.5rem 1rem',
           textTransform:'none'
         }}>
          {/* <Badge badgeContent={cartitem.length} color="primary"> */}
         <IoCartOutline style={{ fontSize: "1.5rem" }} /> Cart
         {/* </Badge> */}
         </Button>


          <Button
            onClick={handleLogin}
            sx={{
              color: "white",
              border:'1px solid #265630',
              backgroundColor:'#265630',
              textTransform: "none",
              fontSize: "0.9rem",
              borderRadius:'50px',
              padding:'0.5rem 1rem',
              '&:hover':{
                color: "#265630",
                border:'1px solid #265630',
                backgroundColor:'transparent',
              }
            }}
          >
            <FaRegCircleUser style={{marginRight:'0.5rem', fontSize:'1.2rem'}} />
            Sign Up
          </Button>

          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",

              cursor: "pointer",
            }}
          >
            {auth ? (
              <Box>
                <FormControl sx={{ padding: 0 }}>
                  <Select
                    sx={{
                      outline: "none",
                      "&:focus": {
                        outline: "none",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Select user" }}
                    style={{ minWidth: "120px", padding: 0 }}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          alt=""
                          src=""
                          sx={{
                            height: "2rem",
                            width: "2rem",
                            marginRight: "8px",
                          }}
                        />
                        <Typography sx={{ fontSize: "1rem" }}> Usama</Typography>
                      </Box>
                    )}
                  >
                    <MenuItem
                      sx={{ fontSize: "0.8rem" }}
                      value="My orders"
                      onClick={() => handleMenuItemClick("My orders")}
                    >
                      My orders
                    </MenuItem>

                    <MenuItem
                      sx={{ fontSize: "0.8rem" }}
                      value="assembly workshop"
                      onClick={() => handleMenuItemClick("assembly workshop")}
                    >
                      My Assembly Workshop
                    </MenuItem>

                    <MenuItem
                      sx={{ fontSize: "0.8rem" }}
                      value="customer data"
                      onClick={() => handleMen.uItemClick("customer data")}
                    >
                      Customer Data
                    </MenuItem>

                    <MenuItem
                      sx={{ fontSize: "0.8rem" }}
                      value="Logout"
                      onClick={() => handleMenuItemClick("Logout")}
                    >
                      Logout
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            ) : (
              <Button
                // onClick={handleLogin}
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "0.5rem 2rem",
                  textTransform: "none",
                  fontSize: "0.9rem",
                }}
              >
                Login
              </Button>
            )}
          </Box> */}

        </FlexBox>

        <Box sx={{ display: { sm: "flex", md: "none" } }}>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <Box sx={{ width: 250, padding: "20px" }}>
              <IconButton
                onClick={handleDrawerClose}
                sx={{ position: "absolute", top: "10px", right: "10px" }}
              >
                <CloseIcon />
              </IconButton>
              <br />
              <br />

              {menuItems.map((item, index) => (
                <Box key={index}>
                  <Typography
                    onClick={() => {
                      navigate(item.route);
                      setDrawerOpen(false);
                    }}
                    sx={{
                      fontSize: "0.9rem",
                      marginBottom: 2,
                      marginTop: 1,
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </Typography>
                  {index < menuItems.length - 1 && <Divider />}
                </Box>
              ))}
              <Box sx={{ marginTop: 2 }}>

              </Box>

              <FlexBox sx={{ display:'flex', flexDirection:'column', alignItems:'start', gap:'1rem' }}>
        <TextField
        // size="small"
        sx={{
          borderRadius: '50px',
          width: '200px', // Adjust width as needed
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
          },
          '& .MuiInputBase-input': {
            height: '7px', // Adjust height as needed
            fontWeight: 500, // Font weight for the input text
          },
          '& .MuiInputLabel-root': {
            color: 'black', // Placeholder color
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black', // Border color to match placeholder color if needed
          },
          '& .MuiInputBase-input::placeholder': {
            color: 'black', // Placeholder text color
          },
        }}
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
         <Button
         onClick={handleCartOpen}
          sx={{ fontWeight:500,
                color: "black",
           border:'1px solid darkgray',
           borderRadius:'50px',
           padding:'0.5rem 1rem',
           textTransform:'none'
         }}>
         <IoCartOutline style={{ fontSize: "1.5rem" }} /> Cart
         </Button>


          <Button
            onClick={handleLogin}
            sx={{
              color: "white",
              border:'1px solid #265630',
              backgroundColor:'#265630',
              textTransform: "none",
              fontSize: "0.9rem",
              borderRadius:'50px',
              padding:'0.5rem 1rem',
              '&:hover':{
                color: "#265630",
                border:'1px solid #265630',
                backgroundColor:'transparent',
              }
            }}
          >
            <FaRegCircleUser style={{marginRight:'0.5rem', fontSize:'1.2rem'}} />
            Sign Up
          </Button>

          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",

              cursor: "pointer",
            }}
          >
            {auth ? (
              <Box>
                <FormControl sx={{ padding: 0 }}>
                  <Select
                    sx={{
                      outline: "none",
                      "&:focus": {
                        outline: "none",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Select user" }}
                    style={{ minWidth: "120px", padding: 0 }}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          alt=""
                          src=""
                          sx={{
                            height: "2rem",
                            width: "2rem",
                            marginRight: "8px",
                          }}
                        />
                        <Typography sx={{ fontSize: "1rem" }}> Usama</Typography>
                      </Box>
                    )}
                  >
                    <MenuItem
                      sx={{ fontSize: "0.8rem" }}
                      value="My orders"
                      onClick={() => handleMenuItemClick("My orders")}
                    >
                      My orders
                    </MenuItem>

                    <MenuItem
                      sx={{ fontSize: "0.8rem" }}
                      value="assembly workshop"
                      onClick={() => handleMenuItemClick("assembly workshop")}
                    >
                      My Assembly Workshop
                    </MenuItem>

                    <MenuItem
                      sx={{ fontSize: "0.8rem" }}
                      value="customer data"
                      onClick={() => handleMen.uItemClick("customer data")}
                    >
                      Customer Data
                    </MenuItem>

                    <MenuItem
                      sx={{ fontSize: "0.8rem" }}
                      value="Logout"
                      onClick={() => handleMenuItemClick("Logout")}
                    >
                      Logout
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            ) : (
              <Button
                // onClick={handleLogin}
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "0.5rem 2rem",
                  textTransform: "none",
                  fontSize: "0.9rem",
                }}
              >
                Login
              </Button>
            )}
          </Box> */}

        </FlexBox>
            </Box>
          </Drawer>
        </Box>
      </Box>
   </Box>
   </>
  );
};

export default Header;
