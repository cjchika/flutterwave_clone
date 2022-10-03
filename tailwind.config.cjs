/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000",
      orange: "#fb9129",
      btnPrimary: "#0a0e27",
      btnSecondary: "#eee",
      green: "#35a162",
      blueLite: "#6672c7",
      cardDarkBG: "#1d1d1d",
      cardLiteBG: "#f8fafd",
      pink: "#eb7da7",
    },
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "'sans-serif'"],
        millik: ["'Millik'", "cursive"],
      },
    },
  },
  plugins: [],
};
