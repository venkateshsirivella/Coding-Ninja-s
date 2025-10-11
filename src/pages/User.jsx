import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Frontend Development with React', level: 'Beginner', duration: '12 weeks' },
  { id: 2, title: 'Data Structures & Algorithms', level: 'Intermediate', duration: '10 weeks' },
  { id: 3, title: 'Backend APIs with Node & Express', level: 'Intermediate', duration: '8 weeks' },
  { id: 4, title: 'DevOps Fundamentals (Docker, CI/CD)', level: 'Intermediate', duration: '6 weeks' },
  { id: 5, title: 'Cloud Basics on AWS', level: 'Beginner', duration: '6 weeks' },
];

const User = () => {
  return (
    <main className="min-h-[calc(100dvh-64px)] bg-gray-50 dark:bg-gray-950 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Welcome, Learner</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Personalized picks in software engineering</p>
          </div>
          <Link to="/login" className="text-sm text-blue-600 hover:underline">Switch account</Link>
        </header>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(c => (
            <article key={c.id} className="rounded-2xl bg-white dark:bg-gray-900 p-5 shadow ring-1 ring-black/5 dark:ring-white/10">
              <div className="mb-3 h-28 w-full rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Level: {c.level} • {c.duration}</p>
              <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-gray-900 px-3 py-2 text-sm text-white hover:bg-black dark:bg-white dark:text-gray-900">View syllabus</button>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};
export default User;