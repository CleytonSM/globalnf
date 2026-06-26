/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#A52555',
          dark: '#8a1e46',
          light: '#c4477a',
        },
        navy: {
          DEFAULT: '#0A2D51',
          dark: '#071f38',
          light: '#0e3d6e',
        },
        green: {
          DEFAULT: '#006826',
          dark: '#004d1c',
          light: '#008530',
        },
        neutral: '#F5F5F5',
        dark: '#1A1A1A',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
}
