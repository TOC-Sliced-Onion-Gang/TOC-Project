import React, {useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

export default function App() {

  const [data, setData] = useState([{}]);
  
  console.log(`${process.env.REACT_APP_BACKEND_URL}`);

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