<template>
  <v-app-bar v-scroll="onScroll" class="grey darken-4" app shrink-on-scroll>
    <v-app-bar-nav-icon
      class="hidden-lg-and-up white--text"
      @click="toggleNavigationDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="ma-auto">
      <v-img
        src="/logo_transparent.png"
        contain
        :height="imageDimensions"
        :width="imageDimensions"
        class="my-auto"
      ></v-img>
    </v-toolbar-title>

    <v-btn icon>
      <v-icon class="white--text">mdi-dots-vertical</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-row class="justify-center hidden-md-and-down">
        <v-btn
          v-for="(item, index) in categories"
          :key="index"
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
import { mapMutations } from 'vuex'
const DEFAULT_DIMENSIONS = 200

export default {
  data() {
    return {
      imageDimensions: DEFAULT_DIMENSIONS,
      categories: [
        'One Category',
        'Two Category',
        'Three Category',
        'Four Category',
        'Five Category',
        'Six Category',
        'Seven Category',
      ],
    }
  },
  methods: {
    ...mapMutations({
      toggleNavigationDrawer: 'ui/toggleNavigationDrawer',
    }),
    onScroll() {
      if (window.pageYOffset > 90) {
        this.imageDimensions = 60
      } else {
        this.imageDimensions = DEFAULT_DIMENSIONS
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.v-image {
  transition: all 0.1s ease;
}
</style>
