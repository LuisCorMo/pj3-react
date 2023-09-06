/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "wallpaper":"url('/images/backgroundHeader.png')",
        "page":"url('/images/backgroundPage.png')"
      }
    },
  },
  plugins: [],
}

