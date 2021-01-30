<template>
  <v-snackbar v-model="snackbar" :color="color">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="black" v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    message: '',
    color: '',
  }),
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'ui/ADD_MESSAGE_TO_SNACKBAR') {
        this.snackbar = true
        this.message = state.ui.snackMessage
        this.color = state.ui.snackColor
      }
    })
  },
}
</script>
