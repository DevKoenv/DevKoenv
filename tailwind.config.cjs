/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [
			{
				koenv: {
					primary: '#67CBA0',
					"primary-content": "#ffffff",
					secondary: '#661AE6',
					"secondary-content": "#ffffff",
					accent: '#D926AA',
					"accent-content": "#ffffff",
					neutral: '#191D24',
					"neutral-focus": "#111318",
					"neutral-content": "#A6ADBB",
					"base-100": "#2A303C",
					"base-200": "#242933",
					"base-300": "#20252E",
					"base-content": "#A6ADBB",
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',
				  },
			},
		],
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
