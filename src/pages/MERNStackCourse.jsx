import React, { useState } from "react";
import {
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaServer,
  FaTools,
  FaProjectDiagram,
  FaChevronDown,
  FaEnvelope,
  FaGraduationCap,
  FaMoneyBillWave,
  FaAward,
  FaClock,
  FaBookOpen,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Feature = ({ icon, title, text }) => (
  <motion.article
    variants={fadeInUp}
    whileHover={{ scale: 1.05, y: -4 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="p-6 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <motion.div
        whileHover={{ rotate: 10 }}
        className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-lg"
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{text}</p>
      </div>
    </div>
  </motion.article>
);

const AccordionItem = ({ title, children, open, onToggle }) => (
  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md hover:bg-white dark:hover:bg-gray-900 transition"
      aria-expanded={open}
    >
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {open ? "Click to collapse" : "Click to expand"}
        </p>
      </div>
      <motion.span
        animate={{ rotate: open ? 180 : 0 }}
        className="text-gray-600 dark:text-gray-300"
      >
        <FaChevronDown />
      </motion.span>
    </button>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="px-4 pb-4 bg-gradient-to-b from-gray-50/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/80"
    >
      <div className="pt-3 text-sm text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </motion.div>
  </div>
);

const Modal = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("I want to enroll in the MERN course.");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 max-w-lg w-full p-6 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/10"
      >
        <div className="flex items-start gap-3 mb-4">
          <FaEnvelope className="w-8 h-8 text-indigo-600" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Request Enrollment
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We’ll get back to you within 24 hours.
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ name, email, message });
            setName("");
            setEmail("");
            onClose();
          }}
          className="space-y-3"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
            className="w-full rounded-lg p-3 ring-1 ring-gray-200 dark:ring-gray-700 bg-white/60 dark:bg-gray-800/60"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg p-3 ring-1 ring-gray-200 dark:ring-gray-700 bg-white/60 dark:bg-gray-800/60"
          />
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg p-3 ring-1 ring-gray-200 dark:ring-gray-700 bg-white/60 dark:bg-gray-800/60"
          />
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition"
            >
              Send Request
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const MERNStackCourse = () => {
  const [openSection, setOpenSection] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmitRequest = (payload) => {
    console.info("Enrollment request:", payload);
    toast.success(
      `Thanks ${payload.name || "there"}! We'll contact you at ${
        payload.email || "your email"
      } soon.`,
      {
        style: {
          background: "linear-gradient(90deg,#4f46e5,#ec4899)",
          color: "white",
          borderRadius: "12px",
          padding: "12px 16px",
          fontWeight: 600,
        },
      }
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans relative">
      <Toaster position="top-center" />

      {/* Floating glowing blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
        animate={{ x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
        animate={{ x: [0, -20, 30, 0], y: [0, -15, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Hero Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4">
              Become a{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Learn MongoDB, Express, React, and Node.js through real-world
              projects, industry-level mentorship, and job-ready training.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
                onClick={() => setModalOpen(true)}
              >
                <FaGraduationCap /> Enroll Now
              </motion.button>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>

          {/* Fee Details Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative p-6 rounded-3xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow-2xl"
          >
            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
              <FaMoneyBillWave /> Course Fee
            </h4>
            <p className="text-3xl font-extrabold mb-1">₹14,999</p>
            <p className="text-sm opacity-90 mb-4">
              Limited-time offer! EMI available at ₹999/month.
            </p>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <FaClock /> Duration: 4 Months (Weekend & Weekday batches)
              </li>
              <li className="flex items-center gap-2">
                <FaAward /> Certificate of Completion
              </li>
              <li className="flex items-center gap-2">
                <FaUserTie /> 100% Placement Guidance
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          Why Choose This Course
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            icon={<FaTools className="w-6 h-6" />}
            title="Hands-on Learning"
            text="Build 5+ real-world projects with mentor feedback and guidance."
          />
          <Feature
            icon={<FaServer className="w-6 h-6" />}
            title="Industry Curriculum"
            text="Learn APIs, security, and deployment exactly as done in companies."
          />
          <Feature
            icon={<FaProjectDiagram className="w-6 h-6" />}
            title="Portfolio Projects"
            text="E-commerce, Chat App, Dashboard — build your job-ready portfolio."
          />
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          Detailed Syllabus
        </motion.h2>

        <div className="space-y-4">
          {[
            {
              title: "Module 1: HTML, CSS & JavaScript Foundation",
              content: (
                <ul className="list-disc pl-6 space-y-1">
                  <li>HTML5 semantic elements & responsive design</li>
                  <li>Modern CSS (Flexbox, Grid, Animations)</li>
                  <li>JavaScript ES6+, DOM, and event handling</li>
                </ul>
              ),
            },
            {
              title: "Module 2: React.js Mastery",
              content: (
                <ul className="list-disc pl-6 space-y-1">
                  <li>Functional Components, Hooks, Props & State</li>
                  <li>Routing, Context API, and Redux Toolkit</li>
                  <li>Building full-featured React projects</li>
                </ul>
              ),
            },
            {
              title: "Module 3: Node.js & Express Backend",
              content: (
                <ul className="list-disc pl-6 space-y-1">
                  <li>REST APIs with Express.js</li>
                  <li>JWT Authentication & Middleware</li>
                  <li>Error handling & performance optimization</li>
                </ul>
              ),
            },
            {
              title: "Module 4: MongoDB & Database Design",
              content: (
                <ul className="list-disc pl-6 space-y-1">
                  <li>Data modeling and schema design</li>
                  <li>CRUD operations with Mongoose</li>
                  <li>Database optimization and aggregation</li>
                </ul>
              ),
            },
            {
              title: "Module 5: Deployment & Final Project",
              content: (
                <ul className="list-disc pl-6 space-y-1">
                  <li>Deploy apps on Render / Vercel</li>
                  <li>Capstone Project: Full MERN Application</li>
                  <li>GitHub & Resume Portfolio Setup</li>
                </ul>
              ),
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              title={item.title}
              open={openSection === i}
              onToggle={() => setOpenSection(openSection === i ? null : i)}
            >
              {item.content}
            </AccordionItem>
          ))}
        </div>
      </section>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmitRequest}
      />
    </main>
  );
};

export default MERNStackCourse;
