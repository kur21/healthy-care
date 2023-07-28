/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html, js, ts, vue}",
    "./src/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "light": "#fff",
        "primary-300": "#FFCC21",
        "primary-400": "#FF963C",
        "primary-500": "#EA6C00",
        "secondary-300": "#8FE9D0",
        "dark-600": "#2E2E2E",
        "dark-500": "#414141",
        "dark-400": "#777",
      },
      backgroundImage: {
        "achievement-rate": "linear-gradient(225deg,rgba(255,204,33,0.99), rgba(255,150,60,0.99)), url('/assets/images/meal/meal-01.jpg')",
        "gradient": "linear-gradient(33deg, rgba(255,204,33,0.99), rgba(255,150,60,0.99))",
        "gradient-rev": "linear-gradient(33deg, rgba(255,150,60,0.99), rgba(255,204,33,0.99))",
      },
      dropShadow: {
        "primary": "0px 0px 6px #FC7400"
      }
    },
  },
  plugins: [],
};
