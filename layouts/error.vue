<template>
  <v-app dark>
    <v-container class="mt-5 d-flex flex-column justify-center">
      <p class="text-h3 font-weight-light text-center">There was an error :(</p>
      <v-btn class="green mx-auto white--text" depressed to="/"
        >Take me home</v-btn
      >
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.$store.commit('ui/LOADING_FALSE')
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
