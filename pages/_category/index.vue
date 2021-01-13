<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-pagination
          v-if="pageLength > 1"
          v-model="page"
          :length="pageLength"
        ></v-pagination>
      </v-col>
    </v-row>

    <v-layout wrap class="justify-center">
      <ProductCard
        v-for="(product, i) in products"
        :key="i"
        :product="product"
        :categoryuid="categoryUID"
      />
    </v-layout>
  </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    ProductCard,
  },
  async asyncData({ params, store, redirect }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      const categories = store.getters['categories/GET_CATEGORIES']
      await store.dispatch('products/GET_PRODUCTS_BY_CATEGORY', {
        categories: categories
          .filter((cat) => cat.uid === params.category)
          .map((cat) => cat.id),
      })

      return {
        categoryUID: categories.find((cat) => cat.uid === params.category).uid,
      }
    } catch (e) {
      redirect('/')
    }
  },
  data() {
    return {
      page: 1,
    }
  },
  watch: {
    // eslint-disable-next-line
    page: async function (newVal) {
      try {
        this.loadingTrue()
        await this.getProductsByPage({
          categories: [this.categoryID],
          page: newVal,
        })
        this.loadingFalse()
      } catch (e) {
        this.$router.push('/')
        this.addSnackbarMessage({
          message: this.$t('snackbar.server-error'),
          color: 'red',
        })
      }
    },
  },
  computed: {
    ...mapGetters({
      categories: 'categories/GET_CATEGORIES',
      products: 'products/GET_PRODUCTS',
      pageLength: 'products/GET_PAGE_LENGTH',
    }),
    categoryID() {
      return this.categories.find((cat) => {
        return cat.uid === this.$route.params.category
      }).id
    },
  },
  methods: {
    ...mapMutations({
      loadingTrue: 'ui/LOADING_TRUE',
      loadingFalse: 'ui/LOADING_FALSE',
      addSnackbarMessage: 'ui/ADD_MESSAGE_TO_SNACKBAR',
    }),
    ...mapActions({
      getProductsByPage: 'products/GET_PRODUCTS_BY_CATEGORY',
      getCategories: 'categories/GET_CATEGORIES',
    }),
  },
}
</script>
