import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard.jsx';

// Importing images
import frontpic from '../assets/front.png';
import dsa from '../assets/DSA.webp';
import ml from '../assets/ML.jpg';
import backend from '../assets/back.png';
import reactjs from '../assets/react.jpg';
import python from '../assets/python.webp';
import ai from '../assets/ai.jpg';
import cyber from '../assets/cyber.jpg';
import devops from '../assets/devops.jpg';
import cloud from '../assets/cloud.jpg';
import data from '../assets/datascience.jpg';
import mobile from '../assets/mobile.jpg';

// 🧩 Updated course list with popular topics
const dummyCourses = [
  {
    id: 1,
    title: 'Frontend Development',
    category: 'Development',
    description: 'Learn HTML, CSS, JavaScript, and modern frontend frameworks like React and Vite.',
    image: frontpic,
  },
  {
    id: 2,
    title: 'Backend Development',
    category: 'Development',
    description: 'Master Node.js, Express, and database integration with MySQL & MongoDB.',
    image: backend,
  },
  {
    id: 3,
    title: 'ReactJS Mastery',
    category: 'Development',
    description: 'Dive deep into React.js, hooks, context API, and building full-scale apps.',
    image: reactjs,
  },
  {
    id: 4,
    title: 'Data Structures & Algorithms',
    category: 'Computer Science',
    description: 'Strengthen problem-solving and algorithmic thinking for coding interviews.',
    image: dsa,
  },
  {
    id: 5,
    title: 'Machine Learning',
    category: 'AI',
    description: 'Understand ML models, supervised/unsupervised learning, and data preprocessing.',
    image: ml,
  },
  {
    id: 6,
    title: 'Artificial Intelligence',
    category: 'AI',
    description: 'Explore neural networks, deep learning, and AI-driven applications.',
    image: ai,
  },
  {
    id: 7,
    title: 'Cybersecurity Fundamentals',
    category: 'Security',
    description: 'Learn ethical hacking, penetration testing, and securing web applications.',
    image: cyber,
  },
  {
    id: 8,
    title: 'DevOps Essentials',
    category: 'Cloud & DevOps',
    description: 'Master CI/CD, Docker, Kubernetes, and cloud deployment strategies.',
    image: devops,
  },
  {
    id: 9,
    title: 'Cloud Computing',
    category: 'Cloud & DevOps',
    description: 'Get started with AWS, Azure, and Google Cloud for scalable solutions.',
    image: cloud,
  },
  {
    id: 10,
    title: 'Data Science with Python',
    category: 'Data Science',
    description: 'Analyze data, visualize insights, and build predictive models using Python.',
    image: data,
  },
  {
    id: 11,
    title: 'Python Programming',
    category: 'Programming',
    description: 'From basics to advanced concepts — write clean, efficient Python code.',
    image: python,
  },
  {
    id: 12,
    title: 'Mobile App Development',
    category: 'Development',
    description: 'Create Android & iOS apps using React Native and Flutter frameworks.',
    image: mobile,
  },
];

const categories = [
  'All',
  'Development',
  'Computer Science',
  'AI',
  'Security',
  'Cloud & DevOps',
  'Data Science',
  'Programming',
];

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
      <h2 className="text-3xl font-bold text-primary mb-6 dark:text-secondary">Popular Courses</h2>

      {/* Category Buttons */}
      <div className="mb-8 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary text-white shadow-md scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
