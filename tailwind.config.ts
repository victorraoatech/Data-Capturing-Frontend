/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ['"Monument Extended"', "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
