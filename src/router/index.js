import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import NProgress from 'nprogress/nprogress'
import store from '@state/store'
import routes from './routes'
Vue.use(Router)

Vue.use(VueMeta, {
  keyName: 'page',
})

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

// // Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  // If this isn't an initial page load...
  NProgress.start()
  next()
})

// // When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
