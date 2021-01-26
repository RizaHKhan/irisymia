<template>
  <transition name="fade">
    <v-card class="ma-3 grey lighten-3" max-width="450" width="100%" outlined>
      <nuxt-link :to="`/${categoryuid}/${product.uid}`">
        <v-img height="250px" :src="product.data.image.url"> </v-img>

        <v-row class="d-flex px-2 justify-space-between mt-5 mb-0">
          <v-card-title class="text-h5 font-weight-light black--text">{{
            product.data.name[0].text
          }}</v-card-title>
          <v-card-title class="text-h5 black--text"
            >€{{ product.data.price }}</v-card-title
          >
        </v-row>

        <v-card-text class="text--primary mt-2 pt-0">
          <p class="text-body2">{{ product.data.description[0].text }}</p>
        </v-card-text>
      </nuxt-link>
    </v-card>
  </transition>
</template>

<script>
export default {
  props: {
    categoryuid: {
      type: String,
      required: true,
      default: '',
    },
    product: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
