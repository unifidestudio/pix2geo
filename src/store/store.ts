import { createStore } from 'vuex'
const defaultState = {
  name: 'Loggedin User',
}
// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    name(state: typeof defaultState, p: string) {
      state.name = p
    },
  },
  actions: {
    name(context) {
      context.commit('name', 'Loggedin User')
    },
  },
  getters: {
    name(state: typeof defaultState) {
      return state.name
    },
  },
})
