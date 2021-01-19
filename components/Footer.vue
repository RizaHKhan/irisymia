<template>
  <v-footer padless>
    <v-layout justify-center wrap>
      <v-col cols="12" sm="6" md="2" lg="2">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="mb-3 text-subtitle-1 text-center font-weight-light grey--text"
              >{{ $t('footer.navigate.title') }}</v-list-item-title
            >
            <v-btn
              v-for="(item, index) in navigate"
              :key="index"
              :to="item.link"
              text
              small
              class="text-caption"
              >{{ item.title }}</v-btn
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="2">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="mb-3 text-subtitle-1 text-center font-weight-light grey--text"
              >{{ $t('footer.categories.title') }}</v-list-item-title
            >
            <v-btn
              v-for="(category, index) in categories"
              :key="index"
              :to="`/${category.uid}`"
              class="text-caption black--text"
              text
              small
              >{{ category.data.category_name[0].text }}
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="mb-3 text-subtitle-1 font-weight-light text-md-center text-sm-left grey--text"
              >{{ $t('footer.info.title') }}</v-list-item-title
            >
            <v-list-item
              v-for="(item, index) in info"
              :key="index"
              class="pa-0"
              v-html="item.title"
            ></v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="mb-3 text-subtitle-1 font-weight-light grey--text"
              >{{ $t('footer.subscribe.title') }}</v-list-item-title
            >
            <v-list-item class="text-caption pa-0">
              {{ $t('footer.subscribe.subtitle') }}
            </v-list-item>
            <SubscribeForm />
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-layout>
  </v-footer>
</template>

<script>
import SubscribeForm from '@/components/SubscribeForm'
import { mapGetters } from 'vuex'

export default {
  components: {
    SubscribeForm,
  },
  data() {
    return {
      navigate: [{ title: this.$t('footer.navigate.blog'), link: '/blog' }],
      info: [
        {
          title: this.$t('footer.info.one'),
        },
        {
          title: this.$t('footer.info.two'),
        },
        {
          title: this.$t('footer.info.three'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/GET_CATEGORIES',
    }),
  },
}
</script>
