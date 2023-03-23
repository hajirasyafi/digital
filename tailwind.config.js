/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-image": "url('/dark.jpg')",
        grid: "url('/grid.svg')",
      },
    },
  },
  plugins: [],
};
