/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			backgroundImage: {
				'synthwave': "url('/images/synthwave-bg.jpg')",
				'alt-abstract': "url('/images/alt-abstract.jpg')",
				'pink-tapes': "url('/images/pink-tapes.jpg')",
				'dark-tape': "url('/images/dark-tape.jpg')",
			},
			fontSize: {
				'8xl': '6rem',
				'10xl': '8rem',
				'16xl': '14rem',
			},
			skew: {
				'24': '24deg',
				'-24': '-24deg',
			},
			rotate: {
				'24': '24deg',
				'-24': '-24deg',
			},
		},
	},
	plugins: [],
}
