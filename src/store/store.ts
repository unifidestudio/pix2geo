import { createStore } from 'vuex'
const defaultState = {
  userName: '',
}
// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    userName(state: typeof defaultState, p: string) {
      state.userName = p
    },
  },
  actions: {
    userName(context, p: string) {
      context.commit('userName', p)
    },
  },
  getters: {
    userName(state: typeof defaultState) {
      return state.userName
    },
  },
})
