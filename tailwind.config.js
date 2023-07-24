/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilda: ['Gilda Display', 'serif'],
        barlow: ['Barlow', 'serif'],
        condensed: ['Barlow', 'serif'],
      },
      colors: {
        primary: '#AA8453',
        whiteGold: '#F8F5F0',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['aqua'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'aqua',
  },
};
