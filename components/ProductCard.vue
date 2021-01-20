<template>
  <transition name="fade">
    <v-card
      class="ma-3 d-flex flex-column justify-space-between grey lighten-5"
      max-width="450"
      width="100%"
    >
      <v-img
        class="white--text align-end"
        height="250px"
        :src="product.data.image.url"
      >
      </v-img>
      <v-card-title class="text-h4 font-weight-thin">{{
        product.data.name[0].text
      }}</v-card-title>
      <v-card-subtitle class="pb-0 text-h4"
        >${{ product.data.price }}</v-card-subtitle
      >
      <v-card-text class="text--primary mt-2">
        <div>{{ product.data.description[0].text }}</div>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <nuxt-link :to="`/${categoryuid}/${product.uid}`"
          ><v-btn color="blue white--text" outlined>{{
            $t('button.explore')
          }}</v-btn></nuxt-link
        >
        <AddToCartButton :product="product" />
      </v-card-actions>
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
