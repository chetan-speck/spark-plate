// ------------------------------------------------------------------------------------------

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import react from '@vitejs/plugin-react';

// ------------------------------------------------------------------------------------------

export default defineConfig({
	base: './',
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: false,
			},
			includeAssets: [],
			manifest: {
				name: 'Spark Plate',
				short_name: 'Spark Plate',
				description:
					'A minimal and blazing-fast starter template for building modern React frontends using Vite, TailwindCSS, TypeScript, ESLint, and Prettier.',
				start_url: '/',
				display: 'standalone',
				background_color: '#f8fafc',
				theme_color: '#0ea5e9',
				scope: '/',
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,mp3}'],
				globDirectory: 'dist/',
				globIgnores: [],
				maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
			},
		}),
	],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	build: {
		target: 'es2015',
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
		minify: 'esbuild',
		cssCodeSplit: true,
	},
	esbuild: {
		drop: ['console', 'debugger'],
	},
});

// ------------------------------------------------------------------------------------------
