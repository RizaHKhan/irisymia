export const state = () => ({
  blogs: [],
  blog: {},
})

export const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs
  },
  SET_BLOG(state, blog) {
    state.blog = blog
  },
}

export const actions = {
  async GET_BLOGS({ commit }) {
    commit('ui/LOADING_TRUE', null, { root: true })
    try {
      const response = await this.$axios.$get(
        'https://dummyapi.io/data/api/post'
      )

      commit('SET_BLOGS', response)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
    }
  },
}
export const getters = {
  GET_BLOGS: (state) => state.blogs,
  GET_BLOG: (state) => state.blog,
}
