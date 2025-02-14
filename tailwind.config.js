/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        text: "var(--text)",
        border: "var(--border)",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
        "border-dance": "border-dance 4s linear infinite",
      },
      zIndex: {
        1000: "1000",
      },
      keyframes: {
        "border-dance": {
          "0%, 100%": {
            "clip-path": "inset(0 0 98% 0)",
          },
          "25%": {
            "clip-path": "inset(0 98% 0 0)",
          },
          "50%": {
            "clip-path": "inset(98% 0 0 0)",
          },
          "75%": {
            "clip-path": "inset(0 0 0 98%)",
          },
        },
      },
    },
  },
  plugins: [],
};
