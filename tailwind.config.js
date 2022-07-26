/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // For Accordion
    "w-5",
    "h-5",
    "ml-4"
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          1000: "#213b22"
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
