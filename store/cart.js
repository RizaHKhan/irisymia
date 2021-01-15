export const state = () => ({
  cart: [1, 2],
  count: 0,
})

export const mutations = {
  COUNT_ITEMS_IN_CART(state, count) {
    console.log('state count', state.count)
    state.count = count
  },
}

export const getters = {
  GET_COUNT: (state) => state.cart.length,
}
