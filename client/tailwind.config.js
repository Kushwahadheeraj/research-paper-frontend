/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],

  theme: {
    extend: {
      transitionDelay: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar'),]
}

