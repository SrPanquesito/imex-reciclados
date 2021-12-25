module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        "white-rgb": "rgb(255 255 255 / 98%)",
        "imex-blue": "#eef5ff"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}
