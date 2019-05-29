import Vue from 'vue'
import Vuex from 'vuex'
import Example from './modules/ExampleModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Example,
  },
})
