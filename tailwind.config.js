module.exports = {
  purge: {
    enabled: false,
    content: ["./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "text-blue": "#05A4DB",
        "light-blue": "#00B1EF",
        "light-blue2": "#C9F1FF",
        "light-gray": "#E9F6FB",
        dark: "#363636",
        "border-light": "#E0E0E0",
        paragraph: "#A8A8A8",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
