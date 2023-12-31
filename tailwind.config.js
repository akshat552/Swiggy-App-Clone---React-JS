/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins :["Poppins", "sans-serif"],
        Nova : ["Nova Square", "sans-serif"],
        Lato : ["Lato", "sans-serif"]},
    },
  },
  plugins: [],
}