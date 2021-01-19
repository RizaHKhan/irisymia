<template>
  <v-navigation-drawer
    v-if="drawer"
    v-click-outside="drawer ? toggleNavigationDrawer : ''"
    :value="drawer"
    fixed
    temporary
  >
    <v-list>
      <v-subheader>{{ $t('navigation-drawer.categories') }}</v-subheader>
      <v-list-item v-for="(category, i) in categories" :key="i" link>
        <v-list-item-content>
          <nuxt-link :to="`/${category.uid}`">
            <v-list-item-title class="black--text">{{
              category.data.category_name[0].text
            }}</v-list-item-title>
          </nuxt-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item link>
        <v-list-item-content>
          <nuxt-link :to="`/blog`">
            <v-list-item-title class="black--text">
              {{ $t('blog.title') }}
            </v-list-item-title>
          </nuxt-link>
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
