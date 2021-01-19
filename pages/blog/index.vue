<template>
  <v-layout wrap class="my-5 py-5" column>
    <v-row>
      <v-col
        ><p class="text-h4 font-weight-thin text-center">
          {{ $t('blog.title') }}
        </p></v-col
      >
    </v-row>

    <v-row>
      <v-layout wrap class="mt-5 justify-center">
        <v-card
          v-for="(blog, i) in blogs"
          :key="i"
          max-width="400"
          class="ma-2"
        >
          <v-img
            class="align-end"
            height="200px"
            :src="blog.data.image.url"
            :alt="blog.data.image.alt"
          >
          </v-img>

          <v-card-title class="mb-3">{{
            blog.data.title[0].text
          }}</v-card-title>

          <v-card-subtitle class="pb-0"
            >{{ $t('blog.created-on') }}:
            {{ formatDate(blog.first_publication_date) }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            {{ blog.data.body[0].text.substring(0, 100) }}...
          </v-card-text>

          <v-card-actions class="d-flex">
            <nuxt-link :to="`/blog/${blog.uid}`" class="ml-auto">
              <v-btn color="orange">{{
                $t('blog.read-more')
              }}</v-btn></nuxt-link
            >
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-row>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, $prismic, redirect }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      store.commit('ui/LOADING_FALSE')
      await store.dispatch('blog/GET_BLOGS')
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    ...mapGetters({
      blogs: 'blog/GET_BLOGS',
    }),
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('es', options)
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
