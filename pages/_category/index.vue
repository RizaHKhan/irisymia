<template>
  <v-layout wrap>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </v-layout>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { mapGetters } from 'vuex'

export default {
  components: {
    ProductCard,
  },
  async asyncData({ params, store }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      await store.dispatch('products/GET_PRODUCTS', params.category)
    } catch (e) {
      console.log('error from asynData', e)
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/GET_PRODUCTS',
    }),
  },
}
</script>
