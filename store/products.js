export const state = () => ({
  products: [],
  product: {},
})

export const mutations = {
  SET_PRODUCTS(state, product) {
    state.products.push(product)
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
}

export const actions = {
  async GET_PRODUCTS_BY_PAGE({ commit }, page) {
    try {
      commit('ui/LOADING_TRUE', null, { root: true })

      const products = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'product'),
        { page: 1 }
      )

      commit('SET_PRODUCTS', products.results)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
      throw e // this allows us to hit the catch block in asyncData
    }
  },
  // eslint-disable-next-line
  async GET_PRODUCTS_BY_CATEGORY({ commit }, categories = []) {
    try {
      commit('ui/LOADING_TRUE', null, { root: true })

      const promises = categories.map(async (category) => {
        const { results } = await this.$prismic.api.query(
          this.$prismic.predicates.at('my.product.category', category)
        )
        return results
      })

      const results = await Promise.all(promises)

      results.map((r) => {
        r.forEach((obj) => {
          commit('SET_PRODUCTS', obj)
        })
      })

      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
      throw e // this allows us to hit the catch block in asyncData
    }
  },
  async GET_PRODUCT({ commit }, product) {
    try {
      commit('ui/LOADING_TRUE', null, { root: true })
      const url = `https://fakestoreapi.com/products/${product}`
      const res = await this.$axios.$get(url)

      if (!res) throw new Error('No Data Found')

      commit('SET_PRODUCT', res)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
      throw e
    }
  },
}
export const getters = {
  GET_PRODUCTS: (state) => state.products,
  GET_PRODUCTS_BY_CATEGORY: (state) => state.products,
  GET_PRODUCT: (state) => state.product,
}
