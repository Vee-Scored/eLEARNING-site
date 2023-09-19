/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        primary: "#0bbbcc",
      },
    },
    
     ' screens': {
        'sp': '576px',
        // => @media (min-width: 576px) { ... }
  
        'prelg': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
