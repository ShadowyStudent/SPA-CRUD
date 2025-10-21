module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gothic: {
          900: '#0f1113',
          800: '#1b1d20',
          700: '#2b2e33',
          600: '#3a3e44',
          500: '#6b2630',
          400: '#7f2b3e',
          300: '#c49a6c',
          200: '#9e9ea0'
        }
      },
      boxShadow: {
        gloom: '0 10px 30px rgba(10,10,10,0.5), inset 0 -4px 8px rgba(0,0,0,0.3)'
      },
      fontFamily: {
        gothicSerif: ['Merriweather', 'Georgia', 'serif'],
        gothicSans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        parchment: "url('/assets/parchment-tiles.png')"
      },
      borderWidth: {
        '1.5': '1.5px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
