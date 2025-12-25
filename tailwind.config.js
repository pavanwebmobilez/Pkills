/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        background: "#0B0000",
        "pkills-yellow": "#FEC51C",
        "pkills-red": "#AF0A09",
        "pkills-dark-red": "#820A09",
        "pkills-bright-red": "#D51311",
        "pkills-dark-gray": "#231A1A",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
        "general-sans": ["General Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
