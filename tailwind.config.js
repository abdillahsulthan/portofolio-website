/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#272727',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}