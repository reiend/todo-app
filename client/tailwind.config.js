/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        'bleach-cedar': '#281733'
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    }
  }
};
