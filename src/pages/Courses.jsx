import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard.jsx';
import frontpic from '../assets/front.png'
import dsa from '../assets/DSA.webp'
import ml from '../assets/ML.jpg'

const dummyCourses = [
  {
    id: 1,
    title: 'Frontend Development',
    category: 'Development',
    description: 'Learn modern frontend frameworks and UI design',
    image: frontpic,
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    category: 'Computer Science',
    description: 'Master data structures and problem-solving skills',
    image: dsa,
  },
  {
    id: 3,
    title: 'Machine Learning',
    category: 'AI',
    description: 'Intro to ML models, data processing',
    image: ml,
  },
];

const categories = ['All', 'Development', 'Computer Science', 'AI'];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses =
    selectedCategory === 'All'
      ? dummyCourses
      : dummyCourses.filter((course) => course.category === selectedCategory);

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6 dark:text-secondary">Courses</h2>
      <div className="mb-8 flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
