/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      rock: '#b69e31',
      ghost: '#70559b',
      steel: '#b7b9d0',
      water: '#6493eb',
      grass: '#74cb48',
      psychic: '#fb5584',
      ice: '#9ad6df',
      dark: '#75574c',
      fairy: '#e69eac',
      normal: '#aaa97f',
      fighting: '#c12239',
      flying: '#a891ec',
      poison: '#dec16b',
      bug: '#a7b723',
      fire: '#f57d31',
      electric: '#f9cf30',
      dragon: '#7037ff',
    },
    extend: {},
  },
  plugins: [],
};
