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

// Define team profile images (mock data for profiles)
const teamProfiles = [
  { id: 1, image: 'https://scontent.fbkk34-1.fna.fbcdn.net/v/t39.30808-6/315988909_1282333705674331_9115844950659140267_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGdRVAvyCC6sfMVrTa0CO7FbvBelBLJ0fpu8F6UEsnR-st1vDK7Ca6cCIvd9gZbUpt3i-4msMQkfkxeH_-woW7w&_nc_ohc=RgMuZ8VtPeMQ7kNvgFbR_9G&_nc_zt=23&_nc_ht=scontent.fbkk34-1.fna&_nc_gid=AZET0Br_xCm7RbZ2LLMmQJt&oh=00_AYB6y6OG4j4YoZqWQrrVpH5z9m--ENqEgo4W6yApXL1zCQ&oe=66F9F641', name: 'Member 1' },
  { id: 2, image: 'https://img5.pic.in.th/file/secure-sv1/Neosepien.jpg', name: 'Member 2' },
  { id: 3, image: 'https://avatars.githubusercontent.com/u/107759970?v=4', name: 'Member 3' },
  { id: 4, image: 'https://scontent.fbkk34-2.fna.fbcdn.net/v/t39.30808-1/415044131_890083446046210_1882306361796690282_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGs6UDIfABvgcyppGqiua4xTHdIe_17rvhMd0h7_Xuu-MsaKL72GH_KtfDTLhze0cfJxyY40lOIQuEPcjR_jx1n&_nc_ohc=kNEIbhs4oxgQ7kNvgEKv7Ye&_nc_ht=scontent.fbkk34-2.fna&_nc_gid=AKT6jkjtrWuW7lH2wt24-6R&oh=00_AYCksaheOLmz8y2mkKHiCQLLCfJpT77YVZc2BkIAmrgeuw&oe=66FA0185', name: 'Member 4' },
  { id: 5, image: 'https://scontent.fbkk34-1.fna.fbcdn.net/v/t39.30808-6/322601440_1338586560308758_5294750078237432784_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHmP88NDkA-cJ_MIhniucDbpebreesVRMml5ut56xVEyUqL6GZTDZgyV3DjzJFb6p17Rsse47V6obePghvIESpU&_nc_ohc=bdG4VbpebkgQ7kNvgEXrV-o&_nc_zt=23&_nc_ht=scontent.fbkk34-1.fna&_nc_gid=ADaMGevSuMEGs9LlgwS_GpX&oh=00_AYCTkVt8PXsEyRbYgccHKgcagsWi8h6Ec2jry3h5RA8OLw&oe=66FA172E', name: 'Member 5' },
  { id: 6, image: 'https://scontent.fbkk34-2.fna.fbcdn.net/v/t39.30808-1/320638780_1194149611211528_6331848456637020179_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFNYu609IpgjXSSWd80ECogHeBAuJBUa-8d4EC4kFRr7yVl7RmkwwzZY2KlqauZw_s0M2AMgbKCEJxHnjYI5yWI&_nc_ohc=4EPlRc7FmU8Q7kNvgF_y5kX&_nc_ht=scontent.fbkk34-2.fna&_nc_gid=AQOZK0lldM0AxJZesfywT15&oh=00_AYDJFqq5NCRYDLgaIu7dYtY5No4ySGkCDvIrHsmS0qmKAw&oe=66FA11AD', name: 'Member 6' },
  { id: 7, image: 'https://scontent.fbkk34-1.fna.fbcdn.net/v/t39.30808-1/317845266_3336517379930572_8550486041413080322_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeG8-mygU2mj-0j91Yqm7Vnsv9FCnOUVuDO_0UKc5RW4M-y_HH64ca3bxIUDWlNTuDRyDS6cxZVM_xV2XDiS4di1&_nc_ohc=-OpYaxVP104Q7kNvgEBsBm_&_nc_ht=scontent.fbkk34-1.fna&oh=00_AYAvKg07Kawxo3JPd3K37p9huZ_Ny4D22nfRZXBs1pVFyw&oe=66FA2246', name: 'Member 7' },
  { id: 8, image: 'https://img5.pic.in.th/file/secure-sv1/412397301_1022718042294535_2337732950295927240_n.jpg', name: 'Member 8' },
  { id: 9, image: 'https://scontent.fbkk34-2.fna.fbcdn.net/v/t39.30808-6/341172284_993013272068249_4304779115184321753_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF-NyIxzVUJjyI1y_Hrl3I4k7O1B7uBAHSTs7UHu4EAdBzRQ12R9XEx5liHV-yw4ENq5r459z60ENA831B0oM0Y&_nc_ohc=97M981x8PVoQ7kNvgF5pOC3&_nc_zt=23&_nc_ht=scontent.fbkk34-2.fna&_nc_gid=AtLT1KsOTx2GxypIWHUTqHr&oh=00_AYB2HmVfbRGOsyMHMfiTlz4JO9QeLVqpunJS24Io5TIhFA&oe=66FA26A2', name: 'Member 9' },
  { id: 10, image: 'https://avatars.githubusercontent.com/u/111265617?v=4', name: 'Member 10' },
];

// Define the Library interface
const libraries = [
  { id: 1, name: 'Library 1', author: 'Author 1', action: 'what lib to do 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { id: 2, name: 'Library 2', author: 'Author 2', action: 'what lib to do 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { id: 3, name: 'Library 3', author: 'Author 3', action: 'what lib to do 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { id: 4, name: 'Library 4', author: 'Author 4', action: 'what lib to do 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { id: 5, name: 'Library 5', author: 'Author 5', action: 'what lib to do 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
  { id: 6, name: 'Library 6', author: 'Author 6', action: 'what lib to do 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio libero quaerat sequi minima laudantium exercitationem ut molestias culpa repudiandae magni' },
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
        <Route path="/library" element={<Library libraries={libraries} />} />
      </Routes>
    </Router>
  );
}

export default App;
