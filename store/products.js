export const state = () => ({
  products: [],
  product: {},
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
}

export const actions = {
  async GET_PRODUCTS({ commit }, category) {
    try {
      commit('ui/LOADING_TRUE', null, { root: true })
      let url

      if (!category) {
        url = 'https://fakestoreapi.com/products'
      } else {
        url = `https://fakestoreapi.com/products/category/${category}`
      }

      const res = await this.$axios.$get(url)

      if (!res.length) throw new Error('No Data Found')

      commit('SET_PRODUCTS', res)
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
