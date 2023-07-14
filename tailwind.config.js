/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '80px',
      'large': '12px',
    },
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 1s ease-in-out infinite',
      },
      fontSize:{
        '10xl': '10rem',
      }
    },
  },
  plugins: [],
}
