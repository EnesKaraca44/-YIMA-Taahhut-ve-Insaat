/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: '#0B111E',
          midnightDark: '#070A12',
          navy: '#121B2D',
          navyLight: '#1B273F',
          sand: '#F6F4EE',
          sandLight: '#FAF9F5',
          sandDark: '#ECE7DB',
          stone: '#78716C',
          amber: '#C89D4B',
          amberLight: '#E5BE72',
          amberDark: '#A67C2E',
          slate: '#334155',
          slateLight: '#64748B',
          charcoal: '#1E293B',
          borderLight: '#E5E1D8',
          borderDark: '#222E46'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 10px 30px -5px rgba(11, 17, 30, 0.06), 0 2px 6px -1px rgba(11, 17, 30, 0.03)',
        'card-hover': '0 25px 50px -12px rgba(11, 17, 30, 0.15), 0 6px 16px -4px rgba(11, 17, 30, 0.05)',
        'card-dark': '0 15px 35px -5px rgba(0, 0, 0, 0.5)',
        'glow-amber': '0 0 25px rgba(200, 157, 75, 0.25)',
      }
    },
  },
  plugins: [],
}
