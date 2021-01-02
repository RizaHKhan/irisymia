<template>
  <v-navigation-drawer
    v-if="drawer"
    v-click-outside="drawer ? toggleNavigationDrawer : ''"
    :value="drawer"
    fixed
    temporary
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="(category, i) in categories" :key="i" link>
        <v-list-item-content>
          <v-list-item-title>{{ category }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
