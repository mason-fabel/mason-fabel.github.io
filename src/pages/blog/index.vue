<template>
	<div>
		<h1>Projects</h1>
		<ul>
			<li v-for="article of articles"
				:key="article.slug">
				<NuxtLink :to="{ name: 'projects-slug', params: { slug: article.slug } }">
					<h2>{{ article.title }}</h2>
					<p>{{ article.description }}</p>
				</NuxtLink>
				<p>Tagged:
					<ul>
						<li v-for="tag of article.tags">
							<NuxtLink to="#">
								{{ tag }}
							</NuxtLink>
						</li>
					</ul>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		async asyncData({ $content, params }) {
			const articles = await $content('blog', params.slug)
				.only(['slug', 'title', 'description', 'tags'])
				.sortBy('createdAt', 'asc')
				.fetch();

			return { articles };
		}
	}
</script>
