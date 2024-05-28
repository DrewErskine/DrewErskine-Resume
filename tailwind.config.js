// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#121212',
        'lighter-deep-space': '#181818',
        'deep-green': '#4A705C',
        'void-purple': '#5D3A9B',
        'pastel-purple': '#C5A3FF',
        'pastel-pink': '#FFB6C1',
        'pastel-turquoise': '#AFEEEE',
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
