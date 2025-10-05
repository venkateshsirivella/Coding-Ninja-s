import React from 'react';
import { motion } from 'framer-motion';
import st from '../assets/Howst.jpg';
import top10 from '../assets/top10.webp';
import BR from '../assets/Breact.webp';

const blogPosts = [
  {
    id: 1,
    title: 'How to Start Coding',
    summary: 'Beginner tips and resources to learn programming effectively.',
    thumbnail: st,
  },
  {
    id: 2,
    title: 'Top 10 Coding Interview Questions',
    summary: 'Common interview questions and how to answer them.',
    thumbnail: top10,
  },
  {
    id: 3,
    title: 'Benefits of Learning React',
    summary: 'Why React is essential for frontend developers.',
    thumbnail: BR,
  },
];

const Blog = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-2 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6 dark:text-secondary">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
          >
            {/* Increased image height */}
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            {/* Increased padding inside card */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary dark:text-secondary">
                {post.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
