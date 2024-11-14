/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        card1: { paddindTop: "calc(1 * 1.5rem)" },
        card2: { paddindTop: "calc(2 * 1.5rem)" },
        card3: { paddindTop: "calc(3 * 1.5rem)" },
        card4: { paddindTop: "calc(4 * 1.5rem)" },
      },
      keyframes: {
        textSideLeft: {
          "0%": { transform: "translateX(-80%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        textSideRight: {
          "0%": { transform: "translateX(80%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "text-side-left": "textSideLeft 1s ease-in-out",
        "text-side-right": "textSideRight 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
