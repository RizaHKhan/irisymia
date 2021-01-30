<template>
  <v-card outlined class="mt-2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-text>
      <v-textarea></v-textarea>
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
  },
  data() {
    return {
      selected: ['John'],
    }
  },
}
</script>

<style></style>
