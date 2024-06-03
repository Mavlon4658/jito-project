/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          100: '#121A2A',
          200: '#12121E',
          300: '#08224E',
          400: '#262E3E',
          500: '#3A4252',
          600: '#001844',
          700: '#3C4252',
        },
        'light-blue': {
          25: 'rgb(10, 89, 218, .25)',
          33: 'rgb(10, 89, 218, .33)',
          55: 'rgb(10, 89, 218, .55)',
          100: '#0A59DA',
          200: '#004FD0',
          300: '#173669',
        },
        'green': {
          25: 'rgba(14, 185, 93, .25)',
          100: '#093A2F',
          200: '#0E4F37',
          300: '#15BF7D',
        },
        'danger': {
          30: 'rgba(198, 23, 27, 0.3)',
          100: '#41121E',
          200: '#571616',
          300: '#C6171B',
        }
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

