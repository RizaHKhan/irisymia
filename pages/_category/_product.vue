<template>
  <v-container>
    <v-row class="my-10">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-img
            :src="product.data.gallery[imagePosition].image1.url"
            height="400"
          ></v-img>
        </v-card>

        <v-slide-group
          v-model="imagePosition"
          class="pa-4"
          mandatory
          center-active
          show-arrows
        >
          <v-slide-item
            v-for="(image, i) in product.data.gallery"
            :key="i"
            v-slot="{ active, toggle }"
          >
            <v-card
              outlined
              class="ma-4"
              height="100"
              width="100"
              @click="toggle"
            >
              <v-img :src="image.image1.url" height="100%"> </v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <v-divider></v-divider>
        <v-layout v-if="false" wrap>
          <v-col cols="12">
            <p class="text-h5 font-weight-light">Reviews</p>
          </v-col>
          <Review v-for="n in 5" :key="n" :num="n" />
        </v-layout>
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-h3 font-weight-light mb-0">
          {{ product.data.name[0].text }}
        </p>
        <v-btn
          rounded
          outlined
          color="primary"
          small
          class="my-2"
          @click="goToCategory(product.data.category.uid)"
          >{{ product.data.category.uid }}</v-btn
        >
        <p class="text-h5 font-weight-light">€{{ product.data.price }}</p>
        <p class="text-body-2">{{ product.data.description[0].text }}</p>
        <v-layout wrap class="justify-start">
          <component
            :is="getComponentName(field.response_input_type)"
            v-for="(field, i) in custom_fields"
            :key="i"
            :options="field.response_options"
            :question="field.question_text"
            :max-characters="field.max_number_of_characters"
            :max-selections="field.max_number_of_options_selected"
            :datesnotdeliverable="dates_not_deliverable"
            @input="inputToObject($event, i)"
          ></component>
        </v-layout>
        <AddToCartButton
          :product="product"
          :custominputs="cartCustomFields"
          :customfields="custom_fields"
        />
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col cols="12">
        <p class="text-h5 text-center font-weight-light">
          {{ $t('product.related') }}
        </p>
      </v-col>
      <v-col>
        <v-sheet outlined>
          <v-slide-group show-arrows class="hidden-sm-and-down" outlined>
            <v-slide-item
              v-for="product in products"
              :key="product.id"
              class="my-2"
            >
              <ProductCard
                :product="product"
                :categoryuid="$route.params.category"
              />
            </v-slide-item>
          </v-slide-group>
          <v-layout wrap class="hidden-md-and-up">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              class="mx-auto"
              :product="product"
              :categoryuid="$route.params.category"
            />
          </v-layout>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import AddToCartButton from '@/components/AddToCartButton'
import Review from '@/components/Review'

export default {
  components: {
    AddToCartButton,
    Review,
  },
  async asyncData({ params, store, redirect }) {
    try {
      await store.dispatch('general_settings/GET_GENERAL_SETTINGS')

      await store.dispatch('categories/GET_CATEGORIES')
      const categories = store.getters['categories/GET_CATEGORIES'].filter(
        (cat) => {
          return cat.uid === params.category
        }
      )

      await store.dispatch('products/GET_PRODUCT_BY_UID_AND_CATEGORY', {
        category: params.category,
        product: params.product,
      })

      await store.dispatch('products/GET_PRODUCTS_BY_CATEGORY', {
        categories: categories.map((c) => {
          return c.id
        }),
      })
    } catch (e) {
      redirect('/')
    }
  },
  data() {
    return {
      imagePosition: 0,
      deliveryDate: null,
      cartCustomFields: {},
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/GET_PRODUCT',
      products: 'products/GET_PRODUCTS',
      custom_fields: 'customization_fields/GET_CUSTOM_FIELDS',
      dates_not_deliverable: 'general_settings/GET_DATES_NOT_DELIVERABLE',
    }),
    checkBoxText() {
      return () => import('@/components/custom_fields/CheckBoxText.vue')
    },
    textArea() {
      return () => import('@/components/custom_fields/TextArea.vue')
    },
    datePicker() {
      return () => import('@/components/custom_fields/DatePicker.vue')
    },
  },
  methods: {
    ...mapMutations({
      addMessage: 'ui/ADD_MESSAGE_TO_SNACKBAR',
    }),
    goToCategory(category) {
      this.$router.push(`/${category}`)
    },
    setDeliveryDate(val) {
      this.deliveryDate = val
    },
    getComponentName(name) {
      switch (name) {
        case 'checkbox text':
          return this.checkBoxText
        case 'textarea':
          return this.textArea
        case 'date picker':
          return this.datePicker
        default:
          break
      }
    },
    inputToObject(value, index) {
      const obj = {}
      obj[index] = value
      this.cartCustomFields = Object.assign({}, this.cartCustomFields, obj)
    },
  },
  /* head() { */
  /*   return { */
  /*     title: this.product.data.name[0].text, */
  /*     meta: [ */
  /*       { hid: 'hid', name: 'some name', description: 'some description' }, */
  /*     ], */
  /*   } */
  /* }, */
}
</script>
