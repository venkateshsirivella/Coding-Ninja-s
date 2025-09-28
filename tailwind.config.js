/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // Enable dark mode toggle using class strategy
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#fbbf24',
        backgroundLight: '#f9fafb',
        backgroundDark: '#1e293b',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in forwards',
        scaleHover: 'scaleHover 0.3s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
