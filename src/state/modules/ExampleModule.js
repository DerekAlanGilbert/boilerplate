import axios from 'axios'

const state = {
  exampleData: [
    'Wilson',
    'Carson',
    'Griffin',
    'Chancellor',
    'Sherman',
    'Thomas',
    'Baldwin',
  ],
}

const getters = {
  allExampleData: (state) => state.exampleData,
}
const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
}
