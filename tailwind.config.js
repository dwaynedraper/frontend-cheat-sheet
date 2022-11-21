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
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": '#00FFFF'
          // primary: 'aqua',
          // 'primary-focus': '#ff0000',
          // 'primary-content': '#ffffff',
          // secondary: '#ff0000',
          // 'secondary-focus': '#ff0000',
          // 'secondary-content': '#ffffff',
          // accent: '#ff0000',
          // 'accent-focus': '#ff0000',
          // 'accent-content': '#ffffff',
          // neutral: '#ff0000',
          // 'neutral-focus': '#ff0000',
          // 'neutral-content': '#ffffff',
          // 'base-100': '#ff0000',
          // 'base-200': '#ff0000',
          // 'base-300': '#ff0000',
          // 'base-content': '#ffffff',
          // info: '#ff0000',
          // 'info-content': '#ffffff',
          // success: '#ff0000',
          // 'success-content': '#ffffff',
          // warning: '#ff0000',
          // 'warning-content': '#ffffff',
          // error: '#ff0000',
          // 'error-content': '#ffffff',
        },
      },
    ],
    // base: true,
  },
  plugins: [require("daisyui")],
}
