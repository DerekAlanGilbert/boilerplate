import Vue from 'vue'
import App from './App.vue'
// Routing
import router from './router/router'
// State Management
import store from './state/store'
// Progressive Web Support
import './progressive/registerServiceWorker'
// Monitoring
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

Sentry.init({
  dsn: '', // provided in Sentry web app
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true,
    }),
  ],
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
