/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "903px",
    },

    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, addUtilities }) {
      addUtilities({
        ".text-shadow-lg": {
          "text-shadow": "rgb(212, 212, 212) 0px 0px 10px",
        },
      });

      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }),
  ],
};
