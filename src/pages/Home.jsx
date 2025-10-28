import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLaptopCode,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import studying from "../assets/2.jpg";

const benefits = [
  {
    icon: <FaUsers className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />,
    title: "500K+ Learners",
    desc: "Join a vibrant global community of learners and tech enthusiasts.",
  },
  {
    icon: <FaLaptopCode className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />,
    title: "100+ Job-Oriented Courses",
    desc: "Master top in-demand skills designed to help you stand out in the industry.",
  },
  {
    icon: <FaGraduationCap className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />,
    title: "10K+ Careers Transformed",
    desc: "Learn from success stories of students who achieved their dream careers.",
  },
];

const offerings = [
  {
    icon: <FaChalkboardTeacher className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
    title: "Live Interactive Classes",
    desc: "Engage in real-time sessions and get personalized guidance from mentors.",
  },
  {
    icon: <FaBriefcase className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
    title: "Placement Support",
    desc: "Receive expert career advice, mock interviews, and company referrals.",
  },
  {
    icon: <FaChartLine className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />,
    title: "Performance Tracking",
    desc: "Stay on track with regular feedback and personalized learning paths.",
  },
];

const programs = [
  {
    title: "Job Bootcamp for Professionals",
    desc: "Accelerate your career with 1:1 mentoring and live projects.",
    link: "/programs/job-bootcamp-web-development",
  },
  {
    title: "MERN Stack Developer Course",
    desc: "Create scalable, full-stack apps using MongoDB, Express, React, and Node.js.",
    link: "/programs/mern-stack-developer-course",
  },
  {
    title: "Data Science & Machine Learning",
    desc: "Build models, visualize data, and explore AI-driven insights.",
    link: "/programs/data-science-course",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              Transform Your <br />
              <span className="text-yellow-400 drop-shadow-lg">
                Career with Confidence
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-lg">
              Learn from industry experts, gain hands-on experience, and achieve
              your career goals faster.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/programs/job-bootcamp-web-development"
                className="bg-yellow-400 text-indigo-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1"
              >
                Join Bootcamp
              </a>
              <a
                href="/programs/mern-stack-developer-course"
                className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 font-semibold transition transform hover:-translate-y-1"
              >
                Explore MERN Course
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 relative"
          >
            <img
              src={studying}
              alt="Student studying coding"
              className="rounded-2xl shadow-2xl w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 opacity-40 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 left-12 w-32 h-32 bg-pink-400 opacity-50 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {benefits.map(({ icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-400">
              {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </section>

      {/* OFFERINGS SECTION */}
      <section className="bg-gradient-to-tr from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 py-20 px-6 md:px-12 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12"
        >
          Our Offerings
        </motion.h2>

        <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3">
          {offerings.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-indigo-900 dark:text-indigo-400">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-extrabold mb-6 text-indigo-900 dark:text-yellow-400">
            Start Your Success Story Today
          </h3>
          <a
            href="/programs/job-bootcamp-web-development"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get Started
          </a>
        </motion.div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="bg-white dark:bg-gray-800 py-20 px-6 md:px-12">
        <h2 className="max-w-7xl mx-auto text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
          Popular Programs
        </h2>
        <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3">
          {programs.map(({ title, desc, link }) => (
            <motion.a
              key={title}
              href={link}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="block p-8 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-700 text-white hover:from-purple-700 hover:to-indigo-600 shadow-2xl"
            >
              <h3 className="text-2xl font-extrabold mb-4">{title}</h3>
              <p className="text-indigo-200 leading-relaxed">{desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100"
        >
          Join Our Community & Grow Your Career
        </motion.h2>
        <p className="max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          Connect with experts, participate in coding challenges, attend webinars,
          and network with thousands of learners shaping the future.
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
