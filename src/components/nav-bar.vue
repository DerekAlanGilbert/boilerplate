<script>
export default {}
</script>

<template>
	<nav class="navbar">
		<router-link to="/">Home</router-link>
		<router-link to="about">About</router-link>
		<router-link to="not-a-real-route">404 example</router-link>
	</nav>
</template>

<style lang="scss" scoped>
@import '@design';
.navbar {
	display: flex;
	padding: $p-1;
	a {
		color: $color-text;
		text-decoration: none;
		margin: 0 0 1rem 1rem;
		&.router-link-exact-active {
			color: $homie-green;
		}
	}
}
</style>
