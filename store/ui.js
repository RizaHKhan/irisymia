export const state = () => ({
  navigationBar: false,
  loading: true,
  snackMessage: '',
  snackColor: '',
})

export const mutations = {
  TOGGLE_NAVIGATIONDRAWER(state) {
    state.navigationBar = !state.navigationBar
  },
  LOADING_TRUE(state) {
    state.loading = true
  },
  LOADING_FALSE(state) {
    state.loading = false
  },
  ADD_MESSAGE_TO_SNACKBAR(state, { message, color }) {
    state.snackMessage = message
    state.snackColor = color
  },
}

export const getters = {
  GET_NAVIGATION_STATE: (state) => state.navigationBar,
  GET_LOADING_STATE: (state) => state.loading,
}
