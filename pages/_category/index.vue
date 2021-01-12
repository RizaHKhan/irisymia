<template>
  <v-container>
    <v-layout wrap>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
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
      console.log(categories.filter((cat) => cat.uid === params.category))
      await store.dispatch(
        'products/GET_PRODUCTS_BY_CATEGORY',
        categories
          .filter((cat) => cat.uid === params.category)
          .map((cat) => cat.id)
      )
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/GET_PRODUCTS',
    }),
  },
}
</script>
