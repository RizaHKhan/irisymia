<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.type === 'paragraph'">
        <!-- Here :slice="slice" passes the data to the component -->
        <text-slice :slice="slice"></text-slice>
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.type === 'quote'">
        <quote-slice :slice="slice"></quote-slice>
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.type === 'image_with_caption'">
        <image-caption-slice :slice="slice"></image-caption-slice>
      </template>
    </section>
  </section>
</template>

<script>
// Imports for all slices
import QuoteSlice from '@/components/slices/QuoteSlice.vue'
import TextSlice from '@/components/slices/TextSlice.vue'
import ImageCaptionSlice from '@/components/slices/ImageCaptionSlice.vue'

export default {
  name: 'slices-block',
  props: ['slices'],
  components: {
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice,
  },
}
</script>
