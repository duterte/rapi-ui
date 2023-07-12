/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      cursor: {
        pointer: "url(src/assets/pointer.svg), pointer",
      },
    },
  },
  plugins: [],
};

