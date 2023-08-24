/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        linkColor: '#B7013B',
        hoverColor: '#D94567',
        footerColor: '#7e7e7e',
        footer : '#111111' 
      },
    },
  },
  plugins: [],
}