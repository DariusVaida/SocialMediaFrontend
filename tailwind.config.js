/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'primary': {
        light: '#fefcec',
        DEFAULT: '#fefae0',
        dark: '#989686',
      },
      'secondary': {
        light: '#a0a788',
        DEFAULT: '#606c38',
        dark: '#3a4122',
      },
      'accent': {
        light: '#ffb166',
        DEFAULT: '#bc6c25',
        dark: '#994b00',
      },
    },
    fontFamily: {
      'montserrat-regular': ['montserrat'],
      'montserrat-bold': ['montserrat-bold'],
      'montserrat-light': ['montserrat-light'],
    },
    extend: {},
  },
  plugins: [],
}

