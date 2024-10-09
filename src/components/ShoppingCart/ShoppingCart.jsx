import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    Divider,
    Grid,
    Rating,
    IconButton,
  } from "@mui/material";
import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from "../../store/reducers/cartReducer";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Btn/CustomButton";





const ShoppingCart = ({closecart}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cartitem = useSelector((state)=>state.cartItem)

 const calculateTotal = () => {
    const total = cartitem?.reduce((acc, item) => {
      return acc + (item.price * item.quantity);  }, 0);
    setTotalAmount(total);
  };


useEffect(()=>{
  calculateTotal();
},[cartitem])


  const navigate = useNavigate();
  const dispatch = useDispatch();
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const is1200 = useMediaQuery('(max-width:1200px)');
  const is1022 = useMediaQuery('(max-width:1022px)');


  const [orderQuantiy , setOrderQuantity] = useState(cartitem?.map((row)=>row?.quantity));
  // console.log('isisisiisisisisis' , orderQuantiy);

  const cardData = [
    {img:'/OPcard1.png', title:'Ice Cream Cake - THC A Exotic Indoor PreRoll', price:'12.99'},
    {img:'/OPcard1.png', title:'Ice Cream Cake - THC A Exotic Indoor PreRoll', price:'12.99'},
    {img:'/OPcard1.png', title:'Ice Cream Cake - THC A Exotic Indoor PreRoll', price:'12.99'},
  ]

  const shipIconData = [
    {img:'shipicon1.png', title:'Add Note', subtitle:'Add a note'},
    {img:'shipicon2.png', title:'Gift Wrap', subtitle:'Add to Voucher'},
    {img:'shipicon3.png', title:'Shipping', subtitle:'Estimate Shipping Rate'},
    {img:'shipicon4.png', title:'Discount', subtitle:'Add a Discount Code'},
  ]

  // console.log('carcardcar', closecart)

  return (
    <>
    <Box sx={{
    bgcolor:'black',
    boxSizing:'border-box',
     width:isSmallScreen ? '20rem':  isMediumScreen ? "30rem":'32rem',
      height:'100%',
       zIndex:'99', 
       p:isSmallScreen ? 2 : 3, 
     overflow:'hidden',
     position:'relative',
    }}>
       <Box sx={{display:'flex',alignItems:'center' ,justifyContent:'space-between'}}>
       <Typography
                sx={{
                    colorL:'white',
                  fontSize: isSmallScreen
                    ? "1.2rem"
                    : isMediumScreen
                    ? "1.4rem"
                    : "1.8rem",
                  fontWeight: "600",
                  color:'white'
                }}
              >
                Shopping Cart
              </Typography>
              <IconButton 
              onClick={closecart}
              >
              <IoMdClose  style={{fontSize: isSmallScreen ? "1.5rem": isMediumScreen ?'1.7rem' :'2rem', 
                p:2, backgroundColor:'#ffffff49', borderRadius:'100px', color:'white'}}/>
              </IconButton>
       </Box>

       <Divider sx={{backgroundColor:'lightgray', width:'100%', height:'0.1px', color:'lightgray',
         my:isSmallScreen ? 2 : 3}}/>

       {/* ==============================CARD MAP========================================= */}
       <Box sx={{
        boxSizing:'border-box',
        widows:'100%',
        height: isSmallScreen ?  '40vh': is1022 ? '30vh':  is1200 ? '23vh': '30vh',
        overflowY:'auto',
        overflowX:'hidden',
       }}>
       {cartitem?.map((row)=>(
         <Box key={row.productId} sx={{bgcolor:'#ffffff45',
          marginBottom:isSmallScreen ? '2rem':'1rem',
          display:'flex', justifyContent:'center',
          alignItems:'center',p:2, borderRadius:'10px', width:'100%', boxSizing:'border-box'
         }}>
          <Grid container spacing={isSmallScreen ? 1 : 3}> 
            <Grid item lg={4} md={4} sm={4} xs={4}>
              <Box sx={{width:'100%'}}>
                <img src={row.image} alt="" width={'100%'}/>
              </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={7}>
              <Box>
                <Typography sx={{
                  fontSize:isSmallScreen ? '1rem': '1.3rem',
                  fontWeight:500,
                  color:'white', 
                  marginBottom:'0.5rem'
                }}>
                {row.title}
                </Typography>
                <Typography sx={{
                  fontSize:isSmallScreen ? '0.9rem': '1.1rem',
                  fontWeight:500,
                  color:'#f1b815', marginBottom:'0.5rem'
                }}>
               ${(row.price * row.quantity)?.toFixed(2)}
                </Typography>
  
                <Box sx={{display:'inline-block'}}>
                <Box sx={{
                  bgcolor:'#ebebeb63',
                  display:'flex', alignItems:'center', py:-2, px:1,
                  borderRadius:'10px', width:'auto',cursor:'pointer',
                  
                }}>
                  <Box>
                    <IconButton sx={{fontSize: isSmallScreen ? '1.6rem': '1.8rem', color:'white', py: '0rem'  }}
                     onClick={()=>dispatch(row.quantity === 1 ? row.quantity : decreaseCartItemQuantity(row.productId))} >
                      -
                    </IconButton>
                  </Box>
                  <Typography sx={{
                    color:'white', mx:isSmallScreen ? 1: 3
                  }}>
                    {row.quantity}
                  </Typography>
                  <Box>
                    <IconButton sx={{fontSize:'1.5rem', color:'white',py: '0rem' }} 
                    onClick={()=>dispatch(increaseCartItemQuantity(row.productId))}
                    >
                      +
                    </IconButton>
                  </Box>
              </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={0.5} xs={0.5}>
            <IconButton sx={{mt:isSmallScreen ? 0 : -1.5}}
                onClick={() => dispatch(removeCartItem(row.productId))}
                >
                <IoMdClose  style={{fontSize: isSmallScreen ? "1rem": isMediumScreen ?'1.2rem' :'1.3rem', 
                  p:2, backgroundColor:'#ffffff49', borderRadius:'100px', color:'white', }}/>
                </IconButton>
            </Grid>
          </Grid>
         </Box>
       ))} 
       </Box>
      
{/* =====================================SHIP CARD==================================== */}
  <Box sx={{
    position:'absolute', 
    width:'100%', 
    p:3, 
    boxSizing:'border-box',
    left:0,
    bottom:0, 
  }}>
  <Box sx={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center',


  }}>
       <Grid container>
    {shipIconData?.map((row,index)=>(
       <Grid item lg={3} md={3} sm={6} xs={6} key={index}>
       <Box key={index} sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <img src={row.img} alt="" style={{width:isSmallScreen ? '2.2rem': isMediumScreen ? '3rem':'3rem',
         marginBottom:'1rem'}} />
      <Typography sx={{fontSize:isSmallScreen ? '0.7rem':'0.9rem', fontWeight:500, color:'white'}}>
      {row.title}
      </Typography>
      <Typography sx={{fontSize:isSmallScreen ? '0.7rem':'0.9rem', fontWeight:500, color:'lightgray', textAlign:'center'}}>
      {row.subtitle}
      </Typography>
    </Box>
       </Grid>
      ))}
       </Grid>
   
  </Box>

  <Divider sx={{backgroundColor:'lightgray', width:'100%', height:'0.1px', color:'lightgray', 
    my:isSmallScreen ? 1: 3}}/>

  <Typography sx={{fontSize:isSmallScreen ? '1.1rem':'1.3rem',
     fontWeight:500, color:'white'}}>
      Subtotal: <span style={{color:'#f1b815'}}>${(totalAmount)?.toFixed(2)}</span>
      </Typography>
      <Typography sx={{fontSize:isSmallScreen ? '0.9rem':'1rem',
     fontWeight:500, color:'white', marginBottom:'1rem'}}>
     Taxes and shipping calculated at checkout
      </Typography>
      <Box sx={{display:'flex', gap:2}}>
      <CustomButton
              border={"1px solid #212121"}
              backgroundColor={"#212121"}
              color={"white"}
              hbackgroundColor={"transparent"}
              hcolor={"white"}
              name="Continue Shopping"
              fontSize='0.9rem'
               sfontSize='0.8rem'
              p="0.3rem 1rem"
              sp="0.3rem 0.6rem"
              display='none'
            />
            <CustomButton
              border={"1px solid #51a2db"}
              backgroundColor={theme.palette.primary.main}
              color={"white"}
              hbackgroundColor={"transparent"}
              hcolor={"white"}
              name="View Cart"
              fontSize='0.9rem'
              sfontSize='0.8rem'
             p="0.3rem 1rem"
             sp="0.3rem 0.6rem"
             display='none'
             path={'/shopping-cart-details'}
            />
      </Box>
  </Box>

          </Box>
    </> 
  )
}

export default ShoppingCart