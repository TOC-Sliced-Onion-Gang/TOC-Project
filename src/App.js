import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Header from './components/Header.tsx';
import Carousel from './components/Card/Carousel.tsx';

// Define the Library interface
const libraries = [
  { name: 'Library 1', author: 'Author 1', description: 'This is library 1' },
  { name: 'Library 2', author: 'Author 2', description: 'This is library 2' },
  { name: 'Library 3', author: 'Author 3', description: 'This is library 3' },
];

const App = () => {
  return (
    <>
      {/* Add the header at the top */}
      <Header /> 
      <Container maxWidth="xl" className="App" style={{ paddingTop: '100px' }}>
        <Paper>
        {/* Add the Carousel component here */}
         <div className="carousel-section">
           <Typography variant="h5" component="h2" gutterBottom>
             Find Your Suitable Library here!!
           </Typography>
           <Carousel libraries={libraries} />
         </div>

          <img src={logo} className="App-logo" alt="logo" />

          <Typography variant="h4" component="h1" gutterBottom>
            Create React App + Material-UI
          </Typography>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button variant="contained" color="secondary">
            Secondary Button
          </Button>
        </Paper>
        

      </Container>
    </>
  );
}

export default App;