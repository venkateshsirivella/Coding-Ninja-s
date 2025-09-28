import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    isActive ? 'text-primary font-semibold' : 'text-gray-700 dark:text-gray-300';

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">CodingNinjasClone</div>
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/career-camp" className={linkClass}>Career Camp</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
          <NavLink onClick={toggleMenu} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={toggleMenu} to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink onClick={toggleMenu} to="/career-camp" className={linkClass}>Career Camp</NavLink>
          <NavLink onClick={toggleMenu} to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink onClick={toggleMenu} to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
