<template>
  <v-btn
    class="snipcart-add-item success ml-auto"
    :data-item-id="product.id"
    :data-item-name="product.data.name[0].text"
    :data-item-price="product.data.price"
    :data-item-url="product.href"
    >{{ $t('button.add-to-cart') }}</v-btn
  >
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  mounted() {
    document.addEventListener('snipcart.ready', () => {
      try {
        this.Snipcart = window.Snipcart
      } catch (e) {
        this.addSnackbarMessage({
          message: this.$t('snackbar.server-error'),
          color: 'red',
        })
      }
    })
  },
}
</script>

<style></style>
