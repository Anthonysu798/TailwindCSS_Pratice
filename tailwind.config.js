/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '350px',
      // => @media (min-width: 640px) { ... }

      'md': '820px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    maxWidth: {
      'minW': '400px', // Use your own custom pixel value
    },
    maxHeight: {
      'minH': '400px', // Use your own custom pixel value
    },
    extend: {},
  },
  plugins: [],
}

