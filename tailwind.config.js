// tailwind.config.js
module.exports = {
  // mode: 'jit',

  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],

  darkMode: "media", // or 'class'

  theme: {
    extend: {
      fontFamily: {
        atkinson: ["Atkinson Hyperlegible", "system-ui"],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
