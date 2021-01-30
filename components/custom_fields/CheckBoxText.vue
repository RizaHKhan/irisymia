<template>
  <v-card outlined class="mt-2">
    <v-card-title>This is a question</v-card-title>
    <v-card-actions class="d-flex flex-column">
      <v-checkbox
        v-model="selected"
        label="John"
        value="John"
        class="mr-auto my-0"
      ></v-checkbox>
      <v-checkbox
        v-model="selected"
        label="Jacob"
        value="Jacob"
        class="mr-auto my-0"
      ></v-checkbox>
    </v-card-actions>
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
