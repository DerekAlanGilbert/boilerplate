<script>
import appConfig from '@src/app.config'
import Content from '@components/content'
import Layout from '@layouts/main'

export default {
	mounted() {
		console.log('hello from homepage')
	},
	page: {
		title: 'Home',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout,
		Content,
	},
}
</script>

<template>
	<Layout>
		<h1>Home</h1>
		<Content msg="Welcome to this enterprise vue starter"/>
	</Layout>
</template>
