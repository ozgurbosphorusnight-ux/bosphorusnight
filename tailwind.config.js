/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './blog/**/*.html',
    './cruises/**/*.html',
    './js/**/*.js',
    './scripts/**/*.js',
    './content/**/*.json',
  ],
  theme: {
    extend: {
      colors: {
        navy: { dark: '#0b1120', DEFAULT: '#101a30', light: '#152240' },
        gold: { DEFAULT: '#c9a84c', light: '#d4b86a', dark: '#b8953f' },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
