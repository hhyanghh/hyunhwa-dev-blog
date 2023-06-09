/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        sea: "url('../public/bg_sea.JPG')",
      },
      colors: {
        navy: "#025464",
        orange: "#e57c23",
        yellow: "#e8aa42",
        white: "#f8f1f1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
