export const state = () => ({
  cart: [1, 2],
})

export const mutations = {}

export const getters = {
  GET_CART_LENGTH: (state) => state.cart.length,
}
