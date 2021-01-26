<template>
  <v-navigation-drawer
    v-if="drawer"
    v-click-outside="drawer ? toggleNavigationDrawer : ''"
    :value="drawer"
    fixed
    temporary
  >
    <p class="text--disabled text-center mt-2">
      {{ $t('navigation-drawer.categories') }}
    </p>
    <v-layout column>
      <v-btn
        v-for="(category, i) in categories"
        :key="i"
        class="ma-2"
        depressed
        :to="`/${category.uid}`"
      >
        <v-icon left>mdi-calendar</v-icon>
        {{ category.data.category_name[0].text }}
      </v-btn>
    </v-layout>

    <v-divider class="my-5"></v-divider>
    <v-layout column>
      <v-btn class="ma-2" depressed to="/blog">
        {{ $t('blog.title') }}
      </v-btn>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      categories: 'categories/GET_CATEGORIES',
    }),
    drawer() {
      return this.$store.state.ui.navigationBar
    },
  },
  methods: {
    ...mapMutations({
      toggleNavigationDrawer: 'ui/TOGGLE_NAVIGATIONDRAWER',
    }),
  },
}
</script>
