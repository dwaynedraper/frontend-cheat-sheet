/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Exo 2', 'sans-serif'],
      },
      height: {
        'one-fifty': '150vh',
        'double': '200vh'
      }
    },
    backgroundPosition: {
      'horizon': 'center right 25%',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    darkTheme: "night",
  },
}
