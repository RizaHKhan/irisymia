<template>
  <v-btn icon absolute right class="ma-0" @click.stop="openCart">
    <v-badge color="success" :value="cartLength" :content="cartLength" overlap>
      <v-icon>mdi-cart</v-icon>
    </v-badge>
  </v-btn>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      Snipcart: null,
      cartLength: 0,
      addItemEvent: null,
    }
  },
  mounted() {
    document.addEventListener('snipcart.ready', () => {
      try {
        this.Snipcart = window.Snipcart

        this.Snipcart?.store.subscribe(() => {
          this.cartLength = this.Snipcart.store.getState().cart.items.count
        })

        this.addItemEvent = window.Snipcart.events.on('item.added', () => {
          this.$notify.showMessage({
            message: 'Item added to cart successfully',
            color: 'green',
          })
        })
      } catch (e) {
        this.addSnackbarMessage({
          message: this.$t('snackbar.server-error'),
          color: 'red',
        })
      }
    })
  },
  beforeDestroy() {
    document.removeEventListener('snipcart.ready')
    this.addItemEvent.unsubscribe()
  },
  methods: {
    ...mapMutations({
      addSnackbarMessage: 'ui/ADD_MESSAGE_TO_SNACKBAR',
    }),
    openCart() {
      this.Snipcart?.api.theme.cart.open()
    },
  },
}
</script>

<style></style>
