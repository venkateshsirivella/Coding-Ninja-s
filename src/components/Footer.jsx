import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 CodingNinjasClone. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-primary"><FaFacebook size={24} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-primary"><FaTwitter size={24} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary"><FaInstagram size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
