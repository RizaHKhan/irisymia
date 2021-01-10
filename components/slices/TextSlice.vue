<template>
  <div>
    <p class="text-body-1">{{ slice.text }}</p>
    <!-- <prismic-rich-text class="textslice" :field="slice.text" /> -->
  </div>
</template>

<script>
export default {
  name: 'text-slice',
  props: ['slice'],
}
</script>

<style lang="sass">
.textslice
  a
    text-decoration: underline
</style>
