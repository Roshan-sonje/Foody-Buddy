/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
import flowbite from "flowbite-react/tailwind"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    // flowbite.content(),
  ],
  theme: {
    extend: {},
    fontFamily:{
      Poppins:"Poppins"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

