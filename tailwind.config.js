/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:"480px",
      md:"1440px"
    },
    extend: {
      colors: {
        'gold': '#ffd700',
      },
    },
  },
  plugins: [],
}

