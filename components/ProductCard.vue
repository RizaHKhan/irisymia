<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="product.image"></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ {{ product.price }} • {{ product.category.toUpperCase() }}
      </div>

      <div>{{ product.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        :to="`/${product.category}/${product.id}`"
      >
        More Info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
}
</script>
