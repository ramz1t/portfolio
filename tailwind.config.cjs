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
    // colors: {
    //   'primary': {
    //     900: 0xFFFFFF,
    //     100: 0x000000,
    //   }
    // },
    extend: {},
  },
  plugins: [],
}
