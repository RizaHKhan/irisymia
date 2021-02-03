<template>
  <v-btn
    class="snipcart-add-item success ml-2 my-1 mr-auto"
    depressed
    :disabled="isDisabled"
    v-bind="{
      ...$snipcart.customfields(customFieldsArray),
      ...$snipcart.bindProduct(productObj),
    }"
  >
    <v-icon left>mdi-cart</v-icon>
    {{ $t('button.add-to-cart') }}</v-btn
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
    customfields: {
      type: Array,
      required: false,
      default: () => [],
    },
    custominputs: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      addItemEvent: null,
    }
  },
  computed: {
    isDisabled() {
      let isDisabled = false

      this.customfields.forEach((field, i) => {
        if (field.required) {
          if (
            (!this.custominputs[i] && this.custominputs[i] !== '') ||
            this.custominputs[i].length === 0
          ) {
            isDisabled = true
          }
        }
      })

      return isDisabled
    },
    productObj() {
      return {
        id: this.product.id,
        price: this.product.data.price,
        url: `/${this.$route.params.category}/${this.$route.params.product}`,
        name: this.product.data.name[0].text,
      }
    },
    customFieldsArray() {
      const fields = []
      this.customfields.forEach((field, i) => {
        if (this.custominputs[i]) {
          fields.push({
            name: field.question_text,
            required: field.required,
            value: Array.isArray(this.custominputs[i])
              ? this.custominputs[i].join(', ')
              : this.custominputs[i],
            type: 'readonly',
          })
        }
      })

      return fields
    },
  },
  mounted() {
    document.addEventListener('snipcart.ready', () => {
      try {
        this.addItemEvent = window.Snipcart.events.on('item.added', (item) => {
          this.$notify.showMessage({
            message: 'Item added to cart successfully',
            color: 'green',
          })
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
    this.addItemEvent.unsubscribe()
  },
}
</script>
