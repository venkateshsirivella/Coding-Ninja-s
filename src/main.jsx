import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS import
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import { ThemeProvider } from './components/Navbar'; // keep your ThemeProvider
import { ToastProvider } from './components/Toast';
import { AuthProvider } from './components/auth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
