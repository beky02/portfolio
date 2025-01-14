/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#15c196',
      'background': {
        // 100: '#141419',
        100: '#0f172a',
        200: '#1d1d25'
      },
      'secondary': {
        100: '#ccd6f6',
        200: '#a8b2d1',
        300: '#86878b',
        400: '#8892b0',
      },
      'white': '#ffffff',
      'black': '#3f3cbb',
    },
  },
  plugins: [],
}
