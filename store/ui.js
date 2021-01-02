export const state = () => ({
  navigationBar: false,
  loading: true,
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
}

export const getters = {
  navigationBarState: (state) => state.navigationBar,
  loadingState: (state) => state.loading,
}
