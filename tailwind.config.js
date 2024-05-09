/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      backgroundImage: {
        'home-img': "url('./src/components/img/Screenshot 2024-05-08 145852.png')",
      },
      
  },
  plugins: [
    require('daisyui'),
  ],
}

