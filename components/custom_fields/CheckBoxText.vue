<template>
  <v-card outlined class="ma-2" max-width="350">
    <v-card-title class="text-h6 font-weight-light">{{
      question
    }}</v-card-title>
    <v-card-actions class="d-flex flex-column">
      <v-checkbox
        v-for="(option, i) in options"
        :key="i"
        v-model="selections"
        :label="option.option"
        :value="option.option"
        class="mr-auto my-0 text-body-1 font-weight-light"
        :disabled="
          selections.length >= maxSelections &&
          !selections.includes(option.option)
            ? true
            : false
        "
        @change="$emit('input', selections)"
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
