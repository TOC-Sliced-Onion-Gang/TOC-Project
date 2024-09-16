import React from 'react';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from './Input/Searchbar.tsx';
import { styled } from '@mui/material/styles';

const ResponsiveImage = styled('img')(({ theme }) => ({
  height: '75px',
  width: 'auto',
  maxWidth: '100%',
  maxHeight: '75px',
  [theme.breakpoints.down('sm')]: {
    maxHeight: '100%',
    height: '100%',
  },
}));


  const Header: React.FC = () => {
    return (
      <AppBar
        color="inherit"
        position="fixed"
        className="bg-gray-100 backdrop-blur-sm bg-opacity-70 border-b-1 shadow-none"
        style={{ 
          boxShadow: 'none', border: 'none', 
          display: 'flex',
          justifyContent: 'center',   // จัดให้อยู่ตรงกลางแนวนอน
          alignItems: 'center',   
          height: '110px' }}  // กำหนดความสูงเป็น 120px
      >
        <Container maxWidth={false} sx={{ maxWidth: '2500px' }}>
          <Toolbar>
            <Typography variant="h5" noWrap component="div">
             <ResponsiveImage
                src="../icons/pythonlib-icon.jpg" 
                alt="Python Library Logo"              
              /> 
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <SearchBar /> 
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default Header;