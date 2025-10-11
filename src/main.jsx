import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS import
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import { ThemeProvider } from './components/Navbar'; // keep your ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
