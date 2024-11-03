/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#F9F9F9",
        "secondary":"#005B96",
        "tertiary" : "#F2994A",
        "cool" : "#00A6D6"
      },
      fontFamily: {
        "open": ['Open Sans', 'sans'], // Replace with your font family
      },
    },
    screens: {
      'lg': {max: '2058px'},
      'md': {max: '1204px'},
      'sm': {max: '639px'}

    }
  },
  plugins: [],
}