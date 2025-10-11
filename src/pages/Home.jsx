import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLaptopCode, FaGraduationCap, FaChalkboardTeacher, FaBriefcase, FaChartLine } from 'react-icons/fa';
import studying from '../assets/2.jpg';

const benefits = [
  {
    icon: <FaUsers className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />,
    title: '500K+ Learners',
    desc: 'Join a thriving community of enthusiastic learners worldwide.',
  },
  {
    icon: <FaLaptopCode className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />,
    title: '100+ Job-Oriented Courses',
    desc: 'Master industry-relevant skills handpicked by experts.',
  },
  {
    icon: <FaGraduationCap className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />,
    title: '10K+ Careers Transformed',
    desc: 'Real success stories with placement assistance and mentorship.',
  },
];

const offerings = [
  {
    icon: <FaChalkboardTeacher className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
    title: 'Live Interactive Classes',
    desc: 'Experience real-time learning with mentors guiding you through every step.',
  },
  {
    icon: <FaBriefcase className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
    title: 'Placement Support',
    desc: 'Get dedicated career guidance, mock interviews, and referral opportunities.',
  },
  {
    icon: <FaChartLine className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
    title: 'Performance Tracking',
    desc: 'Stay on top of your goals with regular progress reports and feedback.',
  },
];

const programs = [
  {
    title: 'Job Bootcamp for Professionals',
    desc: 'Fast-track your career with 1:1 mentoring and real projects.',
    link: '/programs/job-bootcamp-web-development',
  },
  {
    title: 'MERN Stack Developer Course',
    desc: 'Build scalable web apps with MongoDB, Express, React & Node.',
    link: '/programs/mern-stack-developer-course',
  },
  {
    title: 'Data Science & Machine Learning',
    desc: 'Learn data wrangling, ML models, and visualization techniques.',
    link: '/programs/data-science-course',
  },
];

const Home = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-stretch justify-between relative z-10">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Get the career <br /> <span className="text-yellow-400">you deserve, faster</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-lg drop-shadow-md">
              Join millions of learners mastering coding, data science, and much more.
              Get trained by industry experts and build real-world projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/programs/job-bootcamp-web-development"
                className="bg-yellow-400 text-indigo-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1"
              >
                Job Bootcamp for Professionals
              </a>
              <a
                href="/programs/mern-stack-developer-course"
                className="border-2 border-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition transform hover:-translate-y-1"
              >
                MERN Stack Developer Course
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 relative flex">
            <img
              src={studying}
              alt="Student studying coding"
              className="h-full w-auto object-cover rounded-xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 opacity-50 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 left-12 w-32 h-32 bg-pink-400 opacity-60 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section (OUR OFFERINGS) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {benefits.map(({ icon, title, desc }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition"
          >
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-400">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </section>

      {/* NEW SECTION - Our Offerings & Success Story CTA */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 py-20 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">Our Offerings</h2>

        <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3">
          {offerings.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-indigo-900 dark:text-indigo-400">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold mb-6 text-indigo-900 dark:text-yellow-400"
          >
            Ready to Start Your Success Story?
          </motion.h3>
          <motion.a
            href="/programs/job-bootcamp-web-development"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition"
          >
            Get Started Today
          </motion.a>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white dark:bg-gray-800 py-20 px-6 md:px-12">
        <h2 className="max-w-7xl mx-auto text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
          Popular Programs
        </h2>
        <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3">
          {programs.map(({ title, desc, link }) => (
            <a
              key={title}
              href={link}
              className="block p-8 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-700 text-white hover:from-purple-700 hover:to-indigo-600 shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-extrabold mb-4">{title}</h3>
              <p className="text-indigo-200 leading-relaxed">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          Join Our Community and Grow Your Career
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          Connect with industry leaders, participate in challenges, attend expert-led webinars,
          and grow alongside thousands of passionate learners.
        </p>
        <a
          href="https://www.codingninjas.com/landing/10x-club/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white md:text-lg font-semibold px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Explore Community
        </a>
      </section>
    </main>
  );
};

export default Home;
