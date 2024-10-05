import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from './components/Header.tsx';
import Carousel from './components/Card/Carousel.tsx';

import './components/CSS/Functionsection.css';
import './components/CSS/DividerTeamgrid.css';
import Library from './Librarysearch.js';

// Define team profile images (mock data for profiles)
const teamProfiles = [
  { id: 1, image: 'https://img2.pic.in.th/pic/315988909_1282333705674331_9115844950659140267_n.jpg', name: 'BLUE' },
  { id: 2, image: 'https://img5.pic.in.th/file/secure-sv1/Neosepien.jpg', name: 'SHOGUN' },
  { id: 3, image: 'https://avatars.githubusercontent.com/u/107759970?v=4', name: 'JAY' },
  { id: 4, image: 'https://img5.pic.in.th/file/secure-sv1/415044131_890083446046210_1882306361796690282_n.jpg', name: 'BEST' },
  { id: 5, image: 'https://img2.pic.in.th/pic/322601440_1338586560308758_5294750078237432784_n.jpg', name: 'INK' },
  { id: 6, image: 'https://img2.pic.in.th/pic/320638780_1194149611211528_6331848456637020179_n.jpg', name: 'TUNG' },
  { id: 7, image: 'https://img5.pic.in.th/file/secure-sv1/317845266_3336517379930572_8550486041413080322_n.jpg', name: 'JIWA' },
  { id: 8, image: 'https://img5.pic.in.th/file/secure-sv1/442439867_2234784990197492_200083161153342259_n.jpg', name: 'FERM' },
  { id: 9, image: 'https://img2.pic.in.th/pic/341172284_993013272068249_4304779115184321753_n.jpg', name: 'PAUL' },
  { id: 10, image: 'https://avatars.githubusercontent.com/u/111265617?v=4', name: 'NAMNING' },
];

const App = () => {
  const [libraries, setLibraries] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/random`)
    .then((response) => response.json())
    .then((data) => {
      setLibraries(data); 
      console.log(libraries);
      console.log(data);
    })
    .catch((error) => console.error('Error fetching data', error));
  }, [],);

  return (
    <Router> {/* Wrap your app in the Router */}
      <Header /> 
      <Routes>
        {/* Define the route for the home page */}
        <Route 
          path="/" 
          element={
          <Container maxWidth={false} disableGutters className="App" style={{ paddingTop: '100px', paddingBottom: '100px', width: '100%', marginLeft: '-2px' }}>
              {libraries ? (
                <div>
                  <p>Data fetched successfully</p>
                  <ul>

                  </ul>
                </div>
              ) : (
                <p>Loading...</p>
              )}
              <div className="carousel-section">
                {libraries ? (
                  <Carousel libraries={libraries} />
                ) : (
                  <p>Carousel Loading...</p>
                )}
              </div>
              <Typography variant="h5" component="h2" gutterBottom style={{paddingTop:"10%"}}>
                <div className="centered-container">
                  <div className="background-suitable">
                    <div className="find-library-heading">
                      Find Your Suitable Library Here!
                    </div>
                    <div className="find-library-subtext">
                      Discover the perfect library tailored to your needs. Whether you're looking for a specific author, topic, or action, our search function will help you find it effortlessly.
                    </div>
                  </div>
                </div>
              </Typography>

              {/* Team Profiles Section */}
              {/* Team Profiles Section */}
<section className="team-section">
  <Typography 
    textAlign="center" 
    margin="40px 0" 
    variant="h4" 
    component="h3" 
    gutterBottom
    className="team-heading"
  >
    Meet Our Team
  </Typography>
  <div className="team-grid">
    {teamProfiles.map((profile) => (
      <div key={profile.id} className="team-member">
        <img src={profile.image} alt={profile.name} className="team-avatar" />
        <Typography variant="body1" className="team-member-name">
          {profile.name}
        </Typography>
      </div>
    ))}
  </div>
</section>
              
            </Container>
          } 
        />
        {/* Define the route for the /library page */}
        <Route path="/library"
          element={
            libraries ? (
          <Library />
            ) : (
              <p>Loading...</p>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;