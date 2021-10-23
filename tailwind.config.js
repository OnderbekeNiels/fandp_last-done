// tailwind.config.js
module.exports = {
  mode: "jit",

  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],

  darkMode: "media", // or 'class'

  theme: {
    extend: {
      fontFamily: {
        atkinson: ["Atkinson Hyperlegible", "system-ui"],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        alpha: "#E57661",
        beta: "#8FD0B2",
        gamma: "#F8C567",
        delta: "#5789A3",
        epsilon: "#EF6D81",
      }),
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
