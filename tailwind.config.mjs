/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "var(--primary-color)",
				"secondary-color": "var(--secondary-color)",
				"secondary-bg-color": "var(--secondary-bg-color)",
				"cta-color": "var(--cta-color)",
			},
		},
	},
	plugins: [],
}
