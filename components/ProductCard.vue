<template>
  <transition name="fade">
    <nuxt-link :to="`/${categoryuid}/${product.uid}`">
      <v-card
        class="ma-3 d-flex flex-column justify-space-between grey lighten-5"
        max-width="450"
        width="100%"
      >
        <v-img height="250px" :src="product.data.image.url"> </v-img>

        <v-row class="d-flex px-2 justify-space-between">
          <v-card-title class="text-h5 font-weight-light">{{
            product.data.name[0].text
          }}</v-card-title>
          <v-card-title class="text-h5">${{ product.data.price }}</v-card-title>
        </v-row>

        <v-card-text class="text--primary mt-2">
          <div>{{ product.data.description[0].text }}</div>
        </v-card-text>
      </v-card>
    </nuxt-link>
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
