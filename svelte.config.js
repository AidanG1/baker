import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				dedupe: ['@fullcalendar/common'],
			},
			optimizeDeps: {
				include: ['@fullcalendar/common'],
			},
		},
	}
};

export default config;
