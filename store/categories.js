export const state = () => ({
  categories: [],
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async GET_CATEGORIES({ commit }) {
    try {
      const { results } = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'categories')
      )
      commit('SET_CATEGORIES', results)
    } catch (e) {}
  },
}
export const getters = {
  GET_CATEGORIES: (state) => state.categories,
}
