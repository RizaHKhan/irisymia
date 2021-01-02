<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="product.image" height="200px"></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>{{ product.description }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, store }) {
    try {
      await store.dispatch('products/GET_PRODUCT', params.product)
    } catch (e) {}
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/GET_PRODUCT',
    }),
  },
}
</script>

<style></style>
