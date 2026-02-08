/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scuderia-red': '#e30613',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        accent: ['Bebas Neue', 'cursive'],
      },
      animation: {
        'subtle-zoom': 'subtle-zoom 30s ease-in-out infinite',
        'drift': 'drift 40s linear infinite',
      },
      keyframes: {
        'subtle-zoom': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'drift': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
