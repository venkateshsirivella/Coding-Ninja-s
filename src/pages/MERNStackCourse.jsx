// src/pages/MERNStackCourse.jsx
import { FaDatabase, FaReact, FaNodeJs, FaServer, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Feature = ({ icon, title, text }) => (
  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
    <div className="mb-3">{icon}</div>
    <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-400">{title}</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">{text}</p>
  </div>
);

const MERNStackCourse = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
              MERN Stack Developer Course
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl text-indigo-100">
              Build scalable web apps with MongoDB, Express, React, and Node. Learn by doing with production-grade projects.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#syllabus"
                className="bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1"
                aria-label="View MERN syllabus"
              >
                View syllabus
              </a>
              <Link
                to="/"
                className="border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition transform hover:-translate-y-1"
                aria-label="Go back home"
              >
                Back to Home
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaReact className="mt-1 text-yellow-300" />
                  <p>Modern React with hooks, context, React Router, and state patterns.</p>
                </li>
                <li className="flex items-start gap-3">
                  <FaNodeJs className="mt-1 text-yellow-300" />
                  <p>Node/Express REST APIs with auth, validation, and error handling.</p>
                </li>
                <li className="flex items-start gap-3">
                  <FaDatabase className="mt-1 text-yellow-300" />
                  <p>MongoDB schema design, indexing, aggregation, and Mongoose models.</p>
                </li>
                <li className="flex items-start gap-3">
                  <FaServer className="mt-1 text-yellow-300" />
                  <p>Deployment to Vercel/Render and CI basics for reliable releases.</p>
                </li>
              </ul>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 opacity-50 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-6 w-28 h-28 bg-pink-400 opacity-60 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Why this course</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            icon={<FaTools className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />}
            title="Hands-on learning"
            text="Code-along sessions and assignments with immediate feedback to reinforce concepts."
          />
          <Feature
            icon={<FaServer className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />}
            title="Production mindset"
            text="Logging, security, environment configs, and performance practices from day one."
          />
          <Feature
            icon={<FaProjectDiagram className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />}
            title="Capstone projects"
            text="End-to-end apps covering auth, payments, file uploads, and caching."
          />
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="bg-white dark:bg-gray-800 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Syllabus overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-6 bg-gradient-to-tr from-indigo-600 to-purple-700 text-white shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-3">Frontend</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>React components, hooks, context, and data fetching</li>
                <li>Routing with React Router, protected routes, URL params</li>
                <li>Tailwind CSS for responsive, accessible UIs</li>
                <li>Forms, validation, and error boundaries</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-tr from-indigo-600 to-purple-700 text-white shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-3">Backend</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>Express routing, controllers, middleware patterns</li>
                <li>JWT auth, role-based access, and input validation</li>
                <li>MongoDB models, indexes, and aggregations</li>
                <li>Deployment, environment variables, and monitoring</li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="#enroll"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
              aria-label="Enroll in MERN course"
            >
              Enroll now
            </a>
          </div>
        </div>
      </section>

      {/* Enrollment */}
      <section id="enroll" className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Build full-stack apps with confidence
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
          Get the detailed syllabus, prerequisites, and capstone briefs delivered to the inbox.
        </p>
        <a
          href="mailto:admissions@example.com?subject=MERN%20Course%20Enrollment"
          className="inline-block bg-yellow-400 text-indigo-900 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          aria-label="Email admissions for MERN course"
        >
          Email admissions
        </a>
      </section>
    </main>
  );
};

export default MERNStackCourse;
