/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#070A12ff',
        secondary: '#ffffff',
        accent: '#3b82f6',
      },
    },
  },
  plugins: [],
};