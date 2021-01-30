<template>
  <v-card outlined class="mt-2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-text>
      <v-textarea v-model="answer" :rules="rules" label="Answer"></v-textarea>
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
