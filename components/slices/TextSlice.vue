<template>
  <div class="post-part single container px-0">
    <!-- <prismic-rich-text class="textslice" :field="slice.text" /> -->
    <p class="textslice">{{ slice.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'text-slice',
  props: {
    slice: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="sass">
.textslice
  a
    text-decoration: underline
</style>
