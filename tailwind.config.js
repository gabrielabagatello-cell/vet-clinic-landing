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
          DEFAULT: '#ec4899', // Pink-500
          light: '#fce7f3',   // Pink-100
          dark: '#be185d',    // Pink-700
        },
        secondary: {
          DEFAULT: '#ffffff', // White
        },
      },
    },
  },
  plugins: [],
}
