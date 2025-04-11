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
        'deep-space': '#2E2A33',
        'lighter-deep-space': '#3A3540',
        'deep-green': 'rgb(74, 112, 92)',
        'void-purple': '#5D3A9B',
        'pastel-purple': '#C5A3FF',
        'pastel-pink': '#FFB6C1',
        'pastel-turquoise': '#AFEEEE',
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
