/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          50: '#f2f9f1',
          100: '#e1f3df',
          200: '#c5e7c2',
          300: '#98d494',
          400: '#64b960',
          500: '#3f9d3b',
          600: '#2f7f2c',
          700: '#276425',
          800: '#235022',
          900: '#1e421d',
          950: '#0c240c',
        },
        earth: {
          50: '#fbf7ee',
          100: '#f5ecd6',
          200: '#ebd7ab',
          300: '#dfbc78',
          400: '#d29f4b',
          500: '#c2832c',
          600: '#a76623',
          700: '#844a1f',
          800: '#6d3d1f',
          900: '#5c341d',
        }
      },
      fontFamily: {
        kannada: ['Noto Sans Kannada', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
