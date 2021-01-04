<template>
  <v-layout wrap>
    <v-row v-for="category in categories" :key="category">
      <v-row class="mt-5">
        <v-col>
          <h1 class="text-h3 font-weight-thin">
            {{ category.charAt(0).toUpperCase() + category.slice(1) }}
          </h1>
        </v-col>
      </v-row>
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
    const products = store.getters['products/GET_PRODUCTS']
    const categories = store.getters['categories/GET_CATEGORIES']

    if (!products.length && !categories.length) {
      try {
        await store.dispatch('categories/GET_CATEGORIES')
        await store.dispatch('products/GET_PRODUCTS')
      } catch (e) {}
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
