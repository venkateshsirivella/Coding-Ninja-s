// src/pages/MERNStackCourse.jsx
import React, { useState } from 'react';
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
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Small reusable Feature card
const Feature = ({ icon, title, text }) => (
  <motion.article
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm ring-1 ring-white/10 shadow-md"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-white/30 dark:bg-white/5 text-indigo-600 dark:text-indigo-300">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{text}</p>
      </div>
    </div>
  </motion.article>
);

// Accordion item for syllabus sections
const AccordionItem = ({ title, children, open, onToggle }) => (
  <div className="rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800"
      aria-expanded={open}
    >
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">Click to expand</p>
      </div>
      <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-gray-600 dark:text-gray-300">
        <FaChevronDown />
      </motion.span>
    </button>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 pb-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="pt-3 text-sm text-gray-700 dark:text-gray-300">{children}</div>
    </motion.div>
  </div>
);

// Simple modal for enrollment/contact
const Modal = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('I want to enroll in the MERN course.');

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        className="relative z-10 max-w-xl w-full p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-white/10"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start gap-4">
          <FaEnvelope className="w-10 h-10 text-indigo-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Request Enrollment</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We'll reach out within 24 hours.</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ name, email, message });
            setName('');
            setEmail('');
            setMessage('I want to enroll in the MERN course.');
            onClose();
          }}
          className="mt-4 space-y-3"
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-lg p-3 ring-1 ring-gray-200 dark:ring-gray-700 bg-transparent"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-lg p-3 ring-1 ring-gray-200 dark:ring-gray-700 bg-transparent"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full rounded-lg p-3 ring-1 ring-gray-200 dark:ring-gray-700 bg-transparent"
          />

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg">
              Cancel
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Send request</button>
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
    // In real app: POST to your backend or send to service like SendGrid
    console.info('Enrollment request:', payload);
    alert(`Thanks ${payload.name || 'there'}! We'll contact ${payload.email || 'you'} soon.`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 font-sans">
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
            >
              MERN Stack Developer <span className="text-indigo-600">Course</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
            >
              Build production-ready web applications with MongoDB, Express, React & Node. Projects, CI/CD, real-world patterns
              and interview-ready portfolio.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
                aria-label="Enroll now"
              >
                <FaGraduationCap /> Enroll now
              </button>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700 px-5 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition"
              >
                Back to Home
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 text-center">
                <div className="text-sm text-gray-500">Duration</div>
                <div className="font-semibold text-gray-900 dark:text-white">12 weeks</div>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 text-center">
                <div className="text-sm text-gray-500">Projects</div>
                <div className="font-semibold text-gray-900 dark:text-white">4+</div>
              </div>
              <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 text-center">
                <div className="text-sm text-gray-500">Level</div>
                <div className="font-semibold text-gray-900 dark:text-white">Intermediate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold">What you will build</h4>
                  <p className="text-sm mt-1 opacity-90">Real apps: e-commerce, chat, dashboard, file uploads, payments.</p>
                </div>
                <div className="text-sm opacity-90">Live sessions • Mentor support</div>
              </div>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <FaReact className="mt-1 w-6 h-6" />
                  <p className="text-sm">Modern React with hooks, suspense patterns, and efficient state management.</p>
                </li>
                <li className="flex items-start gap-3">
                  <FaNodeJs className="mt-1 w-6 h-6" />
                  <p className="text-sm">Node & Express APIs with authentication, validation and tests.</p>
                </li>
                <li className="flex items-start gap-3">
                  <FaDatabase className="mt-1 w-6 h-6" />
                  <p className="text-sm">MongoDB design, indexes and aggregation for fast queries.</p>
                </li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white/10">Deployment-ready apps</div>
                <div className="p-3 rounded-lg bg-white/10">CI/CD + Monitoring</div>
              </div>
            </div>

            <div className="absolute -right-8 -top-10 w-36 h-36 bg-white/20 rounded-full blur-2xl" />
            <div className="absolute -left-8 -bottom-12 w-28 h-28 bg-pink-300/30 rounded-full blur-xl" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Why this course</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={<FaTools className="w-6 h-6" />} title="Hands-on learning" text="Code-along sessions and assignments with mentor feedback." />
          <Feature icon={<FaServer className="w-6 h-6" />} title="Production mindset" text="Logging, security, env configs and performance practices." />
          <Feature icon={<FaProjectDiagram className="w-6 h-6" />} title="Capstone projects" text="End-to-end apps: auth, payments, uploads and caching." />
        </div>
      </section>

      <section id="syllabus" className="bg-white dark:bg-gray-800 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 bg-gradient-to-tr from-indigo-600 to-purple-700 text-white shadow-2xl">
            <h3 className="text-2xl font-extrabold mb-3">Frontend</h3>
            <ul className="space-y-2 text-indigo-100">
              <li>React components, hooks, context, Suspense & data fetching</li>
              <li>Routing with React Router, protected routes</li>
              <li>Tailwind CSS, accessibility, responsive patterns</li>
              <li>Forms, validation, and testable components</li>
            </ul>
          </div>

          <div className="space-y-4">
            <AccordionItem
              title="Backend: APIs & Auth"
              open={openSection === 'backend'}
              onToggle={() => setOpenSection(openSection === 'backend' ? null : 'backend')}
            >
              <ul className="list-disc pl-5">
                <li>Express routing, controllers & middleware patterns</li>
                <li>JWT auth, role-based access & refresh tokens</li>
                <li>Input validation, tests and error handling</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Data: MongoDB & Performance"
              open={openSection === 'db'}
              onToggle={() => setOpenSection(openSection === 'db' ? null : 'db')}
            >
              <ul className="list-disc pl-5">
                <li>Mongoose models, schema design, indexes</li>
                <li>Aggregation pipelines & optimization</li>
                <li>Backup, seeding & basic sharding concepts</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Deployment & CI/CD"
              open={openSection === 'deploy'}
              onToggle={() => setOpenSection(openSection === 'deploy' ? null : 'deploy')}
            >
              <ul className="list-disc pl-5">
                <li>Vercel / Render / DigitalOcean basics</li>
                <li>Environment variables & secure secrets</li>
                <li>Monitoring, logs & performance budgeting</li>
              </ul>
            </AccordionItem>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg">
            Request full syllabus
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900 dark:text-gray-100">Build full-stack apps with confidence</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-700 dark:text-gray-300">Get the detailed syllabus, prerequisites, and capstone briefs delivered to your inbox.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="mailto:admissions@example.com?subject=MERN%20Course%20Enrollment" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow">Email admissions</a>
          <button onClick={() => setModalOpen(true)} className="inline-block bg-white/80 hover:bg-white text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow">Request info</button>
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 mt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} MERN Bootcamp. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmitRequest} />
    </main>
  );
};

export default MERNStackCourse;
