/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transition: {
        'transition-lazy': 'all 300ms easy-in-out'
      },
      animation: {
        pop: 'pop 1s ease-in-out 1 normal forwards',
        fadeIn: 'fadeIn 1s ease-in-out 1 normal forwards',
        fadeOut: 'fadeOut 1s ease-in-out 1 normal forwards',
        fadeInSpin1: 'fadeInSpin 1s ease-in-out 1 normal forwards',
        fadeInSpin2: 'fadeInSpin 2s ease-in-out 1 normal forwards',
        fadeInSpin3: 'fadeInSpin 3s ease-in-out 1 normal forwards'
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2020px'
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(2vh)' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(2vh)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInSpin: {
          '0%': { opacity: 0, transform: 'rotate(0)' },
          '100%': { opacity: 1, transform: 'rotate(360deg)' }
        },
        pop: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      colors: {
        'rocket-nft-background': '#0e0e0e',
        'rocket-logo-color': '#ff5b50',
        'rocket-card-color': '#252525',
        'rocket-text-color': '#fff',
        'rocket-subtitle-color': '#5a5757',
        'rocket-input-color': '#0D0D0D'
      }
    },
    fontFamily: {
      sans: ['Montserrat ', 'sans-serif'],
      serif: ['Montserrat ', 'serif']
    }
  },
  plugins: []
}
