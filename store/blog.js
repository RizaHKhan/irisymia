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
    console.log('called')
    commit('ui/LOADING_TRUE', null, { root: true })
    try {
      console.log('before')
      console.log(this.$prismic)
      const blogs = await this.$prismic.api.getSingle('blog_post')
      // this.$prismic.client
      //   .previewSession(previewToken, this.$prismic.linkResolver, '/')
      //   .then((url) => {
      //     window.location.replace(url)
      //   })
      console.log('after')
      console.log(blogs)

      commit('SET_BLOGS', blogs)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      console.log(e)
      commit('ui/LOADING_FALSE', null, { root: true })
    }
  },
}
export const getters = {
  GET_BLOGS: (state) => state.blogs,
  GET_BLOG: (state) => state.blog,
}
