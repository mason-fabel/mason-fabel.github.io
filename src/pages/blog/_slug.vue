<template>
	<article>
		<h1>{{ article.title }}</h1>
		<p>{{ article.description }}</p>
		<nuxt-content :document="article" />
		<p>Posted on {{ formatDate(article.createdAt) }}</p>
	</article>
</template>

<script>
	export default {
		async asyncData({ $content, params }) {
			const article = await $content('blog', params.slug).fetch();

			return { article }
		},
		methods: {
			formatDate(date) {
				return new Date(date)
					.toLocaleDateString('en', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					});
			}
		},
	}
</script>
