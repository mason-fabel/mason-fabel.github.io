export default {
	target: 'static',
	modules: [
		'@nuxt/content'
	],
	buildModules: [
		'@nuxtjs/vuetify'
	],
	generate: {
		dir: '../docs'
	},
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		treeShake: true,
		theme: {
			options: {
				customProperties: true,
			},
			themes: {
				light: {
					// primary: '#342e37',
					// secondary: '#274754',
					// accent: '#f8333c', // also #47ceff
					// background: '#eff6e0'
				},
				dark: {
				}
			}
		}
	}
}
