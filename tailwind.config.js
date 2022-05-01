/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
      },
      screens: {
        "3xl": "1800px",
        '4xl': "2020px",
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(5vh)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        'rocket-nft-background': "#0e0e0e",
        'rocket-logo-color': "#ff5b50",
        'rocket-card-color': "#252525",
        'rocket-text-color': "#fff",
        'rocket-subtitle-color': "#5a5757",
        'rocket-input-color':  "#0D0D0D",
      }
    },
    fontFamily: {
      sans: ['Montserrat ', 'sans-serif'],
      serif: ['Montserrat ', 'serif'],
    }
  },
  plugins: []
}
