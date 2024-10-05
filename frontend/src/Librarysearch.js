import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Container from '@mui/material/Container';
import FolderIcon from '@mui/icons-material/Folder';
import DoneIcon from '@mui/icons-material/Done';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './components/CSS/LibraryContainer.css';

const Library = ( ) => {
  const location = useLocation();
  const searchTerm = location.state?.search || ''; 
  const [activeItem, setActiveItem] = useState('all'); 
  const [libraries, setLibraries] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/search?q=' + encodeURIComponent(searchTerm))
    .then((response) => response.json())
    .then((data) => {
      setLibraries(data); 
      console.log(data);  
    })
    .catch((error) => console.error('Error fetching data', error));
  }, [searchTerm]);  


  const handleItemClick = (item) => {
    setActiveItem(item); 
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
          <h4 className='result-header'>Search results</h4>
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
                All ({ libraries ? libraries.length : 0})
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
          {libraries ? (
            <div className="library-list">
              {libraries.map((library) => (
                <div key={library.id} className="library-card">
                  <div className="card-image">
                      {/* Replace with your images */}
                      <img src={"../icons/lib_icons.png"} alt={library.name} />  
                  </div>
                  <div className="card-content">
                    <h2>{library.name}</h2>
                    <p>{library.description}</p>
                    <br />
                    <p><strong>Author:</strong> {library.author}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Search Loading...</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Library;
