// src/routes.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import User from './pages/User';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Courses from './pages/Courses.jsx';
import CareerCamp from './pages/CareerCamp.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import JobBootcamp from './pages/JobBootcamp.jsx';
import MERNStackCourse from './pages/MERNStackCourse.jsx';
import HowToStartCoding from "./pages/HowToStartCoding";
import Top10CodingInterviewQuestions from "./pages/Top10CodingInterviewQuestions";
import BenefitsOfLearningReact from "./pages/BenefitsOfLearningReact";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'user', element: <User /> },
      { path: 'courses', element: <Courses /> },
      { path: 'career-camp', element: <CareerCamp /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'programs/job-bootcamp-web-development', element: <JobBootcamp /> },
      { path: 'programs/mern-stack-developer-course', element: <MERNStackCourse /> },
      { path: 'learn/how-to-start-coding', element: <HowToStartCoding /> },
      { path: 'learn/top-10-coding-questions', element: <Top10CodingInterviewQuestions /> },
      { path: 'learn/benefits-of-react', element: <BenefitsOfLearningReact /> },
    ],
  },
]);
