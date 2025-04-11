/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 0, 0)',
        secondary: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
  