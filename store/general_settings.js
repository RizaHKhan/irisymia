export const state = () => ({
  dates_not_deliverable: [],
})

export const mutations = {
  WIPE_SETTINGS(state) {
    state.settings = []
  },
  ADD_SETTINGS(state, settings) {
    state.dates_not_deliverable = settings[0].dates_not_deliverable.map(
      (dates) => dates.date
    )
  },
}

export const actions = {
  async GET_GENERAL_SETTINGS({ commit }) {
    try {
      commit('WIPE_SETTINGS')

      const { results } = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'general_settings')
      )

      commit(
        'ADD_SETTINGS',
        results.map((result) => result.data)
      )
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
      throw e
    }
  },
}

export const getters = {
  GET_DATES_NOT_DELIVERABLE: (state) => state.dates_not_deliverable,
}
