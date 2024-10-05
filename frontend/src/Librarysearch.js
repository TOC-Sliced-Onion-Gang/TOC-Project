import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import FolderIcon from '@mui/icons-material/Folder';
import './components/CSS/LibraryContainer.css';

const Library = () => {
  const location = useLocation();
  const searchTerm = location.state?.search || '';  // For search-based navigation
  const initialLibraries = location.state?.libraries || null; // Libraries passed via state
  const [activeItem, setActiveItem] = useState('all');
  const [libraries, setLibraries] = useState(initialLibraries); // Initialize with passed libraries
  const [loading, setLoading] = useState(!initialLibraries); // Set loading only if no libraries passed

  useEffect(() => {
    if (!initialLibraries) {
      // Perform search only if no libraries were passed in state
      setLoading(true);
      fetch(`${process.env.REACT_APP_BACKEND_URL}/search?q=` + encodeURIComponent(searchTerm))
        .then((response) => response.json())
        .then((data) => {
          setLibraries(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data', error);
          setLoading(false);
        });
    }
  }, [searchTerm, initialLibraries]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      className="background"
      style={{ paddingTop: '100px', paddingBottom: '900px', width: '100%' }}
    >
      <div>
        <Container maxWidth={false} style={{ marginLeft: '35px', paddingLeft: '1rem' }}>
          <div className="result-header-container">
            <h4 className='result-header'>
              {searchTerm ? `Search Results: "${searchTerm}"` : 'All Libraries'}
            </h4>
          </div>
          <hr className="section-divider" />

          <div className='Categories' style={{ textAlign: 'left', paddingLeft: '1rem' }}>
            <div
              className={`library-categories ${activeItem === 'all' ? 'active' : ''}`}
              onClick={() => handleItemClick('all')}
            >
              <span className='icon-container'>
                <FolderIcon style={{ fontSize: 30 }} />
              </span>
              <span className='text-container'>
                All ({libraries ? libraries.length : 0})
              </span>
            </div>
          </div>

          {loading ? ( // Conditional rendering based on loading state
            <div className="loading-spinner">Loading...</div>
          ) : libraries && libraries.length > 0 ? (
            <div className="library-list">
              {libraries.map((library) => (
                <div key={library.id} className="library-card">
                  <div className="card-image">
                    <div className="letter">
                      {library.name[0]}
                    </div>
                  </div>
                  <div className="card-content">
                    <h2>{library.name}</h2>
                    <p>{library.description}</p>
                    <p><strong>Author:</strong> {library.author}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No libraries found.</p>
          )}
        </Container>
      </div>
    </Container>
  );
};

export default Library;
