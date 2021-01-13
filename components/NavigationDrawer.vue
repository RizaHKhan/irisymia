<template>
  <v-navigation-drawer
    v-if="drawer"
    v-click-outside="drawer ? toggleNavigationDrawer : ''"
    :value="drawer"
    fixed
    temporary
  >
    <v-list dense>
      <v-subheader>{{ $t('navigation-drawer.categories') }}</v-subheader>
      <v-list-item v-for="(category, i) in categories" :key="i" link>
        <v-list-item-content>
          <v-list-item-title>{{
            category.data.category_name[0].text
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
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
