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
  GET_PRODUCT({ commit }, product) {
    return new Promise((resolve, reject) => {
      commit('ui/LOADING_TRUE', null, { root: true })
      const url = `https://fakestoreapi.com/products/${product}`
      this.$axios
        .$get(url)
        .then((res) => {
          if (!res) reject(new Error('No Data Found'))

          commit('SET_PRODUCT', res)
          commit('ui/LOADING_FALSE', null, { root: true })
          resolve()
        })
        .catch((e) => {
          commit('ui/LOADING_FALSE', null, { root: true })
          reject(new Error(e))
        })
    })
  },
}
export const getters = {
  GET_PRODUCTS: (state) => state.products,
  GET_PRODUCT: (state) => state.product,
}
