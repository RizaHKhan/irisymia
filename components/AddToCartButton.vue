<template>
  <div>
    <pre>{{ custominputs }}</pre>
    <pre>{{ customfields }}</pre>
    <v-btn
      class="snipcart-add-item success ml-auto my-1"
      depressed
      v-bind="snipCartObj"
    >
      <v-icon left>mdi-cart</v-icon>

      {{ $t('button.add-to-cart') }}</v-btn
    >
  </div>
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
  computed: {
    snipCartObj() {
      const obj = {}

      // Basic requirements for cart
      Object.assign(obj, { 'data-item-id': this.product.id })
      Object.assign(obj, { 'data-item-name': this.product.data.name[0].text })
      Object.assign(obj, { 'data-item-price': this.product.data.price })
      Object.assign(obj, { 'data-item-url': window.location })

      // Custom Fields
      this.customfields.forEach((field, i) => {
        const nameObj = {
          ['data-item-custom' + (i + 1) + '-name']: field.question_text,
        }
        Object.assign(obj, nameObj)

        const requiredObj = {
          ['data-item-custom' + (i + 1) + '-required']: field.required,
        }

        Object.assign(obj, requiredObj)

        if (field.response_options.length) {
          const arr = []
          field.response_options.forEach((option) => {
            arr.push(option.option)
          })

          const optionsObj = {
            ['data-item-custom' + (i + 1) + '-options']: arr.join('|'),
          }

          Object.assign(obj, optionsObj)
        }

        const valueObj = {
          ['data-item-custom' + (i + 1) + '-value']: this.custominputs[i],
        }
        Object.assign(obj, valueObj)
      })

      return obj
    },
  },
  methods: {
    itemAddedToCart() {
      this.$notify.showMessage({
        message: 'Item added to cart',
        color: 'green',
      })
    },
  },
}
</script>
