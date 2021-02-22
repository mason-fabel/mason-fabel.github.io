<template>
	<v-app>
		<v-app-bar app dense flat>
			<v-toolbar-title>{{ title }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn text
					v-for="link of navLinks"
					:key="link.title"
					:to="link.path">
					<v-icon>{{ link.icon }}</v-icon>
					{{ link.title }}
				</v-btn>
			</v-toolbar-items>
		</v-app-bar>

		<v-main>
			<v-container fluid>
				<nuxt />
			</v-container>
		</v-main>

		<v-footer app>
			<v-btn text
				v-for="link of socialLinks"
				:key="link.title"
				:href="link.path">
				<v-icon>{{ link.icon }}</v-icon>
				{{ link.title }}
			</v-btn>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			title: 'Mason Fabel',
			navLinks: [
				{ title: 'Home', path: '/', icon: 'mdi-home' },
				{ title: 'Projects', path: '/projects', icon: 'mdi-hammer-wrench' },
				{ title: 'Blog', path: '/blog', icon: 'mdi-book-open-page-variant' },
				// { title: 'Resume', path: '/resume', icon: 'mdi-file-document' },
			],
			socialLinks: [
				{
					title: 'LinkedIn',
					path: 'https://www.linkedin.com/in/mason-fabel',
					icon: 'mdi-linkedin'
				},
				{
					title: 'GitHub',
					path: 'https://github.com/mason-fabel',
					icon: 'mdi-github'
				},
			],
		};
	},
}
</script>
