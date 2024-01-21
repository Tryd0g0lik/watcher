module.exports = {
  darkMode: 'class',
  content: [
    "./src/frontend/src/**/*.{js,jsx,ts,tsx}",
    "./src/frontend/src/*.{js,jsx,ts,tsx}",
    "./public/*.html"

  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
/* */
