/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff10f0',
          blue: '#00f0ff',
          purple: '#b429f9',
          green: '#39ff14',
          yellow: '#ffff00',
        }
      },
      boxShadow: {
        'neon-pink': '0 0 10px #ff10f0, 0 0 20px #ff10f0, 0 0 30px #ff10f0',
        'neon-blue': '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff',
        'neon-purple': '0 0 10px #b429f9, 0 0 20px #b429f9, 0 0 30px #b429f9',
        'neon-green': '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41%': { opacity: '1' },
          '42%': { opacity: '0.8' },
          '43%': { opacity: '1' },
          '45%': { opacity: '0.9' },
          '46%': { opacity: '1' },
        },
        'pulse-neon': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.5)' },
        }
      }
    },
  },
  plugins: [],
}