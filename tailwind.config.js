/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        "flip-horizontal-bottom": {
          "0%": {
            "-webkit-transform": "rotateX(0);",
            transform: "rotateX(0);",
          },
          "100%": {
            "-webkit-transform": "rotateX(-180deg);",
            transform: "rotateX(-180deg);",
          },
        },
      },
      animation: {
        "flip-horizontal-bottom":
          "flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;",
      },
    },
  },
  plugins: [],
};
