/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // for dark mode toggle (we'll keep dark always)
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // always dark theme
  },
};
