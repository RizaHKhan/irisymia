<template>
  <v-container class="pa-xs-1">
    <v-sheet
      v-for="category in categories"
      :key="category.id"
      class="mx-auto my-10 py-4 rounded px-xs-1"
      outlined
    >
      <p class="text-h5 text-center">
        {{ category.data.category_name[0].text }}
      </p>
      <v-slide-group show-arrows class="hidden-sm-and-down">
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
      <v-layout wrap class="hidden-md-and-up pa-2">
        <ProductCard
          v-for="product in products.filter(
            (product) => product.data.category.id === category.id
          )"
          :key="product.id"
          class="mx-auto"
          :product="product"
          :categoryuid="category.uid"
        />
      </v-layout>
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
  async asyncData({ store, app, $notify }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      const categories = store.getters['categories/GET_CATEGORIES']
      await store.dispatch('products/GET_PRODUCTS_BY_CATEGORY', {
        categories: categories.map((c) => {
          return c.id
        }),
      })
    } catch (e) {
      $notify.showMessage({
        message: app.i18n.t('snackbar.server-error'),
        color: 'red',
      })
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

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
