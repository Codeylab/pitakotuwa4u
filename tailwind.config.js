module.exports = {
  purge: {
    enabled: false,
    content: ["./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-gray": "#E9F6FB",
        dark: "#363636",
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
