<template>
	<v-app class="home-page">
		<v-app-bar dense dark>
			<v-toolbar-title>
				Mason Fabel
			</v-toolbar-title>
			<v-navigation-drawer>
			</v-navigation-drawer>
		</v-app-bar>
		<v-main>
			<v-container>
				<h1>Hello world!</h1>
				<p>Site under construction</p>

				<h2>Links</h2>
				<ul>
					<li><NuxtLink to="/about">About Me</NuxtLink></li>
					<li><NuxtLink to="/projects">Projects</NuxtLink></li>
					<li><NuxtLink to="/resume">Resume</NuxtLink></li>
				</ul>
			</v-container>
		</v-main>
	</v-app>
</template>
