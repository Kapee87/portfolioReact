/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('https://previews.123rf.com/images/belchonoksun/belchonoksun1406/belchonoksun140600053/29464432-hermoso-fondo-de-t%C3%A9cnica-sin-patr%C3%B3n-con-c%C3%B3digo-de-programaci%C3%B3n-en-un-fondo-azul.jpg')"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

