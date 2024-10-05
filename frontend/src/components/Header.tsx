import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from './Input/Searchbar.tsx';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub Icon
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

const CanvaIcon = styled('img')({
  height: '24px',
  width: '24px',
  cursor: 'pointer',
  marginLeft: '10px',
});

const Header: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'http://127.0.0.1:3000/';
  };

  return (
    <AppBar
      color="inherit"
      position="fixed"
      className="bg-gray-100 backdrop-blur-sm bg-opacity-70 border-b-1 shadow-none"
      style={{ 
        boxShadow: 'none', 
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110px' // Adjust header height as needed
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '2500px' }}>
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            <ResponsiveImage
              src="../icons/pythonlib-icon.jpg" 
              alt="Python Library Logo"        
              onClick={handleClick} // Click event to redirect to http://localhost:3000/ 
              style={{ cursor: 'pointer' }}
            /> 
          </Typography>

          {/* Add GitHub Icon Button to the left of the search bar */}
          <IconButton
            color="inherit"
            aria-label="GitHub Repository"
            href="https://github.com/TOC-Sliced-Onion-Gang/TOC-Project" // Add your GitHub repository link here
            target="_blank"
            rel="noopener noreferrer" // Security for external links
            sx={{ marginLeft: 2 }} // Adjust margin if necessary
          >
            <GitHubIcon sx={{ fontSize: 30 }} /> {/* Adjust icon size */}
          </IconButton>

          

          <Box sx={{ flexGrow: 1 }} />
          <SearchBar /> {/* Search bar component */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;