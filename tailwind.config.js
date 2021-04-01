module.exports = {
  purge: {
    enabled: false,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#3B4ACC",
        "text-blue": "#05A4DB",
        "light-blue": "#00B1EF",
        "light-blue2": "#C9F1FF",
        "light-gray": "#E9F6FB",
        dark: "#363636",
        dark2: "#454545",
        dark3: "#535353",
        "border-light": "#E0E0E0",
        paragraph: "#A8A8A8",
        pink: "#BD3E96",
        "light-pink": "#FFAAE5",
        "footer-link": "#959595",
        orange: "#F3752E",
        "item-text": "#4B4B4B",
      },
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        gloria: "'Gloria Hallelujah', cursive",
      },
      boxShadow: {
        1: "0px 30px 100px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
