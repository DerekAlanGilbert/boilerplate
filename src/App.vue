<script>
import appConfig from '@src/app.config'

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
}
</script>

<template>
  <div id="app">
    <RouterView :key="$route.fullPath"></RouterView>
  </div>
</template>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import '~nprogress/nprogress.css';
@import '@design';
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
