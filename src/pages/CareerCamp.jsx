import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion.jsx';

const faqs = [
  {
    question: 'What is Career Camp?',
    answer: 'Career Camp is an intensive program to transform beginners into job-ready developers.',
  },
  {
    question: 'How long is the camp?',
    answer: 'The program lasts for 12 weeks with live online sessions and projects.',
  },
  {
    question: 'Is there a certification?',
    answer: 'Yes, you receive certification upon successful completion.',
  },
];

const CareerCamp = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="bg-primary text-white p-10 rounded-lg mb-10">
        <h2 className="text-4xl font-bold mb-4">Career Camp Program</h2>
        <p>Join our Career Camp to fast-track your software development career.</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6 dark:text-secondary">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default CareerCamp;
