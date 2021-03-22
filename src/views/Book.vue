<template>
  <v-container v-if="book" grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 xs10 offset-sm1>

      </v-flex>
      <v-flex xs12 xs10 offset-sm1>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    book() {
      return this.$store.getters.getBooks.find(book => book.id === this.id)
    }
  }
}
</script>

<style scoped>

</style>