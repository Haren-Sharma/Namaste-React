// tailwind.config.js
export default {
  darkMode: "class", // or "media"
  content: [
    "./index.html",       // if you have plain HTML
    "./src/**/*.{js,ts,jsx,tsx}", // React/Vite/Next.js files
  ],
  theme: {
    extend: {}, // where we add customizations
  },
  plugins: [],
}
