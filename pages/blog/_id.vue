<template>
  <v-row class="my-10">
    <v-col cols="12">
      <p class="text-h3 font-weight-thin">Blog Title</p>
    </v-col>
    <v-col cols="12">
      <p class="text-body-1 font-weight-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit
        provident, hic quaerat quis cupiditate minus praesentium, inventore
        itaque corporis labore suscipit non asperiores, quae unde neque veniam
        obcaecati culpa officia accusantium qui dolorum cum earum a. Quam, nobis
        expedita tempore natus vitae ratione accusamus, rem quas ullam tenetur
        magni ab aut vel. Itaque voluptate consequatur est vitae cumque
        necessitatibus aspernatur nam! Veritatis voluptatum modi fugiat. Quos,
        tempore. Laboriosam, quam, provident non aut impedit facere labore
        corporis hic magni ratione odio cum quos perspiciatis, at et. Possimus
        cum ducimus consequuntur quisquam quas facilis suscipit eius, expedita
        qui minus recusandae voluptas nesciunt, dolores amet assumenda molestias
        eaque laboriosam adipisci iure. Delectus adipisci cupiditate a nobis
        eius obcaecati, quidem porro voluptatibus repellendus fugiat sunt.
        Itaque, molestias quia. Esse ratione fuga mollitia eligendi vitae
        quisquam est debitis assumenda minus iure ea totam iusto porro adipisci
        ex iste nesciunt dolore sequi id, alias autem at nobis, earum vero!
        Iusto ea nihil obcaecati molestias porro maiores distinctio, odit
        perspiciatis ex temporibus corrupti voluptate exercitationem est iure
        quaerat sint consequuntur quidem sunt ducimus repellat facere eos? Iure
        labore, consequuntur aperiam molestiae quam id repellat cupiditate ab
        nesciunt vel in aliquam ipsum officiis quae cumque nihil nam!
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  asyncData({ store }) {
    store.commit('ui/LOADING_FALSE')
  },
}
</script>
