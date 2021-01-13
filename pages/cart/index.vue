<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="qty"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ $t('cart.title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">{{
              $t('cart.confirm-delete')
            }}</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue" text @click="closeDelete">{{
                $t('cart.cancel')
              }}</v-btn>
              <v-btn color="blue" text @click="deleteItemConfirm">{{
                $t('cart.ok')
              }}</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.updateqty="{ item }">
      <v-icon @click="item.qty--"> mdi-minus </v-icon>
      <v-icon @click="item.qty++"> mdi-plus </v-icon>
    </template>
    <template v-slot:item.delete="{ item }">
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  async asyncData({ store, redirect }) {
    try {
      await store.dispatch('categories/GET_CATEGORIES')
      const categories = store.getters['categories/GET_CATEGORIES']
      await store.dispatch('products/GET_PRODUCTS_BY_CATEGORY', {
        categories: categories.map((c) => {
          return c.id
        }),
      })
    } catch (e) {
      redirect('/')
    }
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Item Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Price', value: 'price', align: 'center' },
      { text: 'Quantity', value: 'qty', align: 'center' },
      { text: 'Total', value: 'total', align: 'center' },
      {
        text: 'Update Quantity',
        value: 'updateqty',
        align: 'center',
        sortable: false,
      },
      { text: 'Delete', value: 'delete', align: 'center', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      protein: 0,
    },
    defaultItem: {
      name: '',
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          price: 29.99,
          qty: 10,
          total: 290.0,
        },
        {
          name: 'Ice cream sandwich',
          price: 59.99,
          qty: 20,
          total: 500,
        },
      ]
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
  },
}
</script>
