import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

<<<<<<< HEAD
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
=======
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(`${process.env.REACT_APP_BACKEND_URL}`);
root.render(
  <React.StrictMode>
    console.log(${process.env.REACT_APP_BACKEND_URL});
    
    <App />
  </React.StrictMode>
);
>>>>>>> 28dfe82e2bf57531455a06f8fe3b5643c7d180e9

root.render(<App />);