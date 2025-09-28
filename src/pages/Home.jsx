import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary dark:text-secondary">
          Learn Coding with Experts
        </h1>
        <p className="mb-10 max-w-xl mx-auto text-gray-600 dark:text-gray-300">
          Join thousands of learners mastering coding skills through online courses and career camps.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
          Explore Courses
        </button>
      </section>

      {/* Additional homepage sections like highlights, testimonials can be added here */}
    </motion.div>
  );
};

export default Home;
