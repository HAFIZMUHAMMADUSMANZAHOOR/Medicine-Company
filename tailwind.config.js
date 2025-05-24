/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9fc',
          100: '#d9f1f9',
          200: '#b8e4f2',
          300: '#8ad0e8',
          400: '#54b7da',
          500: '#2f9dc3',
          600: '#1a5f7a', // Main primary
          700: '#154f68',
          800: '#154359',
          900: '#16374a',
          950: '#0e2431',
        },
        secondary: {
          50: '#eefcfa',
          100: '#d6f7f3',
          200: '#b1efea',
          300: '#81e4da',
          400: '#57c5b6', // Main secondary
          500: '#31a999',
          600: '#238a7e',
          700: '#1f7066',
          800: '#1c5954',
          900: '#1a4a47',
          950: '#0a2a28',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#159895', // Main accent
          600: '#0d7573',
          700: '#115e59',
          800: '#134e4a',
          900: '#0a3a3a',
          950: '#042f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
};