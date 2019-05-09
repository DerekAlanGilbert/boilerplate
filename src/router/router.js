import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
Vue.use(Router)

Vue.use(VueMeta, {
  keyName: 'page',
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@views/home').default,
    },
  ],
})
