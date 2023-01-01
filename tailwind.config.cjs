/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#692090",
        primaryHover: "#581A79",
        bodyBg: "#FEFEFE",
      },
      minHeight: {
        verify: "calc(100vh - 10rem)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
