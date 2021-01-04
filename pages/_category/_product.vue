<template>
  <v-row class="my-10">
    <v-col cols="12" md="6">
      <v-carousel :show-arrows="false">
        <v-carousel-item :src="product.image"></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="6">
      <p class="text-lg-h2 text-h4 font-weight-thin">
        {{ product.title }}
      </p>
      <p class="text-body-1 font-weight-light">
        {{ product.description }}
      </p>
      <v-btn class="success float-right">{{
        $t('product-page.add-to-cart')
      }}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, store, redirect }) {
    try {
      await store.dispatch('products/GET_PRODUCT', params.product)
    } catch (e) {
      redirect('/')
    }
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
