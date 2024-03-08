const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        main: "1.2rem",
        xl: "2.5rem",
      },
      colors: {
        content: "#282828",
        primary: "#E05346",
        button: "#18C964",
        button_dark: "#119249"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
