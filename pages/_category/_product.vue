<template>
  <v-container>
    <v-row class="my-10">
      <v-col cols="12" md="6">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(image, i) in product.data.gallery"
            :key="i"
            :src="image.image1.url"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-h3 font-weight-thin mb-0">
          {{ product.data.name[0].text }}
        </p>
        <v-btn
          rounded
          outlined
          color="primary"
          small
          class="my-2"
          @click="goToCategory(product.data.category.uid)"
          >{{ product.data.category.uid }}</v-btn
        >
        <p class="text-h4 font-weight-thin">${{ product.data.price }}</p>
        <p class="body-1">{{ product.data.description[0].text }}</p>
        <AddToCartButton :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import AddToCartButton from '@/components/AddToCartButton'

export default {
  components: {
    AddToCartButton,
  },
  async asyncData({ params, store, redirect }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      await store.dispatch('products/GET_PRODUCT_BY_UID_AND_CATEGORY', {
        category: params.category,
        product: params.product,
      })
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/GET_PRODUCT',
    }),
  },
  methods: {
    ...mapMutations({
      addMessage: 'ui/ADD_MESSAGE_TO_SNACKBAR',
    }),
    goToCategory(category) {
      console.log(category)
      this.$router.push(`/${category}`)
    },
  },
}
</script>
