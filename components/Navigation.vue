<template>
  <v-app-bar app shrink-on-scroll class="black" v-scroll="onScroll">
    <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>

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
      <v-tabs align-with-title>
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
const DEFAULT_DIAMENSIONS = 150
export default {
  data() {
    return {
      imageDimensions: DEFAULT_DIAMENSIONS,
    }
  },
  methods: {
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
  transition: all 0.5s ease;
}
</style>
