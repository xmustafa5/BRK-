/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        blue: {
          110: "#212b59",
          120: "#091242",
        },
        yellow: {
          120: "#FABA20",
        },
        black: {
          120: "#1C1F35",
        },
        gray: {
          20: "#f4f4f4",
          120: "#666C89",
        },
      },
    },
  },
  plugins: [],
};
