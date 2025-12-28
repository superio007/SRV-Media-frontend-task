/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        70: "17.5rem",
        180: "45rem",
        10.5: "2.625rem",
      },
      animation: {
        "vertical-scroll": "vertical-scroll 25s linear infinite",
      },
      keyframes: {
        "vertical-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
      },
    },
    screens: {
      xxl: "1920px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".touch-pan-x": {
          "touch-action": "pan-x",
        },
        ".touch-pan-y": {
          "touch-action": "pan-y",
        },
        ".touch-none": {
          "touch-action": "none",
        },
      });
    },
  ],
};
