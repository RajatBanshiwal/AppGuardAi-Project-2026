/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '7.5xl': '88rem', // ≈1408px (slightly wider than 7xl)
      },
    },
  },
  plugins: [],
};
