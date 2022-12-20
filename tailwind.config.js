/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode :  'class' ,  // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height:{
        '25': '6.25rem',
        '68' : '17rem',
      },
      width:{
        '120': '30rem',
      }

    },
  },
  plugins: [],
};
