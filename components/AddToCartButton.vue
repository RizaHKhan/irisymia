<template>
  <v-btn
    class="snipcart-add-item success ml-auto my-1"
    depressed
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
}
</script>
