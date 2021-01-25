<template>
  <v-btn
    class="snipcart-add-item success ml-auto my-1"
    depressed
    @click="addToCart"
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
  data() {
    return {
      Snipcart: null,
    }
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
  methods: {
    async addToCart() {
      try {
        await this.Snipcart?.api.cart.items.add({
          id: this.product.id,
          name: this.product.data.name[0].text,
          price: this.product.data.price,
          quantity: 1,
          url: this.product.href,
        })
      } catch (e) {
        console.log('e', e)
      }
    },
  },
}
</script>
