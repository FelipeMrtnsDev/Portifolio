/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
			"./index.html",
			"./src/**/*.{js,ts,jsx,tsx,mdx}"
		],
  plugins: [require("tailwindcss-animate")],
  theme: {
  	extend: {
  		fontFamily: {
  			nunito: [
  				'Nunito Sans"',
  				'sans-serif'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  		}
  	}
  },
}