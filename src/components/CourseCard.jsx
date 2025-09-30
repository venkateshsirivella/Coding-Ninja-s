import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform"
    >
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary dark:text-secondary">{course.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{course.description}</p>
      </div>
    </motion.div>
  );
};

export default CourseCard;
