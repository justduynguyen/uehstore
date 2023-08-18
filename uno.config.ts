import presetWebFonts from '@unocss/preset-web-fonts';
import { defineConfig, presetUno } from 'unocss';
export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				raleway: 'Raleway',
				mali: 'Mali',
				bungee: 'Major Mono Display',
				pacifo: 'Pacifico',
				comfortaa: 'Comfortaa',
			},
		}),
		// ...
	],
});
