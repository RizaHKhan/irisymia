<template>
  <v-app-bar v-scroll="onScroll" app shrink-on-scroll>
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      @click="toggleNavigationDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="my-auto pl-0">
      <v-img
        src="/logo.webp"
        contain
        :height="imageDimensions"
        :width="imageDimensions"
        class="mr-auto"
      ></v-img>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-row class="justify-center hidden-md-and-down">
        <v-btn
          v-for="(item, index) in categories"
          :key="index"
          small
          text
          class="mx-1"
          >{{ item }}</v-btn
        >
      </v-row>
    </template>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
const DEFAULT_DIAMENSIONS = 150

export default {
  data() {
    return {
      imageDimensions: DEFAULT_DIAMENSIONS,
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
        this.imageDimensions = DEFAULT_DIAMENSIONS
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.v-image {
  transition: all 0.2s ease;
}
</style>
