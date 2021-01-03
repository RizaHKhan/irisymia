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
  GET_PRODUCTS({ commit }, category) {
    return new Promise((resolve, reject) => {
      commit('ui/LOADING_TRUE', null, { root: true })
      let url
      if (!category) {
        url = 'https://fakestoreapi.com/products'
      } else {
        url = `https://fakestoreapi.com/products/category/${category}`
      }
      this.$axios
        .$get(url)
        .then((res) => {
          if (!res.length) reject(new Error('No Data Found'))

          commit('SET_PRODUCTS', res)
          commit('ui/LOADING_FALSE', null, { root: true })
          resolve()
        })
        .catch((e) => {
          commit('ui/LOADING_FALSE', null, { root: true })
          reject(new Error(e))
        })
    })
  },
  async GET_PRODUCT({ commit }, product) {
    commit('ui/LOADING_TRUE', null, { root: true })
    try {
      const url = `https://fakestoreapi.com/products/${product}`
      const response = await this.$axios.$get(url)
      console.log(response)

      commit('SET_PRODUCT', response)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE')
    }
  },
}
export const getters = {
  GET_PRODUCTS: (state) => state.products,
  GET_PRODUCT: (state) => state.product,
}
