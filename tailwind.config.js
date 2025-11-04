/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Blue-600
          light: '#60a5fa',   // Blue-400
          dark: '#1e40af',    // Blue-800
        },
        secondary: {
          DEFAULT: '#ffffff', // White
        },
      },
    },
  },
  plugins: [],
}
