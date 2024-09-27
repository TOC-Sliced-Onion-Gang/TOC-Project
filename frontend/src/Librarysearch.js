import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Typography from '@mui/material/Typography';

const Library = () => {
  const location = useLocation();
  const searchTerm = location.state?.search || ''; // Get the search term if passed

  return (
    <div>
      <h2>Library Page</h2>
      <Typography variant="h5" component="h2" gutterBottom>
                <div className='background-padding-library'>
                  Find Your Suitable Library here!!
                </div>
              </Typography>
      {searchTerm ? (
        <p>Search term: {searchTerm}</p>
      ) : (
        <p>No search term provided</p>
      )}
    </div>
  );
};

export default Library;
