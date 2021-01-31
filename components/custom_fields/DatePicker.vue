<template>
  <v-card class="ma-2" outlined max-width="350">
    <v-card-title class="text-h6 font-weight-light">{{
      question
    }}</v-card-title>
    <v-date-picker
      v-model="picker"
      width="100%"
      :allowed-dates="allowedDates"
      :max="yearFromNow"
      :min="currentMonth"
      class="rounded-0"
      @input="$emit('input', picker)"
    ></v-date-picker>
  </v-card>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      removeDates: ['2021-01-29', '2021-02-5'],
    }
  },
  computed: {
    yearFromNow() {
      const d = new Date()
      const year = d.getFullYear()
      const month = d.getMonth()
      const day = d.getDate()
      const c = new Date(year + 1, month, day)
      return c.toISOString().substr(0, 10)
    },
    currentMonth() {
      const d = new Date()
      const year = d.getFullYear()
      const month = d.getMonth()
      const day = d.getDate()
      const c = new Date(year, month, day)
      return c.toISOString().substr(0, 10)
    },
  },
  watch: {
    picker(newVal, oldVal) {
      this.$emit('setdate', newVal)
    },
  },
  methods: {
    allowedDates(val) {
      const d = new Date(val)
      const today = new Date()
      const tomorrow = today.setDate(today.getDate() + 2)
      if (d > tomorrow && !this.removeDates.includes(val)) {
        return true
      }
      return false
    },
  },
}
</script>
