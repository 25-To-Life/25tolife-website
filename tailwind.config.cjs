const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        // top border shadow
        'top': '0px -4px 3px rgba(0, 0, 0, 0.14)',
      },
      colors: {
        // background colors
        bg: {
          primary: {
            light: '#be8d4a',//'#ce9d5a',//'#be8d4a',//'#e2b268',
            dark: '#333',
          },
          secondary: {
            light: '#3f3f46',
            dark: '#3f3f46',
          }
        },
        // text colors
        primary: {
          light: colors.black,
          dark: '#c1c1c1',
        },
        // third color
        accent: {
          // button colors
          primary: {
            light: '#e01f27',
            dark: colors.orange[600],
          },
          // hover colors
          secondary: {
            light: colors.red[400],
            dark: colors.orange[400],
          }
        },
      },
    },
    fontFamily: {
      'body': ['Ubuntu', 'UbuntuLight'],
      'header': ['NinKid'],
    },
  },
  plugins: [],
}
