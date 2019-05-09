<script>
// import NavBar from '@components/nav-bar'

export default {
  // components: { NavBar },
}
</script>

<template>
  <div :class="$style.container">
    <!-- <NavBar/> -->
    <slot />
  </div>
</template>

<style lang="scss" module>
// @import '@design';

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
