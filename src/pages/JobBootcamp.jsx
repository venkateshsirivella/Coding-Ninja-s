// src/pages/JobBootcamp.jsx
import { FaChalkboardTeacher, FaUserTie, FaProjectDiagram, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobBootcamp = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Job Bootcamp for Professionals
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl text-indigo-100">
              Fast‑track career growth with 1:1 mentoring, rigorous interview prep, and real projects aligned to hiring needs.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#curriculum"
                className="bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1"
                aria-label="View bootcamp curriculum"
              >
                View curriculum
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
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaChalkboardTeacher className="mt-1 text-yellow-300" />
                  <p>Weekly mentor sessions with personalized growth plans.</p>
                </li>
                <li className="flex items-start gap-3">
                  <FaProjectDiagram className="mt-1 text-yellow-300" />
                  <p>3-4 capstone projects mirroring production environments.</p>
                </li>
                <li className="flex items-start gap-3">
                  <FaUserTie className="mt-1 text-yellow-300" />
                  <p>Mock interviews, resume reviews, and LinkedIn optimization.</p>
                </li>
                <li className="flex items-start gap-3">
                  <FaClock className="mt-1 text-yellow-300" />
                  <p>12–16 week track with structured milestones and checkpoints.</p>
                </li>
              </ul>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 opacity-50 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-6 w-28 h-28 bg-pink-400 opacity-60 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">What to expect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-400">Placement readiness</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Interview drills, DSA refreshers, and role-based challenges to become job-ready with confidence.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-400">Portfolio you can show</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Ship real apps with clean code, documentation, and deployed demos recruiters can verify.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-400">Mentor accountability</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Structured sprints with progress tracking, feedback, and check-ins to keep momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="bg-white dark:bg-gray-800 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Curriculum snapshot</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-6 bg-gradient-to-tr from-indigo-600 to-purple-700 text-white shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-3">Core modules</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>Modern Git/GitHub workflows, PR reviews, CI basics</li>
                <li>System design fundamentals for juniors</li>
                <li>Behavioral interview frameworks and STAR stories</li>
                <li>Resume targeting and recruiter keyword alignment</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-tr from-indigo-600 to-purple-700 text-white shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-3">Projects</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>Full-stack app with auth, CRUD, and deployment</li>
                <li>Integration project using public APIs and caching</li>
                <li>Team collaboration project with agile ceremonies</li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="#apply"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
              aria-label="Apply to bootcamp"
            >
              Apply now
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Ready to accelerate your career?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
          Submit interest to receive a detailed syllabus, mentor profiles, and upcoming cohort dates.
        </p>
        <a
          href="mailto:admissions@example.com?subject=Bootcamp%20Application"
          className="inline-block bg-yellow-400 text-indigo-900 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          aria-label="Email admissions"
        >
          Email admissions
        </a>
      </section>
    </main>
  );
};

export default JobBootcamp;
