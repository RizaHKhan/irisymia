export const state = () => ({
  products: [],
  product: {},
  pageLength: 0,
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
  WIPE_PAGE_LENGTH(state) {
    state.pageLength = 0
  },
  SET_PAGE_LENGTH(state, length) {
    state.pageLength = length
  },
}

export const actions = {
  async GET_PRODUCTS_BY_CATEGORY({ commit }, { categories = [], page = 1 }) {
    // NOTICE: ITS CATEGORY ID NOT UID
    try {
      commit('ui/LOADING_TRUE', null, { root: true })
      commit('WIPE_PRODUCTS')

      const options = {
        page,
        pageSize: 10,
      }

      const promises = categories.map(async (category) => {
        const response = await this.$prismic.api.query(
          this.$prismic.predicates.at('my.product.category', category),
          options
        )
        return { results: response.results, pageLength: response.total_pages }
      })

      const response = await Promise.all(promises)

      response.map((r) => {
        r.results.forEach((obj) => {
          commit('SET_PRODUCTS', obj)
        })
      })

      commit('SET_PAGE_LENGTH', response[0].pageLength)
      commit('ui/LOADING_FALSE', null, { root: true })
    } catch (e) {
      commit('ui/LOADING_FALSE', null, { root: true })
      throw e // this allows us to hit the catch block in asyncData
    }
  },
  async GET_PRODUCT_BY_UID_AND_CATEGORY(
    { commit, dispatch },
    { category, product }
  ) {
    try {
      commit('ui/LOADING_TRUE', null, { root: true })
      commit('WIPE_PRODUCT')

      const { results } = await this.$prismic.api.query([
        this.$prismic.predicates.at('my.product.uid', product),
      ])

      if (results[0].data.category.uid !== category) {
        throw new Error('Item not available category')
      }

      const customFieldIDs = results[0].data.customization_fields.map(
        (field) => field.field_type.id
      )

      await dispatch(
        'customization_fields/GET_PRODUCT_CUSTOM_FIELDS',
        customFieldIDs,
        { root: true }
      )

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
  GET_PAGE_LENGTH: (state) => state.pageLength,
}
