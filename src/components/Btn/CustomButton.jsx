import { Box, Typography, useTheme, useMediaQuery, Button as MuiButton, IconButton } from '@mui/material';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const CustomButton = ({border, backgroundColor, color, hcolor, hbackgroundColor, name, width,
    sfontSize,fontSize, p, sp, display,arrow, bb, br, pb, path
}) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <MuiButton 
            onClick={()=>navigate(path)}
            sx={{
                width:`${width}`,
                textTransform: 'none',
                backgroundColor: `${backgroundColor}`,
                padding: isSmallScreen ? `${sp || '0.3rem 1rem'}` : `${p || '0.5rem 2rem'}`,
                paddingBottom:`${pb}`,

            
                borderRadius:`${br || '50px'}`,
                display: 'flex',
                alignItems: 'center', 
                border: `${border}`,
                borderBottom:`${bb}`,
                
                '&:hover':{
                    backgroundColor: `${hbackgroundColor}`,
                 color:'white'
                },
                '&:hover .icon, &:hover .text': {
                    color: `${hcolor}`,
}
            }}>
                <Typography className='text' sx={{
                    color: `${color}`,
                    fontSize:  isSmallScreen ? `${sfontSize || '0.9rem'}` : `${fontSize || '1rem'}`,
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    marginRight: '0.5rem'
                }}>
                    {name}
                </Typography>
                <IconButton  className='icon' sx={{fontSize:isSmallScreen? '1.1rem': '1.4rem',
                display:isSmallScreen ? `${display}`:`${arrow || 'block'}`,
                p:`${p}`,
                     color: `${color}`, backgroundColor:'transparent'}}>
                <FiArrowUpRight style={{backgroundColor:'transparent'}} />
                </IconButton>
            </MuiButton>
        </>
    );
}

export default CustomButton;
