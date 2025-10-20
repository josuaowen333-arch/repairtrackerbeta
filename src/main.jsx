import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Bootstrap styles and JS (JS is needed for components like modals, dropdowns)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);