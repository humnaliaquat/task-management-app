// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"], // We’ll manually switch via class
  theme: {
    extend: {
      colors: {
        // Custom theme colors
        primary: {
          DEFAULT: "#6366f1", // fallback
          light: "#a5b4fc",
          dark: "#4338ca",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
