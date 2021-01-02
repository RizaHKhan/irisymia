<template>
  <div>
    <h1>Landing page</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veritatis
      laudantium voluptatem architecto perspiciatis magnam dolore recusandae,
      dolor commodi, accusantium dolores mollitia, quibusdam ipsum eos iste
      facere laborum quidem excepturi error culpa expedita earum. Maiores,
      aperiam dignissimos magnam error sit autem tenetur dicta quod, velit minus
      repudiandae alias minima sequi molestias, eveniet totam officia laborum.
      Repellat qui sint magnam? Fugiat commodi odio sapiente culpa, amet odit
      labore. Laborum architecto id itaque obcaecati repellat inventore
      cupiditate ut neque animi laudantium tempora, amet aliquam vel sit
      provident necessitatibus aut illo at? Commodi, modi sapiente repudiandae
      aut tempora nihil voluptas delectus alias harum, officia quaerat fugiat
      quis unde aliquid quibusdam magnam ipsam dolores libero. Sit, harum saepe!
      Earum vitae perferendis voluptate, minima nisi eveniet soluta repellendus
      explicabo. Maxime eos, ab unde incidunt deserunt blanditiis similique a
      corporis ipsam perspiciatis in, quisquam ipsa sunt molestias aliquid, ea
      rem quos temporibus. Nihil veniam ipsum dignissimos, odio quae nisi
      dolorum alias nobis sint vitae dolore molestiae a voluptatem maiores
      libero magnam nam dolores qui error iure velit animi sit? Excepturi,
      dolorum. Provident, perferendis facilis numquam harum eaque natus vel
      quasi sapiente corporis, magnam quis doloremque? Voluptatibus temporibus
      praesentium suscipit minima corrupti, non veniam maiores id. Natus.
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api
    console.log(document)
  },
}
</script>
