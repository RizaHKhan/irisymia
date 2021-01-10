<template>
  <v-row>
    <v-col cols="12" class="pa-0">
      <v-parallax :src="blog.image.url" height="300"></v-parallax>
      <p class="text-h3 font-weight-thin">{{ blog.title[0].text }}</p>
      <slices-block :slices="blog.body" />
      <!--
      <pre class="text-body-1 font-weight-light">{{ blog }}</pre>
      -->
    </v-col>
    <pre>{{ blog.body }}</pre>
  </v-row>
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
      console.log(params)
      store.commit('ui/LOADING_FALSE')
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
}
</script>
