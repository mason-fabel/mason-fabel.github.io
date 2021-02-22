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
	}
}
