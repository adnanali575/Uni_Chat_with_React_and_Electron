/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      gray: "#e1e1e1",
      "gray-1": "#c2c2c2",
      "gray-bg": "#f8f9fe",
      blue: "#1976D2",
      "blue-1": "#01579b",
      red: "#ff0000",
      yellow: "#ffe400",
      green: "#15b200",
      "green-1": "#108a00",
      "light-green": "#e3f9ec",
      "greenish-gray": "#f2f7f2",
      "text-gray": "#606266",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      xs: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
