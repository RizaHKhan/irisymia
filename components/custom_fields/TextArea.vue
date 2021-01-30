<template>
  <v-card outlined class="mt-2">
    <v-card-title>This is a question</v-card-title>
    <v-card-text>
      <v-textarea></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CheckBoxText',
  data() {
    return {
      selected: ['John'],
    }
  },
}
</script>

<style></style>
