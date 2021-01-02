export const state = () => ({
  navigationBar: false,
})

export const mutations = {
  toggleNavigationDrawer(state) {
    state.navigationBar = !state.navigationBar
  },
}

export const getters = {
  navigationBarState: (state) => state.navigationBar,
}
