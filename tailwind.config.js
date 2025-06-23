/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // include all file types you're using
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#6366f1",   // Indigo
        accent: "#38bdf8",    // Sky Blue
        dark: "#0f172a",      // Slate-900
      },
      boxShadow: {
        card: "0 4px 14px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
