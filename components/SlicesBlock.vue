<template>
  <section>
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <template v-if="slice.type === 'paragraph'">
        <text-slice :slice="slice"></text-slice>
      </template>
      <template v-else-if="slice.type === 'quote'">
        <quote-slice :slice="slice"></quote-slice>
      </template>
      <template v-else-if="slice.type === 'image_with_caption'">
        <image-caption-slice :slice="slice"></image-caption-slice>
      </template>
      <template v-else-if="slice.type === 'o-list-item'">
        <list-slice :slice="slice"></list-slice>
      </template>
    </section>
  </section>
</template>

<script>
// Imports for all slices
import QuoteSlice from '@/components/slices/QuoteSlice.vue'
import TextSlice from '@/components/slices/TextSlice.vue'
import ListSlice from '@/components/slices/ListSlice.vue'
import ImageCaptionSlice from '@/components/slices/ImageCaptionSlice.vue'

export default {
  name: 'slices-block',
  components: {
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice,
    ListSlice,
  },
  props: {
    slices: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
