/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          1000: "#1B0245"
        }
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem"
      }
    },
  },
  plugins: [require("daisyui")],
}
