export const state = () => ({
  customFields: [],
})

export const mutations = {
  WIPE_CUSTOM_FIELDS(state) {
    state.custom_fields = []
  },
  ADD_CUSTOM_FIELDS(state, customFields) {
    state.customFields = customFields
  },
}

export const actions = {
  async GET_PRODUCT_CUSTOM_FIELDS({ commit }, customFields = []) {
    try {
      commit('WIPE_CUSTOM_FIELDS')

      const { results } = await this.$prismic.api.query(
        this.$prismic.predicates.in('document.id', customFields)
      )

      commit(
        'ADD_CUSTOM_FIELDS',
        results.map((result) => result.data)
      )
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
      throw e
    }
  },
}

export const getters = {
  GET_CUSTOM_FIELDS: (state) => state.customFields,
}
