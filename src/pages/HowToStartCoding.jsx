import React from 'react';
import { motion } from 'framer-motion';

const tips = [
  {
    id: 1,
    title: 'Start Small and Be Consistent',
    desc: 'Begin with simple programs like calculators or number games. Focus on building consistency, not complexity.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
  },
  {
    id: 2,
    title: 'Choose the Right Language',
    desc: 'Python and JavaScript are great for beginners — readable, popular, and versatile for any career path.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800',
  },
  {
    id: 3,
    title: 'Understand the Fundamentals',
    desc: 'Grasp variables, loops, functions, and conditionals first. These are the foundation of every programming language.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    id: 4,
    title: 'Build Projects Early',
    desc: 'Apply what you learn by creating small projects. It helps you understand real-world problem-solving.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800',
  },
];

const HowToStartCoding = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-bold text-primary dark:text-secondary mb-6">
        How to Start Coding
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Starting your programming journey? Here are some simple, practical tips that will make your learning more effective.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {tips.map((tip) => (
          <motion.div
            key={tip.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img src={tip.image} alt={tip.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{tip.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HowToStartCoding;
