/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#3399FF',
      },
      fontSize: {
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      spacing: {
        '16': '4rem',
        '24': '6rem',
      },
    },
  },
  plugins: [],

  //tailwindcss by default not working if write className that working
  // corePlugins:{
  //   preflight : false
  // },
  // important: true,
}

