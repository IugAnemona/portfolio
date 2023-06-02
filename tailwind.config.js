/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': "#001220"
      },
      backgroundImage: theme => ({
        'main': 'url("/src/components/SectionContent/AnimatedShape.svg")',
      }),
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

