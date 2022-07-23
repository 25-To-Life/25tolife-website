import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	],
	files: {
		assets: 'src/lib/assets',
		lib: 'src/lib'
	}
};

export default config;
