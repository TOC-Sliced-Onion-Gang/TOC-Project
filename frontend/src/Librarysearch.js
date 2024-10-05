import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import FolderIcon from '@mui/icons-material/Folder';
import './components/CSS/LibraryContainer.css';

const Library = () => {
  const location = useLocation();
  const searchTerm = location.state?.search || '';
  const [activeItem, setActiveItem] = useState('all');
  const [libraries, setLibraries] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); 
    fetch('http://localhost:5000/search?q=' + encodeURIComponent(searchTerm))
      .then((response) => response.json())
      .then((data) => {
        setLibraries(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data', error);
        setLoading(false); 
      });
  }, [searchTerm]);

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
              Search Results: {searchTerm ? `"${searchTerm}"` : ''}
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
          ) : libraries ? (
            <div className="library-list">
              {libraries.map((library) => (
                <div key={library.id} className="library-card">
                  <div className="card-image">
                    <img src={"../icons/lib_icons.png"} alt={library.name} />
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