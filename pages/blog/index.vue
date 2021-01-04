<template>
  <v-layout wrap>
    <v-row v-for="n in 10" :key="n">
      <v-row class="mt-5">
        <v-col>
          <h1 class="text-h3 font-weight-thin">
            {{ n }}
          </h1>
        </v-col>
      </v-row>
      <v-layout wrap> </v-layout>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  asyncData({ store }) {
    try {
      store.commit('ui/LOADING_FALSE')
    } catch (e) {}
  },
}
</script>
