import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from './components/Header.tsx';
import Carousel from './components/Card/Carousel.tsx';
import ProgressBarWithDots from './components/ProgressBar/Progressbarwithdot.tsx';
import './components/CSS/Functionsection.css';
import './components/CSS/DividerTeamgrid.css';
import Library from './Librarysearch.js';
import SearchBar from './components/Input/Searchbar.tsx'; // Import the SearchBar component

// Define team profile images (mock data for profiles)
const teamProfiles = [
  { id: 1, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 1' },
  { id: 2, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 2' },
  { id: 3, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 3' },
  { id: 4, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 4' },
  { id: 5, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 5' },
  { id: 6, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 6' },
  { id: 7, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 7' },
  { id: 8, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 8' },
  { id: 9, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 9' },
  { id: 10, image: 'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png', name: 'Member 10' },
];

// Define the Library interface
const libraries = [
  { name: 'Library 1', author: 'Author 1', libname: 'This is library 1', action: 'what lib to do 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { name: 'Library 2', author: 'Author 2', libname: 'This is library 2', action: 'what lib to do 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { name: 'Library 3', author: 'Author 3', libname: 'This is library 3', action: 'what lib to do 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { name: 'Library 4', author: 'Author 4', libname: 'This is library 4', action: 'what lib to do 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { name: 'Library 5', author: 'Author 5', libname: 'This is library 5', action: 'what lib to do 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { name: 'Library 6', author: 'Author 6', libname: 'This is library 6', action: 'what lib to do 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
];

const App = () => {
  return (
    <Router> {/* Wrap your app in the Router */}
      <Header /> 
      <Routes>
        {/* Define the route for the home page */}
        <Route 
          path="/" 
          element={
            <Container maxWidth={false} disableGutters className="App" style={{ paddingTop: '100px', paddingBottom: '900px', width: '100%', marginLeft: '-2px' }}>
              <div className="carousel-section">
                <Carousel libraries={libraries} />
              </div>
              <ProgressBarWithDots />
              <Typography variant="h5" component="h2" gutterBottom>
                <div className='background-suitable'>
                  Find Your Suitable Library here!!
                </div>
              </Typography>

              {/* Section with shadowed text and image */}
              <section className="shadow-section">
                <Typography variant="h4" component="h2" className="shadow-text" gutterBottom>
                  How our search function works?
                </Typography>

                <div className="image-section">
                  <img src="../icons/function-works.jpg" alt="How our search works" className="section-image" />
                </div>

                <Typography marginTop="100px" marginBottom="200px" variant="body1" component="p" className="section-description">
                  {`Show how search function works brabra`}
                </Typography>
              </section>

              {/* Divider Section */}
              <hr className="section-divider" />

              {/* Team Profiles Section */}
              <section className="team-section">
                <Typography textAlign="left" marginLeft="100px" variant="h4" component="h3" gutterBottom>
                  Teams
                </Typography>
                <div className="team-grid">
                  {teamProfiles.map((profile) => (
                    <div key={profile.id} className="team-member">
                      <img src={profile.image} alt={profile.name} className="team-avatar" />
                    </div>
                  ))}
                </div>
              </section>
            </Container>
          } 
        />
        {/* Define the route for the /library page */}
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

export default function App() {

  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/member`)
      .then(res => res.json()) // Correct arrow function syntaxx
      .then(data => {
        setData(data);
        console.log(data);
      })
  }, []); // Added an empty dependency array to prevent infinite re-rendering

  return (
    <Container maxWidth="sm">
      <div> 
        {typeof data.members === 'undefined' ? ( // Removed the misplaced curly brace
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
      </div>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example
        </Typography>
        <Copyright />
        <ButtonUsage />
      </Box>
    </Container>
  );
} 
>>>>>>> 28dfe82e2bf57531455a06f8fe3b5643c7d180e9
