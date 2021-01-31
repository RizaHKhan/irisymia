<template>
  <v-btn icon absolute right class="ma-0 snipcart-checkout">
    <v-icon>mdi-cart</v-icon>
    <span class="snipcart-items-count"></span>
  </v-btn>
</template>

<style scoped lang="scss">
.snipcart-checkout {
  position: relative;

  .snipcart-items-count {
    position: absolute;
    top: -0.6rem;
    right: 0;
    border-radius: 50%;
    background-color: #4caf50;
    color: #fff;
    padding: 0.2rem;
    font-size: 0.75rem;
  }
}
</style>
