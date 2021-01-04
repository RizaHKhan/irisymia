<template>
  <v-app-bar class="grey darken-4" app shrink-on-scroll>
    <v-app-bar-nav-icon
      class="hidden-lg-and-up white--text"
      @click="toggleNavigationDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="ma-auto pa-0">
      <v-img
        src="/logo_transparent.png"
        contain
        height="100%"
        class="my-auto"
      ></v-img>
    </v-toolbar-title>

    <v-btn icon>
      <v-icon class="white--text">mdi-dots-vertical</v-icon>
    </v-btn>
    <v-btn icon to="/cart">
      <v-badge
        color="success"
        :value="cartLength"
        :content="cartLength"
        overlap
      >
        <v-icon class="white--text">mdi-cart</v-icon>
      </v-badge>
    </v-btn>
    <template v-if="showTemplate" v-slot:extension>
      <v-row class="justify-center hidden-md-and-down">
        <v-btn
          v-for="(item, index) in categories"
          :key="index"
          :to="`/${item}`"
          small
          text
          class="mx-1 white--text"
          >{{ item }}</v-btn
        >
      </v-row>
    </template>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      categories: 'categories/GET_CATEGORIES',
      cartLength: 'cart/GET_CART_LENGTH',
    }),
    showTemplate() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return false
        case 'sm':
          return false
        case 'md':
          return false
        case 'lg':
          return true
        default:
          return true
      }
    },
  },
  methods: {
    ...mapMutations({
      toggleNavigationDrawer: 'ui/TOGGLE_NAVIGATIONDRAWER',
    }),
  },
}
</script>

<style lang="scss">
.v-image {
  transition: all 0.1s ease;
}

.v-toolbar__title {
  height: 100%;
}
</style>
