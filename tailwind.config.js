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
          navy: '#0B1528',
          'navy-light': '#162238',
          blue: '#1D4ED8',
          'blue-light': '#3B82F6',
          'blue-soft': '#EFF6FF',
          red: '#DC2626',
          'red-light': '#EF4444',
          orange: '#EA580C',
          'orange-light': '#F97316',
          green: '#16A34A',
          'green-light': '#22C55E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 30px -5px rgba(11, 21, 40, 0.08)',
        'card-hover': '0 20px 35px -5px rgba(29, 78, 216, 0.15)',
      }
    },
  },
  plugins: [],
}
