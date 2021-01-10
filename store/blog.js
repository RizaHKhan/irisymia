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
      const blogs = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'blog_post'),
        { orderings: '[my.post.date desc]' }
      )

      commit('SET_BLOGS', blogs.results)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
      throw e
    }
  },
  async GET_BLOG({ commit }, uid) {
    commit('ui/LOADING_TRUE', null, { root: true })
    try {
      const blog = await this.$prismic.api.getByUID('blog_post', uid)
      commit('SET_BLOG', blog.data)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
      throw e
    }
  },
}
export const getters = {
  GET_BLOGS: (state) => state.blogs,
  GET_BLOG: (state) => state.blog,
}
