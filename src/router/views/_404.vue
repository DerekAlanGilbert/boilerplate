<script>
import Layout from '@layouts/nonav'

export default {
	page: {
		title: '404',
		meta: [{ name: 'description', content: '404' }],
	},
	components: { Layout },
	props: {
		resource: {
			type: String,
			default: '',
		},
	},
}
</script>

<template>
	<Layout>
		<div :class="$style.title">
			<h1>
				404
				<template v-if="resource">{{ resource }}</template>
				Not Found
			</h1>
			<router-link to="/">return home</router-link>
		</div>
	</Layout>
</template>

<style lang="scss" module>
.title {
	text-align: center;
}
</style>
