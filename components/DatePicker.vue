<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        depressed
        class="ml-auto my-1"
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon left>mdi-calendar</v-icon>
        {{ $t('date-picker.delivery-date') }}</v-btn
      >
    </template>
    <v-card>
      <v-date-picker
        v-model="picker"
        :allowed-dates="allowedDates"
        :max="yearFromNow"
      ></v-date-picker>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
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
      const tomorrow = today.setDate(today.getDate() + 1)
      if (d > tomorrow && !this.removeDates.includes(val)) {
        return true
      }
      return false
    },
    selected() {
      console.log('hit')
    },
  },
}
</script>
