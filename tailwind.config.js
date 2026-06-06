/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        accent: '#2997ff',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '80px',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [],
};
