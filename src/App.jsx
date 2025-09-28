import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

// Lazy loaded pages for performance
const Home = lazy(() => import('./pages/Home.jsx'));
const Courses = lazy(() => import('./pages/Courses.jsx'));
const CareerCamp = lazy(() => import('./pages/CareerCamp.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-backgroundLight dark:bg-backgroundDark transition-colors duration-500">
        <Navbar />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/career-camp" element={<CareerCamp />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
