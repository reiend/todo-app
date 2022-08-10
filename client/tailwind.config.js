/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        'bleach-cedar': '#281733',
        'purply-blue': '#BCB9EE'
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    }
  }
};
