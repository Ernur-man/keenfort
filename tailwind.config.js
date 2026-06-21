/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f9ff',
          100: '#f1f3ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#312e81'
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          700: '#334155',
          900: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
      }
    }
  },
  plugins: []
}
