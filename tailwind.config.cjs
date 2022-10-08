/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "900px",
      xlg: "1000px",
      xl: "1200px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      orange: "#fb9129",
      btnPrimary: "#0a0e27",
      btnSecondary: "#eee",
      green: "#35a162",
      blueLite: "#6672c7",
      cardDarkBG: "#1d1d1d",
      cardLiteBG: "#f8fafd",
      pink: "#eb7da7",
      blueDark: "#262c55",
    },
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "'sans-serif'"],
        millik: ["'Millik'", "cursive"],
      },
      dropShadow: {
        "3xl": "0 10px 15px rgba(255, 255, 255, 0.5)",
        "4xl": "0 26px 26px rgb(0 0 0 / 0.25)",
      },
      backgroundImage: {
        box: "url('./src/assets/Images/box.png')",
      },
    },
  },
  plugins: [],
};
