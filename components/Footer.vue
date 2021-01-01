<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <v-col xs="6" sm="6" md="2">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="mb-3 text-subtitle-1 text-center font-weight-thin"
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
      <v-col xs="6" sm="6" md="2">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="mb-3 text-subtitle-1 text-center font-weight-thin"
              >{{ $t('footer.categories.title') }}</v-list-item-title
            >
            <v-btn
              v-for="(item, index) in categories"
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
      <v-col cols="12" sm="6" md="2">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="mb-3 text-subtitle-1 font-weight-thin text-center"
              >{{ $t('footer.info.title') }}</v-list-item-title
            >
            <v-list-item
              v-for="(item, index) in info"
              :key="index"
              v-html="item.title"
            ></v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="mb-3 text-subtitle-1 font-weight-thin">{{
              $t('footer.subscribe.title')
            }}</v-list-item-title>
            <v-list-item class="text-caption pa-0">
              {{ $t('footer.subscribe.subtitle') }}
            </v-list-item>
            <SubscribeForm />
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import SubscribeForm from '@/components/SubscribeForm'
export default {
  components: {
    SubscribeForm,
  },
  data() {
    return {
      navigate: [
        { title: this.$t('footer.navigate.blog'), link: '/blog' },
        { title: this.$t('footer.navigate.sitemap'), link: '/sitemap' },
      ],
      categories: [
        { title: 'Bandejitas', link: '/bandejitas' },
        { title: 'Bombas de chocolate', link: '/cbombas' },
        { title: 'Galletitas artensanles', link: '/galletitas' },
        { title: 'Romos de fresas', link: '/romas' },
        { title: 'Tabletas de chocolate', link: '/chocolate' },
      ],
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
}
</script>
