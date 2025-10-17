// src/components/Navbar.jsx
import React, { useState, useCallback, useContext, createContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import NinjaIcon from '../assets/icon.jpeg';
import { useAuth } from '../components/auth';

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

const BrandIcon = () => (
  <img src={NinjaIcon} alt="Coding Ninjas Icon" className="w-9 h-9 rounded-full object-cover mr-3 bg-white" style={{ border: '2px solid #343537' }} />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { isAuthed, logout } = useAuth();
  const reduce = useReducedMotion();

  const toggleMenu = useCallback(() => setIsOpen(o => !o), []);
  const linkClass = ({ isActive }) => (isActive ? 'text-primary font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-primary transition');
  const menuVariants = { hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } }, visible: { opacity: 1, height: 'auto', transition: { duration: 0.2 } } };

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 select-none">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center font-bold text-[1.6rem] text-[#263147] dark:text-white">
          <img src={NinjaIcon} alt="Coding Ninjas Icon" className="w-9 h-9 rounded-full object-cover mr-3 bg-white" style={{ border: '2px solid #343537' }} />
          <span className="font-bold">Coding Ninjas</span>
        </NavLink>

        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/career-camp" className={linkClass}>Career Camp</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {!isAuthed ? (
            <button onClick={() => navigate('/login')} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
              Login
            </button>
          ) : (
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black dark:bg白 dark:text-gray-900 dark:hover:bg-gray-100">
              Logout
            </button>
          )}

          <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-2 text-gray-700 dark:text-gray-300 hover:text-primary transition">
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-3">
          {!isAuthed ? (
            <button onClick={() => navigate('/login')} className="rounded-md border border-gray-300 dark:border-gray-700 px-2.5 py-1.5 text-xs text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">Login</button>
          ) : (
            <button onClick={handleLogout} className="rounded-md bg-gray-900 px-2.5 py-1.5 text-xs text-white hover:bg-black dark:bg-white dark:text-gray-900">Logout</button>
          )}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">
            {theme === 'light' ? <FaMoon size={22} /> : <FaSun size={22} />}
          </button>
          <button onClick={() => setIsOpen(o => !o)} aria-label={isOpen ? 'Close menu' : 'Open menu'} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div key="mobile-menu" initial="hidden" animate="visible" exit="hidden" variants={{ hidden: { opacity: 0, height: 0 }, visible: { opacity: 1, height: 'auto' } }} className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-3">
            <NavLink onClick={() => setIsOpen(false)} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/courses" className={linkClass}>Courses</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/career-camp" className={linkClass}>Career Camp</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
            {!isAuthed ? (
              <NavLink onClick={() => setIsOpen(false)} to="/login" className="block text-gray-700 dark:text-gray-300 hover:text-primary transition">Login</NavLink>
            ) : (
              <button onClick={() => { setIsOpen(false); handleLogout(); }} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary transition">Logout</button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
