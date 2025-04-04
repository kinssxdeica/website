/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutal-pink': '#FF00FF',
        'brutal-blue': '#0066FF',
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
        'display': ['Arial Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 