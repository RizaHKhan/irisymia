<template>
  <v-container>
    <p class="text-h3 text-font-light">{{ $t('contact.title') }}</p>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="fullName"
            label="Full Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="phoneNumber"
            label="Phone Number"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-textarea
            v-model="comment"
            :rules="commentRules"
            :label="$t('contact.textarea-label')"
            required
          ></v-textarea>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store, app, $notify }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      const categories = store.getters['categories/GET_CATEGORIES']
      await store.dispatch('products/GET_PRODUCTS_BY_CATEGORY', {
        categories: categories.map((c) => {
          return c.id
        }),
      })
    } catch (e) {
      $notify.showMessage({
        message: app.i18n.t('snackbar.server-error'),
        color: 'red',
      })
    }
  },
  data() {
    return {
      valid: false,
      fullName: '',
      phoneNumber: '',
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      comment: '',
      commentRules: [(v) => !!v || 'Field is required'],
    }
  },
}
</script>
