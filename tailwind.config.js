/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        lgscreen: {min: '1024px'},
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif"
      },
      colors: {
        green: '#2ecc71',
        lightGray: '#eee',
        blue: '#0b173c',
      },
      padding: {
        50: '50px',
      }
    },
  },
  plugins: [],
}
