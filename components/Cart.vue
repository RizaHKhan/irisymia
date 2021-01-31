<template>
  <v-btn icon absolute right class="ma-0" @click.stop="openCart">
    <v-badge color="success" :value="cartLength" :content="cartLength" overlap>
      <v-icon>mdi-cart</v-icon>
    </v-badge>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      Snipcart: null,
      cartLength: 0,
    }
  },
  mounted() {
    document.addEventListener('snipcart.ready', () => {
      try {
        this.Snipcart = window.Snipcart

        this.Snipcart?.store.subscribe(() => {
          this.cartLength = this.Snipcart.store.getState().cart.items.count
        })
      } catch (e) {
        this.$notify.showMessage({
          message: this.$t('snackbar.server-error'),
          color: 'red',
        })
      }
    })
  },
  beforeDestroy() {
    document.removeEventListener('snipcart.ready')
  },
  methods: {
    openCart() {
      this.Snipcart?.api.theme.cart.open()
    },
  },
}
</script>

<style></style>
