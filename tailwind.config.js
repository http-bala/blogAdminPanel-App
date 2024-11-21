/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#e0e5ec", // Light background
        darkBg: "#1e1e2f", // Dark background
        lightShadow: "#ffffff", // Light shadow for light mode
        darkShadow: "#121222", // Dark shadow for dark mode
        highlight: "#6b6fc0", // Highlight color for accent shadows
      },
      boxShadow: {
        neumorphismLight:
          "8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.7)",
        neumorphismDark:
          "8px 8px 16px rgba(0, 0, 0, 0.6), -8px -8px 16px rgba(107, 111, 192, 0.2)",
        innerLight:
          "inset 4px 4px 10px rgba(0, 0, 0, 0.1), inset -4px -4px 10px rgba(255, 255, 255, 0.5)",
        innerDark:
          "inset 4px 4px 10px rgba(0, 0, 0, 0.6), inset -4px -4px 10px rgba(107, 111, 192, 0.2)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}