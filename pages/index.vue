<template>
  <v-layout wrap>
    <v-row v-for="category in categories" :key="category">
      <h1>{{ category }}</h1>
      <v-layout wrap>
        <ProductCard
          v-for="product in products.filter((p) => p.category === category)"
          :key="product.id"
          :product="product"
        />
      </v-layout>
    </v-row>
  </v-layout>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { mapGetters } from 'vuex'

export default {
  components: {
    ProductCard,
  },
  async asyncData({ store }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      await store.dispatch('products/GET_PRODUCTS')
    } catch (e) {}
  },
  computed: {
    ...mapGetters({
      categories: 'categories/GET_CATEGORIES',
      products: 'products/GET_PRODUCTS',
    }),
  },
}
</script>
