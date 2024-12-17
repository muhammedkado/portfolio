/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e7ff',
          300: '#66d3ff',
          400: '#1ab8ff',
          500: '#00a3ff',
          600: '#0087d8',
          700: '#006cab',
          800: '#00578c',
          900: '#004974',
        },
        secondary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7916ff',
          700: '#6b04fd',
          800: '#5a03d5',
          900: '#4b02ae',
        },
        accent: {
          50: '#edfcf6',
          100: '#d3f8e7',
          200: '#aaf0d3',
          300: '#73e2b7',
          400: '#3acc96',
          500: '#15b37c',
          600: '#0c8f64',
          700: '#0b7252',
          800: '#0c5a43',
          900: '#0a4a37',
        }
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}