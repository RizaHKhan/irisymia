<template>
  <v-card class="ma-3" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="product.data.image.url"
    >
      <v-card-title>{{ product.data.name[0].text }}</v-card-title>
    </v-img>
    <pre>{{ product.uid }}</pre>

    <v-card-subtitle class="pb-0">{{ product.data.price }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ product.data.description[0].text }}</div>
    </v-card-text>
    <v-card-actions>
      <nuxt-link :to="`/${categoryuid}/${product.uid}`"
        ><v-btn color="success" text> Explore </v-btn></nuxt-link
      >
    </v-card-actions>
  </v-card>
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
