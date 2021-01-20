<template>
  <v-form ref="form" v-model="valid" :lazy-validation="lazy">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      :label="$t('subscribe-form.email')"
      required
      outlined
      @blur="checkToValidate"
    ></v-text-field>

    <v-btn
      depressed
      color="grey darken-4 white--text"
      large
      @click="submitForm"
    >
      {{ $t('subscribe-form.subscribe') }}
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    lazy: true,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    submitForm() {
      console.log('submitting the form')
    },
    checkToValidate() {
      if (!this.email) {
        this.$refs.form.resetValidation()
      }
    },
  },
}
</script>
