/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#c8759d",
          100: "#c36792",
          200: "#bd5988",
          300: "#b84b7e",
          400: "#ab4475",
          500: "#9d3e6b",
          600: "#8f3962",
          700: "#813358",
          800: "#732d4e",
          900: "#652845",
          950: "#57223b",
        },
      },
    },
  },
  plugins: [],
};
