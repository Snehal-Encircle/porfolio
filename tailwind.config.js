/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        lgscreen: {max: '1024px'},
        small: {max: '400px'},
        smallx: {max: '345px'},
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
