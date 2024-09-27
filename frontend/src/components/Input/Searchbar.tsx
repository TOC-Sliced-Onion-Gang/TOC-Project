import React, { useState } from 'react';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

// Styled components for search bar
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f6f1fb',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    width: '100%',
    maxWidth: '600px',
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
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
    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Handle input change
        />
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: '#6b4ba7', 
            color: 'white',
            borderRadius: '20px',
            marginLeft: '10px',
            padding: '5px 20px',
            textTransform: 'none', // avoid uppercase
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