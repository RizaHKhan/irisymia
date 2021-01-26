<template>
  <v-col cols="12" lg="6" class="ma-0 pa-0">
    <v-card class="mb-2 mb-sm-2 mb-md-2 ma-lg-2" outlined>
      <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>
      </div>
      <v-card-title class="headline"> Rate Our Framework </v-card-title>

      <v-layout justify-space-between>
        <p class="ml-4 text--disabled">Edward Jones</p>
        <p class="mr-4 text--disabled">11/21/2020</p>
      </v-layout>

      <v-card-text>
        If you enjoy using Vuetify, please take a few seconds to rate your
        experience with the framework. It really helps!
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      rating: 4,
    }
  },
}
</script>
