import React, { useState } from 'react';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub Icon
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

// Styled components for search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px', // More rounded corners for a modern look
  backgroundColor: '#f6f1fb',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  width: '100%',
  maxWidth: '600px',
  transition: 'all 0.3s ease', // Smooth transitions for hover effects
  '&:hover': {
    backgroundColor: alpha('#d3bdf0', 0.6), // Soft purple on hover
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)', // Slight shadow on hover
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#6b4ba7', // Match the icon color with the theme
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#333', // Darker input text for better contrast
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '16px', // Slightly larger font size for better readability
    color: '#6b4ba7', // Add a slight purple hue to the input text
  },
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Navigate to the Library component and pass the search term via state
      navigate('/library', { state: { search: searchTerm } });
    }
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      p={2}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon fontSize="large" /> {/* Larger icon for a more prominent search bar */}
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Python Library"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Handle input change
        />
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: '#6b4ba7', 
            color: 'white',
            borderRadius: '25px', // Rounder button for a cleaner look
            marginLeft: '10px',
            padding: '10px 24px', // Increased padding for a larger button
            fontSize: '14px',
            fontWeight: 'bold',
            textTransform: 'none', // Avoid uppercase
            transition: 'all 0.3s ease', // Smooth transition on hover
            '&:hover': {
              backgroundColor: '#543290', // Darken button on hover
              boxShadow: '0 4px 12px rgba(107, 75, 167, 0.4)', // Add a shadow on hover for depth
            }
          }}
          onClick={handleSearch} // Handle the button click event
        >
          GO
        </Button>
      </Search>
    </Box>
  );
};

export default SearchBar;