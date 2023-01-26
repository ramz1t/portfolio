/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Rowdies-Regular', 'cursive']
    },
    extend: {
      colors: {
        'primary': {
          900: '#03045e',
          800: '#023E8A',
          700: '#0077B6',
          600: '#0096C7',
          500: '#00B4D8',
          400: '#48CAE4',
          300: '#90E0EF',
          200: '#ADE8F4',
          100: '#CAF0F8'
        },
      },
    },
  },
  plugins: [],
}
