<template>
  <v-card outlined class="ma-2 d-flex flex-column" max-width="350">
    <v-card-title class="text-h6 font-weight-light">{{
      question
    }}</v-card-title>
    <v-card-text class="flex-grow-1">
      <v-textarea
        v-model="answer"
        filled
        outlined
        no-resize
        :rules="rules"
        :label="$t('text-area.message')"
        @input="$emit('input', answer)"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CheckBoxText',
  props: {
    question: {
      type: String,
      required: true,
    },
    maxCharacters: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      valid: false,
      answer: '',
      rules: [
        (v) =>
          v.length <= this.maxCharacters ||
          `You cannot have more then ${this.maxCharacters}`,
      ],
    }
  },
}
</script>

<style></style>
