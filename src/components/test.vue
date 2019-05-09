<script>
export default {
  name: 'Test',
  props: {
    text: {
      type: String,
      required: false,
    },
  },
}
</script>

<template>
  <div class="test">
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
