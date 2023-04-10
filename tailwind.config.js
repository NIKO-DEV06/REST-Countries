const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          darkBlue: "hsl(209, 23%, 22%)",
          veryDarkBlueDarkBg: "hsl(207, 26%, 17%)",
          veryDarkBlueLightText: "hsl(200, 15%, 8%)",
          darkGrayLightInput: "hsl(0, 0%, 52%)",
          veryLightGrayLMBG: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },

        fontFamily: {
          sans: ["var(--font-nunito-sans)", ...fontFamily.sans],
        },
        letterSpacing: {
          widest: ".3em",
        },
        dropShadow: {
          glow: "0 0 1em hsl(26, 100%, 55%)",
        },
      },
    },
    plugins: [],
  }
);
