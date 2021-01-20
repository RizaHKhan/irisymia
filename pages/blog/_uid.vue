<template>
  <v-container fluid class="pa-0">
    <v-row class="pa-0">
      <v-col cols="12" class="pa-0">
        <v-parallax :src="blog.image.url" height="300"></v-parallax>
      </v-col>
      <v-col cols="12" md="10" lg="6" class="mx-auto">
        <p class="text-h3 font-weight-thin px-5 mt-5">
          {{ blog.title[0].text }}
        </p>
        <p class="text-muted text-caption px-5 mt-0">{{ blog.date }}</p>
        <slices-block :slices="blog.body" class="px-5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import SlicesBlock from '@/components/SlicesBlock.vue'

export default {
  components: {
    SlicesBlock,
  },
  async asyncData({ store, $prismic, redirect, params }) {
    try {
      store.commit('ui/LOADING_FALSE')
      await store.dispatch('categories/GET_CATEGORIES')
      await store.dispatch('blog/GET_BLOG', params.uid)
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    ...mapGetters({
      blog: 'blog/GET_BLOG',
    }),
  },
  head() {
    return {
      title: this.blog.title[0].text,
      meta: [
        { hid: 'hid', name: 'some name', description: 'some description' },
      ],
    }
  },
}
</script>
