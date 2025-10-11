// src/App.jsx
import React, { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="flex flex-col min-h-screen bg-backgroundLight dark:bg-backgroundDark transition-colors duration-500">
      <Navbar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Outlet /> {/* 👈 where child routes render */}
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
