<template>
	<v-app class="js-test-page">
		<v-app-bar app>
			<v-app-bar-title>Vue Testing</v-app-bar-title>
		</v-app-bar>
		<v-main>
			<v-container>
				<h1>Reactivity and style testing</h1>
				<p>Click the button!</p>
				<v-btn block
					:color="clicked ? 'error' : 'primary'"
					@click="handleClick">
					{{ clicked ? 'SELECTED' : 'unselected' }}
				</v-btn>
				<NuxtLink to="/">Back</NuxtLink>
			</v-container>
		</v-main>
	</v-app>
</template>

<style lang="scss" scoped>
.js-test {
}
</style>

<script>
const default_data = {
	clicked: false,
};

export default {
	data() {
		return default_data;
	},
	methods: {
		handleClick() {
			this.clicked = !this.clicked;
		},
	},
}
</script>
