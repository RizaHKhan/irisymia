<template>
  <v-app-bar app shrink-on-scroll>
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      @click="toggleNavigationDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="ma-auto pa-0">
      <v-img
        src="/logo_transparent.png"
        contain
        height="100%"
        class="my-auto logo"
        @click="navigateHome"
      ></v-img>
    </v-toolbar-title>

    <Cart />
    <template v-if="showTemplate" v-slot:extension>
      <v-row class="justify-center hidden-md-and-down">
        <nuxt-link
          v-for="(category, index) in categories"
          :key="index"
          :to="`/${category.uid}`"
        >
          <v-btn small text class="mx-1">{{
            category.data.category_name[0].text
          }}</v-btn>
        </nuxt-link>
      </v-row>
    </template>
  </v-app-bar>
</template>

<script>
import Cart from '@/components/Cart.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: { Cart },
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
    navigateHome() {
      this.$router.push('/')
    },
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
a {
  text-decoration: none;
}

.logo {
  &:hover {
    cursor: pointer;
  }
}
</style>
