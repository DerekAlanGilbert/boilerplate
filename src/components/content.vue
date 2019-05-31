<script>
export default {
	name: 'Content',
	props: {
		msg: {
			type: String,
			required: false,
			default: () => 'Place a msg in your text prop',
		},
	},
}
</script>

<template>
	<div class="content">
		<p v-if="msg">{{ msg }}</p>
	</div>
</template>

<style scoped lang="scss">
</style>
