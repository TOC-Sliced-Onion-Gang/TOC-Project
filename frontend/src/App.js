import React, { useEffect, useState } from 'react';
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

// Define team profile images (mock data for profiles)
const teamProfiles = [
  { id: 1, image: 'https://img2.pic.in.th/pic/315988909_1282333705674331_9115844950659140267_n.jpg', name: 'Member 1' },
  { id: 2, image: 'https://img5.pic.in.th/file/secure-sv1/Neosepien.jpg', name: 'Member 2' },
  { id: 3, image: 'https://avatars.githubusercontent.com/u/107759970?v=4', name: 'Member 3' },
  { id: 4, image: 'https://img5.pic.in.th/file/secure-sv1/415044131_890083446046210_1882306361796690282_n.jpg', name: 'Member 4' },
  { id: 5, image: 'https://img2.pic.in.th/pic/322601440_1338586560308758_5294750078237432784_n.jpg', name: 'Member 5' },
  { id: 6, image: 'https://img2.pic.in.th/pic/320638780_1194149611211528_6331848456637020179_n.jpg', name: 'Member 6' },
  { id: 7, image: 'https://img5.pic.in.th/file/secure-sv1/317845266_3336517379930572_8550486041413080322_n.jpg', name: 'Member 7' },
  { id: 8, image: 'https://img5.pic.in.th/file/secure-sv1/442439867_2234784990197492_200083161153342259_n.jpg', name: 'Member 8' },
  { id: 9, image: 'https://img2.pic.in.th/pic/341172284_993013272068249_4304779115184321753_n.jpg', name: 'Member 9' },
  { id: 10, image: 'https://avatars.githubusercontent.com/u/111265617?v=4', name: 'Member 10' },
];

// Define the Library interface
// const libraries = [
//   { id: 1, name: 'Library 1', author: 'Author 1', action: 'what lib to do 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
//   { id 2, name: 'Library 2', author: 'Author 2', action: 'what lib to do 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
//   { id: 3, name: 'Library 3', author: 'Author 3', action: 'what lib to do 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
//   { id: 4, name: 'Library 4', author: 'Author 4', action: 'what lib to do 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
//   { id: 5, name: 'Library 5', author: 'Author 5', action: 'what lib to do 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
//   { id: 6, name: 'Library 6', author: 'Author 6', action: 'what lib to do 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
// ];


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
          <Container maxWidth={false} disableGutters className="App" style={{ paddingTop: '100px', paddingBottom: '900px', width: '100%', marginLeft: '-2px' }}>
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
                  {``}
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
        {/* <Route path="/library" element={<Library />} /> */}
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
// import React from 'react';
// import PolarChart from './PolarChart.tsx'; // Adjust the path based on your file structure

// const App = () => {
//   return (
//     <div>
//       <h1>My Charts</h1>
//       <PolarChart />
//     </div>
//   );
// };


