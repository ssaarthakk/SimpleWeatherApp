/** @type {import('tailwindcss').Config} */
export default {
  // Permanently enable dark theme via <html class="dark">
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px -15px rgba(0,0,0,0.5)',
        'soft-lg': '0 20px 40px -15px rgba(0,0,0,0.5)'
      }
    },
  },
  plugins: [],
}

