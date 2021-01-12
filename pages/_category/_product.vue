<template>
  <v-row class="my-10">
    <v-col cols="12" md="6">
      <v-img :src="images[imageIndex]" aspect-ratio="1.7"></v-img>
      {{ imageIndex }}
      <v-slide-group v-model="imageIndex" class="pa-4" mandatory show-arrows>
        <v-slide-item
          v-for="(image, i) in images"
          :key="i"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="100"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-img
                  v-if="active"
                  color="white"
                  size="48"
                  :src="image"
                ></v-img>
                <v-img v-else color="white" size="30" :src="image"></v-img>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-col>
    <v-col cols="12" md="6">
      <h1>{{ product.data.name[0].text }}</h1>
      <p>Category: {{ product.data.category.uid.toUpperCase() }}</p>
    </v-col>
    <pre>{{ product }}</pre>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  async asyncData({ params, store, redirect }) {
    try {
      await store.dispatch('products/GET_PRODUCT_BY_UID_AND_CATEGORY', {
        category: params.category,
        product: params.product,
      })
    } catch (e) {
      redirect('/')
    }
  },
  data() {
    return {
      imageIndex: null,
      show: false,
      num: 0,
      images: [
        'https://i.guim.co.uk/img/media/b37e0aee741fc71eba655d46a7e27ad99711b061/53_0_1920_1152/master/1920.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=aef78cf17b576feff33c41bde6d78f8b',
        'https://lastfm.freetls.fastly.net/i/u/770x0/e6983bf7a07d4c1c8a0e7ea16f9dc3ef.jpg',
        'https://images.prismic.io/irisymia/b688cbd1-1d51-413f-b59c-cf3bb58544fa_IMG_3318__91335.1602965009.webp?auto=compress,format',
        'https://imagevars.gulfnews.com/2020/12/11/Copy-of-2020-12-11T011030Z_1116474865_RC2PKK9OL6K3_RTRMADP_3_PEOPLE-KARDASHIANS-1607682476606_1765157ca40_medium.jpg',
        'https://nypost.com/wp-content/uploads/sites/2/2020/09/kardashians-kendall.jpg?quality=90&strip=all',
        'https://i.dailymail.co.uk/1s/2020/01/23/08/23763712-0-image-a-22_1579768534555.jpg',
        'https://media.architecturaldigest.com/photos/5ecfe602495a59a23e7218a8/16:9/w_2560%2Cc_limit/GettyImages-1183233485.jpg',
        'https://fashionista.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU4MDUzMzE0OTk3NTI4Mjc3/kim-kardashian-promo.jpg',
      ],
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/GET_PRODUCT',
    }),
  },
  methods: {
    ...mapMutations({
      addMessage: 'ui/ADD_MESSAGE_TO_SNACKBAR',
    }),
  },
}
</script>
