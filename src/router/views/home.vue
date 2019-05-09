<script>
import appConfig from '@src/app.config'
import Test from '@components/test.vue'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    Test,
  },
}
</script>

<template>
  <Layout>
    <h1>Home Page</h1>
    <Test text="Welcome" />
  </Layout>
</template>
