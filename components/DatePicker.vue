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
        >{{ $t('date-picker.delivery-date') }}</v-btn
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
      date: null,
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
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
  methods: {
    allowedDates(val) {
      const d = new Date(val)
      const today = new Date()
      const tomorrow = today.setDate(today.getDate() + 1)
      if (d > tomorrow) {
        return true
      }
      return false
    },
  },
}
</script>

<style></style>
