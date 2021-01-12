<template>
  <v-container>
    <v-layout wrap>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :categoryuid="categoryUID"
      />
    </v-layout>
  </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { mapGetters } from 'vuex'

export default {
  components: {
    ProductCard,
  },
  async asyncData({ params, store, redirect }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      const categories = store.getters['categories/GET_CATEGORIES']
      await store.dispatch(
        'products/GET_PRODUCTS_BY_CATEGORY',
        categories
          .filter((cat) => cat.uid === params.category)
          .map((cat) => cat.id)
      )

      return {
        categoryUID: categories.find((cat) => cat.uid === params.category).uid,
      }
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/GET_CATEGORIES',
      products: 'products/GET_PRODUCTS',
    }),
  },
}
</script>
