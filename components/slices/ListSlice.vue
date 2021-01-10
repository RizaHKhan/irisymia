<template>
  <div class="post-part single container">
    <!-- <prismic-rich-text class="textslice" :field="slice.text" /> -->
    <ol class="textslice">
      {{
        slice.text
      }}
    </ol>
  </div>
</template>

<script>
export default {
  name: 'list-slice',
  props: ['slice'],
}
</script>

<style lang="sass">
.textslice
  a
    text-decoration: underline
</style>
