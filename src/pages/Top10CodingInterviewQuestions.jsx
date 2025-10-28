import React from 'react';
import { motion } from 'framer-motion';
import codingQuestions from '../assets/OIP.webp';

const questions = [
  {
    id: 1,
    title: '1. What is the difference between var, let, and const?',
    desc: 'var is function-scoped, let and const are block-scoped. const cannot be reassigned.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
  },
  {
    id: 2,
    title: '2. Explain the concept of closures in JavaScript.',
    desc: 'A closure allows a function to access variables from its parent scope even after that scope has closed.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  },
  {
    id: 3,
    title: '3. What is a promise?',
    desc: 'Promises handle asynchronous operations and have three states: pending, fulfilled, or rejected.',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800',
  },
  {
    id: 4,
    title: '4. What is a REST API?',
    desc: 'A REST API uses HTTP requests to perform CRUD operations — Create, Read, Update, and Delete.',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800',
  },
  {
    id: 5,
    title: '5. What is the difference between == and ===?',
    desc: '== checks for value equality after type conversion, while === checks for both value and type.',
    image: 'https://images.unsplash.com/photo-1600267165459-fc9ec94c9b8e?w=800',
  },
];

const Top10CodingInterviewQuestions = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={codingQuestions}
        alt="Coding Interview Questions"
        className="w-full h-64 object-cover rounded-2xl mb-10 shadow-lg"
      />
      <h1 className="text-3xl font-bold text-primary dark:text-secondary mb-6">
        Top 10 Coding Interview Questions
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Here are some of the most frequently asked coding interview questions every developer should prepare for.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {questions.map((q) => (
          <motion.div
            key={q.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img src={q.image} alt={q.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-2">
                {q.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{q.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Top10CodingInterviewQuestions;
