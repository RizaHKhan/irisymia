export const state = () => ({
  categories: [],
  category: {},
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async GET_CATEGORIES({ commit }) {
    commit('ui/LOADING_TRUE', null, { root: true })
    try {
      const categories = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'categories')
      )

      commit('SET_CATEGORIES', categories.results)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE')
    }
  },
}
export const getters = {
  GET_CATEGORIES: (state) => state.categories,
}
