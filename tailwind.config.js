module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#006C9A',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
