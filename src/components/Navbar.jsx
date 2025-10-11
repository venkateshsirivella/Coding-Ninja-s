import React, { useState, useCallback, useContext, createContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import your image here
import NinjaIcon from '../assets/icon.jpeg'; // <-- Replace with your actual image path

// Theme context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Brand Image as a circle avatar
const BrandIcon = () => (
  <img
    src={NinjaIcon}
    alt="Coding Ninjas Icon"
    className="w-9 h-9 rounded-full object-cover mr-3 bg-white"
    style={{ border: '2px solid #343537' }}
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = useCallback(() => setIsOpen(open => !open), []);
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-primary font-semibold'
      : 'text-gray-700 dark:text-gray-300 hover:text-primary transition';

  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 select-none">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center font-bold text-[1.6rem] text-[#263147] dark:text-white">
          <BrandIcon />
          <span className="font-bold">Coding Ninjas</span>
        </NavLink>
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/career-camp" className={linkClass}>Career Camp</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-4 text-gray-700 dark:text-gray-300 hover:text-primary transition"
          >
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
          >
            {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
          </button>
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-3"
          >
            <NavLink onClick={toggleMenu} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={toggleMenu} to="/courses" className={linkClass}>Courses</NavLink>
            <NavLink onClick={toggleMenu} to="/career-camp" className={linkClass}>Career Camp</NavLink>
            <NavLink onClick={toggleMenu} to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink onClick={toggleMenu} to="/contact" className={linkClass}>Contact</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
