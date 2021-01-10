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
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    snackbar: false,
    message: '',
    color: '',
  }),
  computed: {
    ...mapGetters({
      messages: 'ui/GET_SNACKBAR_MESSAGES',
    }),
  },
  watch: {
    // eslint-disable-next-line
    snackbar: function (newSnackbar, oldSnackbar) {
      if (!newSnackbar) {
        setTimeout(() => {
          this.checkForMoreMessages()
        }, 250)
      }
    },
    // eslint-disable-next-line
    messages: function (newMessages, oldMessages) {
      if (!this.snackbar) {
        this.checkForMoreMessages()
      }
    },
  },
  methods: {
    ...mapMutations({
      removeMessage: 'ui/REMOVE_MESSAGE_FROM_SNACKBAR',
    }),
    checkForMoreMessages() {
      if (this.messages.length) {
        this.snackbar = true
        const { message, color } = this.messages[0]
        this.message = message
        this.color = color

        this.removeMessage()
      }
    },
  },
}
</script>
