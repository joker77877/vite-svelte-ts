import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		AutoImport({
			include: [/\.[tj]s?$/, /\.svelte\??/],
			imports: [
				'svelte',
			],
			dts: true,
			// dirs: [
			// 	'./src/components',
			// ]
		})
	]
});
