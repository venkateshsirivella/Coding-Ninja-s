import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-2xl"
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary dark:text-secondary">
          {course.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          {course.description}
        </p>
        <span className="inline-block mt-3 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>
    </motion.div>
  );
};

export default CourseCard;
