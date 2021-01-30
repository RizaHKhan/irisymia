<template>
  <v-card outlined class="mt-2">
    <v-card-title>{{ question }}</v-card-title>
    <v-card-actions class="d-flex flex-column">
      <v-checkbox
        v-for="(option, i) in options"
        :key="i"
        v-model="selections"
        :label="option.option"
        :value="option.option"
        class="mr-auto my-0"
        :disabled="
          selections.length >= maxSelections &&
          !selections.includes(option.option)
            ? true
            : false
        "
      ></v-checkbox>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    maxSelections: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      selections: [],
    }
  },
}
</script>

<style></style>
