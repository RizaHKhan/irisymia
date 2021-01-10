export const state = () => ({
  navigationBar: false,
  loading: true,
  snackbarMessages: [],
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
  ADD_MESSAGE_TO_SNACKBAR(state, message) {
    state.snackbarMessages.push(message)
  },
  REMOVE_MESSAGE_FROM_SNACKBAR(state) {
    state.snackbarMessages.shift()
  },
}

export const getters = {
  GET_NAVIGATION_STATE: (state) => state.navigationBar,
  GET_LOADING_STATE: (state) => state.loading,
  GET_SNACKBAR_MESSAGES: (state) => state.snackbarMessages,
}
