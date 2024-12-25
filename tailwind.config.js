/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: {

      colors : {
        'bannerCol' : '#263640',
      },
      fontFamily :{
        "Agbalumo" :["Cormorant Garamond", "serif"],
        "serif" : ["Cormorant Garamond", 'serif']
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '8rem',
          '2xl': '10rem',
        },
        
      },
    },
  },
  plugins: [],
}