import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: JSON.stringify(localStorage.getItem('token')),
    user: JSON.parse(localStorage.getItem('user')),
    mvUrl:JSON.stringify(localStorage.getItem('mvUrl'))
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    },
    setUser(state, data) {
      state.user = data
    },
    setMvUrl(state, data) {
      state.mvUrl = data
    }
  },
  actions: {}
})
export default store
