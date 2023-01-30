const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        moonDance: ["Moon Dance", ...defaultTheme.fontFamily.mono],
        pooppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        lobster: 'Lobster'
      },
      backgroundImage: {
        'bg-dua': "url('/assets/img/bg-2.jpg')",
      }
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    }
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio")
  ],
}