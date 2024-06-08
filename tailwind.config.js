/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          soft_blue: "#a8dadc",
          muted_green: "#8ecae6",
        },
        secondary: {
          light_gray: "#f1faee",
          warm_beige: "#ffddd2",
        },
        accent: {
          dusty_rose: "#e5989b",
          pale_gold: "#f4a261",
        },
        txt: {
          dark_green: "#333",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}