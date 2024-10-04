<<<<<<< HEAD
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Container from '@mui/material/Container';
import FolderIcon from '@mui/icons-material/Folder';
import DoneIcon from '@mui/icons-material/Done';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './components/CSS/LibraryContainer.css';

const Library = ({ libraries }) => {
  const location = useLocation();
  const searchTerm = location.state?.search || ''; // Get the search term if passed
  const [activeItem, setActiveItem] = useState('all'); // Default to "all"

  const handleItemClick = (item) => {
    setActiveItem(item); // Update the clicked item
  };
  
  // Filter libraries based on the selected category
  const filteredLibraries = () => {
    if (activeItem === 'official') {
      return libraries.filter((lib) => lib.id === 1 || lib.id === 2); // Show only libraries 1-2
    } else if (activeItem === 'community') {
      return libraries.filter((lib) => lib.id >= 4 && lib.id <= 6); // Show only libraries 4-6
    }
    return libraries; // Show all libraries (1-6) by default
  };

  return (
    <Container 
      maxWidth={false} 
      disableGutters 
      className="App"
      style={{ paddingTop: '100px', paddingBottom: '900px', width: '100%' }}
    >
      <div>
        <Container maxWidth={false} style={{marginLeft: '35px', paddingLeft: '1rem'}}> 
          <h4 className='result-header'> result of search </h4>
          <hr className="section-divider" />
        </Container>

        <div className='Allpage'>
          {/* Left-side: Categories */}
          <div className='Categories' style={{textAlign:'left', paddingLeft: '1rem'}}>
            {/* All category */}
            <div
              className={`library-categories ${activeItem === 'all' ? 'active' : ''}`} 
              onClick={() => handleItemClick('all')}
            >
              <span className='icon-container'>
                <FolderIcon style={{ fontSize: 30 }}/>
              </span>
              <span className='text-container'>
                All ({libraries.length})
              </span>
            </div>

            {/* Official category */}
            <div
              className={`library-categories ${activeItem === 'official' ? 'active' : ''}`}
              onClick={() => handleItemClick('official')}
            >
              <span className='icon-container'>
                <DoneIcon style={{ fontSize: 30 }}/>
              </span>
              <span className='text-container'>
                Official (100)
              </span>
            </div>

            {/* Community category */}
            <div
              className={`library-categories ${activeItem === 'community' ? 'active' : ''}`} 
              onClick={() => handleItemClick('community')}
            >
              <span className='icon-container'>
                <Diversity3Icon style={{ fontSize: 30 }}/>
              </span>
              <span className='text-container'>
                Community (115)
              </span>
              </div>
            <div style={{marginLeft: '35px', textAlign:'left', paddingLeft: '1rem'}}>
              {searchTerm ? (
                <p className='large-text'>Search term: {searchTerm}</p>
              ) : (
                <p className='large-text'>No search term provided</p>
              )}
            </div>
          </div>

          {/* Right-side: Display filtered libraries */}
          <div className="library-list">
            {filteredLibraries().map((library) => (
              <div key={library.id} className="library-card">
                <div className="card-image">
                    {/* <img src={`../images/library${library.id}.jpg`} alt={library.name} />   {id} image */}
                    <img src={"../icons/lib_icons.png" } alt={library.name} />  
                </div>
                <div className="card-content">
                  <h2>{library.name}</h2>
                  <p>{library.description}</p>
                  <br></br>
                  <p><strong>Author:</strong> {library.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Library;
=======
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/ink
>>>>>>> d9d9ec00f3ea6148c3092d1e2ea85570452e394e
