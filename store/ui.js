export const state = () => ({
  navigationBar: true,
})

export const mutations = {
  toggleNavigationDrawer(state) {
    state.navigationBar = !state.navigationBar
  },
}

export const getters = {
  navigationBarState: (state) => state.navigationBar,
}
