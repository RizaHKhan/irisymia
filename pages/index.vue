<template>
  <v-container>
    <v-sheet
      v-for="category in categories"
      :key="category.id"
      class="mx-auto my-10 py-4 hidden-sm-and-down"
      elevation="8"
    >
      <p class="text-h2 font-weight-light text-center">
        {{ category.data.category_name[0].text }}
      </p>
      <v-slide-group show-arrows>
        <v-slide-item
          v-for="product in products.filter(
            (product) => product.data.category.id === category.id
          )"
          :key="product.id"
          class="my-2"
        >
          <ProductCard :product="product" :categoryuid="category.uid" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
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
      const categories = store.getters['categories/GET_CATEGORIES']
      await store.dispatch('products/GET_PRODUCTS_BY_CATEGORY', {
        categories: categories.map((c) => {
          return c.id
        }),
      })
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

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
