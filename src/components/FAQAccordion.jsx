import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800 text-left font-medium text-gray-800 dark:text-gray-300"
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
