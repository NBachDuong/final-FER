import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is correct
import App from './App'; // Adjust according to your file structure

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' matches your HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
