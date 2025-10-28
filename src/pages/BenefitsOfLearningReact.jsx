import React from 'react';
import { motion } from 'framer-motion';
import reactBenefits from '../assets/OIP.webp'; // main banner image

const benefits = [
  {
    id: 1,
    title: '1. Component-Based Architecture',
    desc: 'React follows a component-based architecture, which allows developers to create reusable and modular code blocks. Each component handles its own logic and rendering, making it easy to maintain and scale applications. This modular design encourages code reusability, reduces redundancy, and improves the overall efficiency of development teams.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
  },
  {
    id: 2,
    title: '2. Virtual DOM for High Performance',
    desc: 'React uses a virtual DOM to efficiently update and render only the parts of the user interface that change. Instead of reloading the entire page, React compares the new virtual DOM with the previous version and updates only what’s necessary. This results in faster load times, smoother user experiences, and improved app responsiveness.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800',
  },
  {
    id: 3,
    title: '3. Strong Community and Ecosystem',
    desc: 'React has one of the largest developer communities in the world, backed by Meta (Facebook). This means constant improvements, extensive documentation, thousands of open-source libraries, and help available on forums like Stack Overflow. It’s a skill that won’t fade away anytime soon.',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800',
  },
  {
    id: 4,
    title: '4. Excellent Career Opportunities',
    desc: 'React developers are among the most sought-after in the industry. With thousands of job openings every year, React skills can open doors to roles such as Frontend Developer, Full-Stack Engineer, and UI/UX Specialist in top companies and startups worldwide.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
  },
  {
    id: 5,
    title: '5. Easier Learning Curve',
    desc: 'Unlike many complex frontend frameworks, React is simple to grasp for beginners who understand JavaScript. Its clear documentation, active community, and declarative approach make it a great starting point for those entering frontend development.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    id: 6,
    title: '6. One-Way Data Flow',
    desc: 'React uses unidirectional (one-way) data binding, meaning data flows from parent to child components. This structure makes debugging easier, ensures predictable application behavior, and simplifies state management.',
    image: 'https://i.ytimg.com/vi/quW-7N6ZVSA/maxresdefault.jpg',
  },
  {
    id: 7,
    title: '7. React Hooks',
    desc: 'Hooks revolutionized React development by allowing developers to use state and lifecycle features without writing class components. They make the code cleaner, more functional, and easier to test.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800',
  },
  {
    id: 8,
    title: '8. JSX – Easier UI Development',
    desc: 'React uses JSX, a syntax extension that allows you to write HTML inside JavaScript. This combination makes code more readable and expressive, letting developers visualize UI components more intuitively.',
    image: 'https://www.codifynext.com/storage/shQnSDY4rU5sHdSynGwSy8uvLAoNZQCnVqAPFok0.png',
  },
  {
    id: 9,
    title: '9. Reusable Components',
    desc: 'With React, components can be reused across multiple parts of an application. This not only saves development time but also ensures consistency in UI and logic implementation.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800',
  },
  {
    id: 10,
    title: '10. SEO-Friendly Framework',
    desc: 'Unlike many JavaScript-heavy frameworks, React can render content on the server side, making it more SEO-friendly. Search engines can index pages efficiently, improving visibility in search results.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
  },
  {
    id: 11,
    title: '11. Strong Backing by Meta',
    desc: 'Being maintained by Meta ensures long-term stability and regular updates. React constantly evolves to meet the changing demands of modern web development.',
    image: 'https://tutorialsinhand.com/readwritedata/Articles/1081/React-Facebook-Meta-Netflix-WhatsApp.png',
  },
  {
    id: 12,
    title: '12. Cross-Platform Development',
    desc: 'React can be used not only for web development but also for mobile app development using React Native. This allows developers to build cross-platform apps with shared codebases.',
    image: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800',
  },
  {
    id: 13,
    title: '13. Easy Integration with Other Tools',
    desc: 'React integrates seamlessly with other popular libraries like Redux, Tailwind CSS, Axios, and React Router, providing full flexibility to build custom stacks.',
    image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800',
  },
  {
    id: 14,
    title: '14. Strong Developer Tooling',
    desc: 'The React Developer Tools browser extension allows easy inspection of component hierarchies, props, and states — making debugging and optimization effortless.',
    image: 'https://trainings.internshala.com/blog/wp-content/uploads/2023/04/React-developer-tools.jpg',
  },
  {
    id: 15,
    title: '15. Declarative UI',
    desc: 'React’s declarative syntax ensures that the UI always reflects the current state. Developers don’t have to manually manipulate the DOM — React handles it efficiently.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
  },
  {
    id: 16,
    title: '16. Smooth Performance',
    desc: 'React is optimized for performance through its virtual DOM, efficient reconciliation algorithms, and lazy loading, making web apps lightning-fast and responsive.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
  },
  {
    id: 17,
    title: '17. Large Job Market',
    desc: 'React is used by thousands of companies, including Meta, Netflix, Airbnb, and Shopify. Learning React means joining a huge job market filled with opportunities.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
  },
  {
    id: 18,
    title: '18. Great Testing Support',
    desc: 'React works well with testing libraries like Jest, Mocha, and Enzyme, helping developers write maintainable, bug-free applications.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
  },
  {
    id: 19,
    title: '19. Continuous Growth & Updates',
    desc: 'React’s ecosystem continues to expand with regular updates, new hooks, and performance optimizations, keeping developers ahead of industry trends.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
  },
  {
    id: 20,
    title: '20. Powering Modern Web Apps',
    desc: 'From single-page applications to enterprise dashboards, React powers some of the most interactive and scalable web apps in the world — proving its dominance in the frontend ecosystem.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800',
  },
];

const BenefitsOfLearningReact = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={reactBenefits}
        alt="Benefits of Learning React"
        className="w-full h-64 object-cover rounded-2xl mb-10 shadow-lg"
      />
      <h1 className="text-3xl font-bold text-primary dark:text-secondary mb-6">
        Benefits of Learning React
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
        React has revolutionized modern frontend development. It empowers developers to build fast, scalable, and beautiful user interfaces with minimal effort. Its component-based design, virtual DOM, and strong community support have made it the most widely used library for building interactive web applications. Whether you’re aiming for frontend mastery or a full-stack career, learning React is one of the smartest investments you can make as a developer. Let’s explore its top benefits in detail below.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {benefits.map((b) => (
          <motion.div
            key={b.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img src={b.image} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-2">
                {b.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BenefitsOfLearningReact;
