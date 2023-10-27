/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#ffffff',
        secondary: '#000000',
        topbanner: '#FFCAD4',
        background: '#5F4E41',
        footer: '#7A5C58',
      },
      backgroundImage: {
        'hero-img': "url('./assets/images/herobg.png')",
        'location-img': "url('./assets/images/locationbg.png')",
        'more-img': "url('./assets/images/more-bg.png')",
        'banner-img': "url('./assets/images/subbanner.png')"
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}
