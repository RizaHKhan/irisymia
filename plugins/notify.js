export default ({ store }, inject) => {
  inject('notify', {
    showMessage({ message = '', color = '' }) {
      store.commit('ui/ADD_MESSAGE_TO_SNACKBAR', { message, color })
    },
  })
}
