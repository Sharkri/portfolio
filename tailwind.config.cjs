/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "728px",
      lg: "903px",
      xlg: "1023px",
    },

    extend: {
      fontFamily: {
        cute: ["Cousagi"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'Source Code Pro'", "monospace"],
      },
      typography: ({ theme }) => ({
        accent: {
          css: {
            "--tw-prose-links": theme("colors.accent"),
            "--tw-prose-invert-links": theme("colors.accent"),
          },
        },
      }),

      keyframes: {
        shudder: {
          from: { transform: "rotate(-0.1deg)" },
          to: { transform: "rotate(0.1deg)" },
        },
      },

      animation: {
        shudder: "0.01s shudder infinite alternate linear",
      },

      colors: {
        primary: "#17171f", // almost black
        muted: "rgba(255, 255, 255, 0.6)",
        foreground: "#f9fafb", // gray-50
        accent: "oklch(94.5% 0.129 101.54)", // yellow-200
      },
    },
  },

  plugins: [
    plugin(function ({ addVariant, addUtilities }) {
      addUtilities({
        ".text-shadow-lg": {
          "text-shadow": "rgb(212, 212, 212) 0px 0px 10px",
        },
        ".flex-col-center": {
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
        },
      });

      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
