import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 m-2 transition-transform max-w-md mx-auto"
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-primary dark:text-secondary">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        "{testimonial.message}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
