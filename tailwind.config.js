/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
  			michroma: [
  				'Michroma',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			teko: [
  				'Teko',
  				'sans-serif'
  			],
  			oxanium: [
  				'Oxanium',
  				'sans-serif'
  			],
  			play: [
  				'Play',
  				'sans-serif'
  			]
  		},
      backgroundImage: {
  			hero: 'url("/src/assets/header-logo.svg")',
			screen:'url("/src/assets/fullbg.jpg")',
  		},
    },
  },
  plugins: [],
}

