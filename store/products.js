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
  WIPE_PRODUCTS(state) {
    state.products = []
  },
  WIPE_PRODUCT(state) {
    state.product = {}
  },
}

export const actions = {
  async GET_PRODUCTS_BY_PAGE({ commit }, page) {
    try {
      commit('ui/LOADING_TRUE', null, { root: true })
      commit('WIPE_PRODUCTS')

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
  async GET_PRODUCTS_BY_CATEGORY({ commit }, categories = []) {
    try {
      commit('ui/LOADING_TRUE', null, { root: true })
      commit('WIPE_PRODUCTS')

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
  async GET_PRODUCT_BY_UID_AND_CATEGORY({ commit }, { category, product }) {
    try {
      commit('ui/LOADING_TRUE', null, { root: true })
      commit('WIPE_PRODUCT')

      const { results } = await this.$prismic.api.query([
        this.$prismic.predicates.at('my.product.uid', product),
      ])

      if (results[0].data.category.uid !== category) {
        throw new Error('Item not available category')
      }

      commit('SET_PRODUCT', results[0])
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
