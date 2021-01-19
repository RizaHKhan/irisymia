<template>
  <v-btn icon @click="openCart" absolute right class="ma-0">
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
  destroy() {
    document.removeEventListener('snipcart.ready')
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
