/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        'primary':'#5F6FFF',
        'customBlue' : '#5496E7',
        'customRed' : '#CC4A4A',
        'customBlue_1' : '#639AC0',

      }
    },
  },
  plugins: [],
}