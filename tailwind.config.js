/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  colors: {
    indigo: {
      50: '#f0f0ff',
      100: '#e0e0ff',
      200: '#c0c0ff',
      DEFAULT: '#7765e3', 
    },
  },
  plugins: [],
};
